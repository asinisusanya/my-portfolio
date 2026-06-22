import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#research", label: "Research" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-2 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <BrainCircuit className="text-primary" />

            <span className="font-bold">ASINI</span>
          </div>

          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden p-1 hover:bg-white/10 rounded-lg transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="glass-card rounded-2xl mt-2 md:hidden overflow-hidden animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
