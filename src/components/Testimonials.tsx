"use client";

import React, { useState } from "react";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@/icons";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The team is amazing! They really listen and create a plan that works. I'm finally pain-free!",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Professional, knowledgeable, and supportive. My recovery was faster than I expected.",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Great experience from start to finish. I highly recommend MoveWell Physiotherapy.",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () =>
    setActiveIdx(
      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  const next = () =>
    setActiveIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="bg-[#f8fafc] py-20"
    >
      <div className="mx-auto w-full max-w-300 px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0d9488]">
            Patient Stories
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight text-[#0f172a]">
            What Our Patients Say
          </h2>
        </div>

        <div className="relative mx-auto max-w-240">
          <div className="grid grid-cols-1 gap-6 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-[1.25rem] border-2 bg-white p-7 transition-[box-shadow,border-color,transform] duration-300 ${i === activeIdx ? "border-[#14b8a6] shadow-[0_10px_40px_rgba(0,0,0,0.14)]" : "border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.08)]"}`}
              >
                {/* Stars */}
                <div
                  className="mb-[0.85rem] flex gap-0.75 text-[#f59e0b]"
                >
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} size={16} />
                  ))}
                </div>
                <p className="mb-5 text-[0.9rem] italic leading-[1.7] text-[#475569]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-[0.9rem] font-bold text-white ${["bg-[#4da89e]", "bg-[#728fb4]", "bg-[#b47d71]"][i]}`}>
                    {t.name[0]}
                  </div>
                  <span className="text-sm font-semibold text-[#0f172a]">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] transition-[border-color,color] duration-200 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] transition-[border-color,color] duration-200 hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
