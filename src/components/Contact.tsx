"use client";

import { InstagramIcon } from "@/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  Globe,
  Mail,
  MessageCircle,
  MapPinIcon,
  PhoneCall,
  X,
} from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "About Us", href: "#about-us" },
    { label: "Services", href: "#services" },
  ],
  "Our Services": [
    { label: "Back & Neck Pain", href: "#services" },
    { label: "Sports Injury Rehab", href: "#services" },
    { label: "Post-Surgery Rehab", href: "#services" },
    { label: "Joint Pain & Arthritis", href: "#services" },
    { label: "Stroke & Neuro Rehab", href: "#services" },
    { label: "Posture Correction", href: "#services" },
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

const COMPANY_EMAIL = "thymusacademy@gmail.com";
const COMPANY_WHATSAPP = "918138863889";
const BOOKING_TEXT = "Hello, I would like to book a physiotherapy appointment.";
const BOOKING_SUBJECT = encodeURIComponent("Physiotherapy Appointment");
const BOOKING_BODY = encodeURIComponent(BOOKING_TEXT);
const GMAIL_BOOKING_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}&su=${BOOKING_SUBJECT}&body=${BOOKING_BODY}`;
const WHATSAPP_BOOKING_URL = `https://wa.me/${COMPANY_WHATSAPP}?text=${BOOKING_BODY}`;

export default function Contact() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bookingRef.current &&
        !bookingRef.current.contains(event.target as Node)
      ) {
        setIsBookingOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsBookingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
                Ready to Start Your Recovery?
              </h2>

              <p className="text-[0.9rem] text-[rgba(255,255,255,0.85)]">
                Book your appointment today and take the first step toward a
                healthier, pain-free life.
              </p>
            </div>
          </div>

          <div ref={bookingRef} className="relative ml-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsBookingOpen((prev) => !prev)}
              aria-expanded={isBookingOpen}
              aria-haspopup="dialog"
              className={`group flex items-center gap-2 rounded-xl bg-white px-7 py-[0.85rem] text-[0.9rem] font-bold text-[#0f766e] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] active:translate-y-0 ${
                isBookingOpen ? "shadow-[0_12px_30px_rgba(0,0,0,0.2)]" : ""
              }`}
            >
              <span>Book an Appointment</span>
              <ChevronRightIcon
                size={17}
                className={`transition-transform duration-300 ${
                  isBookingOpen ? "rotate-90" : "group-hover:translate-x-0.5"
                }`}
              />
            </button>

            {/* BOOKING OPTIONS */}
            <div
              className={`absolute right-0 top-full z-30 mt-3 w-[calc(100vw-2rem)] max-w-77.5 origin-top-right transition-all duration-300 ease-out ${
                isBookingOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-3 pb-2 pt-2">
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">
                      Book your appointment
                    </p>

                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Choose how you&apos;d like to contact us
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    aria-label="Close booking options"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[#94a3b8] transition-colors hover:bg-[#f1f5f9] hover:text-[#475569]"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="mt-1 space-y-1.5">
                  {/* Gmail */}
                  <a
                    href={GMAIL_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsBookingOpen(false)}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[#f8fafc] active:scale-[0.98]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fef2f2] text-[#ef4444] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#fee2e2]">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#0f172a]">
                        Email us
                      </p>
                      <p className="mt-0.5 truncate text-xs text-[#64748b]">
                        Send your appointment request via Gmail
                      </p>
                    </div>
                    <ChevronRightIcon
                      size={17}
                      className="shrink-0 text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0d9488]"
                    />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsBookingOpen(false)}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[#f8fafc] active:scale-[0.98]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#16a34a] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#dcfce7]">
                      <MessageCircle size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#0f172a]">
                        WhatsApp
                      </p>
                      <p className="mt-0.5 truncate text-xs text-[#64748b]">
                        Chat with us directly on WhatsApp
                      </p>
                    </div>
                    <ChevronRightIcon
                      size={17}
                      className="shrink-0 text-[#94a3b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0d9488]"
                    />
                  </a>
                </div>

                {/* Bottom accent */}
                <div className="mt-2 flex items-center gap-2 border-t border-[#f1f5f9] px-3 pb-1 pt-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                  <span className="text-[10px] font-medium text-[#94a3b8]">
                    We&apos;ll get back to you as soon as possible
                  </span>
                </div>
              </div>
            </div>
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
                  src="/images/thymusLogo_no_bg.png"
                  alt="Thymus Physiotherapy"
                  width={160}
                  height={90}
                  className="h-9 w-auto object-contain outline"
                />

                <div>
                  <div className="text-base font-extrabold text-white">
                    Thymus
                  </div>
                  <div className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#14b8a6]">
                    Physiotherapy
                  </div>
                </div>
              </div>

              <p className="mb-5 text-[0.83rem] leading-[1.7]">
                Helping you move better, feel better, and live better.
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

            {/* Quick links & Services */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                  {heading}
                </h4>

                <ul className="flex list-none flex-col gap-2 p-0">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                      >
                        {label}
                      </a>
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
                  info@movewellphysio.com
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
            <span>© 2024 Thymus Physiotherapy. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
