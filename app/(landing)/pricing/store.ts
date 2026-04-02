import { create } from "zustand";

export interface Technology {
  id: string;
  name: string;
  isBundle: boolean;
  isComing: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  isPopular: boolean;
}

export interface PlanFeature {
  id: string;
  featureName: string;
  featureDesc?: string;
  featureValue: string | null;
  isAvailable: boolean;
}

export interface TechnologyData {
  plans: PricingPlan[];
  features: Record<string, PlanFeature[]>;
}

interface PricingStore {
  technologies: Technology[];
  allData: Record<string, TechnologyData>;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export const usePricingStore = create<PricingStore>((set) => ({
  technologies: [
    { id: "nextjs", name: "Next.js", isBundle: false, isComing: false },
    { id: "vite", name: "Vite", isBundle: false, isComing: true },
    { id: "vuejs", name: "Vue.js", isBundle: false, isComing: true },
    { id: "svelte", name: "Svelte", isBundle: false, isComing: true },
    { id: "angular", name: "Angular", isBundle: false, isComing: true },
    { id: "figma", name: "Figma", isBundle: false, isComing: true }
  ],
  allData: {
    vitejs: {
      plans: [
        {
          id: "react-starter",
          name: "Starter",
          originalPrice: 129,
          discountedPrice: 99,
          description: "Best suited for freelancers and individuals.",
          isPopular: true
        },
        {
          id: "react-extended",
          name: "Extended",
          originalPrice: 299,
          discountedPrice: 199,
          description: "Best suited for SaaS with redistribution license.",
          isPopular: false
        }
      ],
      features: {
        "react-starter": [
          {
            id: "rs-1",
            featureName: "Seats",
            featureValue: "1",
            isAvailable: true,
            featureDesc: "dcsdcdcdcs"
          },
          { id: "rs-2", featureName: "Projects", featureValue: "3 Projects", isAvailable: true },
          { id: "rs-3", featureName: "Email Support", featureValue: "6 Months", isAvailable: true },
          {
            id: "rs-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "rs-5",
            featureName: "Figma Design Source",
            featureValue: "false",
            isAvailable: false
          },
          {
            id: "rs-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ],
        "react-extended": [
          { id: "re-1", featureName: "Seats", featureValue: "10", isAvailable: true },
          { id: "re-2", featureName: "Projects", featureValue: "Unlimited", isAvailable: true },
          {
            id: "re-3",
            featureName: "Email Support",
            featureValue: "12 Months",
            isAvailable: true
          },
          {
            id: "re-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "re-5",
            featureName: "Figma Design Source",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "re-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ]
      }
    },
    nextjs: {
      plans: [
        {
          id: "nextjs-starter",
          name: "Starter",
          originalPrice: 129,
          discountedPrice: 99,
          description: "Best suited for freelancers and individuals.",
          isPopular: true
        },
        {
          id: "nextjs-extended",
          name: "Extended",
          originalPrice: 299,
          discountedPrice: 199,
          description: "Best suited for SaaS with redistribution license.",
          isPopular: false
        }
      ],
      features: {
        "nextjs-starter": [
          { id: "ns-1", featureName: "Seats", featureValue: "1", isAvailable: true },
          { id: "ns-2", featureName: "Projects", featureValue: "3 Projects", isAvailable: true },
          { id: "ns-3", featureName: "Email Support", featureValue: "6 Months", isAvailable: true },
          {
            id: "ns-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "ns-5",
            featureName: "Figma Design Source",
            featureValue: "false",
            isAvailable: false
          },
          {
            id: "ns-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ],
        "nextjs-extended": [
          { id: "ne-1", featureName: "Seats", featureValue: "10", isAvailable: true },
          { id: "ne-2", featureName: "Projects", featureValue: "Unlimited", isAvailable: true },
          {
            id: "ne-3",
            featureName: "Email Support",
            featureValue: "12 Months",
            isAvailable: true
          },
          {
            id: "ne-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "ne-5",
            featureName: "Figma Design Source",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "ne-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ]
      }
    },
    vue: {
      plans: [
        {
          id: "vue-starter",
          name: "Starter",
          originalPrice: 129,
          discountedPrice: 99,
          description: "Best suited for freelancers and individuals.",
          isPopular: true
        },
        {
          id: "vue-extended",
          name: "Extended",
          originalPrice: 299,
          discountedPrice: 199,
          description: "Best suited for SaaS with redistribution license.",
          isPopular: false
        }
      ],
      features: {
        "vue-starter": [
          { id: "vs-1", featureName: "Seats", featureValue: "1", isAvailable: true },
          { id: "vs-2", featureName: "Projects", featureValue: "3 Projects", isAvailable: true },
          { id: "vs-3", featureName: "Email Support", featureValue: "6 Months", isAvailable: true },
          {
            id: "vs-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "vs-5",
            featureName: "Figma Design Source",
            featureValue: "false",
            isAvailable: false
          },
          {
            id: "vs-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ],
        "vue-extended": [
          { id: "ve-1", featureName: "Seats", featureValue: "10", isAvailable: true },
          { id: "ve-2", featureName: "Projects", featureValue: "Unlimited", isAvailable: true },
          {
            id: "ve-3",
            featureName: "Email Support",
            featureValue: "12 Months",
            isAvailable: true
          },
          {
            id: "ve-4",
            featureName: "All Pro Components",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "ve-5",
            featureName: "Figma Design Source",
            featureValue: "true",
            isAvailable: true
          },
          {
            id: "ve-6",
            featureName: "Lifetime Free Updates",
            featureValue: "true",
            isAvailable: true
          }
        ]
      }
    }
  },
  selectedTab: "nextjs",
  setSelectedTab: (tab) => set({ selectedTab: tab })
}));
