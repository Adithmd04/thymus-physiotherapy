"use client";

import { InstagramIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  Globe,
  Mail,
  MapPinIcon,
  PhoneCall,
} from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";

const FOOTER_LINKS = {
  "Our Clinics": [
    { label: "Thymus Physiotherapy", href: "/clinics/physiotherapy" },
    { label: "Thymus Dental", href: "/clinics/dental" },
    { label: "Thymus Pregnancy Care", href: "/clinics/pregnancy-care" },
  ],
  "Quick Links": [
    { label: "About Thymus Health", href: "/#about-us" },
    { label: "Our Services", href: "/#services" },
    { label: "Our Treatments", href: "/#treatments" },
    { label: "Patient Reviews", href: "/#testimonials" },
  ],
};

const SOCIAL_LINKS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/thymus_physiotherapy/",
  },
  { icon: Globe, label: "Website", href: "https://thymus.in/" },
];

export default function Contact() {
  const { open } = useBooking();

  return (
    <div id="contact-us">
      {/* ── CTA BANNER ────────────────────────── */}
      <section className="bg-[linear-gradient(135deg,#0f766e_0%,#0d9488_60%,#14b8a6_100%)] py-14">
        <div className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-8 px-6">
          <div className="flex min-w-0 items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.15)] text-white">
              <CalendarIcon size={26} />
            </div>

            <div className="min-w-0">
              <h2 className="mb-1 text-[1.45rem] font-extrabold text-white">
                Ready to Experience Better Care?
              </h2>

              <p className="text-[0.9rem] text-[rgba(255,255,255,0.85)]">
                Book your appointment at any of our Thymus Health clinics today.
              </p>
            </div>
          </div>

          <div className="ml-auto shrink-0">
            <button
              type="button"
              onClick={() => open()}
              className="group flex cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-[0.85rem] text-[0.9rem] font-bold text-[#0f766e] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] active:translate-y-0"
            >
              <span>Book an Appointment</span>
              <ChevronRightIcon
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER & CONTACT INFO ─────────────── */}
      <footer className="bg-[#0f172a] pt-18 text-[rgba(255,255,255,0.7)]">
        <div className="mx-auto w-full max-w-300 px-6">
          <div className="grid grid-cols-1 gap-10 pb-12 min-[561px]:grid-cols-2 min-[901px]:grid-cols-[1.5fr_1fr_1fr_1.2fr_1.3fr]">
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
                    Thymus
                  </div>
                  <div className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#14b8a6]">
                    Health
                  </div>
                </div>
              </div>

              <p className="mb-5 text-[0.83rem] leading-[1.7]">
                Helping you move better, feel better, and live better across all our specialized clinics.
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

            {/* Quick links & Clinics */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                  {heading}
                </h4>

                <ul className="flex list-none flex-col gap-2 p-0">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact details */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                Contact Us
              </h4>

              <div className="flex flex-col gap-3 text-[0.83rem]">
                <div className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                    <MapPinIcon size={16} />
                  </span>

                  <span>
                    Near Sacred Heart Church, Poovarani
                    <br />
                    pala - ponkunnam Road Kottayam{" "}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="shrink-0 text-[#14b8a6]">
                    <PhoneCall size={16} />
                  </span>
                  +91 81388 63889
                </div>

                <div className="flex items-center gap-2">
                  <span className="shrink-0 text-[#14b8a6]">
                    <Mail size={16} />
                  </span>
                  thymusacademy@gmail.com
                </div>

                <div className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                    <ClockIcon size={16} />
                  </span>

                  <span>Mon – Sat 7:30 AM – 7:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(255,255,255,0.08)] py-5 text-[0.78rem]">
            <span>© 2024 Thymus Health. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
