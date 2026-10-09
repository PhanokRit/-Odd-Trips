import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navbarLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#place", label: "Places" },
  { href: "#contact", label: "Contacts" },
  { href: "#new", label: "News" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} left-0 z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl  tracking-tight hover:text-primary">
          ODDAR Trips<span>.</span>
        </a>
        {/* Desktop Nav  */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className=" glass rounded-full px-3 py-3 flex items-center gap-2">
            {navbarLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-mute-foreground hover:text-primary-foreground rounded-full hover:bg-suface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#place">
            <Button size="sm">Explore Now</Button>
          </a>
        </div>
        {/* Mobile Menu Button*/}

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu  */}

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navbarLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-mute-foreground hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#place" className="block w-full">
              <Button className="w-full">Explore Now</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
