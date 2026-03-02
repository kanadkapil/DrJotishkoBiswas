import React from "react";
import { Heart } from "lucide-react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-black text-white py-24 border-t-8 border-primary-green">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-6 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter uppercase italic">
              Dr. Jotishko{" "}
              <span className="text-primary-green underline decoration-4 underline-offset-8">
                Biswas
              </span>
            </h3>
            <p className="text-white font-bold text-xl leading-tight uppercase opacity-70 border-l-4 border-secondary-blue pl-6">
              Bold healing. No compromises. Reclaiming your baseline through
              movement and grit.
            </p>
            <div className="inline-block bg-accent-yellow text-black px-6 py-2 border-2 border-white font-black uppercase italic -rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              Heal • Move • Breathe
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-2xl font-black uppercase tracking-tighter text-secondary-blue italic">
              LINKS
            </h4>
            <ul className="space-y-4 font-black uppercase text-sm tracking-widest">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary-green transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white"></div> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-green transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white"></div> About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-green transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white"></div> Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-green transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white"></div> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-2xl font-black uppercase tracking-tighter text-accent-yellow italic">
              INTEL
            </h4>
            <ul className="space-y-4 font-black uppercase text-sm tracking-widest">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-green transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-green transition-colors"
                >
                  Terms
                </a>
              </li>
              <li className="text-white/40 italic">BPA REGISTERED</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-black uppercase text-xs tracking-[0.3em] opacity-40">
            © {new Date().getFullYear()} Dr. Jotishko Biswas. SITE BY
            ANTIGRAVITY.
          </p>
          <div className="flex items-center space-x-2 font-black uppercase text-xs italic bg-white text-black px-4 py-2 border-2 border-black">
            <span>BUILT WITH</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>FOR THE BOLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
