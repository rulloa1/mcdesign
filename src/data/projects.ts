export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  coverImage: string;
  duration?: string;
  sqft?: string;
  bedrooms?: string;
  baths?: string;
  role?: string;
  description: string;
  features: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "miami-beach-condo",
    title: "S. Florida",
    subtitle: "High Rise Luxe Condo",
    category: "Residential Construction",
    location: "S. Florida",
    coverImage: "https://mcdesign.bio/assets/miami-beach-cover-BhM84cOz.webp",
    duration: "5 months",
    sqft: "4,200",
    bedrooms: "4",
    baths: "4",
    role: "Contractor Identification, Contract Negotiation, Project Management, Owner Representation, Property Management, International Furniture/Material/Art Receiving, Vehicle Management/Procurement/Shipping",
    description: "The existing beautiful stone floors were the foundation from which color was added through the use of bespoke millwork. This incredible scalloped paneling and built-ins with 1/4-round wood ends added a softer feel and sense of warmth. This special residence was renovated using specially sourced wood, smart home technology, and a millwork company specializing in the most prestigious hotels & resorts in the world. Oversight, management, and budgets had to be on point, as all work was performed at the beginning of 2021 during the height of the pandemic, yet suffered no delays because of world events.",
    features: ["Ocean Views", "Smart Home", "Chef's Kitchen", "Custom Millwork", "Italian Marble"],
    gallery: [
      "https://mcdesign.bio/assets/miami-beach-cover-BhM84cOz.webp",
      "https://mcdesign.bio/assets/miami-beach-1-ChqA9Kel.webp",
      "https://mcdesign.bio/assets/miami-beach-2-GXpQbHiq.webp",
      "https://mcdesign.bio/assets/miami-beach-3-C5M46NgP.webp",
      "https://mcdesign.bio/assets/miami-beach-4-opFZoWgF.webp",
      "https://mcdesign.bio/assets/miami-beach-5-CgV-xqH_.webp",
      "https://mcdesign.bio/assets/miami-beach-6-BtLHIGNA.webp",
      "https://mcdesign.bio/assets/miami-beach-7-BgR0ZPoB.webp",
    ],
  },
  {
    id: "high-alpine-ranch",
    title: "High Alpine Mtn.",
    subtitle: "Ranch Luxe Retreat",
    category: "Residential Construction",
    location: "Montana",
    coverImage: "https://mcdesign.bio/assets/alpine-ranch-cover-BjXjWziU.webp",
    duration: "24 months",
    sqft: "2,300",
    bedrooms: "5",
    baths: "2",
    role: "Owner Representation, Design Oversight, Contractor Procurement, Contract Negotiation, Project Management, Property Management",
    description: "Nestled in the high-alpine region of Montana, this 2,300 sq ft luxury ranch was brought to life over 24 months. We merged modern mountain architecture with rustic charm, using exposed timber and custom stone masonry to complement the panoramic landscape. The residence features high volume vaulted ceilings and floor-to-ceiling Custom Bronze Windows / Doors Crafted in Italy that dissolve the boundary between the interior and the breathtaking mountain views. A Mix of Radiant and a special custom forced air system to maximize all efficiencies, a gourmet kitchen with natural stone countertops, and custom millwork throughout ensure that a special comfort and elegance are felt in every corner.",
    features: ["Mountain Views", "Vaulted Ceilings", "Radiant Heating", "Stone Masonry", "Gourmet Kitchen"],
    gallery: [
      "https://mcdesign.bio/assets/alpine-ranch-cover-BjXjWziU.webp",
      "https://mcdesign.bio/assets/alpine-ranch-1-BCNPL2eq.webp",
      "https://mcdesign.bio/assets/alpine-ranch-2-BNdRr30k.webp",
      "https://mcdesign.bio/assets/alpine-ranch-3-pp0PE_s7.webp",
      "https://mcdesign.bio/assets/alpine-ranch-4-BtvzWvrd.webp",
      "https://mcdesign.bio/assets/alpine-ranch-5-BFklqzVX.webp",
      "https://mcdesign.bio/assets/alpine-ranch-6-CGxzfNMB.webp",
      "https://mcdesign.bio/assets/alpine-ranch-7-C0z-7E9P.webp",
    ],
  },
  {
    id: "syracuse-house",
    title: "Syracuse House",
    subtitle: "N. Utah Craftsman Estate",
    category: "Design Build",
    location: "N. Utah",
    coverImage: "https://mcdesign.bio/assets/syracuse-1-s4u68PjR.webp",
    duration: "18 months",
    sqft: "6,200",
    role: "Owner Representation, Project Management, Property Management",
    description: "This 6,200 sq ft craftsman-style estate is a testament to our integrated design-build approach. Over 18 months, we were integral in the creation of not just a home, but a complete two-acre landscape. The project's exterior is defined by over 400 tons of decorative stone, professional hardscaping, and dramatic low-voltage evening lighting. The design embraced drought-tolerant native plantings and elegant water features, creating a seamless transition between the built and natural environments. The separate 6 car garage/workshop was for antique restoration, and the two horse stall horse barn + storage rounded out the perfect home/estate/equestrian property.",
    features: ["Craftsman Style", "2-Acre Landscape", "Water Features", "400 Tons Stone"],
    gallery: [
      "https://mcdesign.bio/assets/syracuse-1-s4u68PjR.webp",
      "https://mcdesign.bio/assets/syracuse-2-DmE9D18h.webp",
      "https://mcdesign.bio/assets/syracuse-3-DPmLqEPi.webp",
      "https://mcdesign.bio/assets/syracuse-4-C207l-r1.webp",
      "https://mcdesign.bio/assets/syracuse-5-DKdJ63Ac.webp",
      "https://mcdesign.bio/assets/syracuse-6-b3gOX2UG.webp",
      "https://mcdesign.bio/assets/syracuse-7-DcjrNKjc.webp",
      "https://mcdesign.bio/assets/syracuse-8-C9ksvGXR.webp",
      "https://mcdesign.bio/assets/syracuse-9-DwTdCzFk.webp",
    ],
  },
  {
    id: "montana-condo",
    title: "Mtn. Mid-Rise Luxe",
    subtitle: "Condo",
    category: "Residential Construction",
    location: "Montana",
    coverImage: "https://mcdesign.bio/assets/montana-cover-B0CUOXQL.webp",
    duration: "8 months",
    sqft: "2,800",
    role: "Owner Representation, Project Management, Property Management",
    description: "In just eight months, this new 2,800 sq ft condo was completed as a new build, reimagined as a sophisticated mountain retreat. The new build focused on creating a sanctuary of modern comfort, featuring spa-inspired bathrooms with heated floors and contemporary finishes throughout. The selections were of a palette of Calacatta marble, and other fine marbles, many of which were installed as full slabs for floor to ceiling wall finishes, along with warm wood accents, and special hand-applied wall/ceiling finishes. The result is a space that perfectly balances modern living with the tranquility of a mountain setting.",
    features: ["Mountain Retreat", "Heated Floors", "Walnut & Brass", "Calacatta Marble"],
    gallery: [
      "https://mcdesign.bio/assets/montana-cover-B0CUOXQL.webp",
      "https://mcdesign.bio/assets/montana-1-CHncAjD9.webp",
    ],
  },
  {
    id: "hospitality-pool",
    title: "Ultra Luxe Private Club",
    subtitle: "Resort Pool",
    category: "Hospitality",
    location: "SE Texas",
    coverImage: "https://mcdesign.bio/assets/pool-design-1-C5ZyjJVV.webp",
    duration: "18 months",
    sqft: "189,000",
    role: "Owner Representation, Daily Project Management, Co-Design of Many Elements, Property Management",
    description: "We orchestrated the creation of a 189,000 gallon ultra-luxury private club amenity, a project that demanded the coordination of over 15 specialty trades. The centerpiece is a 189,000 gallon free-form pool with a swim-up bar, complemented by two beautiful Int. Design 1,200 sq ft pool houses. The design, inspired by 1950s New York smoking clubs, features imported travertine and 10' high solid mahogany wood walls and doors. This 18-month project delivered a resort-style oasis with professional landscaping, fire pits, and an outdoor kitchen, setting a new standard for private club luxury.",
    features: ["189,000 Gallon", "3-Acre Project", "Swim-up Bar", "Pool Houses", "Imported Travertine"],
    gallery: [
      "https://mcdesign.bio/assets/pool-design-1-C5ZyjJVV.webp",
    ],
  },
  {
    id: "southcoast-remodel",
    title: "South Coast Renovation",
    subtitle: "Complete Remodel",
    category: "Design Build",
    location: "Big Sur, CA",
    coverImage: "https://mcdesign.bio/assets/southcoast-cover-BXExeqou.webp",
    duration: "16 months",
    sqft: "3,800",
    role: "Owner Representative, Designer, Interior Designer, Builder, Project Manager, Owner Assignee during Photo Ad Campaign and Cinema Movie Shoots",
    description: "This 3,800 sq ft residence was completely reimagined through our design-build process. Over 16 months, we opened up the home to panoramic ocean views with new floor-to-ceiling windows and custom skylights. The interior transformation features white oak flooring, a gourmet kitchen with waterfall quartzite countertops, and spa-quality bathrooms with radiant heat. We undertook a complete structural renovation, culminating in a home that is as solid as it is beautiful, a true sanctuary on the Big Sur coast.",
    features: ["Ocean Views", "Skylights", "Waterfall Counters", "Radiant Heat"],
    gallery: [
      "https://mcdesign.bio/assets/southcoast-cover-BXExeqou.webp",
      "https://mcdesign.bio/assets/southcoast-2-DeMPGtN5.webp",
    ],
  },
  {
    id: "carmel-valley-new",
    title: "Carmel Valley New",
    subtitle: "Custom Residence",
    category: "Design Build",
    location: "Carmel Valley, CA",
    coverImage: "https://mcdesign.bio/assets/carmel-valley-new-cover-kkdCGJ0U.webp",
    description: "A custom residence designed and built with meticulous attention to detail in the beautiful Carmel Valley.",
    features: ["Custom Design", "Valley Views", "Modern Finishes"],
    gallery: [
      "https://mcdesign.bio/assets/carmel-valley-new-cover-kkdCGJ0U.webp",
    ],
  },
  {
    id: "north-florida-renovation",
    title: "North Florida Renovation",
    subtitle: "Addition",
    category: "Residential Construction",
    location: "N. Florida",
    coverImage: "https://mcdesign.bio/assets/north-florida-14-C6__PXWr.webp",
    description: "A comprehensive renovation and addition project in North Florida, enhancing living space and modernizing the residence.",
    features: ["Renovation", "Addition", "Modern Updates"],
    gallery: [
      "https://mcdesign.bio/assets/north-florida-14-C6__PXWr.webp",
    ],
  },
  {
    id: "bahamas-abaco-development",
    title: "Abaco Luxe Boat House",
    subtitle: "Construction",
    category: "Residential Construction",
    location: "Abaco, Bahamas",
    coverImage: "https://mcdesign.bio/assets/abaco-luxe-boathouse-cover-Bq2BTjrn.webp",
    description: "A luxurious boat house construction in the stunning Abaco, Bahamas, blending island living with modern amenities.",
    features: ["Waterfront", "Island Living", "Boat Access"],
    gallery: [
      "https://mcdesign.bio/assets/abaco-luxe-boathouse-cover-Bq2BTjrn.webp",
    ],
  },
  {
    id: "carmel-house-2",
    title: "Carmel Forest to Ocean View",
    subtitle: "Custom Addition",
    category: "Residential Construction",
    location: "Carmel By the Sea, CA",
    coverImage: "https://mcdesign.bio/assets/carmel-2-cover-E-8IMxc2.webp",
    description: "A custom addition that transformed this Carmel property, creating seamless indoor-outdoor living with stunning ocean views.",
    features: ["Ocean Views", "Forest Setting", "Custom Addition"],
    gallery: [
      "https://mcdesign.bio/assets/carmel-2-cover-E-8IMxc2.webp",
    ],
  },
  {
    id: "bigsur-mountain-remodel",
    title: "Coastal Mountain Residence",
    subtitle: "Civil Site Work",
    category: "Civil",
    location: "Big Sur, CA",
    coverImage: "https://mcdesign.bio/assets/bigsur-cover-UImfKzx4.webp",
    description: "Comprehensive civil site work for a coastal mountain residence in Big Sur, addressing the unique challenges of the terrain.",
    features: ["Site Work", "Mountain Terrain", "Coastal Location"],
    gallery: [
      "https://mcdesign.bio/assets/bigsur-cover-UImfKzx4.webp",
    ],
  },
  {
    id: "carmel-knolls",
    title: "Carmel Knolls",
    subtitle: "More Than Lipstick on an Old Lady!",
    category: "Civil",
    location: "Carmel, CA",
    coverImage: "https://mcdesign.bio/assets/carmel-knolls-cover-BoIPnL8T.webp",
    description: "A complete transformation that went far beyond cosmetic updates, revitalizing this Carmel property from the ground up.",
    features: ["Complete Renovation", "Civil Work", "Restoration"],
    gallery: [
      "https://mcdesign.bio/assets/carmel-knolls-cover-BoIPnL8T.webp",
    ],
  },
  {
    id: "coastal-restoration",
    title: "Coastal Restoration",
    subtitle: "Erosion Repair",
    category: "Civil",
    location: "Monterey Peninsula, CA",
    coverImage: "https://mcdesign.bio/assets/coastal-restoration-cover-Ckm2mqOo.webp",
    description: "Expert coastal erosion repair and restoration work on the Monterey Peninsula, protecting valuable properties from natural forces.",
    features: ["Erosion Control", "Coastal Engineering", "Environmental"],
    gallery: [
      "https://mcdesign.bio/assets/coastal-restoration-cover-Ckm2mqOo.webp",
    ],
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    subtitle: "Infrastructure Projects",
    category: "Civil",
    location: "CA, TX, NM, CO, MT",
    coverImage: "https://mcdesign.bio/assets/civil-cover-EhzLxEls.webp",
    description: "A portfolio of civil engineering and infrastructure projects spanning multiple states, demonstrating expertise in complex site development.",
    features: ["Infrastructure", "Multi-State", "Engineering"],
    gallery: [
      "https://mcdesign.bio/assets/civil-cover-EhzLxEls.webp",
    ],
  },
  {
    id: "bahamas-beachfront-estate",
    title: "Beachfront Estate",
    subtitle: "Residence",
    category: "Residential Development",
    location: "Abaco, Bahamas",
    coverImage: "https://mcdesign.bio/assets/beachfront-1-Ch1qoadh.webp",
    description: "A stunning beachfront estate development in Abaco, Bahamas, offering the ultimate in luxury island living.",
    features: ["Beachfront", "Estate", "Island Paradise"],
    gallery: [
      "https://mcdesign.bio/assets/beachfront-1-Ch1qoadh.webp",
    ],
  },
  {
    id: "development-civil",
    title: "Development Civil",
    subtitle: "Infrastructure",
    category: "Residential Development",
    location: "Various",
    coverImage: "https://mcdesign.bio/assets/development-1-NJfqkaXp.webp",
    description: "Civil development and infrastructure work for residential developments, creating the foundation for luxury communities.",
    features: ["Development", "Infrastructure", "Site Prep"],
    gallery: [
      "https://mcdesign.bio/assets/development-1-NJfqkaXp.webp",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
};

export const categories = [
  "All",
  "Residential Construction",
  "Design Build",
  "Civil",
  "Hospitality",
  "Residential Development",
];
