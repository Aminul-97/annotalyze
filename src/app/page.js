import VideoBanner from "./components/banner";
import ServicesSection from "./components/Services";
import ServicesSec from "./components/Service-section";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <VideoBanner />
      <ServicesSection />
      <ServicesSec />
      <ContactSection />
    </>
  );
}
