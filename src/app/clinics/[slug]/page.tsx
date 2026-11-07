import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import ClinicHero from "@/components/clinic/ClinicHero";
import ClinicAbout from "@/components/clinic/ClinicAbout";
import ClinicServices from "@/components/clinic/ClinicServices";
import ClinicTreatments from "@/components/clinic/ClinicTreatments";
import ClinicContact from "@/components/clinic/ClinicContact";
import { getClinicBySlug, getAllClinicSlugs } from "@/data/clinics";

interface ClinicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClinicSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ClinicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    return {
      title: "Clinic Not Found | Thymus Health",
    };
  }

  return {
    title: clinic.metaTitle || `${clinic.name} | Thymus Health`,
    description: clinic.metaDescription || clinic.description,
  };
}

export default async function ClinicPage({ params }: ClinicPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#f0fdfa_0%,#e0f2f1_30%,#f8fafc_100%)]">
      <Navbar />
      <ClinicHero clinic={clinic} />
      <ClinicAbout clinic={clinic} />
      <ClinicServices clinic={clinic} />
      {clinic.treatments && clinic.treatments.length > 0 && (
        <ClinicTreatments clinic={clinic} />
      )}
      <ClinicContact clinic={clinic} />
    </main>
  );
}
