import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(135deg,#f0fdfa_0%,#e0f2f1_30%,#f8fafc_100%)]">
      {/* Background decorative glows */}
      {/* <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl" /> */}
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
