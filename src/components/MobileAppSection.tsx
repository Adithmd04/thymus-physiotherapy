import type { ReactNode } from "react";
import Image from "next/image";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/constants";
import AppleLogo from "@/icons/apple_logo.svg";
import PlaystoreLogo from "@/icons/playstore_logo.svg";

interface StoreButtonProps {
  href: string;
  eyebrow: string;
  label: string;
  icon: ReactNode;
}

function StoreButton({ href, eyebrow, label, icon }: StoreButtonProps) {
  const className =
    "inline-flex min-w-44 items-center gap-3 rounded-xl bg-[#0f172a] px-4 py-2.5 text-left text-white shadow-[0_4px_14px_rgba(15,23,42,0.18)] transition-all duration-200";

  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
          {eyebrow}
        </span>
        <span className="text-base font-bold">{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-label={`${label} — link coming soon`}
        className={`${className} cursor-not-allowed opacity-60`}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${eyebrow} ${label}`}
      className={`${className} hover:-translate-y-0.5 hover:bg-[#0f766e] hover:shadow-[0_8px_22px_rgba(13,148,136,0.3)]`}
    >
      {content}
    </a>
  );
}

export default function MobileAppSection() {
  const hasMissingLink = !PLAY_STORE_URL || !APP_STORE_URL;

  return (
    <section id="mobile-app" className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto w-full max-w-300 px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {/* Left — app information */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-[#0d9488]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
                Thymus Mobile App
              </p>
            </div>

            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#0f172a]">
              Thymus Health,
              <br />
              <span className="text-[#0d9488]">on your phone</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#64748b] md:text-base md:leading-7">
              The Thymus mobile app brings Thymus Health closer to you, making
              it simple to stay connected with our clinics from your phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <StoreButton
                href={PLAY_STORE_URL}
                eyebrow="Get it on"
                label="Google Play"
                icon={<PlaystoreLogo />}
              />
              <StoreButton
                href={APP_STORE_URL}
                eyebrow="Download on the"
                label="App Store"
                icon={<AppleLogo />}
              />
            </div>

            {hasMissingLink && (
              <p className="mt-3 text-xs font-medium text-[#94a3b8]">
                Store links coming soon.
              </p>
            )}
          </div>

          {/* Right — branded app preview (illustrative, not a real screenshot) */}
          <figure className="relative mx-auto w-full max-w-65 md:max-w-70 lg:max-w-75">
            <div className="absolute -inset-4 rounded-[3rem] bg-linear-to-tr from-teal-500/20 via-cyan-400/10 to-transparent blur-xl" />

            <div
              role="img"
              aria-label="Illustrative preview of the Thymus mobile app showing the THYMUS logo on a phone screen"
              className="relative aspect-9/18.5 w-full rounded-[2.6rem] border-10 border-[#0f172a] bg-[#0f172a] shadow-[0_25px_60px_rgba(15,23,42,0.28)]"
            >
              {/* Side buttons */}
              <span className="absolute -left-3 top-24 h-8 w-0.75 rounded-l bg-[#0f172a]" />
              <span className="absolute -left-3 top-36 h-12 w-0.75 rounded-l bg-[#0f172a]" />
              <span className="absolute -right-3 top-32 h-16 w-0.75 rounded-r bg-[#0f172a]" />

              {/* Screen */}
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.9rem] bg-[linear-gradient(165deg,#0f172a_0%,#0f766e_100%)]">
                {/* Notch */}
                <span className="absolute left-1/2 top-2.5 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

                <Image
                  src="/images/thymus-favicon-512.png"
                  alt=""
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-20 w-20 object-contain"
                />

                <p className="mt-5 pl-[0.28em] text-[1.9rem] font-black tracking-[0.28em] text-white">
                  THYMUS
                </p>
                <p className="mt-1 pl-[0.3em] text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#14b8a6]">
                  Health
                </p>
                <p className="mt-6 px-6 text-center text-xs text-white/70">
                  Healthcare designed around you.
                </p>

                {/* Home indicator */}
                <span className="absolute bottom-2.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
