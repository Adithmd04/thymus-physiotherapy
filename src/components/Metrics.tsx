import { cn } from "@/lib/cn";
import { MetricItem } from "@/types/types";

interface MetricsProps {
  items: MetricItem[];
  className?: string;
}

export default function Metrics({ items, className }: MetricsProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-5", className)}>
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
