import React from "react";
import { cn } from "@/lib/cn";
import {
  ExperienceIcon,
  PatientsTreatedIcon,
  ExpertTherapistsIcon,
  SatisfactionIcon,
} from "@/icons";

export interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const STATS: MetricItem[] = [
  {
    icon: <ExperienceIcon size={26} />,
    value: "15+",
    label: "Years of Experience",
  },
  {
    icon: <PatientsTreatedIcon size={26} />,
    value: "10K+",
    label: "Patients Treated",
  },
  {
    icon: <ExpertTherapistsIcon size={26} />,
    value: "20+",
    label: "Expert Therapists",
  },
  {
    icon: <SatisfactionIcon size={26} />,
    value: "98%",
    label: "Patient Satisfaction",
  },
];

interface MetricsProps {
  items?: MetricItem[];
  className?: string;
}

export default function Metrics({ items = STATS, className }: MetricsProps) {
  return (
    <div
      className={cn("grid grid-cols-2 gap-5", className)}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-[0.85rem] rounded-xl border border-[#ccfbf1] bg-[#f0fdfa] px-5 py-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        >
          <div className="flex shrink-0 items-center justify-center text-[#0d9488]">
            {s.icon}
          </div>
          <div>
            <div className="text-[1.35rem] font-extrabold leading-[1.1] text-[#0f766e]">
              {s.value}
            </div>
            <div className="mt-0.5 text-xs font-medium text-[#475569]">
              {s.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
