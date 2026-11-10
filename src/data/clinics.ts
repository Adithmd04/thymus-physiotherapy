import type { Clinic } from "@/types/clinic";
import {
  PHYSIOTHERAPY_SERVICES,
  PHYSIOTHERAPY_TREATMENTS,
  DENTAL_SERVICES,
  PREGNANCY_CARE_SERVICES,
} from "./services";

export const CLINICS: Clinic[] = [
  {
    id: "thymus-physiotherapy",
    slug: "physiotherapy",
    status: "operational",
    name: "Thymus Physiotherapy",
    tagline: "Expert care. Stronger you.",
    description:
      "Thymus Physiotherapy offers personalised physiotherapy treatment to help you recover faster, restore natural mobility, and return with confidence to the activities you love. Our approach combines evidence-based techniques with compassionate care.",
    heroImage: "/images/hero.jpg",
    aboutImage: "/images/clinic.jpg",
    services: PHYSIOTHERAPY_SERVICES,
    treatments: PHYSIOTHERAPY_TREATMENTS,
    phone: "+91 81388 63889",
    whatsapp: "918138863889",
    email: "thymusacademy@gmail.com",
    address:
      "Near Sacred Heart Church, Poovarani, Pala - Ponkunnam Road, Kottayam",
    workingHours: [{ days: "Mon – Sat", hours: "7:30 AM – 7:30 PM" }],
    features: [
      "Advanced Treatment",
      "Expert Consultation",
      "Home Based Care",
      "Personalised Rehabilitation",
      "Flexible Appointments",
    ],
    metaTitle: "Thymus Physiotherapy | Thymus Health",
    metaDescription:
      "Personalised physiotherapy treatment at Thymus Physiotherapy. Evidence-based rehabilitation, pain management, and recovery programmes.",
  },
  {
    id: "thymus-dental",
    slug: "dental",
    status: "upcoming",
    name: "Thymus Dental",
    tagline: "Your smile, our care.",
    description:
      "Thymus Dental provides comprehensive dental care in a comfortable, modern environment. From routine check-ups to restorative treatments, our team is committed to maintaining your oral health and confidence.",
    heroImage: "/images/service.jpg",
    aboutImage: "/images/clinic.jpg",
    services: DENTAL_SERVICES,
    treatments: [],
    features: [
      "Modern Equipment",
      "Gentle Approach",
      "Preventive Focus",
      "Personalised Plans",
    ],
    metaTitle: "Thymus Dental | Thymus Health",
    metaDescription:
      "Comprehensive dental care at Thymus Dental. Routine check-ups, professional cleaning, and restorative treatments.",
  },
  {
    id: "thymus-pregnancy-care",
    slug: "pregnancy-care",
    status: "upcoming",
    name: "Thymus Pregnancy Care",
    tagline: "Caring for you and your baby.",
    description:
      "Thymus Pregnancy Care supports mothers through every stage of their pregnancy journey. From prenatal monitoring to postnatal recovery, our team provides compassionate, personalised care designed around your needs.",
    heroImage: "/images/hero.jpg",
    aboutImage: "/images/service.jpg",
    services: PREGNANCY_CARE_SERVICES,
    treatments: [],
    features: [
      "Trimester-by-Trimester Care",
      "Personalised Plans",
      "Expert Support",
      "Comfortable Environment",
    ],
    metaTitle: "Thymus Pregnancy Care | Thymus Health",
    metaDescription:
      "Prenatal and postnatal care at Thymus Pregnancy Care. Personalised pregnancy monitoring, exercise programmes, and recovery support.",
  },
];

/** Find a clinic by its URL slug */
export function getClinicBySlug(slug: string): Clinic | undefined {
  return CLINICS.find((c) => c.slug === slug);
}

/** True unless the clinic is flagged as upcoming (unknown slugs are not blocked) */
export function isClinicOperational(slug?: string): boolean {
  const clinic = CLINICS.find((c) => c.slug === slug);
  return !clinic || clinic.status === "operational";
}

/** Get all clinic slugs (useful for generateStaticParams) */
export function getAllClinicSlugs(): string[] {
  return CLINICS.map((c) => c.slug);
}
