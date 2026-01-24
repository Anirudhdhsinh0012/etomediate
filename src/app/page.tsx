"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Mechanism from "@/components/Mechanism";
import Specifications from "@/components/Specifications";

import Footer from "@/components/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to ensure proper calculations
    ScrollTrigger.refresh();

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Mechanism />
      <Specifications />

      <Footer />
    </main>
  );
}
