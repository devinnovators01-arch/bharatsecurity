import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientTestimonials from "@/components/BlogSection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSlider />
      <ServiceCards />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <ClientTestimonials />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
