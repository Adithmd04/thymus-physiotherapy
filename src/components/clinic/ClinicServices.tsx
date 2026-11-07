"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { Clinic } from "@/types/clinic";

interface ClinicServicesProps {
  clinic: Clinic;
}

export default function ClinicServices({ clinic }: ClinicServicesProps) {
  const services = clinic.services;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [thumbWidthRatio, setThumbWidthRatio] = useState(0.25);

  const activeService = services[activeIndex];

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
  }, [services.length]);

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
        `clinic-services-scrollbar-${clinic.slug}`,
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
    const targetIndex = services.findIndex((s) => s.id === id);
    if (targetIndex !== -1) setActiveIndex(targetIndex);
  };

  if (services.length === 0) return null;

  return (
    <section
      id="clinic-services"
      className="py-14 md:py-20 text-white relative overflow-hidden"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-4">
        <div className="relative h-225 w-full overflow-hidden rounded-2xl backdrop-blur-xl sm:h-212.5 lg:h-135">
          {/* Active Background Backdrop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="100vw"
              priority
              className="object-cover object-center brightness-[0.25] contrast-[1.05] transition-all duration-700 ease-out"
            />
          </div>

          <div className="relative z-10 h-full p-6 sm:p-10 lg:p-10">
            <div className="grid h-full min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* LEFT PART: Active Service Details */}
              <div className="min-w-0 flex flex-col justify-center lg:col-span-5">
                <div key={activeService.id} className="animate-fade-in">
                  <div className="h-1 w-10 bg-teal-400 rounded-full mb-3" />
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-teal-400 mb-2">
                    {activeService.subtitle}
                  </p>
                  <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {activeService.fullDesc}
                  </p>
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
                </div>
              </div>

              {/* RIGHT PART: Image Carousel Cards */}
              <div className="min-w-0 overflow-hidden lg:col-span-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Explore Services ({services.length})
                  </p>
                </div>

                <div
                  ref={carouselRef}
                  onScroll={updateScrollMetrics}
                  className="flex gap-4 overflow-x-auto px-2 py-2 scroll-smooth snap-x no-scrollbar scrollbar-hide focus:outline-none sm:gap-5"
                  tabIndex={0}
                  aria-label="Services carousel"
                >
                  {services.map((service) => (
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
                      className="group relative h-60 sm:h-70 w-52.5 sm:w-60 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-0.5 snap-start focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      <div className="absolute top-3 left-3 rounded-md bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 backdrop-blur-md border border-white/10">
                        {service.tag}
                      </div>
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
                    id={`clinic-services-scrollbar-${clinic.slug}`}
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
