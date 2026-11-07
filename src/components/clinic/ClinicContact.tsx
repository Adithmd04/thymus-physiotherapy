"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ClockIcon,
  Globe,
  Mail,
  MapPinIcon,
  PhoneCall,
  ChevronRightIcon,
} from "lucide-react";
import { InstagramIcon } from "@/icons";
import type { Clinic } from "@/types/clinic";
import { useBooking } from "@/components/booking/BookingContext";
import { BOOKING_PROVIDERS } from "@/data/bookingProviders";

interface ClinicContactProps {
  clinic: Clinic;
}

const SOCIAL_LINKS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/thymus_physiotherapy/",
  },
  { icon: Globe, label: "Website", href: "https://thymus.in/" },
];

export default function ClinicContact({ clinic }: ClinicContactProps) {
  const { open } = useBooking();

  const handleBookClick = () => {
    // Find provider matching clinic if exists
    const matchingProvider = BOOKING_PROVIDERS.find(
      (p) => p.clinicSlug === clinic.slug || p.id === clinic.id,
    );
    open(undefined, matchingProvider, clinic.slug);
  };

  return (
    <div id="clinic-contact">
      {/* ── CTA BANNER ────────────────────────── */}
      <section className="bg-[linear-gradient(135deg,#0f766e_0%,#0d9488_60%,#14b8a6_100%)] py-14">
        <div className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-8 px-6">
          <div className="flex min-w-0 items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.15)] text-white">
              <CalendarIcon size={26} />
            </div>

            <div className="min-w-0">
              <h2 className="mb-1 text-[1.45rem] font-extrabold text-white">
                Ready to Visit {clinic.name}?
              </h2>

              <p className="text-[0.9rem] text-[rgba(255,255,255,0.85)]">
                Schedule your appointment or consultation today with our team.
              </p>
            </div>
          </div>

          <div className="ml-auto shrink-0">
            <button
              type="button"
              onClick={handleBookClick}
              className="group flex items-center gap-2 rounded-xl bg-white px-7 py-[0.85rem] text-[0.9rem] font-bold text-[#0f766e] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] active:translate-y-0"
            >
              <span>Book Appointment</span>
              <ChevronRightIcon
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER & CONTACT INFO ─────────────── */}
      <footer className="bg-[#0f172a] pt-16 text-[rgba(255,255,255,0.7)]">
        <div className="mx-auto w-full max-w-300 px-6">
          <div className="grid grid-cols-1 gap-10 pb-12 min-[561px]:grid-cols-2 min-[901px]:grid-cols-[1.5fr_1fr_1.2fr_1.3fr]">
            {/* Brand column */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/images/thymus_health_noBg_logo.png"
                  alt="Thymus Health"
                  width={160}
                  height={90}
                  className="h-9 w-auto object-contain"
                />

                <div>
                  <div className="text-base font-extrabold text-white">
                    {clinic.name}
                  </div>
                  <div className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#14b8a6]">
                    Part of Thymus Health
                  </div>
                </div>
              </div>

              <p className="mb-5 text-[0.83rem] leading-[1.7]">
                {clinic.description}
              </p>

              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] transition-colors duration-200 hover:bg-[#0d9488] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                Navigation
              </h4>

              <ul className="flex list-none flex-col gap-2 p-0">
                <li>
                  <Link
                    href="/"
                    className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                  >
                    ← Thymus Health Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#clinic-about"
                    className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                  >
                    About {clinic.name}
                  </a>
                </li>
                <li>
                  <a
                    href="#clinic-services"
                    className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                  >
                    Services & Specialisations
                  </a>
                </li>
                {clinic.treatments && clinic.treatments.length > 0 && (
                  <li>
                    <a
                      href="#treatments"
                      className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                    >
                      Treatments
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Services for this clinic */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                Key Services
              </h4>

              <ul className="flex list-none flex-col gap-2 p-0">
                {clinic.services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <span className="text-[0.83rem] text-[rgba(255,255,255,0.8)]">
                      {service.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                Clinic Details
              </h4>

              <div className="flex flex-col gap-3 text-[0.83rem]">
                {clinic.address && (
                  <div className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                      <MapPinIcon size={16} />
                    </span>
                    <span>{clinic.address}</span>
                  </div>
                )}

                {clinic.phone && (
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-[#14b8a6]">
                      <PhoneCall size={16} />
                    </span>
                    <span>{clinic.phone}</span>
                  </div>
                )}

                {clinic.email && (
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-[#14b8a6]">
                      <Mail size={16} />
                    </span>
                    <span>{clinic.email}</span>
                  </div>
                )}

                {clinic.workingHours && clinic.workingHours.length > 0 && (
                  <div className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                      <ClockIcon size={16} />
                    </span>
                    <div>
                      {clinic.workingHours.map((wh) => (
                        <div key={wh.days}>
                          {wh.days} {wh.hours}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(255,255,255,0.08)] py-5 text-[0.78rem]">
            <span>
              © {new Date().getFullYear()} {clinic.name}. Operated by Thymus Health.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
