"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Building2 } from "lucide-react";
import { CLINICS, isClinicOperational } from "@/data/clinics";
import { useBooking } from "@/components/booking/BookingContext";
import { BOOKING_PROVIDERS } from "@/data/bookingProviders";

export default function ClinicsOverview() {
  const { open } = useBooking();

  const handleBookClinic = (clinicSlug: string) => {
    if (!isClinicOperational(clinicSlug)) return;
    const provider = BOOKING_PROVIDERS.find((p) => p.clinicSlug === clinicSlug);
    open(undefined, provider, clinicSlug);
  };

  return (
    <section id="clinics" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-300 px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
              Thymus Health Network
            </p>
            <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
          </div>

          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#0f172a]">
            Our Specialised
            <span className="text-[#0d9488]"> Healthcare Clinics</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#64748b] md:text-base">
            Thymus Physiotherapy is open today in Pala, Kottayam, with Thymus
            Dental and Thymus Pregnancy Care coming soon. Each clinic is built
            around focused clinical expertise, modern facilities, and dedicated
            practitioners.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CLINICS.map((clinic) => (
            <div
              key={clinic.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:border-teal-300"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={clinic.heroImage}
                  alt={clinic.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0d9488] shadow-xs backdrop-blur-md">
                    {clinic.slug === "physiotherapy"
                      ? "Specialised Clinic"
                      : clinic.slug === "dental"
                        ? "Dental Wellness"
                        : "Maternal Care"}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-white/90">
                    <Building2 size={13} />
                    Thymus
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#0f172a] transition-colors group-hover:text-[#0d9488]">
                  {clinic.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#0d9488]">
                  {clinic.tagline}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#64748b] sm:text-sm line-clamp-3">
                  {clinic.description}
                </p>

                {/* Features Pills */}
                {clinic.features && clinic.features.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {clinic.features.slice(0, 3).map((feat) => (
                      <span
                        key={feat}
                        className="rounded-md bg-[#f0faf9] px-2.5 py-1 text-[11px] font-medium text-[#0f766e]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="mt-6 pt-5 border-t border-[#f1f5f9] flex items-center justify-between gap-3">
                  <Link
                    href={`/clinics/${clinic.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d9488] transition-colors hover:text-[#0f766e]"
                  >
                    Explore Clinic
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  {clinic.status === "upcoming" ? (
                    <span
                      aria-label={`${clinic.name} is coming soon`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#f1f5f9] px-3.5 py-2 text-xs font-semibold text-[#64748b]"
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleBookClinic(clinic.slug)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#0d9488] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0f766e]"
                    >
                      Book Now
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
