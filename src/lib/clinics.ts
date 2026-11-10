import { CLINICS } from "@/data/clinics";
import { SERVICES } from "@/data/services";
import type { Clinic } from "@/types/clinic";
import type { Service } from "@/types/service";

export function getClinicBySlug(slug: string): Clinic | undefined {
  return CLINICS.find((clinic) => clinic.slug === slug);
}

export function getClinicsForService(serviceId: string): Clinic[] {
  return CLINICS.filter((clinic) => clinic.serviceIds.includes(serviceId));
}

export function getClinicServices(clinic: Clinic): Service[] {
  return SERVICES.filter((service) => clinic.serviceIds.includes(service.id));
}

/** Services shown on the public website: only those offered by a Thymus clinic. */
export function getPublicServices(): Service[] {
  return SERVICES.filter(
    (service) => getClinicsForService(service.id).length > 0,
  );
}
