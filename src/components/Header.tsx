"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Benefits", href: "#benefits" },
  { name: "Mechanism", href: "#mechanism" },
  { name: "Specifications", href: "#specifications" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(
    () => {
      // Initial animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      if (navRef.current) {
        gsap.fromTo(
          navRef.current.querySelectorAll("a"),
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.4,
          }
        );
      }
    },
    { scope: headerRef }
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="opacity-0">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="bg-sage-600 absolute inset-0 flex items-center justify-center rounded-full">
                <span className="font-serif text-lg font-medium text-white">
                  E
                </span>
              </div>
              <div className="border-sage-400 absolute inset-0 scale-110 rounded-full border opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-warm-800 font-serif text-lg font-medium tracking-tight">
                Etomidate
              </span>
              <span className="text-sage-600 text-[10px] tracking-[0.2em] uppercase">
                Pharmaceutical API
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="luxury-underline text-warm-600 hover:text-warm-900 text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-warm-700 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "bg-warm-50 border-warm-200 absolute top-full right-0 left-0 overflow-hidden border-t transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-luxury flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-warm-600 hover:text-warm-900 py-2 text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
