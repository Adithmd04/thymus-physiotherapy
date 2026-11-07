"use client";

import { MapPin, Building2, Globe2 } from "lucide-react";
import { getProvidersForService } from "@/data/bookingProviders";
import { useBooking } from "./BookingContext";

export default function ProviderStep() {
  const { state, selectProvider, goBack } = useBooking();

  const providers = state.service
    ? getProvidersForService(state.service.id)
    : [];

  const thymusProviders = providers.filter((p) => p.type === "thymus");
  const externalProviders = providers.filter((p) => p.type === "external");

  return (
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <button
          type="button"
          onClick={goBack}
          className="mb-3 text-xs font-semibold text-[#0d9488] hover:text-[#0f766e] transition-colors"
        >
          ← Back to services
        </button>
        <h3 className="text-lg font-bold text-[#0f172a] mb-1">
          Choose a provider
        </h3>
        <p className="text-sm text-[#64748b]">
          For:{" "}
          <span className="font-semibold text-[#0f172a]">
            {state.service?.title}
          </span>
        </p>
      </div>

      <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-6">
        {/* Thymus providers */}
        {thymusProviders.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={14} className="text-[#0d9488]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0d9488]">
                Thymus Health
              </p>
            </div>
            <div className="space-y-2">
              {thymusProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={() => selectProvider(provider)}
                  className="group flex w-full items-center gap-3 rounded-xl border border-[#0d9488]/20 bg-[#f0fdfa] p-4 text-left transition-all duration-200 hover:border-[#0d9488] hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f5] text-[#0d9488]">
                    <Building2 size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#0f172a]">
                      {provider.name}
                    </p>
                    {provider.address && (
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-[#64748b]">
                        <MapPin size={11} className="shrink-0" />
                        <span className="line-clamp-1">{provider.address}</span>
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-xl bg-[#0d9488] px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 group-hover:bg-[#0f766e]">
                    Select
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* External providers */}
        {externalProviders.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe2 size={14} className="text-[#64748b]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#64748b]">
                Other Providers
              </p>
            </div>
            <div className="space-y-2">
              {externalProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={() => selectProvider(provider)}
                  className="group flex w-full items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 text-left transition-all duration-200 hover:border-[#94a3b8] hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#64748b]">
                    <Globe2 size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#0f172a]">
                      {provider.name}
                    </p>
                    {provider.address && (
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-[#64748b]">
                        <MapPin size={11} className="shrink-0" />
                        <span className="line-clamp-1">{provider.address}</span>
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-xl border border-[#e2e8f0] bg-white px-3 py-1.5 text-xs font-semibold text-[#475569] transition-all duration-200 group-hover:border-[#94a3b8]">
                    Select
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {providers.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-sm text-[#94a3b8]">
              No providers available for this service at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
