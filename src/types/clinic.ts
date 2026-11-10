import type { ServiceItem, TreatmentItem } from "./service";

export interface WorkingHours {
  days: string;
  hours: string;
}

export type ClinicStatus = "operational" | "upcoming";

export interface Clinic {
  id: string;
  slug: string;

  /** "upcoming" clinics are not open yet and must not be bookable */
  status: ClinicStatus;

  name: string;
  tagline: string;
  description: string;

  heroImage: string;
  aboutImage: string;

  services: ServiceItem[];
  treatments: TreatmentItem[];

  phone?: string;
  whatsapp?: string;
  email?: string;

  address?: string;

  workingHours?: WorkingHours[];

  features?: string[];

  /** SEO metadata for the clinic page */
  metaTitle?: string;
  metaDescription?: string;
}
