"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Home,
  Info,
  HeartPulse,
  Star,
  Mail,
  Phone,
  CalendarCheck,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about-us", label: "About", href: "#about-us", icon: Info },
  { id: "services", label: "Services", href: "#services", icon: HeartPulse },
  { id: "testimonials", label: "Reviews", href: "#testimonials", icon: Star },
  { id: "contact-us", label: "Contact", href: "#contact-us", icon: Mail },
];

const MOBILE_ITEMS = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about-us", label: "About", href: "#about-us", icon: Info },
  { id: "services", label: "Services", href: "#services", icon: HeartPulse },
  { id: "testimonials", label: "Reviews", href: "#testimonials", icon: Star },
  {
    id: "contact-us",
    label: "Book Now",
    href: "#contact-us",
    icon: CalendarCheck,
  },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const lockUntil = useRef(0);

  // Scroll-spy: the last section whose top has passed ~35% of the viewport is active
  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < lockUntil.current) return;
      const line = window.scrollY + 120;
      let current = "home";
      let bestTop = -Infinity;
      for (const item of NAV_ITEMS) {
        if (item.id === "home") continue;
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = item.id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = "contact-us";
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* Top floating bar (logo + desktop links + phone/booking) */}
      <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 opacity-97 hidden min-[901px]:block">
        <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-4 rounded-xl bg-[rgba(255,255,255,0.92)] px-1 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-6">
          <a
            href="#home"
            aria-label="Thymus Physiotherapy home"
            className="flex items-center"
          >
            <Image
              src="/images/thymusLogo_no_bg.png"
              alt="Thymus Physiotherapy"
              width={160}
              height={90}
              priority
              className="block h-10 w-auto rounded-lg object-contain sm:h-11.5"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 min-[901px]:flex"
          >
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-[0.9rem] font-semibold transition-colors hover:text-[#0d9488] ${
                    active ? "text-[#0d9488]" : "text-[#475569]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#0d9488] transition-all duration-200 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-[0.8rem]">
            <a
              href="tel:+918138863889"
              className="hidden items-center gap-[0.45rem] text-[0.88rem] font-bold text-[#0f172a] min-[901px]:inline-flex"
            >
              <Phone size={15} />
              +91 81388 63889
            </a>
            <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0d9488] px-4 py-1.5 text-sm font-semibold text-white transition-[background,border-color,transform,box-shadow] duration-200 hover:bg-[#0f766e]">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.96)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md min-[901px]:hidden"
      >
        <ul className="mx-auto flex max-w-md items-center justify-between">
          {MOBILE_ITEMS.map((item) => {
            const active = activeId === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex-1">
                <a
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`mx-auto flex w-16 flex-col items-center gap-1 rounded-2xl py-2 text-[0.7rem] font-semibold transition-colors ${
                    active
                      ? "bg-[#ccfbf1] text-[#0d9488]"
                      : "text-[#475569] hover:text-[#0d9488]"
                  }`}
                >
                  <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
