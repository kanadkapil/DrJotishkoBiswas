import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const ContactSection = ({ data }) => {
  return (
    <section id="contact" className="py-24 bg-white border-t-4 border-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-black uppercase tracking-[0.2em] italic">
                CONNECT
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8] tracking-tighter">
                SAY <br />{" "}
                <span className="bg-primary-green px-4 border-4 border-black inline-block -rotate-2">
                  HELLO
                </span>
              </h3>
              <p className="text-2xl font-bold text-black pt-6 uppercase leading-none max-w-sm">
                NO BULL. JUST RESULTS. REACH OUT NOW.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-6 p-6 bg-secondary-blue border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center text-black">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-black/50 uppercase tracking-widest mb-1">
                    CALL LINE
                  </p>
                  <p className="text-2xl font-black text-black">
                    {data.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-accent-yellow border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center text-black">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-black/50 uppercase tracking-widest mb-1">
                    DIRECT MAIL
                  </p>
                  <p className="text-2xl font-black text-black">
                    {data.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-primary-green border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center text-black">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-black/50 uppercase tracking-widest mb-1">
                    CLINIC BASE
                  </p>
                  <p className="text-xl font-black text-black leading-none uppercase">
                    {data.contact.location.split(". ")[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-10">
              <a
                href="#"
                className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          <div className="bg-white p-12 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-black uppercase tracking-widest">
                    CALL SIGN (NAME)
                  </label>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full p-4 border-2 border-black focus:bg-accent-yellow outline-none font-bold uppercase"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-black uppercase tracking-widest">
                    WIFI ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL@HERE.COM"
                    className="w-full p-4 border-2 border-black focus:bg-secondary-blue outline-none font-bold uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-black uppercase tracking-widest">
                  SELECT MISSION
                </label>
                <select className="w-full p-4 border-2 border-black focus:bg-primary-green outline-none font-black uppercase">
                  <option>Physiotherapy Session</option>
                  <option>Yoga & Meditation</option>
                  <option>Stress Management</option>
                  <option>Home Visit Request</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-black uppercase tracking-widest">
                  INTEL (MESSAGE)
                </label>
                <textarea
                  className="w-full p-4 border-2 border-black h-40 focus:bg-white outline-none font-bold uppercase"
                  placeholder="WHAT'S THE SITUATION?"
                ></textarea>
              </div>
              <button className="w-full p-6 bg-black text-white font-black uppercase text-2xl border-4 border-black hover:bg-primary-green hover:text-black transition-all active:translate-x-1 active:translate-y-1 shadow-[8px_8px_0px_0px_rgba(74,222,128,1)] active:shadow-none flex items-center justify-center gap-4">
                EXECUTE SEND <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
