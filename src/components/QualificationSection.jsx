import React from "react";
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  Leaf,
  Move,
  Heart,
} from "lucide-react";

const QualificationSection = ({ data }) => {
  return (
    <section id="path" className="py-32 bg-white relative overflow-hidden">
      {/* Background Vector Art */}
      <div className="absolute top-[10%] right-[2%] text-sand/50 -rotate-12 select-none pointer-events-none">
        <Leaf size={400} />
      </div>

      <div className="zen-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-[0.3em] italic">
                LINEAGE
              </h2>
              <h3 className="text-7xl md:text-9xl font-black text-black uppercase leading-[0.75] tracking-tighter">
                QUALIFIED <br />{" "}
                <span className="bg-sage-green text-white px-6 border-8 border-black inline-block rotate-1">
                  CLINICIAN
                </span>
              </h3>
            </div>

            <div className="space-y-6">
              {data.education[0].split(". ").map(
                (item, idx) =>
                  item && (
                    <div
                      key={idx}
                      className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex gap-8 items-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                    >
                      <div className="w-20 h-20 bg-sand border-4 border-black text-black flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:text-white transition-colors">
                        <GraduationCap size={40} />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-black uppercase leading-none mb-2 tracking-tighter italic">
                          {item.split("from")[0]}
                        </p>
                        <p className="text-sm font-black text-black/40 uppercase tracking-widest">
                          {item.includes("from")
                            ? `ORIGIN: ${item.split("from")[1]}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  ),
              )}
            </div>

            <div className="p-12 bg-black text-white border-8 border-black -rotate-1 space-y-8 shadow-[24px_24px_0px_0px_rgba(134,167,137,1)] relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 text-white/5">
                <MapPin size={200} />
              </div>
              <div className="flex items-center space-x-6 relative z-10">
                <div className="p-3 bg-terracotta text-white border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin size={32} />
                </div>
                <h4 className="font-black text-4xl uppercase italic tracking-tighter leading-none">
                  OPERATIONAL <br /> BASES
                </h4>
              </div>
              <p className="text-3xl font-black leading-[0.9] uppercase italic opacity-80 relative z-10 border-l-4 border-sage-green pl-6">
                {data.locations}
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="space-y-10">
              <h4 className="text-5xl font-black text-black uppercase italic border-b-[12px] border-terracotta pb-6 inline-block">
                THE MANIFESTO
              </h4>
              <div className="grid gap-8">
                {data.qualifications.slice(2, 4).map((para, idx) => (
                  <div
                    key={idx}
                    className="p-12 bg-sand/30 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group"
                  >
                    <div className="absolute -top-4 -left-4 px-6 py-2 bg-black text-white border-4 border-black font-black text-sm uppercase italic z-10">
                      VITAL RULE 0{idx + 1}
                    </div>
                    <div className="absolute top-4 right-4 text-black/10 group-hover:text-terracotta/20 transition-colors">
                      {idx === 0 ? <Move size={80} /> : <Heart size={80} />}
                    </div>
                    <p className="text-black font-black text-2xl leading-none uppercase tracking-tighter italic relative z-10">
                      "{para}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="p-12 bg-terracotta border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-20"></div>
                <p className="text-8xl font-black text-white leading-none mb-4 group-hover:scale-110 transition-transform">
                  100%
                </p>
                <p className="text-sm font-black text-black uppercase tracking-[0.5em] italic">
                  ZEN FOCUS
                </p>
              </div>
              <div className="p-12 bg-sage-green border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-black opacity-20"></div>
                <p className="text-8xl font-black text-black leading-none mb-4 group-hover:-rotate-3 transition-transform italic">
                  BOLD
                </p>
                <p className="text-sm font-black text-white uppercase tracking-[0.5em] italic">
                  EVIDENCE
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
