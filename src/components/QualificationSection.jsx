import React from "react";
import { GraduationCap, MapPin, CheckCircle2 } from "lucide-react";

const QualificationSection = ({ data }) => {
  return (
    <section
      id="qualifications"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-black uppercase tracking-[0.2em] italic">
                PORTFOLIO
              </h2>
              <h3 className="text-6xl font-black text-black uppercase leading-[0.8]">
                DEGREES & <br />{" "}
                <span className="bg-secondary-blue px-2 border-4 border-black">
                  STRIKES
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              {data.education[0].split(". ").map(
                (item, idx) =>
                  item && (
                    <div
                      key={idx}
                      className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-6 items-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                      <div className="w-16 h-16 bg-primary-green border-2 border-black text-black flex items-center justify-center shrink-0">
                        <GraduationCap size={32} />
                      </div>
                      <div>
                        <p className="text-xl font-black text-black uppercase leading-none mb-1">
                          {item.split("from")[0]}
                        </p>
                        <p className="text-xs font-black text-black/50 uppercase tracking-widest">
                          {item.includes("from")
                            ? `FROM ${item.split("from")[1]}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  ),
              )}
            </div>

            <div className="p-10 bg-black text-white border-4 border-black rotate-1 space-y-6 shadow-[12px_12px_0px_0px_rgba(74,222,128,1)]">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-green text-black border-2 border-white">
                  <MapPin size={24} />
                </div>
                <h4 className="font-black text-2xl uppercase italic tracking-tighter">
                  Current Base
                </h4>
              </div>
              <p className="text-xl font-bold leading-tight uppercase opacity-80">
                {data.locations}
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-8">
              <h4 className="text-4xl font-black text-black uppercase italic border-b-8 border-black pb-4">
                PHILOSOPHY
              </h4>
              <div className="grid gap-4">
                {data.qualifications.slice(2, 4).map((para, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-background-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative"
                  >
                    <div className="absolute -top-3 -left-3 px-3 py-1 bg-accent-yellow border-2 border-black font-black text-xs uppercase italic">
                      CORE RULE {idx + 1}
                    </div>
                    <p className="text-black font-bold text-lg leading-snug uppercase tracking-tight italic">
                      "{para}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-primary-green border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <p className="text-7xl font-black text-black leading-none mb-2">
                  100%
                </p>
                <p className="text-xs font-black text-black uppercase tracking-[0.2em] transform -rotate-2">
                  PATIENT FOCUS
                </p>
              </div>
              <div className="p-10 bg-accent-yellow border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <p className="text-7xl font-black text-black leading-none mb-2">
                  BOLD
                </p>
                <p className="text-xs font-black text-black uppercase tracking-[0.2em] transform rotate-2">
                  EVIDENCE CARE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
