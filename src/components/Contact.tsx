"use client";

import React, { useState } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "@/icons";

const FOOTER_LINKS = {
  "Quick Links": [
    "About Us",
    "Services",
    "Conditions",
    "Our Specialists",
    "Blog",
    "Contact Us",
  ],
  "Our Services": [
    "Back & Neck Pain",
    "Sports Injury",
    "Post-Surgery Rehab",
    "Joint Pain",
    "Neurological Rehab",
    "Posture Correction",
  ],
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <div id="contact-us">
      {/* ── CTA BANNER ────────────────────────── */}
      <section className="bg-[linear-gradient(135deg,#0f766e_0%,#0d9488_60%,#14b8a6_100%)] py-14">
        <div
          className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-8 px-6"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.15)] text-white">
              <CalendarIcon size={26} />
            </div>
            <div>
              <h2 className="mb-1 text-[1.45rem] font-extrabold text-white">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-[0.9rem] text-[rgba(255,255,255,0.85)]">
                Book your appointment today and take the first step toward a
                healthier, pain-free life.
              </p>
            </div>
          </div>
          <button
            className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-[0.85rem] text-[0.9rem] font-bold text-[#0f766e] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
          >
            Book an Appointment <ArrowRightIcon size={16} />
          </button>
        </div>
      </section>

      {/* ── FOOTER & CONTACT INFO ─────────────── */}
      <footer className="bg-[#0f172a] pt-18 text-[rgba(255,255,255,0.7)]">
        <div className="mx-auto w-full max-w-300 px-6">
          <div
            className="grid grid-cols-1 gap-10 pb-12 min-[561px]:grid-cols-2 min-[901px]:grid-cols-[1.5fr_1fr_1fr_1.2fr_1.3fr]"
          >
            {/* Brand column */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d9488] font-extrabold text-white">
                  M
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">
                    MoveWell
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
                {[
                  { icon: <FacebookIcon size={18} />, label: "Facebook" },
                  { icon: <InstagramIcon size={18} />, label: "Instagram" },
                  { icon: <YouTubeIcon size={18} />, label: "YouTube" },
                  { icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.label}
                    className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] transition-colors duration-200 hover:bg-[#0d9488] hover:text-white"
                  >
                    {s.icon}
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
                <ul
                  className="flex list-none flex-col gap-2 p-0"
                >
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
                      >
                        {l}
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
              <div
                className="flex flex-col gap-3 text-[0.83rem]"
              >
                <div className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                    <MapPinIcon size={16} />
                  </span>
                  <span>
                    123 Wellness Way,
                    <br />
                    Toronto, ON M5V 2T6
                  </span>
                </div>
                <div
                  className="flex items-center gap-2"
                >
                  <span className="shrink-0 text-[#14b8a6]">
                    <PhoneIcon size={16} />
                  </span>
                  (555) 123-4567
                </div>
                <div
                  className="flex items-center gap-2"
                >
                  <span className="shrink-0 text-[#14b8a6]">
                    <MailIcon size={16} />
                  </span>
                  info@movewellphysio.com
                </div>
                <div className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                    <ClockIcon size={16} />
                  </span>
                  <span>
                    Mon–Fri 8:00 AM–8:00 PM
                    <br />
                    Sat: 9:00 AM–2:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
                Newsletter
              </h4>
              <p className="mb-4 text-[0.83rem] leading-[1.6]">
                Subscribe for health tips, offers, and clinic updates.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-4 py-[0.65rem] text-[0.83rem] text-white outline-none placeholder:text-[rgba(255,255,255,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14b8a6]"
                />
                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-[0.7rem] text-sm font-semibold text-white transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)]"
                >
                  {subscribed ? "Subscribed! ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(255,255,255,0.08)] py-5 text-[0.78rem]">
            <span>© 2024 MoveWell Physiotherapy. All rights reserved.</span>
            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-[#14b8a6]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-[#14b8a6]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
