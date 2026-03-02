import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Flower2,
  Heart,
  Wind,
} from "lucide-react";

const ContactSection = ({ data }) => {
  return (
    <section
      id="contact"
      className="py-32 bg-sand/20 border-t-8 border-black relative overflow-hidden"
    >
      {/* Organic Decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-sage-green/10 zen-blob -z-10 rotate-45"></div>

      <div className="zen-container">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-[0.3em] italic">
                FREQUENCY
              </h2>
              <h3 className="text-7xl md:text-9xl font-black text-black uppercase leading-[0.75] tracking-tighter">
                SIGNAL <br />{" "}
                <span className="bg-terracotta text-white px-8 border-8 border-black inline-block -rotate-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  DIRECTLY
                </span>
              </h3>
              <p className="text-4xl font-black text-black pt-8 uppercase leading-none italic border-l-[16px] border-black pl-8">
                ZERO NOISE. <br /> PURE HEALING.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-8 p-8 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(134,167,137,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-black border-4 border-black flex items-center justify-center text-primary-green group-hover:bg-terracotta group-hover:text-white transition-all">
                  <Phone size={40} />
                </div>
                <div>
                  <p className="text-sm font-black text-black/40 uppercase tracking-[0.2em] mb-1">
                    VOCAL LINE
                  </p>
                  <p className="text-3xl font-black text-black tracking-tighter">
                    {data.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 p-8 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(210,121,126,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-black border-4 border-black flex items-center justify-center text-sage-green group-hover:bg-terracotta group-hover:text-white transition-all">
                  <Mail size={40} />
                </div>
                <div>
                  <p className="text-sm font-black text-black/40 uppercase tracking-[0.2em] mb-1">
                    DIGITAL PULSE
                  </p>
                  <p className="text-3xl font-black text-black tracking-tighter">
                    {data.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 p-8 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-black border-4 border-black flex items-center justify-center text-white group-hover:bg-terracotta transition-all">
                  <MapPin size={40} />
                </div>
                <div>
                  <p className="text-sm font-black text-black/40 uppercase tracking-[0.2em] mb-1">
                    SANCTUARY BASE
                  </p>
                  <p className="text-2xl font-black text-black leading-none uppercase italic">
                    {data.contact.location.split(". ")[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-8 pt-12">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-20 h-20 border-4 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <Icon size={32} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-16 border-8 border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] rotate-1 relative">
            <div className="absolute -top-10 right-10 bg-sage-green border-4 border-black p-4 inline-flex items-center gap-2 font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-4">
              <Flower2 size={24} /> ZEN FORM
            </div>
            <form className="space-y-10 pt-8">
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-sm font-black text-black uppercase tracking-[0.3em] flex items-center gap-2 italic">
                    <Heart size={14} className="text-terracotta" /> IDENTITY
                  </label>
                  <input
                    type="text"
                    placeholder="YOUR FULL NAME"
                    className="w-full p-5 border-4 border-black focus:bg-sand outline-none font-black uppercase text-xl placeholder:text-black/20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-black uppercase tracking-[0.3em] flex items-center gap-2 italic">
                    <Wind size={14} className="text-sage-green" /> FREQUENCY
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL@RECOVERY.COM"
                    className="w-full p-5 border-4 border-black focus:bg-sand outline-none font-black uppercase text-xl placeholder:text-black/20"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-black uppercase tracking-[0.3em] italic">
                  MODALITY REQUIRED
                </label>
                <select className="w-full p-5 border-4 border-black focus:bg-terracotta focus:text-white outline-none font-black uppercase text-xl appearance-none cursor-pointer">
                  <option>Physiotherapy Session</option>
                  <option>Yoga & Meditation</option>
                  <option>Stress Management</option>
                  <option>Home Visit Request</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-black uppercase tracking-[0.3em] italic">
                  THE MANIFESTATION (MESSAGE)
                </label>
                <textarea
                  className="w-full p-5 border-4 border-black h-48 focus:bg-white outline-none font-black uppercase text-xl placeholder:text-black/20"
                  placeholder="WHAT NEEDS RESTORATION?"
                ></textarea>
              </div>
              <button className="w-full p-8 bg-black text-white font-black uppercase text-3xl border-4 border-black hover:bg-sage-green hover:text-black transition-all active:translate-x-2 active:translate-y-2 shadow-[12px_12px_0px_0px_rgba(210,121,126,1)] active:shadow-none flex items-center justify-center gap-6 italic tracking-tighter">
                INITIATE HEALING <Send size={32} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
