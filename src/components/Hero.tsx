"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f0fdfa_0%,#e0f2f1_30%,#f8fafc_100%)] pt-20">
      <div
        className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-6 min-[901px]:grid-cols-2"
      >
        {/* Left copy */}
        <div className="animate-fade-up pb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
            Move Better. Feel Better. Live Better.
          </p>
          <h1 className="mb-1 text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.1] text-[#0f172a]">
            Expert Care.
          </h1>
          <h1 className="mb-5 text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.1] text-[#0d9488]">
            Stronger You.
          </h1>
          <p className="mb-8 max-w-[420px] leading-[1.7] text-[#475569]">
            Personalized physiotherapy treatment to help you recover, restore
            movement, and return to the activities you love.
          </p>
          <div className="mb-8 flex flex-wrap gap-4">
            <button className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-[0.7rem] text-sm font-semibold text-white transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)]">
              Book an Appointment <ArrowRightIcon size={16} />
            </button>
            <button className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#e2e8f0] bg-transparent px-6 py-[0.7rem] text-sm font-semibold text-[#0f172a] transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-[#0d9488] hover:text-[#0d9488]">
              Our Services <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="animate-fade-in delay-2 relative self-end">
          <div className="overflow-hidden rounded-t-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/hero.jpg"
              alt="Physiotherapy treatment session"
              width={600}
              height={430}
              className="h-[430px] w-full object-cover object-top"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
