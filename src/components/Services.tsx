"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";

const SERVICES = [
  {
    icon: "🦴",
    title: "Back & Neck Pain",
    desc: "Relieve pain and improve mobility with targeted therapy.",
  },
  {
    icon: "⚽",
    title: "Sports Injury",
    desc: "Recover faster and get back to doing what you love.",
  },
  {
    icon: "🏋️",
    title: "Post-Surgery Rehab",
    desc: "Professional rehabilitation to restore strength and movement.",
  },
  {
    icon: "🦵",
    title: "Joint Pain",
    desc: "Reduce pain and improve function for a better quality of life.",
  },
  {
    icon: "🧠",
    title: "Neurological Rehab",
    desc: "Specialized therapy for stroke, Parkinson's, and other conditions.",
  },
  {
    icon: "🧍",
    title: "Posture Correction",
    desc: "Improve posture, prevent injuries, and enhance daily performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f8fafc] py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
            Our Services
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.25] text-[#0f172a]">
            How We Can Help You
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`animate-fade-up delay-${(i % 3) + 1}`}
              className="cursor-pointer overflow-hidden rounded-[1.25rem] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.14)]"
            >
              {/* Service image */}
              <div className="relative h-[170px] overflow-hidden">
                <Image
                  src="/images/service.jpg"
                  alt={s.title}
                  fill
                  className="object-cover object-center"
                />
                {/* Icon badge */}
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d9488] text-[1.1rem] shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                  {s.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-[0.4rem] text-base font-bold text-[#0f172a]">
                  {s.title}
                </h3>
                <p className="mb-3 text-[0.82rem] leading-[1.6] text-[#475569]">
                  {s.desc}
                </p>
                <a
                  href="#contact-us"
                  className="flex items-center gap-[0.3rem] text-[0.82rem] font-semibold text-[#0d9488] hover:text-[#0f766e]"
                >
                  Learn More <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-transparent px-6 py-[0.7rem] text-sm font-semibold text-[#0d9488] transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-[#0f766e] hover:text-[#0f766e]"
          >
            View All Services <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
