"use client";

import Image from "next/image";
import { BadgeCheck, MapPin, Headphones, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Trusted by Patients",
    desc: "Patients trust us for compassionate care and their recovery journey.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Conveniently located for easy access and hassle-free visits.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Our team is always here to guide and assist you at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Safer Environment",
    desc: "A clean, hygienic and well-equipped space designed for your comfort.",
  },
];

export default function About() {
  return (
    <section id="about-us" className="overflow-hidden py-20 sm:py-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Content */}
          <div className="animate-fade-up">
            {/* Section label */}
            <div className="mb-5 flex items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                About Us
              </p>

              <span className="h-0.5 w-14 rounded-full bg-[#0d9488]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-145 text-[clamp(2.25rem,4vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0f172a]">
              Your Recovery is
              <br />
              Our Priority
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-142.5 text-[1.05rem] leading-[1.85] text-[#64748b]">
              At Thymus Physiotherapy, we combine advanced techniques with
              compassionate care to help you move better, feel better, and live
              a pain-free life. Our approach is focused on understanding your
              needs and creating personalised treatment plans that support
              lasting recovery.
            </p>
          </div>

          {/* Right - Image */}
          <div className="animate-fade-in relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/clinic.jpg"
                alt="Thymus Physiotherapy Clinic Interior"
                width={700}
                height={520}
                priority
                className="h-auto min-h-85 w-full object-cover sm:min-h-100"
              />
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="mt-12 text-center grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-1">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center flex-col"
              >
                {/* Icon */}
                <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-full bg-[#e8f7f5] transition-all duration-300 group-hover:bg-[#d5f1ed] group-hover:shadow-[0_8px_25px_rgba(13,148,136,0.12)]">
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-[#0d9488] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[1.2rem] font-bold leading-tight text-[#0f172a]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-62.5 text-[0.98rem] leading-[1.65] text-[#64748b]">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
