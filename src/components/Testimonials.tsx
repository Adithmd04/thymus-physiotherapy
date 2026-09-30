"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/icons";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The team is amazing! They really listen and create a plan that works. I'm finally feeling much better!",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Professional, knowledgeable, and supportive. The treatment was explained clearly and I felt comfortable throughout my recovery.",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Great experience from start to finish. The team was caring, patient, and made every session feel comfortable.",
  },
  {
    name: "Michael D.",
    rating: 5,
    text: "I noticed a real improvement after my sessions. The exercises were simple, practical, and easy to continue at home.",
  },
  {
    name: "Olivia K.",
    rating: 5,
    text: "Everyone was friendly and professional. I always felt comfortable and well taken care of during my treatment.",
  },
  {
    name: "Daniel P.",
    rating: 5,
    text: "The treatment plan was tailored to my needs. I received clear guidance and felt supported throughout the process.",
  },
  {
    name: "Sophia L.",
    rating: 5,
    text: "Excellent service and a very caring team. Everything was explained clearly and patiently at every appointment.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "I had been dealing with discomfort for a while, and I'm glad I decided to start physiotherapy here.",
  },
  {
    name: "Jessica W.",
    rating: 5,
    text: "The staff are incredibly supportive and knowledgeable. I felt progress throughout my treatment.",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((current) =>
      current === 0 ? TESTIMONIALS.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIdx((current) =>
      current === TESTIMONIALS.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="testimonials" className="overflow-hidden py-14 md:py-18">
      <div className="mx-auto w-full max-w-300 px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d9488]">
              Patient Reviews
            </p>

            <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#111827]">
            Read reviews,
            <br />
            <span className="font-bold">feel confident.</span>
          </h2>
        </div>

        {/* Main testimonial area */}
        <div className="relative flex items-stretch gap-8 lg:gap-8">
          {/* LEFT INTRO PANEL */}
          <div className="hidden w-45 shrink-0 flex-col justify-center md:flex lg:w-50">
            <div className="mb-1 text-[76px] font-serif leading-[0.5] text-[#b8bfc2]">
              “
            </div>

            <h3 className="max-w-42.5 text-[1.4rem] font-medium leading-[1.15] tracking-[-0.03em] text-[#111827]">
              What our
              <br />
              patients are
              <br />
              saying
            </h3>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-8 w-8 cursor-pointer items-center justify-center text-[#374151] transition-colors duration-200 hover:text-[#0d9488]"
              >
                <ChevronLeftIcon size={17} />
              </button>

              {/* Progress line */}
              <div className="relative h-px w-17.5 bg-[#cbd5d8]">
                <div
                  className="absolute left-0 top-0 h-px bg-[#111827] transition-all duration-300"
                  style={{
                    width: `${((activeIdx + 1) / TESTIMONIALS.length) * 100}%`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-8 w-8 cursor-pointer items-center justify-center text-[#374151] transition-colors duration-200 hover:text-[#0d9488]"
              >
                <ChevronRightIcon size={17} />
              </button>
            </div>
          </div>

          {/* MOBILE INTRO */}
          <div className="absolute -top-1 left-0 flex w-full items-center justify-between md:hidden">
            <div>
              <p className="text-sm font-medium text-[#111827]">
                What our patients are saying
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#dce3e5] bg-white text-[#111827]"
              >
                <ChevronLeftIcon size={16} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#dce3e5] bg-white text-[#111827]"
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="min-w-0 flex-1 overflow-hidden pt-14 md:pt-0">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out md:gap-5"
              style={{
                transform: `translateX(-${activeIdx * (300 + 20)}px)`,
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="
          group
          min-w-70
          shrink-0
          rounded-[18px]
          border
          border-[#edf0f1]
          bg-white
          p-5
          shadow-[0_4px_20px_rgba(15,23,42,0.04)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
          sm:min-w-70
          lg:min-w-75
        "
                >
                  {/* Review */}
                  <div className="flex max-h-40 max-w-50 flex-col">
                    <p className="text-[0.9rem] leading-[1.7] text-[#4b5563]">
                      {testimonial.text}
                    </p>

                    {/* Stars */}
                    <div className="mt-auto flex gap-1 pt-7 text-[#0d9488]">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <StarIcon
                          key={starIndex}
                          size={14}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Patient */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#f1f3f4] pt-5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-[0.9rem] font-bold text-white ${["bg-[#4da89e]", "bg-[#728fb4]", "bg-[#b47d71]"][index]}`}
                    >
                      {testimonial.name[0]}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#111827]">
                        {testimonial.name}
                      </p>

                      <p className="mt-0.5 text-xs text-[#94a3b8]">
                        Patient review
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile bottom controls */}
        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIdx(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === index
                    ? "w-7 bg-[#111827]"
                    : "w-1.5 bg-[#cbd5e1]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
