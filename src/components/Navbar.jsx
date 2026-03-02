import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 border-b-2 border-black ${isScrolled ? "bg-primary-green py-2" : "bg-white py-4"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter text-black uppercase italic"
        >
          Dr. Jotishko <span className="text-white bg-black px-2">Biswas</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black text-black hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-black text-white font-bold uppercase text-xs border-2 border-black hover:bg-white hover:text-black transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-1 border-2 border-black bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black py-8 px-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-2xl font-black text-black hover:bg-primary-green p-2 border-2 border-transparent hover:border-black transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center py-4 bg-black text-white font-bold uppercase text-xl border-2 border-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
