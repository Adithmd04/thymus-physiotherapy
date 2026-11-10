import Image from "next/image";
import { Clock, Globe, Mail, MapPin, PhoneCall } from "lucide-react";
import { InstagramIcon } from "@/icons";
import { CLINICS } from "@/data/clinics";
import { getClinicsForService, getPublicServices } from "@/lib/clinics";
import { ORG_EMAIL, ORG_WEBSITE } from "@/constants";

const SOCIAL_LINKS = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/thymus_physiotherapy/",
  },
  { icon: Globe, label: "Website", href: ORG_WEBSITE },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/#about-us" },
  { label: "Services", href: "/#services" },
];

// Each service links to a clinic that offers it, or to the services section if none does.
const SERVICE_LINKS = getPublicServices().map((service) => {
  const clinic = getClinicsForService(service.id)[0];
  return {
    label: service.title,
    href: clinic ? `/clinics/${clinic.slug}` : "/#services",
  };
});

function FooterLinkList({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
        {heading}
      </h4>
      <ul className="flex list-none flex-col gap-2 p-0">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[0.83rem] transition-colors duration-200 hover:text-[#14b8a6]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] pt-18 text-[rgba(255,255,255,0.7)]">
      <div className="mx-auto w-full max-w-300 px-6">
        <div className="grid grid-cols-1 gap-10 pb-12 min-[561px]:grid-cols-2 min-[901px]:grid-cols-[1.5fr_1fr_1fr_1.2fr_1.3fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/images/thymus_health_noBg_logo.png"
                alt="Thymus Health"
                width={160}
                height={90}
                className="h-9 w-auto object-contain"
              />
              <div>
                <div className="text-base font-extrabold text-white">
                  Thymus
                </div>
                <div className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#14b8a6]">
                  Health
                </div>
              </div>
            </div>

            <p className="mb-5 text-[0.83rem] leading-[1.7]">
              Helping you move better, feel better, and live better.
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] transition-colors duration-200 hover:bg-[#0d9488] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkList heading="Quick Links" links={QUICK_LINKS} />
          <FooterLinkList heading="Our Services" links={SERVICE_LINKS} />

          {/* Contact details */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-white">
              Contact Us
            </h4>

            <div className="flex flex-col gap-4 text-[0.83rem]">
              <div className="flex items-center gap-2">
                <span className="shrink-0 text-[#14b8a6]">
                  <Mail size={16} />
                </span>
                <a
                  href={`mailto:${ORG_EMAIL}`}
                  className="transition-colors duration-200 hover:text-[#14b8a6]"
                >
                  {ORG_EMAIL}
                </a>
              </div>

              {CLINICS.map((clinic) => (
                <div
                  key={clinic.id}
                  className="flex flex-col gap-2 border-t border-[rgba(255,255,255,0.08)] pt-3"
                >
                  <p className="font-bold text-white">{clinic.name}</p>

                  {clinic.address && (
                    <div className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                        <MapPin size={16} />
                      </span>
                      <span>{clinic.address}</span>
                    </div>
                  )}

                  {clinic.phone && (
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-[#14b8a6]">
                        <PhoneCall size={16} />
                      </span>
                      <a
                        href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                        className="transition-colors duration-200 hover:text-[#14b8a6]"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  )}

                  {clinic.workingHours?.map((item) => (
                    <div key={item.days} className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-[#14b8a6]">
                        <Clock size={16} />
                      </span>
                      <span>
                        {item.days} {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(255,255,255,0.08)] py-5 text-[0.78rem]">
          <span>
            © {new Date().getFullYear()} Thymus Health. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
