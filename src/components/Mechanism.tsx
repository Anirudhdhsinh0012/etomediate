"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    number: "01",
    title: "GABA-A Receptor Binding",
    description:
      "Etomidate binds to a specific site on the GABA-A receptor–chloride ion channel complex in the brain.",
  },
  {
    number: "02",
    title: "GABA Potentiation",
    description:
      "The binding potentiates the effect of the inhibitory neurotransmitter GABA, enhancing its action.",
  },
  {
    number: "03",
    title: "Chloride Channel Opening",
    description:
      "This results in increased opening of chloride channels, leading to an influx of chloride ions into neurons.",
  },
  {
    number: "04",
    title: "Neuronal Hyperpolarization",
    description:
      "The increased chloride conductance causes hyperpolarization of neuronal cell membranes.",
  },
  {
    number: "05",
    title: "CNS Depression",
    description:
      "Suppresses neuronal firing and decreases central nervous system activity, producing rapid hypnosis and sedation.",
  },
];

export default function Mechanism() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.to(".mechanism-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mechanism-header",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Path drawing animation
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".mechanism-timeline",
          start: "top 70%",
          once: true,
          invalidateOnRefresh: true,
        },
      });
    }

    // Steps animation
    gsap.to(".mechanism-step", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".mechanism-timeline",
        start: "top 70%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Molecule animation
    gsap.to(".molecule-element", {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".molecule-visual",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Floating animation for molecule
    gsap.to(".molecule-float", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="mechanism"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Decorative Elements */}
      <div className="bg-warm-200 absolute top-0 left-0 h-px w-full" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="mechanism-header mb-20 translate-y-12 text-center opacity-0">
          <span className="text-sage-600 mb-4 inline-block text-xs tracking-[0.3em] uppercase">
            Scientific Foundation
          </span>
          <h2 className="text-warm-900 mb-6 font-serif text-4xl md:text-5xl lg:text-6xl">
            Mechanism of
            <span className="text-sage-600"> Action</span>
          </h2>
          <p className="text-warm-500 mx-auto max-w-2xl text-lg">
            Understanding how Etomidate produces rapid sedation and anesthesia
            through its action on the central nervous system.
          </p>
          <div className="bg-sage-400 mx-auto mt-8 h-px w-24" />
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Molecule Visualization */}
          <div className="molecule-visual relative order-2 lg:order-1">
            <div className="molecule-float relative mx-auto aspect-square max-w-lg">
              {/* Central Node */}
              <div className="molecule-element bg-sage-600 absolute top-1/2 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full opacity-0 shadow-lg">
                <span className="font-serif text-lg text-white">GABA-A</span>
              </div>

              {/* Surrounding Nodes */}
              <div className="molecule-element bg-accent-500 absolute top-[15%] left-1/2 flex h-16 w-16 -translate-x-1/2 scale-0 items-center justify-center rounded-full opacity-0 shadow-md">
                <span className="text-xs font-medium text-white">Cl⁻</span>
              </div>
              <div className="molecule-element bg-primary-500 absolute top-1/2 right-[10%] flex h-16 w-16 -translate-y-1/2 scale-0 items-center justify-center rounded-full opacity-0 shadow-md">
                <span className="text-xs font-medium text-white">GABA</span>
              </div>
              <div className="molecule-element bg-sage-400 absolute bottom-[15%] left-1/2 flex h-16 w-16 -translate-x-1/2 scale-0 items-center justify-center rounded-full opacity-0 shadow-md">
                <span className="text-xs font-medium text-white">CNS</span>
              </div>
              <div className="molecule-element bg-warm-700 absolute top-1/2 left-[10%] flex h-20 w-20 -translate-y-1/2 scale-0 items-center justify-center rounded-full opacity-0 shadow-md">
                <span className="text-center text-xs leading-tight font-medium text-white">
                  Etomidate
                </span>
              </div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
              >
                <line
                  x1="200"
                  y1="60"
                  x2="200"
                  y2="150"
                  stroke="#c7cfc7"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <line
                  x1="360"
                  y1="200"
                  x2="270"
                  y2="200"
                  stroke="#c7cfc7"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <line
                  x1="200"
                  y1="340"
                  x2="200"
                  y2="250"
                  stroke="#c7cfc7"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <line
                  x1="80"
                  y1="200"
                  x2="140"
                  y2="200"
                  stroke="#c7cfc7"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>

              {/* Background circles */}
              <div className="border-sage-100 absolute inset-0 rounded-full border" />
              <div className="border-sage-100 absolute inset-8 rounded-full border" />
              <div className="border-sage-100 absolute inset-16 rounded-full border" />
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-warm-700 h-3 w-3 rounded-full" />
                <span className="text-warm-500">Etomidate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-sage-600 h-3 w-3 rounded-full" />
                <span className="text-warm-500">GABA-A Receptor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent-500 h-3 w-3 rounded-full" />
                <span className="text-warm-500">Chloride Ion</span>
              </div>
            </div>
          </div>

          {/* Right - Timeline Steps */}
          <div className="mechanism-timeline relative order-1 lg:order-2">
            {/* Vertical Line */}
            <svg
              className="absolute top-0 left-5.75 h-full w-2"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M4 0 L4 100%"
                stroke="#c7cfc7"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="mechanism-step flex -translate-x-10 gap-6 opacity-0"
                >
                  {/* Step Number */}
                  <div className="relative z-10">
                    <div className="border-sage-400 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white">
                      <span className="text-sage-600 font-mono text-sm font-medium">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-warm-800 mb-2 font-serif text-lg">
                      {step.title}
                    </h3>
                    <p className="text-warm-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
