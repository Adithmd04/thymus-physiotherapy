import React from "react";
import { PersonalizedCareIcon } from "@/icons";
import {
  ShieldCheck,
  HeartHandshake,
  CalendarHeartIcon,
  HouseHeartIcon,
} from "lucide-react";

const FEATURES = [
  {
    icon: <PersonalizedCareIcon size={32} />,
    title: "Personalized Care",
    desc: "Structured rehabilitation programs tailored to individual needs, movement goals, and recovery requirements.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Expert Consultation",
    desc: "Professional physiotherapy consultation focused on assessment, treatment planning, and rehabilitation.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Advanced Treatment",
    desc: "A broad range of physiotherapy services, electrotherapy modalities, manual therapy, exercise, and rehabilitation programs.",
  },
  {
    icon: <CalendarHeartIcon size={32} />,
    title: "Flexible Appointments",
    desc: "Convenient morning-to-evening appointments from Monday to Saturday.",
  },
  {
    icon: <HouseHeartIcon size={32} />,
    title: "Home Based Care",
    desc: "Physiotherapy services available at your doorstep through home visits and home-based care.",
  },
];

export default function Features() {
  return (
    <section className="py-5">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-5">
        {FEATURES.map((feature, index) => (
          <div
            key={feature.title}
            className={`animate-fade-up delay-${index + 1} flex flex-col items-center p-2 text-center`}
          >
            <div className="mb-3 flex items-center justify-center text-[#0d9488]">
              {feature.icon}
            </div>
            <h3 className="mb-1 text-[0.95rem] font-bold text-[#0f172a]">
              {feature.title}
            </h3>
            <p className="text-[0.78rem] leading-6 text-[#475569]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
