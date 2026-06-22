import { BrainCircuit, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-2 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <BrainCircuit className="text-primary" />

            <span className="font-bold">ASINI</span>
          </div>

          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base">
            <a href="#research">Research</a>

            <a href="#projects">Projects</a>

            <a href="#skills">Skills</a>

            <a href="#contact">Contact</a>
          </nav>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
