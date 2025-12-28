export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Pools",
  "Interior"
];

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  location: string;
  subtitle?: string;
  description?: string;
  gallery?: string[];
  duration?: string;
  sqft?: string;
  role?: string;
  bedrooms?: number;
  baths?: number;
  gallons?: string;
  processView?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "pool-design-1",
    title: "The Azure Infinity",
    category: "Pools",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
    location: "Austin, TX",
    subtitle: "Cantilevered Glass Edge",
    description: "A feat of structural engineering, this project features a 40-foot cantilevered infinity edge that disappears into the hill country horizon. The design incorporates native Texas limestone and custom glass tiling from Italy.",
    duration: "14 Months",
    gallons: "35,000",
    role: "Master Builder & Lead Technical Designer",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-6.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp"
    ],
    processView: {
      beforeImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp", // Using cover as placeholder for sketch
      afterImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp",
      beforeLabel: "Structural Concept",
      afterLabel: "Final Build"
    }
  },
  {
    id: "modern-residential-1",
    title: "Hill Country Modern",
    category: "Residential",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
    location: "West Lake Hills, TX",
    subtitle: "Organic Minimalism",
    description: "Nestled into the cliffs of West Lake Hills, this 6,500 sqft residence uses a palette of raw concrete, black steel, and warm cedar to create a home that feels both monumental and intimate.",
    duration: "24 Months",
    sqft: "6,500",
    bedrooms: 5,
    baths: 6.5,
    role: "General Contractor & Interior Architect",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-11.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-12.webp"
    ]
  },
  {
    id: "commercial-spa-1",
    title: "Aura Wellness Resort",
    category: "Hospitality",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
    location: "San Antonio, TX",
    subtitle: "Hydrotherapy Sanctuary",
    description: "Winner of the 2022 Hospitality Design Award, this wellness center integrates seven unique thermal experiences, including a sub-zero 'snow room' and a magnesium-rich salt pool.",
    duration: "18 Months",
    sqft: "12,000",
    role: "Design-Build Consultant",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-16.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-17.webp"
    ]
  },
  {
    id: "modern-kitchen-1",
    title: "The Culinary Atelier",
    category: "Interior",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
    location: "Dallas, TX",
    subtitle: "Professional Grade Living",
    description: "Designed for a world-renowned chef, this kitchen features dual 60-inch ranges, a custom-fabricated walk-in refrigerator, and a 14-foot single-slab Taj Mahal quartzite island.",
    duration: "9 Months",
    sqft: "1,200 (Kitchen Suite)",
    role: "Interior Design & Custom Millwork",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-21.webp",
      "special://smelek-letter"
    ]
  }
];

export const getProjectById = (id: string) => projects.find(p => p.id === id);
