import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Treatments from "@/components/Treatments";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(135deg,#f0fdfa_0%,#e0f2f1_30%,#f8fafc_100%)]">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Treatments />
      <Testimonials />
      <Contact />
    </main>
  );
}
