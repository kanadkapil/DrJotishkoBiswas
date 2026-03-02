import React from "react";
import { ArrowRight, Leaf, Wind } from "lucide-react";
import heroImg from "../assets/Dr_Jotishko.webp";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 vector-pattern relative overflow-hidden bg-sand/30"
    >
      {/* Zen Organic Vector Shapes */}
      <div className="absolute top-40 right-[-2%] w-80 h-80 bg-sage-green zen-blob opacity-80 hidden lg:block -rotate-12"></div>
      <div className="absolute bottom-20 left-[-3%] w-64 h-64 bg-terracotta zen-blob opacity-60 hidden lg:block rotate-45"></div>

      {/* Floating Icons */}
      <div className="absolute top-[20%] left-[10%] text-black/10 hidden xl:block animate-bounce">
        <Leaf size={120} />
      </div>

      <div className="zen-container grid md:grid-cols-12 gap-16 items-center relative z-10">
        <div className="md:col-span-12 lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-sm font-black uppercase italic tracking-widest">
            <Wind size={18} className="text-sage-green" /> {data.specialization}
          </div>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] text-black uppercase tracking-tighter">
            Dr. Jotishko <br />
            <span className="text-terracotta italic underline decoration-8 underline-offset-4 decoration-black">
              Biswas
            </span>{" "}
          </h1>

          <p className="text-2xl md:text-3xl text-black font-black max-w-2xl leading-tight border-l-[12px] border-terracotta pl-8 bg-white/50 py-4">
            {data.education[3].split(". ")[0]}. Zen protocols, bold recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 pt-6">
            <a
              href="#contact"
              className="vector-button flex items-center justify-center gap-3 text-2xl group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              BOOK SESSION{" "}
              <ArrowRight
                size={28}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="px-10 py-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(134,167,137,1)] text-black font-black uppercase text-xl transition-all hover:bg-sage-green hover:text-white text-center italic"
            >
              THE PATH
            </a>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Background Organic Shape */}
            <div className="absolute -inset-10 bg-sage-green/20 zen-blob -z-10 rotate-12 scale-110"></div>

            <div className="relative border-8 border-black p-6 bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rotate-2 overflow-hidden">
              <img
                src={heroImg}
                alt={data.name}
                className="w-full aspect-[4/5] object-cover border-4 border-black grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
