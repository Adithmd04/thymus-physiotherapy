import type { ServiceItem, TreatmentItem } from "./service";

export interface WorkingHours {
  days: string;
  hours: string;
}

export interface Clinic {
  id: string;
  slug: string;

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
