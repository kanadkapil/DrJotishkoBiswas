import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";

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
      className="py-24 bg-white border-y-4 border-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left mb-20 space-y-4">
          <h2 className="text-xl font-black text-black uppercase tracking-[0.2em] italic">
            INTEL
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter">
            PATIENT <br />{" "}
            <span className="bg-black text-white px-4 border-4 border-black inline-block -rotate-1">
              FEEDBACK
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-black p-10 relative shadow-[12px_12px_0px_0px_rgba(74,222,128,1)] hover:shadow-[16px_16px_0px_0px_rgba(74,222,128,1)] transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 p-4 bg-black text-white border-br-4 border-black">
                <MessageSquareQuote size={32} />
              </div>
              <div className="flex space-x-1 mt-8 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary-green text-black"
                  />
                ))}
              </div>
              <p className="text-black font-bold text-xl leading-snug mb-8 uppercase tracking-tight italic">
                "{t.text}"
              </p>
              <div className="pt-6 border-t-4 border-black border-dashed">
                <p className="font-black text-2xl uppercase text-black leading-none">
                  {t.name}
                </p>
                <p className="text-sm font-black text-black/50 uppercase tracking-widest mt-1 italic">
                  {t.role}
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
