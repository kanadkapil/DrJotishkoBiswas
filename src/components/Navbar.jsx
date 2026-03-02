import React, { useState, useEffect } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Practice", href: "#home" },
    { name: "Essence", href: "#about" },
    { name: "Healing", href: "#services" },
    { name: "Path", href: "#qualifications" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white border-b-2 border-black py-3 shadow-md" : "bg-transparent py-6"}`}
    >
      <div className="zen-container flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-3 text-2xl font-black tracking-tighter text-black uppercase italic group"
        >
          <div className="p-1 bg-sage-green border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
            <Flower2 size={24} />
          </div>
          <span>
            Dr. Jotishko{" "}
            <span className="text-white bg-black px-2 mx-1">Biswas</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black text-black hover:text-terracotta transition-colors uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-black text-white font-black uppercase text-xs border-2 border-black hover:bg-terracotta transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Book Vitality
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sand border-b-4 border-black py-12 px-8 space-y-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-3xl font-black text-black hover:bg-sage-green p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white transition-all italic uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center py-5 bg-black text-white font-black uppercase text-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(134,167,137,1)]"
            onClick={() => setIsMenuOpen(false)}
          >
            START HEALING
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
