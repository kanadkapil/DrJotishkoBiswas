import React from "react";
import { Star, MessageSquareQuote, Flower2, Heart } from "lucide-react";

const TestimonialsSection = ({ data }) => {
  const testimonials = [
    {
      name: "Ahmed Karim",
      role: "Post-Surgery Patient",
      text: "Dr. Jotishko's patience and expertise helped me walk again after a major accident. His holistic approach made all the difference.",
      stars: 5,
    },
    {
      name: "Sumiya Rahman",
      role: "Corporate Professional",
      text: "The stress management sessions were life-changing. I've learned breathing techniques that I use daily at my high-pressure job.",
      stars: 5,
    },
    {
      name: "Mustafa Kamal",
      role: "Yoga Student",
      text: "A true master of his craft. The blend of physiotherapy and yoga therapy is exactly what my chronic back pain needed.",
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-32 bg-white border-y-8 border-black relative overflow-hidden"
    >
      {/* Organic Decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-sage-green/5 zen-blob -z-10 -rotate-12"></div>

      <div className="zen-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-black uppercase tracking-[0.3em] italic">
              RESONANCE
            </h2>
            <h3 className="text-7xl md:text-9xl font-black text-black uppercase leading-[0.8] tracking-tighter">
              HUMAN <br />{" "}
              <span className="bg-black text-white px-8 border-8 border-black inline-block -rotate-1 shadow-[12px_12px_0px_0px_rgba(210,121,126,1)]">
                SUCCESS
              </span>
            </h3>
          </div>
          <div className="p-8 bg-sand border-4 border-black rotate-2 hidden lg:block">
            <p className="text-xl font-black uppercase italic leading-none">
              Voices of <br /> restoration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-8 border-black p-12 relative shadow-[16px_16px_0px_0px_rgba(134,167,137,1)] hover:shadow-[20px_20px_0px_0px_rgba(134,167,137,1)] transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 p-6 bg-black text-white border-br-8 border-black group-hover:bg-terracotta transition-colors">
                <MessageSquareQuote size={40} />
              </div>

              <div className="flex space-x-2 mt-12 mb-10">
                {[...Array(t.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-terracotta text-black"
                  />
                ))}
              </div>

              <p className="text-black font-black text-2xl leading-tight mb-12 uppercase tracking-tighter italic border-l-8 border-sand pl-8">
                "{t.text}"
              </p>

              <div className="pt-10 border-t-8 border-black border-dashed relative">
                <div className="absolute -top-6 right-0 text-black/10">
                  <Flower2 size={48} />
                </div>
                <p className="font-black text-3xl uppercase text-black leading-none tracking-tighter">
                  {t.name}
                </p>
                <p className="text-sm font-black text-terracotta uppercase tracking-[0.3em] mt-3 italic flex items-center gap-2">
                  <Heart size={14} className="fill-current" /> {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
