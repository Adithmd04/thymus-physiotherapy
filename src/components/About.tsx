"use client";

import React from "react";
import Image from "next/image";
import Metrics from "./Metrics";
import { ArrowRightIcon } from "@/icons";

export default function About() {
  return (
    <section id="about-us" className="bg-white py-[5.5rem]">
      <div
        className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 min-[901px]:grid-cols-2"
      >
        {/* Image side */}
        <div className="animate-fade-in relative">
          <div className="overflow-hidden rounded-[1.25rem] shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/clinic.jpg"
              alt="MoveWell Physiotherapy Clinic Interior"
              width={560}
              height={420}
              className="h-[420px] w-full object-cover"
            />
          </div>
          {/* Logo badge overlay */}
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0d9488] text-[0.85rem] font-extrabold text-white">
              M
            </div>
            <div>
              <div className="text-[0.8rem] font-extrabold text-[#0f172a]">
                MoveWell
              </div>
              <div className="text-[0.6rem] font-semibold tracking-[0.1em] text-[#0d9488]">
                PHYSIOTHERAPY
              </div>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div className="animate-fade-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
            About Us
          </p>
          <h2 className="mb-4 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.25] text-[#0f172a]">
            Your Recovery is Our Priority
          </h2>
          <p className="mb-8 leading-[1.8] text-[#475569]">
            At MoveWell Physiotherapy, we combine advanced techniques with
            compassionate care to help you move better, feel better, and live
            a pain-free life.
          </p>

          {/* Metrics Component */}
          <Metrics className="mb-8" />

          <button className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-[0.7rem] text-sm font-semibold text-white transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)]">
            Learn More About Us <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
