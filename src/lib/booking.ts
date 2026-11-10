import { BOOKING_PROVIDERS } from "@/data/bookingProviders";
import { SERVICES } from "@/data/services";
import type {
  BookingProvider,
  BookingState,
  BookingStep,
} from "@/types/booking";
import type { Service } from "@/types/service";

export const BOOKING_STEPS: BookingStep[] = [
  "service",
  "provider",
  "schedule",
  "details",
];

export const INITIAL_BOOKING_STATE: BookingState = {
  service: null,
  provider: null,
  date: null,
  time: null,
  name: "",
};

export type BookingAction =
  | { type: "selectService"; service: Service }
  | { type: "selectProvider"; provider: BookingProvider }
  | { type: "setDate"; date: Date | null }
  | { type: "setTime"; time: string | null }
  | { type: "setName"; name: string };

export function bookingReducer(
  state: BookingState,
  action: BookingAction,
): BookingState {
  switch (action.type) {
    case "selectService":
      if (state.service?.id === action.service.id) return state;
      // Provider, date and time depend on the service, so changing it clears them.
      return {
        ...state,
        service: action.service,
        provider: null,
        date: null,
        time: null,
      };
    case "selectProvider":
      return { ...state, provider: action.provider };
    case "setDate":
      return { ...state, date: action.date };
    case "setTime":
      return { ...state, time: action.time };
    case "setName":
      return { ...state, name: action.name };
  }
}

export function isValidName(name: string): boolean {
  return name.trim().length >= 2;
}

export function startOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export function isPastDate(date: Date): boolean {
  return date < startOfToday();
}

export function isBookingReady(state: BookingState): boolean {
  const { service, provider, date, time, name } = state;
  return Boolean(
    service &&
      provider &&
      date &&
      time &&
      !isPastDate(date) &&
      isValidName(name),
  );
}

export function isStepComplete(
  step: BookingStep,
  state: BookingState,
): boolean {
  switch (step) {
    case "service":
      return state.service !== null;
    case "provider":
      return state.provider !== null;
    case "schedule":
      return (
        state.date !== null && !isPastDate(state.date) && state.time !== null
      );
    case "details":
      return isBookingReady(state);
  }
}

/** Services that have at least one provider able to take them. */
export function getBookableServices(): Service[] {
  return SERVICES.filter((service) =>
    BOOKING_PROVIDERS.some((provider) =>
      provider.supportedServices.includes(service.id),
    ),
  );
}

export function getProvidersForService(serviceId: string) {
  const matches = BOOKING_PROVIDERS.filter((provider) =>
    provider.supportedServices.includes(serviceId),
  );
  return {
    thymus: matches.filter((provider) => provider.type === "thymus"),
    external: matches.filter((provider) => provider.type === "external"),
  };
}

export function toInputDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function fromInputDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

export function formatPreferredDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface BookingLink {
  href: string;
  label: string;
  opensNewTab: boolean;
}

function buildWhatsAppMessage(
  name: string,
  service: Service,
  date: Date,
  time: string,
): string {
  return [
    "Hi,",
    "",
    "I'd like to request an appointment.",
    "",
    `Name: ${name.trim()}`,
    `Service: ${service.title}`,
    `Preferred Date: ${formatPreferredDate(date)}`,
    `Preferred Time: ${time}`,
  ].join("\n");
}

/**
 * Where the final CTA sends the patient. Returns null when the booking is not
 * complete or the provider is missing the details its booking method needs.
 * The Thymus website never creates the appointment itself.
 */
export function getBookingLink(state: BookingState): BookingLink | null {
  const { service, provider, date, time, name } = state;
  if (!service || !provider || !date || !time || !isBookingReady(state)) {
    return null;
  }

  switch (provider.bookingMethod) {
    case "whatsapp": {
      if (!provider.whatsapp) return null;
      const number = provider.whatsapp.replace(/\D/g, "");
      const text = encodeURIComponent(
        buildWhatsAppMessage(name, service, date, time),
      );
      return {
        href: `https://wa.me/${number}?text=${text}`,
        label: "Continue on WhatsApp",
        opensNewTab: true,
      };
    }
    case "website": {
      // Only follow provider links served over HTTPS.
      if (!provider.bookingUrl?.startsWith("https://")) return null;
      return {
        href: provider.bookingUrl,
        label: "Continue to provider website",
        opensNewTab: true,
      };
    }
    case "phone": {
      if (!provider.phone) return null;
      return {
        href: `tel:${provider.phone.replace(/[^\d+]/g, "")}`,
        label: "Call provider",
        opensNewTab: false,
      };
    }
  }
}
