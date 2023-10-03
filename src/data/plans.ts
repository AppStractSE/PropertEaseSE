export interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  mostPopular: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Bas',
    price: 199,
    description: 'För dig som har en fastighet.',
    features: ['Max antal fastigheter: 1st', 'Vid ytterligare fastighet tillkommer 49kr/mån'],
    mostPopular: false,
  },
  {
    name: 'Standard',
    price: 399,
    description: 'För företag med få fastigheter.',
    features: ['Max antal fastigheter: 10st', 'Kundrapporter', 'Vid ytterligare fastighet tillkommer 19kr/mån'],
    mostPopular: true,
  },
  {
    name: 'Premium',
    price: 699,
    description: 'För företag med många fastigheter.',
    features: ['Max antal fastigheter: Obegränsat', 'Kundrapporter'],
    mostPopular: false,
  },
];
