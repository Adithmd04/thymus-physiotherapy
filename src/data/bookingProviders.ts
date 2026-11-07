import type { BookingProvider } from "@/types/booking";

export const BOOKING_PROVIDERS: BookingProvider[] = [
  // ─── Thymus-owned providers ─────────────────────────
  {
    id: "thymus-physiotherapy",
    name: "Thymus Physiotherapy",
    type: "thymus",
    clinicSlug: "physiotherapy",
    supportedServices: [
      "back-neck-pain",
      "sports-injury",
      "post-surgery",
      "joint-arthritis",
      "neuro-rehabilitation",
      "manual-therapy",
      "balance-gait",
      "posture-ergonomics",
      "elderly-care",
    ],
    address:
      "Near Sacred Heart Church, Poovarani, Pala - Ponkunnam Road, Kottayam",
    bookingMethod: "whatsapp",
    whatsapp: "918138863889",
    phone: "+91 81388 63889",
  },
  {
    id: "thymus-dental",
    name: "Thymus Dental",
    type: "thymus",
    clinicSlug: "dental",
    supportedServices: [
      "dental-restoration",
      "teeth-cleaning",
    ],
    address:
      "Near Sacred Heart Church, Poovarani, Pala - Ponkunnam Road, Kottayam",
    bookingMethod: "whatsapp",
    whatsapp: "918138863889",
    phone: "+91 81388 63889",
  },
  {
    id: "thymus-pregnancy-care",
    name: "Thymus Pregnancy Care",
    type: "thymus",
    clinicSlug: "pregnancy-care",
    supportedServices: [
      "prenatal-care",
      "postnatal-care",
    ],
    address:
      "Near Sacred Heart Church, Poovarani, Pala - Ponkunnam Road, Kottayam",
    bookingMethod: "whatsapp",
    whatsapp: "918138863889",
    phone: "+91 81388 63889",
  },

  // ─── External providers (example) ──────────────────
  {
    id: "external-physio-kottayam",
    name: "Kottayam Physiotherapy Centre",
    type: "external",
    supportedServices: [
      "back-neck-pain",
      "sports-injury",
      "post-surgery",
    ],
    address: "Kottayam",
    bookingMethod: "phone",
    phone: "+91 00000 00000",
  },
];

/** Get providers that support a given service ID */
export function getProvidersForService(serviceId: string): BookingProvider[] {
  return BOOKING_PROVIDERS.filter((p) =>
    p.supportedServices.includes(serviceId),
  );
}
