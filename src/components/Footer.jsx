import React from "react";
import { Heart, Flower2, Sparkles } from "lucide-react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-black text-white py-32 border-t-[16px] border-terracotta relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-[-10%] right-[-5%] text-white/5 rotate-12 select-none pointer-events-none">
        <Flower2 size={500} />
      </div>

      <div className="zen-container relative z-10">
        <div className="grid md:grid-cols-12 gap-24 mb-24">
          <div className="md:col-span-12 lg:col-span-6 space-y-10">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              DR. JOTISHKO <br />{" "}
              <span className="text-sage-green underline decoration-8 underline-offset-8 decoration-white">
                BISWAS
              </span>
            </h3>
            <p className="text-white font-black text-2xl leading-tight uppercase italic opacity-80 border-l-[12px] border-terracotta pl-10 max-w-xl">
              Equilibrium reclaimed. Movement optimized. Bold healing for the
              modern human experience.
            </p>
            <div className="inline-flex items-center gap-4 bg-sage-green text-black px-8 py-4 border-4 border-white font-black uppercase italic -rotate-2 shadow-[8px_8px_0px_0px_rgba(210,121,126,1)]">
              HEAL • MOVE • BREATHE <Sparkles size={20} />
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3 space-y-10">
            <h4 className="text-3xl font-black uppercase tracking-tighter text-terracotta italic border-b-4 border-white inline-block pb-1">
              NAVIGATE
            </h4>
            <ul className="space-y-6 font-black uppercase text-lg tracking-widest italic">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-sage-green transition-colors flex items-center gap-4 group"
                  >
                    <div className="w-4 h-4 bg-terracotta border-2 border-white group-hover:rotate-45 transition-transform"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3 space-y-10">
            <h4 className="text-3xl font-black uppercase tracking-tighter text-sage-green italic border-b-4 border-white inline-block pb-1">
              PROTOCOL
            </h4>
            <ul className="space-y-6 font-black uppercase text-lg tracking-widest italic">
              <li>
                <a href="#" className="hover:text-terracotta transition-colors">
                  Privacy Intel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-terracotta transition-colors">
                  Path Terms
                </a>
              </li>
              <li className="text-white/30 not-italic tracking-[0.3em] text-xs">
                OFFICIAL BPA ACCREDITED
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t-4 border-white/10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <p className="font-black uppercase text-sm tracking-[0.5em] opacity-30 text-center lg:text-left">
            © {new Date().getFullYear()} DR. JOTISHKO BISWAS.{" "}
            <br className="md:hidden" /> DESIGNED BY ANTIGRAVITY FOR VITALITY.
          </p>
          <div className="flex items-center space-x-4 font-black uppercase text-sm italic bg-white text-black px-10 py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(134,167,137,1)]">
            <span>EXECUTED WITH</span>
            <Heart
              size={20}
              className="text-terracotta fill-terracotta animate-pulse"
            />
            <span>FOR THE HUMAN RACE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
