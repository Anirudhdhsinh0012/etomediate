"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Shield, Zap, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial states
    gsap.set(".hero-line", { scaleY: 0 });
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 60,
      clipPath: "inset(100% 0 0 0)",
    });
    gsap.set(subtitleRef.current, { opacity: 0, y: 40 });
    gsap.set(".scroll-indicator", { opacity: 0 });

    // Animate decorative elements
    tl.to(
      ".hero-line",
      { scaleY: 1, duration: 1.2, transformOrigin: "top" },
      0,
    );

    // Animate title
    tl.to(
      titleRef.current,
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.2 },
      0.3,
    );

    // Animate subtitle
    tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.6);

    // Animate badges
    tl.to(
      ".hero-badge",
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      0.8,
    );

    // Animate stats
    tl.to(
      ".hero-stat",
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      1,
    );

    // Animate scroll indicator
    tl.to(".scroll-indicator", { opacity: 1, duration: 0.6 }, 1.5);

    // Floating animation for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, { scope: heroRef });

  return (
    <section
      id="home"
      ref={heroRef}
      className="bg-warm-50 relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #44403c 1px, transparent 1px),
                             linear-gradient(to bottom, #44403c 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative circles */}
        <div className="border-sage-200 absolute top-1/4 right-1/4 h-150 w-150 rounded-full border opacity-40" />
        <div className="border-sage-200 absolute top-1/4 right-1/4 h-125 w-125 rounded-full border opacity-30" />

        {/* Vertical lines */}
        <div className="hero-line bg-sage-200 absolute top-0 left-[15%] h-full w-px origin-top scale-y-0 opacity-50" />
        <div className="hero-line bg-sage-200 absolute top-0 left-[85%] h-full w-px origin-top scale-y-0 opacity-50" />
      </div>

      <div className="container-luxury relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <span className="hero-badge bg-sage-100 text-sage-700 inline-flex translate-y-8 items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase opacity-0">
              <Shield size={14} />
              GMP Certified
            </span>
            <span className="hero-badge bg-accent-100 text-accent-700 inline-flex translate-y-8 items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase opacity-0">
              <Zap size={14} />
              USP Grade
            </span>
            <span className="hero-badge bg-primary-100 text-primary-700 inline-flex translate-y-8 items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase opacity-0">
              <Clock size={14} />
              Rapid Onset
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-warm-900 mb-8 font-serif text-5xl opacity-0 md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Etomidate
            <span className="text-sage-600 block">Active Pharmaceutical</span>
            <span className="text-warm-500 mt-4 block font-sans text-3xl leading-15 font-light md:text-4xl lg:text-5xl">
              Ingredient
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-warm-500 mx-auto mb-12 max-w-2xl text-lg leading-relaxed opacity-0 md:text-xl"
          >
            Premium short-acting intravenous hypnotic agent for anesthesia
            induction, manufactured under strict GMP conditions with exceptional
            cardiovascular stability.
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#specifications"
              className="group bg-sage-700 hover:bg-sage-800 px-8 py-4 text-sm tracking-wider text-white uppercase transition-all duration-300"
            >
              View Specifications
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="border-warm-200 grid grid-cols-2 gap-8 border-t pt-12 md:grid-cols-4"
          >
            <div className="hero-stat translate-y-8 text-center opacity-0">
              <div className="text-sage-700 mb-2 font-serif text-3xl md:text-4xl">
                30-60s
              </div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Onset Time
              </div>
            </div>
            <div className="hero-stat translate-y-8 text-center opacity-0">
              <div className="text-sage-700 mb-2 font-serif text-3xl md:text-4xl">
                244.29
              </div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Molecular Weight
              </div>
            </div>
            <div className="hero-stat translate-y-8 text-center opacity-0">
              <div className="text-sage-700 mb-2 font-serif text-3xl md:text-4xl">
                USP
              </div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Grade Standard
              </div>
            </div>
            <div className="hero-stat translate-y-8 text-center opacity-0">
              <div className="text-sage-700 mb-2 font-serif text-3xl md:text-4xl">
                5 Years
              </div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Shelf Life
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator text-warm-400 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0">
        <span className="text-xs tracking-wider uppercase">
          Scroll to explore
        </span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
