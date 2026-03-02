import React from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/Dr_Jotishko.webp";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 vector-pattern relative overflow-hidden"
    >
      {/* Decorative Vector Shapes */}
      <div className="absolute top-20 right-[-5%] w-64 h-64 bg-secondary-blue border-4 border-black rounded-full -rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-10 left-[-5%] w-48 h-48 bg-accent-yellow border-4 border-black rotate-12 hidden lg:block"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-block px-4 py-2 bg-accent-yellow border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-black uppercase tracking-[0.2em]">
            {data.specialization}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-black uppercase tracking-tighter">
            MOVE <br />{" "}
            <span className="text-white bg-primary-green px-4 inline-block transform -rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              BETTER.
            </span>{" "}
            <br /> FEEL BOLDER.
          </h1>
          <p className="text-xl md:text-2xl text-black font-bold max-w-xl leading-snug border-l-8 border-black pl-6">
            {data.education[3].split(". ")[0]}. Expert neuro-rehab and stress
            management for the modern life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a
              href="#contact"
              className="vector-button text-center flex items-center justify-center gap-2 text-xl"
            >
              Book a Session <ArrowRight size={24} />
            </a>
            <a
              href="#services"
              className="px-8 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold uppercase transition-all hover:bg-secondary-blue text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative border-4 border-black p-4 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3">
            <img
              src={heroImg}
              alt={data.name}
              className="w-full aspect-square object-cover border-2 border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
