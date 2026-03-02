import React from "react";
import { Award, BookOpen } from "lucide-react";
import aboutImg from "../assets/Dr_Jotishko2.webp";
import cvFile from "../assets/dr_JotishkoCV.pdf";

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-white border-y-4 border-black">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="border-4 border-black p-4 bg-secondary-blue shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-3 overflow-hidden">
            <img
              src={aboutImg}
              alt="Dr. Jotishko Biswas"
              className="w-full h-full object-cover aspect-4/5 border-2 border-black filter contrast-125"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 bg-black text-white p-6 border-2 border-white shadow-[8px_8px_0px_0px_rgba(0,30,255,1)] rotate-6">
            <p className="text-4xl font-black leading-none">12+</p>
            <p className="text-xs font-black uppercase tracking-widest mt-1">
              Years of Impact
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-black text-black uppercase tracking-[0.2em]">
              The Professional
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-black uppercase leading-[0.9] italic">
              A Decade of <br />{" "}
              <span className="bg-accent-yellow px-2 border-2 border-black">
                Excellence
              </span>
            </h3>
          </div>

          <div className="space-y-6 text-black font-bold text-lg leading-tight">
            <p className="bg-primary-green/20 p-6 border-2 border-black border-dashed">
              {data.education[1]}
            </p>
            <p className="bg-secondary-blue/10 p-6 border-l-8 border-black">
              "{data.education[3].split(". ").slice(1).join(". ")}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="vector-button bg-black text-white hover:bg-white hover:text-black flex items-center justify-center"
            >
              <BookOpen className="mr-2" /> Download CV
            </a>
            <div className="flex items-center gap-4 bg-white border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-primary-green flex items-center justify-center text-black font-black text-xs">
                  PU
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-secondary-blue flex items-center justify-center text-black font-black text-xs">
                  DU
                </div>
              </div>
              <p className="font-black text-xs uppercase tracking-tighter italic">
                Certified Specialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
