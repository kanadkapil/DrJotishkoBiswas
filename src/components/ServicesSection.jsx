import React from "react";
import {
  Activity,
  Wind,
  Heart,
  Sparkles,
  Brain,
  Footprints,
} from "lucide-react";

const ServicesSection = ({ data }) => {
  const iconMap = {
    Physiotherapy: <Activity size={32} />,
    "Stress Management": <Brain size={32} />,
    "Yoga Therapy": <Wind size={32} />,
    "Breathing Techniques": <Wind size={32} />,
    Meditation: <Sparkles size={32} />,
    Ayurveda: <Heart size={32} />,
    Reflexology: <Footprints size={32} />,
  };

  const bgColors = [
    "bg-primary-green",
    "bg-secondary-blue",
    "bg-accent-yellow",
    "bg-white",
  ];

  return (
    <section
      id="services"
      className="py-24 vector-pattern border-b-4 border-black"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 space-y-4">
          <h2 className="text-xl font-black text-black uppercase tracking-[0.2em] italic">
            WHAT WE DO
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter">
            CORE <br />{" "}
            <span className="bg-black text-white px-4">SERVICES</span>
          </h3>
          <p className="text-2xl font-bold text-black max-w-2xl pt-6">
            Blending modern physical therapy with bold traditional healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.services.map((service, index) => (
            <div
              key={index}
              className={`vector-card p-8 group ${bgColors[index % bgColors.length]}`}
            >
              <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform">
                {iconMap[service] || <Activity size={32} />}
              </div>
              <h4 className="text-2xl font-black text-black mb-4 uppercase leading-none tracking-tight">
                {service}
              </h4>
              <p className="text-sm font-bold text-black leading-tight opacity-70">
                Bold {service.toLowerCase()} protocols for maximum impact and
                recovery.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black text-white p-12 border-4 border-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 bg-primary-green text-black font-black uppercase text-xl translate-x-4 -rotate-12 border-2 border-black">
            URGENT CARE
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-5xl font-black uppercase leading-none">
                Home Service
              </h4>
              <p className="text-xl font-bold opacity-80 max-w-xl italic">
                Professional care delivered to your doorstep. We cover the
                entire Dhaka metropolitan area with zero compromises.
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-2xl font-bold mb-2 uppercase opacity-60">
                Consultation Fee
              </p>
              <p className="text-7xl font-black text-primary-green leading-none">
                {data.consultationFee.split(" ")[1]}
              </p>
              <p className="text-xl font-black uppercase mt-2 tracking-widest text-secondary-blue">
                PER BOLD SESSION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
