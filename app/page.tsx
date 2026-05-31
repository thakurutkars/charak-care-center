import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import HealthInquiryForm from "@/components/HealthInquiryForm";
import Doctors from "@/components/Doctors";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4EC] text-gray-900">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Doctors />
      <WhyChoose />
      <Testimonials />
      <ContactCTA />
      <BookingForm />
      <HealthInquiryForm />
      <FAQ />
      <Footer />
    </main>
  );
}