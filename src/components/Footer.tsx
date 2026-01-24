"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const footerLinks = {
  product: [
    { name: "Etomidate API", href: "#specifications" },
    { name: "Benefits", href: "#benefits" },
    { name: "Mechanism of Action", href: "#mechanism" },
    { name: "Specifications", href: "#specifications" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Quality Assurance", href: "#" },
    { name: "Manufacturing", href: "#" },
    { name: "Certifications", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Safety Data Sheet", href: "#" },
    { name: "Certificate of Analysis", href: "#" },
    { name: "Technical Support", href: "#" },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(".footer-col", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-warm-800 text-warm-200 pt-20 pb-8">
      <div className="container-luxury">
        {/* Main Footer Content */}
        <div className="border-warm-700 grid grid-cols-1 gap-12 border-b pb-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="footer-col translate-y-10 opacity-0 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-sage-600 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="font-serif text-xl font-medium text-white">
                  E
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium tracking-tight text-white">
                  Etomidate API
                </span>
                <span className="text-sage-400 text-xs tracking-[0.15em] uppercase">
                  Pharmaceutical Excellence
                </span>
              </div>
            </div>
            <p className="text-warm-400 mb-8 max-w-sm leading-relaxed">
              Manufacturing premium quality Etomidate Active Pharmaceutical
              Ingredient under GMP conditions for global pharmaceutical and
              healthcare applications.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-col translate-y-10 opacity-0">
            <h4 className="mb-6 text-sm tracking-wider text-white uppercase">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col translate-y-10 opacity-0">
            <h4 className="mb-6 text-sm tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>{" "}
            {/* Company Links */}
          </div>
        </div>
      </div>
    </footer>
  );
}
