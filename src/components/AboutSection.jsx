import React from "react";
import { Award, BookOpen, Sparkles, Flower2 } from "lucide-react";
import aboutImg from "../assets/Dr_Jotishko2.webp";
import cvFile from "../assets/dr_JotishkoCV.pdf";

const AboutSection = ({ data }) => {
  return (
    <section
      id="about"
      className="py-32 bg-sand/10 border-y-8 border-black relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-terracotta/10 zen-blob -z-10"></div>

      <div className="zen-container grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="border-8 border-black p-6 bg-white shadow-[24px_24px_0px_0px_rgba(210,121,126,1)] -rotate-2 relative z-10">
            <img
              src={aboutImg}
              alt="Dr. Jotishko Biswas"
              className="w-full h-full object-cover aspect-4/5 border-4 border-black"
            />
          </div>

          <div className="absolute -top-12 -left-12 bg-black text-white p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(134,167,137,1)] rotate-6 z-20">
            <p className="text-6xl font-black leading-none italic">12+</p>
            <p className="text-sm font-black uppercase tracking-[0.3em] mt-2">
              YEARS OF ENERGY
            </p>
          </div>

          <div className="absolute -bottom-16 -right-10 bg-sage-green text-black p-4 border-4 border-black rounded-full w-32 h-32 flex items-center justify-center animate-spin-slow">
            <Flower2 size={64} strokeWidth={2} />
          </div>
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-black text-black uppercase tracking-[0.2em] italic">
              <Sparkles className="text-terracotta" /> THE ESSENCE
            </h2>
            <h3 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter">
              BEYOND <br />{" "}
              <span className="bg-sage-green text-white px-4 border-4 border-black inline-block transform rotate-2">
                RECOVERY
              </span>
            </h3>
          </div>

          <div className="space-y-8 text-black font-black text-xl leading-tight italic uppercase">
            <p className="bg-white p-10 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">
              <span className="absolute -top-4 -right-4 bg-terracotta text-white px-3 py-1 border-2 border-black text-xs not-italic">
                THE STORY
              </span>
              {data.education[1]}
            </p>
            <p className="bg-black text-white p-10 border-l-[16px] border-terracotta">
              " {data.education[3].split(". ").slice(1).join(". ")} "
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 pt-6">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="vector-button bg-black text-white hover:bg-terracotta flex items-center justify-center text-xl shadow-[8px_8px_0px_0px_rgba(134,167,137,1)]"
            >
              <BookOpen className="mr-3" /> FULL DOSSIER (CV)
            </a>
            <div className="flex items-center gap-6 bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 rounded-full border-4 border-black bg-terracotta flex items-center justify-center text-white font-black text-lg">
                  PU
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-black bg-sage-green flex items-center justify-center text-black font-black text-lg">
                  DU
                </div>
              </div>
              <p className="font-black text-sm uppercase tracking-widest text-black/40 italic">
                Global Accreditation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
