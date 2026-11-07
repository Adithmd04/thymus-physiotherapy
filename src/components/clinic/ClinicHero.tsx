import Image from "next/image";
import { CircleCheckBig, ChevronRight } from "lucide-react";
import type { Clinic } from "@/types/clinic";

interface ClinicHeroProps {
  clinic: Clinic;
}

export default function ClinicHero({ clinic }: ClinicHeroProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-18 lg:py-16">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 items-center gap-12 px-6 min-[901px]:grid-cols-2">
        {/* Left copy */}
        <div className="animate-fade-up">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0d9488]">
            {clinic.name}
          </p>
          <h1 className="mb-5 text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.1] text-[#0f172a]">
            {clinic.tagline}
          </h1>

          <p className="mb-7 max-w-[460px] text-base leading-[1.7] text-[#475569]">
            {clinic.description}
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#clinic-services"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#0d9488] bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0f766e] hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.4)]"
            >
              Our Services <ChevronRight size={16} />
            </a>
            <a
              href="#clinic-contact"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#cbd5e1] bg-white/70 px-6 py-3 text-sm font-semibold text-[#0f172a] backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0d9488] hover:bg-white hover:text-[#0d9488]"
            >
              Contact Us <ChevronRight size={16} />
            </a>
          </div>

          {/* Feature highlights */}
          {clinic.features && clinic.features.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2">
              {clinic.features.slice(0, 3).map((feature) => (
                <div
                  key={feature}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#334155]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-100 text-[#0d9488]">
                    <CircleCheckBig size={11} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right image */}
        <div className="animate-fade-in delay-2 relative w-full">
          <div className="relative mx-auto max-w-[560px]">
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-teal-500/20 via-cyan-400/10 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.12)]">
              <Image
                src={clinic.heroImage}
                alt={`${clinic.name} clinic`}
                width={800}
                height={533}
                className="h-auto w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
