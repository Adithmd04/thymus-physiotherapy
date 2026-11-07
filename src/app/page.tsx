import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ClinicsOverview from "@/components/ClinicsOverview";
import About from "@/components/About";
import Services from "@/components/Services";
import Treatments from "@/components/Treatments";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(135deg,#f0fdfa_0%,#e0f2f1_30%,#f8fafc_100%)]">
      <Navbar />
      <Hero />
      <Features />
      <ClinicsOverview />
      <About />
      {/* <Services /> */}
      <Treatments />
      <Testimonials />
      <Contact />
    </main>
  );
}
