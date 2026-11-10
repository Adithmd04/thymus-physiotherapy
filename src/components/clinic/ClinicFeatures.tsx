import { CircleCheckBig } from "lucide-react";
import type { Clinic } from "@/types/clinic";

export default function ClinicFeatures({ clinic }: { clinic: Clinic }) {
  const features = clinic.features ?? [];
  if (features.length === 0) return null;

  return (
    <section className="py-6">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 gap-4 px-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={feature}
            className={`animate-fade-up delay-${index + 1} flex items-center gap-3 rounded-2xl border border-[#ccfbf1] bg-[#f0fdfa] px-5 py-4`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#0d9488]">
              <CircleCheckBig size={18} />
            </span>
            <p className="text-sm font-semibold text-[#0f172a]">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
