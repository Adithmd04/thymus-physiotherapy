"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useBooking } from "./BookingContext";
import ServiceStep from "./ServiceStep";
import ProviderStep from "./ProviderStep";
import ScheduleStep from "./ScheduleStep";
import DetailsStep from "./DetailsStep";

const STEP_TITLES: Record<string, string> = {
  service: "Select Service",
  provider: "Choose Provider",
  schedule: "Schedule",
  details: "Your Details",
};

const STEPS = ["service", "provider", "schedule", "details"] as const;

export default function BookingModal() {
  const { isOpen, close, state } = useBooking();

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const currentStepIndex = STEPS.indexOf(state.step as (typeof STEPS)[number]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="
          relative flex flex-col shrink-0
          w-full max-w-105
          h-[min(700px,calc(100dvh-24px))]
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_25px_80px_rgba(15,23,42,0.25)]

          sm:w-130
          sm:max-w-130
          sm:h-[min(750px,calc(100dvh-32px))]
          sm:rounded-3xl

          md:w-155
          md:max-w-155
          md:h-[min(780px,calc(100dvh-48px))]
        "
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-[#e2e8f0] px-4 py-3.5 sm:px-6 sm:py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#0d9488] sm:mb-1 sm:text-[10px]">
                Book Appointment
              </p>

              <h2 className="text-sm font-bold text-[#0f172a] sm:text-base">
                {STEP_TITLES[state.step] || "Booking"}
              </h2>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close booking modal"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8fafc] text-[#64748b] transition-colors hover:bg-[#e2e8f0] hover:text-[#0f172a]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-3 flex gap-1 sm:mt-4 sm:gap-1.5">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className={`
                  h-1 flex-1 rounded-full
                  transition-all duration-300
                  ${i <= currentStepIndex ? "bg-[#0d9488]" : "bg-[#e2e8f0]"}
                `}
              />
            ))}
          </div>
        </div>

        {/* Step content */}
        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {state.step === "service" && <ServiceStep />}
          {state.step === "provider" && <ProviderStep />}
          {state.step === "schedule" && <ScheduleStep />}
          {state.step === "details" && <DetailsStep />}
        </div>
      </div>
    </div>
  );
}
