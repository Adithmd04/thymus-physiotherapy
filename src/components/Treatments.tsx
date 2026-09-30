"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  CircleX,
  Dumbbell,
  Hand,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";
import { TREATMENTS } from "@/constants";

const TREATMENT_ICONS = {
  ift: Zap,
  tens: Activity,
  "therapeutic-ultrasound": Waves,
  "combination-electrotherapy": Zap,
  "machine-exercise": Dumbbell,
  "machine-exercise-mobilisation": Dumbbell,
  "trigger-point-release": Hand,
  "exercise-therapy": Activity,
};

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<
    (typeof TREATMENTS)[number] | null
  >(null);

  const openModal = (treatment: (typeof TREATMENTS)[number]) => {
    setSelectedTreatment(treatment);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!selectedTreatment) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTreatment]);

  // Close modal using Escape key
  useEffect(() => {
    if (!selectedTreatment) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTreatment]);

  return (
    <>
      <section id="treatments" className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                Our Treatments
              </p>

              <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#0f172a]">
              Care Designed Around
              <span className="text-[#0d9488]"> Your Recovery</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#64748b] sm:text-lg">
              Explore our range of physiotherapy treatments designed to relieve
              pain, restore movement, and support your recovery.
            </p>
          </div>

          {/* Treatment cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TREATMENTS.map((treatment, index) => {
              const Icon =
                TREATMENT_ICONS[treatment.id as keyof typeof TREATMENT_ICONS] ??
                Activity;

              return (
                <article
                  key={treatment.id}
                  className="group relative overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-5"
                >
                  {/* Decorative background */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0faf9] transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative">
                    {/* Top row */}
                    <div className="mb-4 flex items-start justify-between">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f7f5] text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                        <Icon size={27} strokeWidth={1.8} />
                      </div>

                      {/* Number */}
                      <span className="font-mono text-sm font-semibold tracking-wider text-[#cbd5e1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mb-5">
                      <div className="mb-2 inline-flex rounded-full bg-[#f0faf9] px-3 py-1">
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">
                          {treatment.tag}
                        </span>
                      </div>

                      <h3 className="text-[1.35rem] font-bold leading-tight text-[#0f172a]">
                        {treatment.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-[#64748b]">
                        {treatment.subtitle}
                      </p>
                    </div>

                    {/* Short description */}
                    <p className="min-h-18 text-[0.95rem] leading-7 text-[#64748b]">
                      {treatment.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {treatment.highlights.slice(0, 2).map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#f8fafc] px-3 py-1.5 text-xs font-medium text-[#475569]"
                        >
                          <Check
                            size={13}
                            strokeWidth={2.5}
                            className="text-[#0d9488]"
                          />

                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Explore button */}
                    <button
                      type="button"
                      onClick={() => openModal(treatment)}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0d9488] transition-all duration-300 hover:gap-3"
                    >
                      Explore treatment
                      <ArrowRight
                        size={17}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment modal */}
      {selectedTreatment && (
        <TreatmentModal treatment={selectedTreatment} onClose={closeModal} />
      )}
    </>
  );
}

type TreatmentModalProps = {
  treatment: (typeof TREATMENTS)[number];
  onClose: () => void;
};

function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  const Icon =
    TREATMENT_ICONS[treatment.id as keyof typeof TREATMENT_ICONS] ?? Activity;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-170 overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-[#e2e8f0] px-6 py-7 sm:px-8 sm:py-8">
          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#e8f7f5]" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close treatment details"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#f8fafc] text-[#64748b] transition-colors hover:bg-[#e2e8f0] hover:text-[#0f172a]"
          >
            <CircleX size={20} strokeWidth={1.8} />
          </button>

          <div className="relative flex items-start gap-4 pr-10">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f5] text-[#0d9488]">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <div>
              {/* Category */}
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">
                {treatment.tag}
              </p>

              {/* Title */}
              <h2
                id="treatment-modal-title"
                className="text-[1.5rem] font-extrabold leading-tight text-[#0f172a] sm:text-[1.75rem]"
              >
                {treatment.title}
              </h2>

              {/* Subtitle */}
              <p className="mt-1 text-sm font-medium text-[#64748b]">
                {treatment.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="max-h-[calc(90vh-170px)] overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          {/* Description */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0f172a]">
              About this treatment
            </h3>

            <p className="text-[0.98rem] leading-7 text-[#475569]">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#0f172a]">
              Treatment highlights
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {treatment.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f7f5]">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      className="text-[#0d9488]"
                    />
                  </div>

                  <span className="text-sm font-medium text-[#334155]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 flex gap-3 rounded-xl bg-[#f0faf9] p-4">
            <ShieldCheck
              size={21}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#0d9488]"
            />

            <p className="text-sm leading-6 text-[#475569]">
              Your physiotherapist will recommend the most appropriate treatment
              approach based on your individual condition and recovery goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
