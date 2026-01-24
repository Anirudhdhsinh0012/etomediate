"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Beaker, Stethoscope, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate section header
    gsap.to(".about-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-header",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate content blocks
    gsap.to(".about-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate feature cards
    gsap.to(".about-feature", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".about-features",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate decorative line
    gsap.to(".about-line", {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".about-line",
        start: "top 85%",
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Decorative Elements */}
      <div className="bg-warm-200 absolute top-0 left-0 h-px w-full" />
      <div className="border-sage-100 absolute top-20 right-0 h-100 w-100 rounded-full border opacity-60" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="about-header mb-20 translate-y-12 opacity-0">
          <span className="text-sage-600 mb-4 inline-block text-xs tracking-[0.3em] uppercase">
            Introduction
          </span>
          <h2 className="text-warm-900 max-w-4xl font-serif text-4xl md:text-5xl lg:text-6xl">
            The Gold Standard in
            <span className="text-sage-600"> Anesthetic Excellence</span>
          </h2>
          <div className="about-line bg-sage-400 mt-8 h-px w-24 scale-x-0" />
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="about-content translate-y-14 opacity-0">
              <p className="text-warm-600 text-lg leading-relaxed">
                Etomidate Active Pharmaceutical Ingredient (API) is a
                short-acting intravenous hypnotic agent widely used in
                anesthesia practice for the induction of general anesthesia and
                procedural sedation.
              </p>
            </div>

            <div className="about-content translate-y-14 opacity-0">
              <p className="text-warm-600 text-lg leading-relaxed">
                It is particularly valued for its{" "}
                <span className="text-warm-800 font-medium">
                  rapid onset of action
                </span>
                ,{" "}
                <span className="text-warm-800 font-medium">
                  short duration
                </span>
                , and{" "}
                <span className="text-warm-800 font-medium">
                  excellent cardiovascular stability
                </span>
                , making it an ideal choice for patients who are critically ill
                or hemodynamically unstable.
              </p>
            </div>

            <div className="about-content translate-y-14 opacity-0">
              <p className="text-warm-600 text-lg leading-relaxed">
                Etomidate API acts by enhancing the inhibitory neurotransmitter
                gamma-aminobutyric acid (GABA) at the GABA-A receptor in the
                central nervous system, resulting in rapid sedation and
                hypnosis.
              </p>
            </div>

            {/* Certification Badge */}
            <div className="about-content translate-y-14 pt-8 opacity-0">
              <div className="bg-sage-50 border-sage-200 inline-flex items-center gap-4 border px-6 py-4">
                <div className="bg-sage-600 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="font-serif text-lg text-white">GMP</span>
                </div>
                <div>
                  <div className="text-warm-800 text-sm font-medium">
                    GMP Certified Manufacturing
                  </div>
                  <div className="text-warm-500 text-xs">
                    Complete quality & regulatory documentation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="about-features space-y-6">
            <div className="about-feature group bg-warm-50 border-warm-100 hover:border-sage-300 translate-y-10 scale-95 border p-8 opacity-0 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="border-warm-200 group-hover:bg-sage-50 group-hover:border-sage-300 flex h-14 w-14 items-center justify-center rounded-full border bg-white transition-colors duration-300">
                  <Beaker className="text-sage-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-warm-800 mb-2 font-serif text-lg">
                    General Anesthesia Induction
                  </h3>
                  <p className="text-warm-500 leading-relaxed">
                    Primary use for inducing general anesthesia with rapid onset
                    and predictable pharmacological profile.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-feature group bg-warm-50 border-warm-100 hover:border-sage-300 translate-y-10 scale-95 border p-8 opacity-0 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="border-warm-200 group-hover:bg-sage-50 group-hover:border-sage-300 flex h-14 w-14 items-center justify-center rounded-full border bg-white transition-colors duration-300">
                  <Stethoscope className="text-sage-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-warm-800 mb-2 font-serif text-lg">
                    Procedural Sedation
                  </h3>
                  <p className="text-warm-500 leading-relaxed">
                    Ideal for short diagnostic and therapeutic procedures
                    requiring conscious sedation.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-feature group bg-warm-50 border-warm-100 hover:border-sage-300 translate-y-10 scale-95 border p-8 opacity-0 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="border-warm-200 group-hover:bg-sage-50 group-hover:border-sage-300 flex h-14 w-14 items-center justify-center rounded-full border bg-white transition-colors duration-300">
                  <Activity className="text-sage-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-warm-800 mb-2 font-serif text-lg">
                    Rapid Sequence Intubation
                  </h3>
                  <p className="text-warm-500 leading-relaxed">
                    Critical application in emergency medicine for securing
                    airways in hemodynamically unstable patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
