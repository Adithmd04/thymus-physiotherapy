"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
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

const PAGE_SIZE = 3;
const TOTAL_SLOTS = Math.ceil(TREATMENTS.length / PAGE_SIZE) * PAGE_SIZE;
const TOTAL_PAGES = TOTAL_SLOTS / PAGE_SIZE;
const PADDED_TREATMENTS = Array.from(
  { length: TOTAL_SLOTS },
  (_, index) => TREATMENTS[index % TREATMENTS.length],
);

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<
    (typeof TREATMENTS)[number] | null
  >(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const openModal = (treatment: (typeof TREATMENTS)[number]) => {
    setSelectedTreatment(treatment);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };

  const goNext = () => {
    if (page >= TOTAL_PAGES - 1) return;
    setDirection("next");
    setPage(page + 1);
  };

  const goPrev = () => {
    if (page <= 0) return;
    setDirection("prev");
    setPage(page - 1);
  };

  // Pad the final group to the next multiple of three treatments.
  const visibleTreatments = PADDED_TREATMENTS.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

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
      {/* Card fade-in, direction follows next / prev */}
      <style>{`
        @keyframes treatmentFade {
          from { opacity: 0; transform: translateY(var(--fade-y)); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .treatment-fade { animation: none !important; }
        }
      `}</style>

      <section id="treatments" className="py-8 md:py-10">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-5 max-w-xl text-center md:mb-6">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
                Our Treatments
              </p>

              <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
            </div>

            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#0f172a]">
              Care Designed Around
              <span className="text-[#0d9488]"> Your Recovery</span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              Explore our range of physiotherapy treatments designed to relieve
              pain, restore movement, and support your recovery.
            </p>
          </div>

          {/* Carousel: arrows on top (mobile) / below (desktop) */}
          <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-3 md:flex-col md:gap-4">
            {/* Treatment cards + fixed button tile */}
            <div className="grid grid-cols-2 grid-rows-[repeat(2,240px)] gap-3 md:grid-rows-[repeat(2,220px)] md:gap-4">
              {visibleTreatments.map((treatment) => {
                const Icon =
                  TREATMENT_ICONS[
                    treatment.id as keyof typeof TREATMENT_ICONS
                  ] ?? Activity;

                return (
                  <article
                    key={`${page}-${treatment.id}`}
                    style={
                      {
                        "--fade-y": direction === "next" ? "12px" : "-12px",
                        animation: "treatmentFade 400ms ease-out both",
                      } as CSSProperties
                    }
                    className="treatment-fade group relative min-w-0 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-3 transition-shadow duration-400 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-4"
                  >
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0faf9] transition-transform duration-500 group-hover:scale-125" />

                    <div className="relative">
                      {/* Top row */}
                      <div className="mb-2 flex items-center justify-between gap-2">
                        {/* Icon */}
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f7f5] text-[#0d9488] transition-all duration-300 group-hover:bg-[#0d9488] group-hover:text-white">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <span className="rounded-full bg-[#e8f7f5] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d9488]">
                          {treatment.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="mb-1.5">
                        <h3 className="text-sm font-bold leading-tight text-[#0f172a] md:text-lg">
                          {treatment.title}
                        </h3>

                        <p className="mt-0.5 text-[11px] font-medium text-[#64748b] md:text-xs">
                          {treatment.subtitle}
                        </p>
                      </div>

                      {/* Short description */}
                      <p className="line-clamp-2 text-[11px] leading-4 text-[#64748b] md:text-sm md:leading-6">
                        {treatment.shortDesc}
                      </p>

                      {/* Explore button */}
                      <button
                        type="button"
                        onClick={() => openModal(treatment)}
                        className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#0d9488] transition-all duration-300 hover:gap-3"
                      >
                        Explore treatment
                        <ArrowRight
                          size={15}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </article>
                );
              })}

              {/* Fixed button tile (stays put while cards change) */}
              <div className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border border-[#e2e8f0] bg-[#f0faf9] p-3 text-center md:p-4">
                <p className="text-xs leading-5 text-[#475569] md:max-w-xs md:text-sm md:leading-6">
                  Browse every physiotherapy treatment we offer and find the
                  right fit for your recovery.
                </p>

                <a
                  href="/treatments"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d9488] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0f766e] md:px-6 md:py-3 md:text-sm"
                >
                  Explore More
                  <ArrowRight size={16} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Carousel arrows */}
            <div className="flex items-center justify-between md:justify-center md:gap-6">
              <button
                type="button"
                onClick={goPrev}
                disabled={page === 0}
                aria-label="Previous treatments"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] transition-colors hover:bg-[#e8f7f5] disabled:cursor-not-allowed disabled:text-[#cbd5e1] disabled:hover:bg-white"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>

              <span className="text-sm font-semibold tracking-wide text-[#64748b]">
                {page + 1} / {TOTAL_PAGES}
              </span>

              <button
                type="button"
                onClick={goNext}
                disabled={page === TOTAL_PAGES - 1}
                aria-label="Next treatments"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] transition-colors hover:bg-[#e8f7f5] disabled:cursor-not-allowed disabled:text-[#cbd5e1] disabled:hover:bg-white"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>
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
