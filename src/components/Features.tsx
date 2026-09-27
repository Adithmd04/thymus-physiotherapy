import React from "react";
import {
  PersonalizedCareIcon,
  ExperiencedTherapistsIcon,
  ComprehensiveServicesIcon,
  FlexibleAppointmentsIcon,
  BetterResultsIcon,
} from "@/icons";

const FEATURES = [
  {
    icon: <PersonalizedCareIcon size={32} />,
    title: "Personalized Care",
    desc: "Tailored treatment plans designed for your unique needs and goals.",
  },
  {
    icon: <ExperiencedTherapistsIcon size={32} />,
    title: "Experienced Therapists",
    desc: "Licensed professionals with years of experience and specialized training.",
  },
  {
    icon: <ComprehensiveServicesIcon size={32} />,
    title: "Comprehensive Services",
    desc: "A wide range of treatments under one roof for complete recovery.",
  },
  {
    icon: <FlexibleAppointmentsIcon size={32} />,
    title: "Flexible Appointments",
    desc: "Convenient scheduling options to fit your busy lifestyle.",
  },
  {
    icon: <BetterResultsIcon size={32} />,
    title: "Better Results",
    desc: "Evidence-based treatments focused on long-term recovery and wellness.",
  },
];

export default function Features() {
  return (
    <section className="py-14">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-5">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`animate-fade-up delay-${i + 1} flex flex-col items-center p-2 text-center`}
          >
            <div className="mb-3 flex items-center justify-center text-[#0d9488]">
              {f.icon}
            </div>
            <h3 className="mb-1 text-[0.95rem] font-bold text-[#0f172a]">
              {f.title}
            </h3>
            <p className="text-[0.78rem] leading-6 text-[#475569]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
