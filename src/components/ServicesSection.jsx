import React from "react";
import {
  Activity,
  Wind,
  Heart,
  Sparkles,
  Brain,
  Footprints,
  Flame,
  Flower2,
} from "lucide-react";

const ServicesSection = ({ data }) => {
  const iconMap = {
    Physiotherapy: <Activity size={40} />,
    "Stress Management": <Brain size={40} />,
    "Yoga Therapy": <Flower2 size={40} />,
    "Breathing Techniques": <Wind size={40} />,
    Meditation: <Sparkles size={40} />,
    Ayurveda: <Flame size={40} />,
    Reflexology: <Footprints size={40} />,
  };

  const colors = [
    { bg: "bg-sage-green", shadow: "rgba(0,0,0,1)" },
    { bg: "bg-terracotta", shadow: "rgba(0,0,0,1)" },
    { bg: "bg-black", shadow: "rgba(134,167,137,1)", text: "text-white" },
    { bg: "bg-white", shadow: "rgba(210,121,126,1)" },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-[-10%] w-[40rem] h-[40rem] bg-sand/20 zen-blob -z-10 rotate-12"></div>

      <div className="zen-container">
        <div className="mb-24 space-y-6">
          <h2 className="text-2xl font-black text-black uppercase tracking-[0.3em] italic">
            MODALITIES
          </h2>
          <h3 className="text-7xl md:text-9xl font-black text-black uppercase leading-[0.8] tracking-tighter">
            HEALING <br />{" "}
            <span className="bg-terracotta text-white px-6 border-8 border-black inline-block -rotate-1">
              PROTOCOLS
            </span>
          </h3>
          <p className="text-3xl font-black text-black max-w-3xl pt-8 leading-none uppercase italic border-b-8 border-black pb-4">
            High performance meet deep zen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.services.map((service, index) => {
            const config = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`border-4 border-black p-10 group transition-all duration-300 relative overflow-hidden ${config.bg} ${config.text || "text-black"}`}
                style={{ boxShadow: `10px 10px 0px 0px ${config.shadow}` }}
              >
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-10 transform group-hover:rotate-[360deg] transition-transform duration-700 text-black">
                  {iconMap[service] || <Activity size={40} />}
                </div>
                <h4 className="text-3xl font-black uppercase leading-none tracking-tighter mb-4">
                  {service}
                </h4>
                <p className="text-sm font-black uppercase tracking-widest opacity-60 leading-tight">
                  Vectorized {service.toLowerCase()} sessions for the bold mind.
                </p>
                <div className="absolute bottom-4 right-4 text-black/5 group-hover:text-black/20 transition-colors">
                  <Flower2 size={64} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-sand border-8 border-black p-16 shadow-[24px_24px_0px_0px_rgba(134,167,137,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 px-8 py-3 bg-black text-terracotta font-black uppercase text-2xl -rotate-6 translate-x-4 border-2 border-sand">
            VIP ACCESS
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h4 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                AT-HOME <br /> LIBERATION
              </h4>
              <p className="text-2xl font-black text-black/60 italic uppercase leading-tight max-w-2xl border-l-8 border-black pl-8">
                Direct expert intervention in your sanctuary. Dhaka-wide
                logistics, zero friction, maximum peace.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right space-y-4">
              <div className="p-8 bg-black text-white border-4 border-black rotate-2 shadow-[8px_8px_0px_0px_rgba(210,121,126,1)]">
                <p className="text-xl font-black uppercase tracking-widest opacity-60">
                  FEE / SESSION
                </p>
                <p className="text-7xl font-black text-sage-green leading-none">
                  {data.consultationFee.split(" ")[1]}
                </p>
                <p className="text-xs font-black uppercase tracking-[0.4em] mt-4">
                  ZEN CURRENCY BDT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
