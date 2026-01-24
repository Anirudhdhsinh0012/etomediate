"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, Zap, Timer, Wind, LineChart, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const benefits = [
  {
    icon: Heart,
    title: "Cardiovascular Stability",
    description:
      "Causes minimal changes in blood pressure, heart rate, and cardiac output, making it ideal for patients with cardiac disease, trauma, or shock.",
    highlight: "Ideal for critical patients",
  },
  {
    icon: Zap,
    title: "Rapid Onset of Action",
    description:
      "Produces hypnosis within 30–60 seconds after intravenous administration, enabling fast and efficient anesthesia induction.",
    highlight: "30-60 seconds",
  },
  {
    icon: Timer,
    title: "Short Duration & Quick Recovery",
    description:
      "Its brief action allows quick patient recovery, which is beneficial for short procedures and outpatient settings.",
    highlight: "Outpatient friendly",
  },
  {
    icon: Wind,
    title: "Minimal Respiratory Depression",
    description:
      "Compared to other anesthetic agents, Etomidate has a lower risk of respiratory suppression when used appropriately.",
    highlight: "Enhanced safety",
  },
  {
    icon: LineChart,
    title: "Predictable Pharmacokinetics",
    description:
      "Provides consistent and reliable anesthetic effects, allowing accurate dosing and safer clinical use.",
    highlight: "Reliable dosing",
  },
  {
    icon: ShieldCheck,
    title: "Wide Safety Margin",
    description:
      "Favorable safety profile makes it suitable for use across various patient populations including elderly and compromised patients.",
    highlight: "Broad applicability",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.to(".benefits-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".benefits-header",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Cards stagger animation
    gsap.to(".benefit-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        each: 0.1,
        grid: [2, 3],
        from: "start",
      },
      scrollTrigger: {
        trigger: ".benefits-grid",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Icon animation on scroll
    gsap.to(".benefit-icon", {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".benefits-grid",
        start: "top 70%",
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="bg-warm-50 relative overflow-hidden py-32"
    >
      {/* Decorative Elements */}
      <div className="bg-warm-200 absolute top-0 left-0 h-px w-full" />
      <div className="border-sage-100 absolute bottom-40 left-10 h-75 w-75 rounded-full border opacity-40" />
      <div className="border-sage-100 absolute top-40 right-10 h-50 w-50 rounded-full border opacity-30" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="benefits-header mb-20 translate-y-12 text-center opacity-0">
          <span className="text-sage-600 mb-4 inline-block text-xs tracking-[0.3em] uppercase">
            Clinical Advantages
          </span>
          <h2 className="text-warm-900 mb-6 font-serif text-4xl md:text-5xl lg:text-6xl">
            Key Benefits of
            <span className="text-sage-600"> Etomidate API</span>
          </h2>
          <p className="text-warm-500 mx-auto max-w-2xl text-lg">
            Discover why Etomidate is the preferred choice for anesthetic
            formulations in critical and emergency care settings.
          </p>
          <div className="bg-sage-400 mx-auto mt-8 h-px w-24" />
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group border-warm-100 hover:border-sage-300 relative border bg-white p-8 transition-all duration-500 hover:shadow-lg"
            >
              {/* Highlight Badge */}
              <span className="text-sage-600 bg-sage-50 absolute top-4 right-4 px-3 py-1 text-[10px] tracking-wider uppercase">
                {benefit.highlight}
              </span>

              {/* Icon */}
              <div className="benefit-icon bg-sage-50 border-sage-200 group-hover:bg-sage-100 mb-6 flex h-16 w-16 scale-0 -rotate-180 items-center justify-center rounded-full border transition-colors duration-300">
                <benefit.icon className="text-sage-600 h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-warm-800 mb-3 font-serif text-xl">
                {benefit.title}
              </h3>
              <p className="text-warm-500 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Line */}
              <div className="bg-sage-500 absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#specifications"
            className="text-sage-700 hover:text-sage-900 inline-flex items-center gap-2 text-sm tracking-wider uppercase transition-colors"
          >
            <span className="luxury-underline">View Full Specifications</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
