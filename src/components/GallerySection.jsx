import React from "react";
import { Camera, Flower2, Sparkles, Wind } from "lucide-react";

const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      title: "Yoga & Mindfulness",
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800",
      title: "Clinical Physiotherapy",
    },
    {
      url: "https://images.unsplash.com/photo-1599447421416-3414502d182c?auto=format&fit=crop&q=80&w=800",
      title: "Neurological Rehab",
    },
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      title: "Stress Relief",
    },
    {
      url: "https://images.unsplash.com/photo-1518413157833-2884a44f9ae7?auto=format&fit=crop&q=80&w=800",
      title: "Holistic Healing",
    },
    {
      url: "https://images.unsplash.com/photo-1591343395902-1adcb454c2a4?auto=format&fit=crop&q=80&w=800",
      title: "Wellness Sessions",
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-sand/10 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute bottom-[-5%] left-[-2%] w-96 h-96 bg-terracotta/10 zen-blob -z-10 rotate-12"></div>

      <div className="zen-container">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-black uppercase tracking-[0.3em] italic">
              VANTAGE
            </h2>
            <h3 className="text-7xl md:text-9xl font-black text-black uppercase leading-[0.8] tracking-tighter">
              VISUAL <br />{" "}
              <span className="bg-sage-green text-white px-6 border-8 border-black inline-block rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                JOURNEY
              </span>
            </h3>
          </div>
          <p className="text-2xl font-black text-black/40 uppercase italic max-w-xs md:text-right flex items-center gap-4">
            <Camera size={32} /> RAW EVIDENCE OF RESTORATION.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 group overflow-hidden hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-500 relative"
            >
              <div className="absolute top-8 right-8 bg-terracotta text-white p-2 border-2 border-black z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles size={20} />
              </div>
              <div className="h-80 overflow-hidden border-4 border-black mb-6 relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <p className="font-black uppercase text-3xl text-black italic leading-none flex items-center gap-3">
                <div className="w-3 h-3 bg-sage-green rotate-45"></div>{" "}
                {img.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <div className="p-10 border-4 border-black border-dashed rounded-[4rem] flex items-center gap-8 text-black/20 animate-pulse">
            <Flower2 size={48} />
            <Wind size={48} />
            <Flower2 size={48} />
            <Wind size={48} />
            <Flower2 size={48} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
