"use client";

import Image from "next/image";
import { ChevronRight, CircleCheckBig } from "lucide-react";

const TRUST_POINTS = [
  "Advanced Treatment",
  "Expert Consultation",
  "Home Based Care",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 md:py-18 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 items-center gap-12 px-6 min-[901px]:grid-cols-2">
        {/* Left copy */}
        <div className="animate-fade-up">
          <h1 className="mb-1 text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.1] text-[#0f172a]">
            Expert Care.
          </h1>
          <h1 className="mb-5 text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.1] text-[#0d9488]">
            Stronger You.
          </h1>

          <p className="mb-7 max-w-[460px] text-base leading-[1.7] text-[#475569]">
            Personalized physiotherapy treatment to help you recover faster,
            restore natural mobility, and return with confidence to the
            activities you love.
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#contact-us"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.4)]"
            >
              Book an Appointment <ChevronRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#cbd5e1] bg-white/70 px-6 py-3 text-sm font-semibold text-[#0f172a] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0d9488] hover:bg-white hover:text-[#0d9488]"
            >
              Our Services <ChevronRight size={16} />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#334155]"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-100 text-[#0d9488]">
                  <CircleCheckBig size={11} />
                </span>
                {point}
              </div>
            ))}
          </div>

          {/* Social Proof / Reviews */}
          {/* <div className="flex items-center gap-3.5 border-t border-slate-200/60 pt-4">
            <div className="flex -space-x-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-teal-600 text-[11px] font-bold text-white shadow-xs">
                JD
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-cyan-600 text-[11px] font-bold text-white shadow-xs">
                SK
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-600 text-[11px] font-bold text-white shadow-xs">
                ML
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-teal-800 text-[11px] font-bold text-white shadow-xs">
                +4k
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={14} />
                ))}
                <span className="ml-1 text-xs font-bold text-[#0f172a]">
                  4.9
                </span>
              </div>
              <p className="text-[12px] font-medium text-[#64748b]">
                Over 450+ verified patient reviews
              </p>
            </div>
          </div> */}
        </div>

        {/* Right image container */}
        <div className="animate-fade-in delay-2 relative w-full">
          <div className="relative mx-auto max-w-[560px]">
            {/* Subtle glow frame */}
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-teal-500/20 via-cyan-400/10 to-transparent blur-xl" />

            {/* Main image card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/hero.jpg"
                alt="Physiotherapy treatment session"
                width={800}
                height={533}
                className="h-auto w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Floating Trust Card (Bottom Left) */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-white/90 bg-white/95 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:-left-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0d9488]">
                <CircleCheckBig size={18} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#64748b]">
                  Personalized Care
                </p>
                <p className="text-sm font-bold text-[#0f172a]">
                  98% Recovery Rate
                </p>
              </div>
            </div>

            {/* Floating Status Pill (Top Right) */}
            <div className="absolute -top-3 right-4 hidden items-center gap-2 rounded-full border border-white/90 bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-md sm:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0d9488]" />
              </span>
              <span className="text-xs font-bold text-[#0f172a]">
                Move Better. Feel Better. Live Better.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
