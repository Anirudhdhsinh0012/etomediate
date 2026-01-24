"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Package, Thermometer, Calendar, Box } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const specifications = [
  { label: "Product Name", value: "Etomidate API" },
  { label: "Grade", value: "USP" },
  { label: "Therapeutic Category", value: "General Anaesthetic" },
  { label: "Chemical Name", value: "Etomidate" },
  { label: "CAS Number", value: "33125-97-2" },
  { label: "Molecular Formula", value: "C₁₄H₁₆N₂O₂", isFormula: true },
  { label: "Molecular Weight", value: "244.29 g/mol" },
  { label: "Melting Point", value: "68-72°C" },
  { label: "Appearance", value: "White to Off-White Crystalline Solid" },
  {
    label: "Solubility",
    value: "Practically soluble in Water, soluble in methanol, ethanol",
  },
];

const synonyms = [
  "Hypnomidate",
  "(+)-Etomidate",
  "Amidate",
  "Etomidato",
  "D-Etomidate",
  "Etomidatum",
];

const packagingDetails = [
  {
    icon: Package,
    title: "Packing",
    description:
      "25kg/drum with double plastic bags inside; packed in a cardboard drum or fibre HDPE drum.",
  },
  {
    icon: Thermometer,
    title: "Storage",
    description:
      "Stored in a clean, cool, dry area; keep away from moisture and direct from light/heat. Optimal: 20-25°C Dark and Dry Place.",
  },
  {
    icon: Calendar,
    title: "Shelf Life",
    description:
      "5 years if sealed and stored away from direct sun light at 4-8°C.",
  },
  {
    icon: Box,
    title: "Category",
    description: "Pharmaceutical/Standards/API Drug Impurities/Metabolites.",
  },
];

export default function Specifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.to(".specs-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".specs-header",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Table rows animation
    gsap.to(".specs-row", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".specs-table",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Synonyms animation
    gsap.to(".synonym-tag", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".synonyms-container",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Packaging cards animation
    gsap.to(".packaging-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".packaging-grid",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    // Application text reveal
    gsap.to(".application-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".application-text",
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="specifications"
      ref={sectionRef}
      className="bg-sage-50 relative overflow-hidden py-32"
    >
      {/* Decorative Elements */}
      <div className="bg-sage-200 absolute top-0 left-0 h-px w-full" />
      <div className="border-sage-200 absolute right-20 bottom-20 h-100 w-100 rounded-full border opacity-40" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="specs-header mb-16 translate-y-12 text-center opacity-0">
          <span className="text-sage-600 mb-4 inline-block text-xs tracking-[0.3em] uppercase">
            Technical Data
          </span>
          <h2 className="text-warm-900 mb-6 font-serif text-4xl md:text-5xl lg:text-6xl">
            Product
            <span className="text-sage-600"> Specifications</span>
          </h2>
          <p className="text-warm-500 mx-auto max-w-2xl text-lg">
            Complete technical specifications and quality parameters for
            Etomidate Active Pharmaceutical Ingredient.
          </p>
          <div className="bg-sage-400 mx-auto mt-8 h-px w-24" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Specifications Table */}
          <div>
            <h3 className="text-warm-800 mb-6 font-serif text-2xl">
              Chemical & Physical Properties
            </h3>
            <div className="specs-table border-sage-200 overflow-hidden border bg-white">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="specs-row border-sage-100 hover:bg-sage-50 flex -translate-x-8 border-b opacity-0 transition-colors last:border-b-0"
                >
                  <div className="bg-sage-50 text-warm-600 border-sage-100 w-2/5 border-r px-6 py-4 text-sm font-medium">
                    {spec.label}
                  </div>
                  <div className="text-warm-800 w-3/5 px-6 py-4">
                    {spec.isFormula ? (
                      <span dangerouslySetInnerHTML={{ __html: spec.value }} />
                    ) : (
                      spec.value
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Synonyms */}
            <div className="synonyms-container mt-8">
              <h4 className="text-warm-600 mb-4 text-sm tracking-wider uppercase">
                Synonyms
              </h4>
              <div className="flex flex-wrap gap-2">
                {synonyms.map((synonym, index) => (
                  <span
                    key={index}
                    className="synonym-tag border-sage-200 text-warm-600 hover:border-sage-400 hover:text-sage-700 scale-75 cursor-default border bg-white px-4 py-2 text-sm opacity-0 transition-colors"
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Packaging & Storage */}
          <div>
            <h3 className="text-warm-800 mb-6 font-serif text-2xl">
              Packaging & Storage
            </h3>
            <div className="packaging-grid space-y-4">
              {packagingDetails.map((item, index) => (
                <div
                  key={index}
                  className="packaging-card group border-sage-200 hover:border-sage-400 flex translate-y-10 items-start gap-4 border bg-white p-6 opacity-0 transition-colors duration-300"
                >
                  <div className="bg-sage-100 group-hover:bg-sage-200 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors">
                    <item.icon className="text-sage-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-warm-800 mb-1 text-lg font-medium">
                      {item.title}
                    </h4>
                    <p className="text-warm-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="application-text border-sage-200 mt-8 translate-y-8 border bg-white p-6 opacity-0">
              <h4 className="text-warm-600 mb-4 text-sm tracking-wider uppercase">
                Applications
              </h4>
              <p className="text-warm-600 leading-relaxed">
                Etomidate works by enhancing the action of the neurotransmitter
                gamma-aminobutyric acid (GABA), leading to CNS depression, which
                produces the anaesthetic effects. It is extensively used in
                emergency medicine, intensive care units (ICUs), and operating
                rooms worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="border-sage-200 mt-16 border-t pt-16">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div className="border-sage-200 border bg-white p-6">
              <div className="text-sage-600 mb-2 font-serif text-3xl">GMP</div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Certified Manufacturing
              </div>
            </div>
            <div className="border-sage-200 border bg-white p-6">
              <div className="text-sage-600 mb-2 font-serif text-3xl">CoA</div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Certificate of Analysis
              </div>
            </div>
            <div className="border-sage-200 border bg-white p-6">
              <div className="text-sage-600 mb-2 font-serif text-3xl">MSDS</div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Safety Data Sheet
              </div>
            </div>
            <div className="border-sage-200 border bg-white p-6">
              <div className="text-sage-600 mb-2 font-serif text-3xl">USP</div>
              <div className="text-warm-500 text-xs tracking-wider uppercase">
                Grade Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
