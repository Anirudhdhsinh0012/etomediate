import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Split text into characters for animation
export function splitTextIntoChars(text: string): string[] {
  return text.split("");
}

// Split text into words for animation
export function splitTextIntoWords(text: string): string[] {
  return text.split(" ");
}

// Format chemical formula with subscripts
export function formatChemicalFormula(formula: string): string {
  return formula.replace(/(\d+)/g, "<sub>$1</sub>");
}

// Delay utility for animations
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
