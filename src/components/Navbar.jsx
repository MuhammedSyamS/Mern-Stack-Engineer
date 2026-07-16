import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/80 backdrop-blur-xl py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-bold font-display"
        >
          Muhammed Syam
          <span className="text-brand-primary">.</span>
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-400 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Muhammed Syam S Resume.pdf"
            download="Muhammed_Syam_Resume.pdf"
            className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-5 py-2 text-sm font-semibold text-brand-primary transition-all hover:bg-brand-primary hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          aria-label="Toggle Navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-bg-card shadow-2xl overflow-hidden">

              <div className="flex flex-col p-6">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-4 text-lg font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="my-5 border-t border-white/10"></div>

                <a
                  href="/Muhammed Syam S Resume.pdf"
                  download="Muhammed_Syam_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Download Resume
                </a>

              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </nav>
  );
};

export default Navbar;