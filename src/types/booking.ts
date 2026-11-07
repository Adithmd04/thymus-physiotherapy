import type { ServiceItem } from "./service";

export type ProviderType = "thymus" | "external";

export type BookingMethod = "whatsapp" | "phone" | "website";

export interface BookingProvider {
  id: string;
  name: string;
  type: ProviderType;
  supportedServices: string[];
  address?: string;
  bookingMethod: BookingMethod;
  whatsapp?: string;
  phone?: string;
  bookingUrl?: string;
  clinicSlug?: string;
}

export interface BookingState {
  step: BookingStep;
  service: ServiceItem | null;
  provider: BookingProvider | null;
  date: Date | null;
  time: string | null;
  name: string;
}

export type BookingStep =
  | "service"
  | "provider"
  | "schedule"
  | "details"
  | "complete";
