import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OnboardingForm from "@/components/OnboardingForm";
import LeadCapture from "@/components/LeadCapture";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Industries />
      <LeadCapture />
      <OnboardingForm />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
