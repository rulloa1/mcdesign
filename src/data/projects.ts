
export const categories = [
  "All",
  "Residential Construction",
  "Design/Build",
  "Hospitality",
  "Civil",
  "Residential Development"
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
  // RESIDENTIAL CONSTRUCTION
  {
    id: "s-florida-high-rise",
    title: "S. Florida High Rise Luxe Condo",
    subtitle: "Coastal Living Redefined",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami001%20COVER.jpg",
    location: "Miami Beach, FL",
    description: "3,200 sq ft luxury condo complete renovation featuring white oak floors, Italian marble, custom millwork, high-end kitchen with Wolf appliances, spa bathrooms, smart home integration, and panoramic ocean views. Complex project with 12-month timeline.",
    duration: "12 Months",
    sqft: "3,200",
    role: "General Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami001%20COVER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami002.PNG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami003.PNG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami006.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0015.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0016.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0018.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0019.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0020.PNG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0025.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0029.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0034.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0040.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0045.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/S.%20Florida%20High%20Rise%20Luxe/Miami0046.jpg"
    ]
  },
  {
    id: "high-alpine-ranch",
    title: "High Alpine Mtn. Ranch Luxe Retreat",
    subtitle: "Timber & Stone Sanctuary",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High001%20COVER.JPG",
    location: "Jackson Hole, WY",
    description: "8,500 sq ft mountain retreat with timber construction, 6 bedrooms, stone fireplace, luxury finishes, heated floors, wine cellar, ski room, and integration with alpine environment. 24-month construction period.",
    duration: "24 Months",
    sqft: "8,500",
    bedrooms: 6,
    role: "Master Builder",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High001%20COVER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High002.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High004.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High007.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High008.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High009.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/High%20Alpine%20Mtn.%20Ranch/High0010.JPG"
    ]
  },
  {
    id: "mtn-mid-rise-condo",
    title: "Mtn. Mid-Rise Luxe Condo",
    subtitle: "Modern Mountain Luxury",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana001%20COVER.jpg",
    location: "Bozeman, MT",
    description: "Modern 2,800 sq ft mountain condo with floor-to-ceiling windows, contemporary design, custom kitchen, spa bathrooms, and sustainable materials. 10-month completion.",
    duration: "10 Months",
    sqft: "2,800",
    role: "General Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana001%20COVER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana002.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana003.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana005.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana007.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana008.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana009.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Mtn.%20Mid-Rise%20Luxe%20Condo/Montana0010.jpg"
    ]
  },
  {
    id: "north-florida-renovation",
    title: "North Florida Renovation/Addition",
    subtitle: "Masterful Estate Expansion",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NScreenshot%202025-10-30%20001316.png",
    location: "Jacksonville, FL",
    description: "Comprehensive 3,400 sq ft home renovation with 1,200 sq ft addition, new master suite, kitchen expansion, pool installation, and landscape redesign. 15-month project.",
    duration: "15 Months",
    sqft: "4,600",
    role: "General Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NScreenshot%202025-10-30%20001316.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9178.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9179.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9180.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9182.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9184.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9185.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9890.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9892.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9893.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9894.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/north-florida/NIMG_9895.jpg"
    ]
  },
  {
    id: "abaco-boat-house",
    title: "Abaco Luxe Boat House",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Abaco%20Luxe%20Boat%20House/Homes%20Built%20BoatHouse%20Style%20at%20Bakers%20Bay.png",
    location: "Abaco, Bahamas",
    description: "2,000 sq ft waterfront boat house with 40-foot boat lift, entertainment deck, storm-resistant construction, generator system, and marine-grade materials.",
    sqft: "2,000",
    role: "Builder",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Abaco%20Luxe%20Boat%20House/Homes%20Built%20BoatHouse%20Style%20at%20Bakers%20Bay.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Abaco%20Luxe%20Boat%20House/bahamas1.png"
    ]
  },
  {
    id: "carmel-forest-ocean",
    title: "Carmel Forest to Ocean View",
    category: "Residential Construction",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel001%20COVER.JPG",
    location: "Carmel, CA",
    description: "4,200 sq ft coastal home with dramatic ocean views, sustainable materials, energy-efficient systems, and seamless indoor-outdoor living spaces.",
    sqft: "4,200",
    role: "General Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel001%20COVER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/Carmel%20Forest%20to%20Ocean%20View/Carmel006.JPG"
    ]
  },

  // DESIGN/BUILD
  {
    id: "syracuse-house",
    title: "Syracuse House",
    category: "Design/Build",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-cover.png",
    location: "Syracuse, NY",
    description: "Complete 2,500 sq ft design-build featuring comprehensive architectural plans through construction, custom cabinetry, and landscape design. 18-month project.",
    duration: "18 Months",
    sqft: "2,500",
    role: "Design-Build Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-1.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-2.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-3.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-4.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-5.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-6.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-10.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-11.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-12.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-20.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-final/syracuse-30.png"
    ]
  },
  {
    id: "south-coast-renovation",
    title: "South Coast Renovation",
    category: "Design/Build",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/36%20AFTER.JPG",
    location: "California Coast",
    description: "5,500 sq ft coastal property renovation with structural improvements, new decking, updated systems, modern interiors while preserving character. 20-month timeline.",
    duration: "20 Months",
    sqft: "5,500",
    role: "Design-Build Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/36%20AFTER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/11%20Kitchen%20AFTER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/12%20Kitchen%20After.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/18%20Living%20Rm%20AFTER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/20%20Living%20Dining%20AFTER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/22%20Living%20After.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/35%20AFTER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design/southcoast-kitchen/45%20AFTER.JPG"
    ]
  },
  {
    id: "carmel-valley-new",
    title: "Carmel Valley New",
    category: "Design/Build",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new1%20cover.png",
    location: "Carmel Valley, CA",
    description: "New 3,800 sq ft residence on 2-acre site with Mediterranean style, solar panels, water conservation, custom stonework. 16-month construction.",
    duration: "16 Months",
    sqft: "3,800",
    role: "Design-Build Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new1%20cover.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new2.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new3.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new4.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-valley-new/carmel_valley_new5.png"
    ]
  },
  {
    id: "pacific-grove-residential",
    title: "New Residential Construction",
    category: "Design/Build",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/001%20COVER.JPG",
    location: "Pacific Grove, CA",
    description: "2,700 sq ft new home with coastal architecture, sustainable building practices, energy-efficient systems, and local material sourcing.",
    sqft: "2,700",
    role: "Design-Build Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/001%20COVER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/003.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/004.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/007.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/008.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/009.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/0010.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pacific-grove/0011.JPG"
    ]
  },
  {
    id: "laguna-grande-commercial",
    title: "Laguna Grande Spanish Revival",
    category: "Design/Build",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_001_COVER.png",
    location: "Fort Ord, CA",
    description: "6,000 sq ft commercial building with Spanish Revival architecture, tile work, arched entries, courtyard, and mixed-use spaces.",
    sqft: "6,000",
    role: "Design-Build Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_001_COVER.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_002_(2).png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_003.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_004.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_005.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_006.png"
    ]
  },

  // HOSPITALITY
  {
    id: "luxury-resort-pool",
    title: "Ultra Luxe Private Club Resort Pool",
    category: "Hospitality",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/hospitality-pool-cover.jpg",
    location: "Spring, TX",
    description: "15,000 sq ft aquatic complex with resort-style pools, swim-up bar, water features, cabanas, commercial kitchen, and luxury amenities. Includes extensive testimonial from client about collaboration with Smelek Design.",
    sqft: "15,000",
    role: "Master Builder & Lead Technical Designer",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/hospitality-pool-cover.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_8906.MOV",
      "special://smelek-letter",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_0163.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_3332.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_3720.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_4721.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_4763.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_4886.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5389.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5405.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5551.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5690.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5700.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_5970.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_6202.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_6335.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_6768.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_8896.jpg"
    ],
    processView: {
      beforeImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/IMG_0163.JPG",
      afterImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/design-pool/hospitality-pool-cover.jpg",
      beforeLabel: "Construction Phase",
      afterLabel: "Completed Resort"
    }
  },

  // CIVIL
  {
    id: "coastal-mountain-residence",
    title: "Coastal Mountain Residence",
    category: "Civil",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/001%20COVER.JPG",
    location: "Big Sur, CA",
    description: "1.2-acre mountain site development with 320 linear feet of retaining walls, 900 sq ft custom garage, 3,000 cubic yards of earth movement, erosion control, and ocean view preservation.",
    role: "Civil Engineer & Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/001%20COVER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/007.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/008.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/009.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/010.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/011.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-mountain/012.jpg"
    ]
  },
  {
    id: "carmel-knolls",
    title: "Carmel Knolls",
    category: "Civil",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/001.10%20COVER.jpg",
    location: "Carmel, CA",
    description: "2,200 sq ft complete remodel with 1,400 sq ft composite decking, 18 windows, architectural improvements, foundation repairs, 200 linear feet of retaining walls.",
    sqft: "2,200",
    role: "Civil Engineer & Contractor",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/001.10%20COVER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/007.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/008.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls/009.JPG"
    ]
  },
  {
    id: "coastal-restoration",
    title: "Coastal Restoration",
    category: "Civil",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/001%20COVER.JPG",
    location: "California Coast",
    description: "Emergency coastal erosion project with geotechnical solutions, retaining walls, drainage systems, native plant restoration, and long-term erosion prevention.",
    role: "Project Manager",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/001%20COVER.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/006.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/coastal-restoration/007.JPG"
    ]
  },
  {
    id: "civil-portfolio",
    title: "Civil Engineering Portfolio",
    category: "Civil",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(1).jpg",
    location: "Multiple sites",
    description: "Collection showcasing 50,000+ cubic yards excavation, 2,500+ linear feet retaining walls, coastal restoration, hillside stabilization with soil nail/shotcrete, precision grading.",
    role: "Principal Engineer",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(1).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(2).jpg"
    ]
  },
  {
    id: "hillside-restoration",
    title: "Hillside Restoration",
    category: "Civil",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/001%20COVER.jpg",
    location: "Carmel, CA",
    description: "1.5-acre hillside restoration removing 80 tons of debris, abandoned vehicles, construction waste. Includes erosion control, 200+ native plant specimens, drainage improvements.",
    role: "Project Lead",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/001%20COVER.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/002.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/003.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/004.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/005.JPG",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/hillside-cleanup/006.jpg"
    ]
  },

  // RESIDENTIAL DEVELOPMENT
  {
    id: "beachfront-estate",
    title: "Beachfront Estate",
    subtitle: "The Ultimate Coastal Retreat",
    category: "Residential Development",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-1.jpg",
    location: "Abaco, Bahamas",
    description: "2.5-acre beachfront estate with 6,800 sq ft main residence, 180 feet beach frontage, Category 5 hurricane resistance, infinity pool, guest cottage, dock facilities, solar backup, rainwater collection.",
    sqft: "6,800",
    role: "Developer & Builder",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-1.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-2.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-3.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-4.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-5.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-6.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/beachfront-7.jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/Whisk_063db5aec58ad9db29e44f785c5f8954eg.png",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/beachfront_estate/Whisk_cdbe2863291f901a0e0430c0610d75f0eg.png"
    ]
  },
  {
    id: "development-civil",
    title: "Development Civil",
    category: "Residential Development",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(1).jpg",
    location: "SE Texas",
    description: "45-acre master-planned residential development with infrastructure for 120+ home sites, 3.2 miles roads, complete utilities, 2 miles walking trails, community amenities, extensive drainage. 36-month phased completion.",
    duration: "36 Months",
    role: "Developer",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(1).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(2).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(3).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(5).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(6).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(7).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(8).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(9).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(11).jpg",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/development-civil/development%20(12).jpg"
    ]
  }
];


export const getProjectById = (id: string) => projects.find(p => p.id === id);
