"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,23,42,0.06)] bg-[rgba(255,255,255,0.92)] backdrop-blur-md">
      <div className="mx-auto flex min-h-19 w-full max-w-300 items-center justify-between gap-4 px-6">
        <a
          href="#"
          aria-label="Thymus Physiotherapy home"
          className="flex items-center"
        >
          <Image
            src="/images/thymusLogo_no_bg.png"
            alt="Thymus Physiotherapy"
            width={160}
            height={90}
            priority
            className="block h-11.5 w-auto rounded-lg object-contain"
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 min-[901px]:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.9rem] font-semibold text-[#475569] transition-colors hover:text-[#0d9488]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-[0.8rem] min-[901px]:flex">
          <a
            href="tel:+918138863889"
            className="inline-flex items-center gap-[0.45rem] text-[0.88rem] font-bold text-[#0f172a]"
          >
            <Phone size={15} />
            +91 81388 63889
          </a>
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-[0.7rem] text-sm font-semibold text-white transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)]"
            href="#contact-us"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10.5 w-10.5 cursor-pointer items-center justify-center rounded-full bg-[#f0fdfa] text-[#0f172a] min-[901px]:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[rgba(15,23,42,0.06)] bg-[rgba(255,255,255,0.98)] py-4">
          <div className="mx-auto grid w-full max-w-300 gap-3 px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[0.95rem] font-semibold text-[#0f172a]"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:4165550148" className="font-bold text-[#0d9488]">
              Call (416) 555-0148
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
