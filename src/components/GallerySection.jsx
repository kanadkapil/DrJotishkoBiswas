import React from "react";

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
    <section id="gallery" className="py-24 vector-pattern">
      <div className="container mx-auto px-6">
        <div className="mb-20 space-y-4">
          <h2 className="text-xl font-black text-black uppercase tracking-[0.2em] italic">
            EVIDENCE
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter">
            ACTION <br />{" "}
            <span className="bg-secondary-blue text-white px-4 border-4 border-black inline-block rotate-1">
              CLIPS
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-4 group overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className="h-64 overflow-hidden border-2 border-black mb-4">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="font-black uppercase text-xl text-black italic leading-none">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
