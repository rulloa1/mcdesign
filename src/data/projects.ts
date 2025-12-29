
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

// Map design albums to projects manually with local paths
export const projects: ProjectData[] = [
  // RESIDENTIAL CONSTRUCTION
  {
    id: "s-florida-high-rise",
    title: "S. Florida High Rise Luxe Condo",
    subtitle: "Coastal Living Redefined",
    category: "Residential Construction",
    coverImage: "/projects/S. Florida High Rise Luxe/Miami001 COVER.jpg",
    location: "Miami Beach, FL",
    description: "3,200 sq ft luxury condo complete renovation featuring white oak floors, Italian marble, custom millwork, high-end kitchen with Wolf appliances, spa bathrooms, smart home integration, and panoramic ocean views. Complex project with 12-month timeline.",
    duration: "12 Months",
    sqft: "3,200",
    role: "General Contractor",
    gallery: [
      "/projects/S. Florida High Rise Luxe/Miami001 COVER.jpg",
      "/projects/S. Florida High Rise Luxe/Miami002.PNG",
      "/projects/S. Florida High Rise Luxe/Miami003.PNG",
      "/projects/S. Florida High Rise Luxe/Miami004.JPG",
      "/projects/S. Florida High Rise Luxe/Miami005.JPG",
      "/projects/S. Florida High Rise Luxe/Miami006.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0015.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0016.JPG",
      "/projects/S. Florida High Rise Luxe/Miami0018.JPG",
      "/projects/S. Florida High Rise Luxe/Miami0019.JPG",
      "/projects/S. Florida High Rise Luxe/Miami0020.PNG",
      "/projects/S. Florida High Rise Luxe/Miami0025.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0029.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0034.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0040.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0045.jpg",
      "/projects/S. Florida High Rise Luxe/Miami0046.jpg"
    ]
  },
  {
    id: "high-alpine-ranch",
    title: "High Alpine Mtn. Ranch Luxe Retreat",
    subtitle: "Timber & Stone Sanctuary",
    category: "Residential Construction",
    coverImage: "/projects/High Alpine Mtn. Ranch/High001 COVER.JPG",
    location: "Jackson Hole, WY",
    description: "8,500 sq ft mountain retreat with timber construction, 6 bedrooms, stone fireplace, luxury finishes, heated floors, wine cellar, ski room, and integration with alpine environment. 24-month construction period.",
    duration: "24 Months",
    sqft: "8,500",
    bedrooms: 6,
    role: "Master Builder",
    gallery: [
      "/projects/High Alpine Mtn. Ranch/High001 COVER.JPG",
      "/projects/High Alpine Mtn. Ranch/High002.jpg",
      "/projects/High Alpine Mtn. Ranch/High003.JPG",
      "/projects/High Alpine Mtn. Ranch/High004.jpg",
      "/projects/High Alpine Mtn. Ranch/High005.JPG",
      "/projects/High Alpine Mtn. Ranch/High006.JPG",
      "/projects/High Alpine Mtn. Ranch/High007.JPG",
      "/projects/High Alpine Mtn. Ranch/High008.JPG",
      "/projects/High Alpine Mtn. Ranch/High009.JPG",
      "/projects/High Alpine Mtn. Ranch/High0010.JPG"
    ]
  },
  {
    id: "mtn-mid-rise-condo",
    title: "Mtn. Mid-Rise Luxe Condo",
    subtitle: "Modern Mountain Luxury",
    category: "Residential Construction",
    coverImage: "/projects/Mtn. Mid-Rise Luxe Condo/Montana001 COVER.jpg",
    location: "Bozeman, MT",
    description: "Modern 2,800 sq ft mountain condo with floor-to-ceiling windows, contemporary design, custom kitchen, spa bathrooms, and sustainable materials. 10-month completion.",
    duration: "10 Months",
    sqft: "2,800",
    role: "General Contractor",
    gallery: [
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana001 COVER.jpg",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana002.jpg",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana003.jpg",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana004.JPG",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana005.jpg",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana006.JPG",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana007.JPG",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana008.JPG",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana009.jpg",
      "/projects/Mtn. Mid-Rise Luxe Condo/Montana0010.jpg"
    ]
  },
  {
    id: "north-florida-renovation",
    title: "North Florida Renovation/Addition",
    subtitle: "Masterful Estate Expansion",
    category: "Residential Construction",
    coverImage: "/projects/north-florida/NScreenshot 2025-10-30 001316.png",
    location: "Jacksonville, FL",
    description: "Comprehensive 3,400 sq ft home renovation with 1,200 sq ft addition, new master suite, kitchen expansion, pool installation, and landscape redesign. 15-month project.",
    duration: "15 Months",
    sqft: "4,600",
    role: "General Contractor",
    gallery: [
      "/projects/north-florida/NScreenshot 2025-10-30 001316.png",
      "/projects/north-florida/NIMG_9178.jpg",
      "/projects/north-florida/NIMG_9179.jpg",
      "/projects/north-florida/NIMG_9180.jpg",
      "/projects/north-florida/NIMG_9182.jpg",
      "/projects/north-florida/NIMG_9184.jpg",
      "/projects/north-florida/NIMG_9185.jpg",
      "/projects/north-florida/NIMG_9890.jpg",
      "/projects/north-florida/NIMG_9892.jpg",
      "/projects/north-florida/NIMG_9893.jpg",
      "/projects/north-florida/NIMG_9894.jpg",
      "/projects/north-florida/NIMG_9895.jpg"
    ]
  },
  {
    id: "abaco-boat-house",
    title: "Abaco Luxe Boat House",
    category: "Residential Construction",
    coverImage: "/projects/Abaco Luxe Boat House/Homes Built BoatHouse Style at Bakers Bay.png",
    location: "Abaco, Bahamas",
    description: "2,000 sq ft waterfront boat house with 40-foot boat lift, entertainment deck, storm-resistant construction, generator system, and marine-grade materials.",
    sqft: "2,000",
    role: "Builder",
    gallery: [
      "/projects/Abaco Luxe Boat House/Homes Built BoatHouse Style at Bakers Bay.png",
      "/projects/Abaco Luxe Boat House/bahamas1.png"
    ]
  },
  {
    id: "carmel-forest-ocean",
    title: "Carmel Forest to Ocean View",
    category: "Residential Construction",
    coverImage: "/projects/Carmel Forest to Ocean View/Carmel001 COVER.JPG",
    location: "Carmel, CA",
    description: "4,200 sq ft coastal home with dramatic ocean views, sustainable materials, energy-efficient systems, and seamless indoor-outdoor living spaces.",
    sqft: "4,200",
    role: "General Contractor",
    gallery: [
      "/projects/Carmel Forest to Ocean View/Carmel001 COVER.JPG",
      "/projects/Carmel Forest to Ocean View/Carmel002.JPG",
      "/projects/Carmel Forest to Ocean View/Carmel003.JPG",
      "/projects/Carmel Forest to Ocean View/Carmel004.JPG",
      "/projects/Carmel Forest to Ocean View/Carmel005.JPG",
      "/projects/Carmel Forest to Ocean View/Carmel006.JPG"
    ]
  },

  // DESIGN/BUILD
  {
    id: "syracuse-house",
    title: "Syracuse House",
    category: "Design/Build",
    coverImage: "/projects/syracuse-cover.png",
    location: "Syracuse, NY",
    description: "Complete 2,500 sq ft design-build featuring comprehensive architectural plans through construction, custom cabinetry, and landscape design. 18-month project.",
    duration: "18 Months",
    sqft: "2,500",
    role: "Design-Build Lead",
    gallery: [
      "/projects/syracuse-final/syracuse-1.png",
      "/projects/syracuse-final/syracuse-2.png",
      "/projects/syracuse-final/syracuse-3.png",
      "/projects/syracuse-final/syracuse-4.png",
      "/projects/syracuse-final/syracuse-5.png",
      "/projects/syracuse-final/syracuse-6.png",
      "/projects/syracuse-final/syracuse-10.png",
      "/projects/syracuse-final/syracuse-11.png",
      "/projects/syracuse-final/syracuse-12.png",
      "/projects/syracuse-final/syracuse-20.png",
      "/projects/syracuse-final/syracuse-30.png"
    ]
  },
  {
    id: "south-coast-renovation",
    title: "South Coast Renovation",
    category: "Design/Build",
    coverImage: "/design/southcoast-kitchen/36 AFTER.JPG",
    location: "California Coast",
    description: "5,500 sq ft coastal property renovation with structural improvements, new decking, updated systems, modern interiors while preserving character. 20-month timeline.",
    duration: "20 Months",
    sqft: "5,500",
    role: "Design-Build Lead",
    gallery: [
      "/design/southcoast-kitchen/36 AFTER.JPG",
      "/design/southcoast-kitchen/11 Kitchen AFTER.jpg",
      "/design/southcoast-kitchen/12 Kitchen After.jpg",
      "/design/southcoast-kitchen/18 Living Rm AFTER.JPG",
      "/design/southcoast-kitchen/20 Living Dining AFTER.jpg",
      "/design/southcoast-kitchen/22 Living After.JPG",
      "/design/southcoast-kitchen/35 AFTER.JPG",
      "/design/southcoast-kitchen/45 AFTER.JPG"
    ]
  },
  {
    id: "carmel-valley-new",
    title: "Carmel Valley New",
    category: "Design/Build",
    coverImage: "/projects/carmel-valley-new/carmel_valley_new1 cover.png",
    location: "Carmel Valley, CA",
    description: "New 3,800 sq ft residence on 2-acre site with Mediterranean style, solar panels, water conservation, custom stonework. 16-month construction.",
    duration: "16 Months",
    sqft: "3,800",
    role: "Design-Build Lead",
    gallery: [
      "/projects/carmel-valley-new/carmel_valley_new1 cover.png",
      "/projects/carmel-valley-new/carmel_valley_new2.png",
      "/projects/carmel-valley-new/carmel_valley_new3.jpg",
      "/projects/carmel-valley-new/carmel_valley_new4.png",
      "/projects/carmel-valley-new/carmel_valley_new5.png"
    ]
  },
  {
    id: "pacific-grove-residential",
    title: "New Residential Construction",
    category: "Design/Build",
    coverImage: "/projects/pacific-grove/001 COVER.JPG",
    location: "Pacific Grove, CA",
    description: "2,700 sq ft new home with coastal architecture, sustainable building practices, energy-efficient systems, and local material sourcing.",
    sqft: "2,700",
    role: "Design-Build Lead",
    gallery: [
      "/projects/pacific-grove/001 COVER.JPG",
      "/projects/pacific-grove/002.JPG",
      "/projects/pacific-grove/003.png",
      "/projects/pacific-grove/004.png",
      "/projects/pacific-grove/005.JPG",
      "/projects/pacific-grove/006.JPG",
      "/projects/pacific-grove/007.JPG",
      "/projects/pacific-grove/008.JPG",
      "/projects/pacific-grove/009.JPG",
      "/projects/pacific-grove/0010.JPG",
      "/projects/pacific-grove/0011.JPG"
    ]
  },
  {
    id: "laguna-grande-commercial",
    title: "Laguna Grande Spanish Revival",
    category: "Design/Build",
    coverImage: "/projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png",
    location: "Fort Ord, CA",
    description: "6,000 sq ft commercial building with Spanish Revival architecture, tile work, arched entries, courtyard, and mixed-use spaces.",
    sqft: "6,000",
    role: "Design-Build Lead",
    gallery: [
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png",
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_002_(2).png",
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_003.png",
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_004.png",
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_005.png",
      "/projects/laguna-grande/6.0 Laguna Grande Design Build_006.png"
    ]
  },

  // HOSPITALITY
  {
    id: "luxury-resort-pool",
    title: "Ultra Luxe Private Club Resort Pool",
    category: "Hospitality",
    coverImage: "/projects/hospitality-pool-cover.jpg",
    location: "Spring, TX",
    description: "15,000 sq ft aquatic complex with resort-style pools, swim-up bar, water features, cabanas, commercial kitchen, and luxury amenities. Includes extensive testimonial from client about collaboration with Smelek Design.",
    sqft: "15,000",
    role: "Master Builder & Lead Technical Designer",
    gallery: [
      "/projects/design-pool/hospitality-pool-cover.jpg",
      "/projects/design-pool/IMG_8906.MOV",
      "special://smelek-letter",
      "/projects/design-pool/IMG_0163.JPG",
      "/projects/design-pool/IMG_3332.jpg",
      "/projects/design-pool/IMG_3720.jpg",
      "/projects/design-pool/IMG_4721.jpg",
      "/projects/design-pool/IMG_4763.jpg",
      "/projects/design-pool/IMG_4886.jpg",
      "/projects/design-pool/IMG_5389.jpg",
      "/projects/design-pool/IMG_5405.jpg",
      "/projects/design-pool/IMG_5551.jpg",
      "/projects/design-pool/IMG_5690.jpg",
      "/projects/design-pool/IMG_5700.jpg",
      "/projects/design-pool/IMG_5970.jpg",
      "/projects/design-pool/IMG_6202.jpg",
      "/projects/design-pool/IMG_6335.jpg",
      "/projects/design-pool/IMG_6768.jpg",
      "/projects/design-pool/IMG_8896.jpg"
    ],
    processView: {
      beforeImage: "/projects/design-pool/IMG_0163.JPG", // Placeholder guess for 'before'
      afterImage: "/projects/design-pool/hospitality-pool-cover.jpg",
      beforeLabel: "Construction Phase",
      afterLabel: "Completed Resort"
    }
  },

  // CIVIL
  {
    id: "coastal-mountain-residence",
    title: "Coastal Mountain Residence",
    category: "Civil",
    coverImage: "/projects/coastal-mountain/001 COVER.JPG",
    location: "Big Sur, CA",
    description: "1.2-acre mountain site development with 320 linear feet of retaining walls, 900 sq ft custom garage, 3,000 cubic yards of earth movement, erosion control, and ocean view preservation.",
    role: "Civil Engineer & Contractor",
    gallery: [
      "/projects/coastal-mountain/001 COVER.JPG",
      "/projects/coastal-mountain/002.JPG",
      "/projects/coastal-mountain/003.JPG",
      "/projects/coastal-mountain/004.JPG",
      "/projects/coastal-mountain/005.JPG",
      "/projects/coastal-mountain/006.JPG",
      "/projects/coastal-mountain/007.jpg",
      "/projects/coastal-mountain/008.jpg",
      "/projects/coastal-mountain/009.JPG",
      "/projects/coastal-mountain/010.JPG",
      "/projects/coastal-mountain/011.JPG",
      "/projects/coastal-mountain/012.jpg"
    ]
  },
  {
    id: "carmel-knolls",
    title: "Carmel Knolls",
    category: "Civil",
    coverImage: "/projects/carmel-knolls/001.10 COVER.jpg",
    location: "Carmel, CA",
    description: "2,200 sq ft complete remodel with 1,400 sq ft composite decking, 18 windows, architectural improvements, foundation repairs, 200 linear feet of retaining walls.",
    sqft: "2,200",
    role: "Civil Engineer & Contractor",
    gallery: [
      "/projects/carmel-knolls/001.10 COVER.jpg",
      "/projects/carmel-knolls/002.JPG",
      "/projects/carmel-knolls/003.JPG",
      "/projects/carmel-knolls/004.JPG",
      "/projects/carmel-knolls/005.JPG",
      "/projects/carmel-knolls/006.JPG",
      "/projects/carmel-knolls/007.JPG",
      "/projects/carmel-knolls/008.JPG",
      "/projects/carmel-knolls/009.JPG"
    ]
  },
  {
    id: "coastal-restoration",
    title: "Coastal Restoration",
    category: "Civil",
    coverImage: "/projects/coastal-restoration/001 COVER.JPG",
    location: "California Coast",
    description: "Emergency coastal erosion project with geotechnical solutions, retaining walls, drainage systems, native plant restoration, and long-term erosion prevention.",
    role: "Project Manager",
    gallery: [
      "/projects/coastal-restoration/001 COVER.JPG",
      "/projects/coastal-restoration/002.JPG",
      "/projects/coastal-restoration/003.JPG",
      "/projects/coastal-restoration/004.JPG",
      "/projects/coastal-restoration/005.JPG",
      "/projects/coastal-restoration/006.JPG",
      "/projects/coastal-restoration/007.JPG"
    ]
  },
  {
    id: "civil-portfolio",
    title: "Civil Engineering Portfolio",
    category: "Civil",
    // Reuse existing images or placeholders if specific folder not found
    coverImage: "/projects/development-civil/development (1).jpg",
    location: "Multiple sites",
    description: "Collection showcasing 50,000+ cubic yards excavation, 2,500+ linear feet retaining walls, coastal restoration, hillside stabilization with soil nail/shotcrete, precision grading.",
    role: "Principal Engineer",
    gallery: [
      "/projects/development-civil/development (1).jpg",
      "/projects/development-civil/development (2).jpg"
    ]
  },
  {
    id: "hillside-restoration",
    title: "Hillside Restoration",
    category: "Civil",
    coverImage: "/projects/hillside-cleanup/001 COVER.jpg",
    location: "Carmel, CA",
    description: "1.5-acre hillside restoration removing 80 tons of debris, abandoned vehicles, construction waste. Includes erosion control, 200+ native plant specimens, drainage improvements.",
    role: "Project Lead",
    gallery: [
      "/projects/hillside-cleanup/001 COVER.jpg",
      "/projects/hillside-cleanup/002.JPG",
      "/projects/hillside-cleanup/003.JPG",
      "/projects/hillside-cleanup/004.JPG",
      "/projects/hillside-cleanup/005.JPG",
      "/projects/hillside-cleanup/006.jpg"
    ]
  },

  // RESIDENTIAL DEVELOPMENT
  {
    id: "beachfront-estate",
    title: "Beachfront Estate",
    subtitle: "The Ultimate Coastal Retreat",
    category: "Residential Development",
    coverImage: "/projects/beachfront_estate/beachfront-1.jpg",
    location: "Abaco, Bahamas",
    description: "2.5-acre beachfront estate with 6,800 sq ft main residence, 180 feet beach frontage, Category 5 hurricane resistance, infinity pool, guest cottage, dock facilities, solar backup, rainwater collection.",
    sqft: "6,800",
    role: "Developer & Builder",
    gallery: [
      "/projects/beachfront_estate/beachfront-1.jpg",
      "/projects/beachfront_estate/beachfront-2.jpg",
      "/projects/beachfront_estate/beachfront-3.jpg",
      "/projects/beachfront_estate/beachfront-4.jpg",
      "/projects/beachfront_estate/beachfront-5.jpg",
      "/projects/beachfront_estate/beachfront-6.jpg",
      "/projects/beachfront_estate/beachfront-7.jpg",
      "/projects/beachfront_estate/Whisk_063db5aec58ad9db29e44f785c5f8954eg.png",
      "/projects/beachfront_estate/Whisk_cdbe2863291f901a0e0430c0610d75f0eg.png"
    ]
  },
  {
    id: "development-civil",
    title: "Development Civil",
    category: "Residential Development",
    coverImage: "/projects/development-civil/development (1).jpg",
    location: "SE Texas",
    description: "45-acre master-planned residential development with infrastructure for 120+ home sites, 3.2 miles roads, complete utilities, 2 miles walking trails, community amenities, extensive drainage. 36-month phased completion.",
    duration: "36 Months",
    role: "Developer",
    gallery: [
      "/projects/development-civil/development (1).jpg",
      "/projects/development-civil/development (2).jpg",
      "/projects/development-civil/development (3).jpg",
      "/projects/development-civil/development (5).jpg",
      "/projects/development-civil/development (6).jpg",
      "/projects/development-civil/development (7).jpg",
      "/projects/development-civil/development (8).jpg",
      "/projects/development-civil/development (9).jpg",
      "/projects/development-civil/development (11).jpg",
      "/projects/development-civil/development (12).jpg"
    ]
  }
];


export const getProjectById = (id: string) => projects.find(p => p.id === id);
