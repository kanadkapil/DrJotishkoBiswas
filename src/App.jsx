import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import QualificationSection from "./components/QualificationSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import rawData from "./data/data.json";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Restructuring data for easier access
    if (rawData && rawData[0]) {
      const bio = rawData[0];
      setData({
        name: bio.name,
        title: bio.do,
        specialization: bio.specialization[0],
        education: bio.education,
        services: bio.sections["Services We Offer"][0].split(", "),
        qualifications: bio.sections["Qualifications & Training"],
        locations: bio.sections["Current Work Locations"][0],
        treatmentBenefits: bio.sections["Treatment Benefits"],
        consultationFee: bio.sections["Consultation Fee"][0],
        contact: {
          email: "jotishkob@gmail.com", // Placeholder if not in JSON
          phone: "+880 XXXXX-XXXXXX", // Placeholder
          location: bio.sections["Current Work Locations"][0],
        },
      });
    }
  }, []);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen bg-background-beige text-primary-green text-2xl font-bold">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-background-beige selection:bg-primary-green selection:text-white">
      <Navbar />
      <main>
        <Hero data={data} />
        <AboutSection data={data} />
        <ServicesSection data={data} />
        <QualificationSection data={data} />
        <TestimonialsSection data={data} />
        <GallerySection />
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}

export default App;
