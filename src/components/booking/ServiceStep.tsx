"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { ALL_SERVICES } from "@/data/services";
import { isClinicOperational } from "@/data/clinics";
import { useBooking } from "./BookingContext";

export default function ServiceStep() {
  const { state, selectService } = useBooking();
  const [search, setSearch] = useState("");

  const baseServices = state.clinicSlug
    ? ALL_SERVICES.filter((s) => s.clinicSlug === state.clinicSlug)
    : ALL_SERVICES.filter((s) => isClinicOperational(s.clinicSlug));

  const filtered = baseServices.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.tag.toLowerCase().includes(search.toLowerCase()),
  );

  // Group by clinic slug
  const grouped = filtered.reduce<Record<string, typeof filtered>>(
    (acc, service) => {
      const key = service.clinicSlug || "other";
      if (!acc[key]) acc[key] = [];
      acc[key].push(service);
      return acc;
    },
    {},
  );

  const groupLabels: Record<string, string> = {
    physiotherapy: "Physiotherapy",
    dental: "Dental",
    "pregnancy-care": "Pregnancy Care",
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[#0f172a] mb-1">
          What service are you looking for?
        </h3>
        <p className="text-sm text-[#64748b]">
          {state.clinicSlug
            ? `Select a service from ${groupLabels[state.clinicSlug] || state.clinicSlug}`
            : "Select the type of care you need"}
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] py-2.5 pl-9 pr-4 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors focus:border-[#0d9488] focus:bg-white"
        />
      </div>

      {/* Service list */}
      <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-5">
        {Object.entries(grouped).map(([slug, services]) => (
          <div key={slug}>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488] mb-2">
              {groupLabels[slug] || slug}
            </p>
            <div className="space-y-2">
              {services.map((service) => {
                const isSelected = state.service?.id === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => selectService(service)}
                    className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 hover:border-[#0d9488] hover:bg-[#f0fdfa] hover:shadow-sm ${
                      isSelected
                        ? "border-[#0d9488] bg-[#f0fdfa] ring-1 ring-[#0d9488]"
                        : "border-[#e2e8f0] bg-white"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-semibold transition-colors ${
                          isSelected
                            ? "text-[#0d9488]"
                            : "text-[#0f172a] group-hover:text-[#0d9488]"
                        }`}
                      >
                        {service.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#64748b] line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#e8f7f5] px-2 py-0.5 text-[10px] font-bold text-[#0d9488]">
                      {service.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-[#94a3b8]">
            No services found matching &ldquo;{search}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
