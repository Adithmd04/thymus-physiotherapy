"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  highlights: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "back-neck",
    title: "Back & Neck Pain",
    subtitle: "Spine & Postural Health",
    shortDesc:
      "Targeted therapy to eliminate chronic neck strain and lumbar tension.",
    fullDesc:
      "Comprehensive, non-invasive rehabilitation designed to eliminate chronic neck strain, sciatica, herniated discs, and lower back tension. We combine specialized manual manipulation, gentle spinal mobilization, and personalized core-strengthening routines to restore lasting, pain-free mobility.",
    image: "/images/service.jpg",
    tag: "Spine Care",
    highlights: [
      "Spinal Decompression",
      "Sciatica Treatment",
      "Core Alignment",
    ],
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    subtitle: "Athletic Recovery & Performance",
    shortDesc:
      "Fast-track recovery from sprains, ligament tears, and joint strains.",
    fullDesc:
      "Tailored rehabilitation programs engineered for athletes and active individuals recovering from ACL injuries, rotator cuff tears, tendonitis, and muscle strains. We utilize biomechanical motion analysis, progressive loading protocols, and sport-specific training to get you back to peak performance safely.",
    image: "/images/hero.jpg",
    tag: "Sports Physio",
    highlights: [
      "ACL & Knee Recovery",
      "Bio-Mechanical Analysis",
      "Return-to-Play Testing",
    ],
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Rehab",
    subtitle: "Orthopedic Surgical Recovery",
    shortDesc: "Rebuild muscle strength and joint mobility following surgery.",
    fullDesc:
      "Structured, evidence-based post-operative therapy following joint replacements, arthroscopic surgery, and fracture repairs. We guide you step-by-step through gentle early mobilization, scar tissue management, and progressive muscle reactivation to maximize your surgical recovery outcome.",
    image: "/images/clinic.jpg",
    tag: "Post-Op Care",
    highlights: [
      "Joint Replacement Care",
      "Scar Mobilization",
      "Safe Loading Protocol",
    ],
  },
  {
    id: "joint-pain",
    title: "Joint Pain & Arthritis",
    subtitle: "Mobility & Daily Living",
    shortDesc:
      "Reduce stiffness and ease movement in knees, hips, and shoulders.",
    fullDesc:
      "Gentle, non-invasive therapeutic care to manage osteoarthritis, frozen shoulder, and chronic joint degeneration. Restore fluid movement in every step through therapeutic exercises, joint traction, and anti-inflammatory movement patterns designed to minimize dependency on painkillers.",
    image: "/images/service.jpg",
    tag: "Joint Health",
    highlights: [
      "Gentle Joint Traction",
      "Osteoarthritis Support",
      "Shoulder & Knee Mobility",
    ],
  },
  {
    id: "neurological-rehab",
    title: "Neurological Rehab",
    subtitle: "Neuro-Muscular Therapy",
    shortDesc:
      "Specialized retraining for stroke recovery, balance, and nerve health.",
    fullDesc:
      "Dedicated neuro-physiotherapy designed to stimulate neuroplasticity, enhance equilibrium, and retrain coordinated motor pathways for individuals recovering from stroke, neuropathy, or Parkinson's disease. We focus on practical everyday movements to restore self-sufficiency.",
    image: "/images/clinic.jpg",
    tag: "Neuro Care",
    highlights: [
      "Gait & Balance Training",
      "Coordination Retraining",
      "Daily Independence",
    ],
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    subtitle: "Ergonomics & Prevention",
    shortDesc: "Reverse forward-head posture and desk-related strain.",
    fullDesc:
      "In-depth spinal alignment assessments and targeted corrective protocols tailored for desk workers and sedentary routines. Reverse tech-neck, balance core stabilizers, and prevent chronic workplace repetitive strain injuries before persistent pain develops.",
    image: "/images/hero.jpg",
    tag: "Ergonomics",
    highlights: [
      "Desk Ergonomics",
      "Spine Realignment",
      "Deep Stabilizer Training",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbWidthRatio, setThumbWidthRatio] = useState(0.25);

  const activeService = SERVICES[activeIndex];
  const carouselServices = SERVICES.filter((_, idx) => idx !== activeIndex);

  const updateScrollMetrics = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollRatio(scrollLeft / maxScroll);
      setThumbWidthRatio(
        Math.max(0.18, Math.min(0.5, clientWidth / scrollWidth)),
      );
    } else {
      setScrollRatio(0);
      setThumbWidthRatio(1);
    }
  };

  useEffect(() => {
    updateScrollMetrics();
    window.addEventListener("resize", updateScrollMetrics);
    return () => window.removeEventListener("resize", updateScrollMetrics);
  }, [carouselServices.length]);

  const handleScrollbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: ratio * maxScroll,
      behavior: "smooth",
    });
  };

  const handleScrollbarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    handleScrollbarClick(e);

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current || !carouselRef.current) return;
      const scrollbarElem = document.getElementById(
        "services-custom-scrollbar",
      );
      if (!scrollbarElem) return;
      const rect = scrollbarElem.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (moveEvent.clientX - rect.left) / rect.width),
      );
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft = ratio * maxScroll;
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleSelectService = (id: string) => {
    const targetIndex = SERVICES.findIndex((s) => s.id === id);
    if (targetIndex !== -1) {
      setActiveIndex(targetIndex);
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 text-white relative overflow-hidden"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {/* Active Background Backdrop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.title}
              fill
              priority
              className="object-cover object-center brightness-[0.25] contrast-[1.05] transition-all duration-700 ease-out"
            />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14">
            {/* Two Column Grid: Left Details + Right Carousel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* 1. LEFT PART: Active Service Detailed Information */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div key={activeService.id} className="animate-fade-in">
                  <div className="h-1 w-10 bg-teal-400 rounded-full mb-3" />
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-teal-400 mb-2">
                    {activeService.subtitle}
                  </p>

                  {/* Main Heading */}
                  <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
                    {activeService.title}
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {activeService.fullDesc}
                  </p>

                  {/* Clinical Highlights Pills */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {activeService.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-lg border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons matching the reference design */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#contact-us"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-teal-400 hover:bg-teal-500 hover:text-white hover:shadow-[0_6px_24px_rgba(13,148,136,0.4)]"
                    >
                      Book Consultation <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. RIGHT PART: Image Carousel Cards */}
              <div className="lg:col-span-7 overflow-hidden">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Explore Other Services ({carouselServices.length})
                  </p>
                </div>

                {/* Horizontal Carousel Track */}
                <div
                  ref={carouselRef}
                  onScroll={updateScrollMetrics}
                  className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x no-scrollbar scrollbar-hide focus:outline-none"
                  tabIndex={0}
                  aria-label="Services carousel"
                >
                  {carouselServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleSelectService(service.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelectService(service.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      className="group relative h sm:h-[280px] w-[210px] sm:w-[240px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/80 hover:shadow-[0_12px_30px_rgba(13,148,136,0.3)] snap-start focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      {/* Card Image */}
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay for crisp text readability */}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 rounded-md bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 backdrop-blur-md border border-white/10">
                        {service.tag}
                      </div>

                      {/* Bottom Content */}
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end">
                        <div className="h-0.5 w-6 bg-teal-400/90 rounded-full mb-1.5" />
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-teal-300 line-clamp-1">
                          {service.subtitle}
                        </span>
                        <h4 className="mt-0.5 text-base sm:text-lg font-extrabold uppercase leading-snug text-white group-hover:text-teal-200 transition-colors">
                          {service.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-300/80 line-clamp-2 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Custom Scroll Bar */}
                <div className="mt-4 flex items-center justify-start w-full">
                  <div
                    role="scrollbar"
                    id="services-custom-scrollbar"
                    onClick={handleScrollbarClick}
                    onMouseDown={handleScrollbarMouseDown}
                    aria-valuenow={Math.round(scrollRatio * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Services carousel scrollbar"
                    className="relative h-1.5 w-full rounded-full bg-white/15 cursor-pointer overflow-hidden transition-colors hover:bg-white/25 select-none"
                  >
                    <div
                      className="absolute top-0 h-full rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.6)] transition-[left,width] duration-150 ease-out"
                      style={{
                        width: `${thumbWidthRatio * 100}%`,
                        left: `${scrollRatio * (1 - thumbWidthRatio) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
