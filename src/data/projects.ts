import { designAlbums } from "./design-albums";

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  gallery: string[];
  location: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  sqft?: string;
  gallons?: string;
  bedrooms?: string;
  baths?: string;
  processView?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
  };
}

// Pool images from local design folder
const poolImages = [
  "/design/pools/29088D41-20ED-451A-9478-B3F6A71E9EEF.JPG",
  "/design/pools/02DCFE45-E4A3-4045-A7A0-A35D00E2D661.JPG",
  "/design/pools/A6B04D66-07E6-4175-A5DE-53B5AEAE10D7.JPEG",
  "/design/pools/B51D7E23-55DF-4786-B213-AFF2E14D2C4C.jpg",
  "/design/pools/B5BC2910-FB6E-4C2B-9D67-F6DD6DB3DF47.JPG",
  "/design/pools/DACD2091-90E3-4F85-A4FF-21D26671BF8C (1).jpg",
  "/design/pools/E34A13CE-EEB5-4924-9D48-38E6AFB0D626.JPEG",
  "/design/pools/E67504A4-615C-4D44-944F-862A6840FA98.JPEG",
  "/design/pools/F5BFD0E6-840F-4048-870D-5C9056A45059.JPG",
  "/design/pools/F9AA058C-A210-4A58-92A1-6FE599C5EE18.JPG",
  "/design/pools/IMG_0163.JPG",
  "/design/pools/IMG_0166 2.JPG"
];

export const projects: Project[] = [
  // Manually reconstructed pool project
  {
    id: "pools-exterior-spa",
    title: "Pools & Exterior Spas",
    category: "Exterior",
    location: "California",
    description: "Luxury pools, infinity edges, and integrated spa environments showcasing modern design and relaxation.",
    coverImage: poolImages[0],
    gallery: poolImages,
  },
  {
    id: "north-florida-renovation",
    title: "North Florida Renovation/Addition",
    category: "Residential Construction",
    location: "N. Florida",
    description: "We revitalized this 3,600 sq ft home with a 1,200 sq ft addition over a 10-month period. Our comprehensive approach included a new roof, impact windows, and updated electrical and plumbing systems. The interior was completely refreshed, and our estate management services ensured a seamless coordination of all trades. The result is a home that is not only more spacious and modern but also fortified and meticulously detailed.",
    coverImage: "/design/n-florida/NIMG_9178.jpg",
    gallery: [
      "/design/n-florida/NIMG_9178.jpg",
      "/design/n-florida/NIMG_9179.jpg",
      "/design/n-florida/NIMG_9180.jpg",
      "/design/n-florida/NIMG_9182.jpg",
      "/design/n-florida/NIMG_9184.jpg",
      "/design/n-florida/NIMG_9185.jpg",
      "/design/n-florida/NIMG_9890.jpg",
      "/design/n-florida/NIMG_9892.jpg",
      "/design/n-florida/NIMG_9893.jpg",
      "/design/n-florida/NIMG_9894.jpg",
      "/design/n-florida/NIMG_9895.jpg"
    ],
    sqft: "3,600 (Orig) / 1,200 (Add)",
    role: "Contractor",
  },
  {
    id: "abaco-luxe-boat-house",
    title: "Abaco Luxe Boat House",
    category: "Residential Construction",
    location: "Abaco, Bahamas",
    description: "On the pristine shores of the Abaco Islands, we constructed an 1,800 sq ft luxury boat house in just six months. Built to withstand the Caribbean climate, this waterfront structure features hurricane-resistant construction and premium marine-grade finishes. Custom mahogany millwork and covered dock access provide a touch of elegance, creating a functional and beautiful gateway to the open water.",
    coverImage: "/design/pools/29088D41-20ED-451A-9478-B3F6A71E9EEF.JPG",
    gallery: ["/design/pools/29088D41-20ED-451A-9478-B3F6A71E9EEF.JPG"],
    sqft: "1,800",
    role: "Project Manager on a Foreign Country for US Owners",
  },
  {
    id: "carmel-forest-ocean",
    title: "Carmel Forest to Ocean View",
    category: "Custom Addition",
    location: "Carmel By the Sea, CA",
    description: "This project is a celebration of its stunning location, a coastal home that harmonizes with the natural beauty of the Carmel coastline. Our focus was on refined craftsmanship and thoughtful design, creating a space that feels both luxurious and deeply connected to its environment. The result is a home that is more than a structure; it is a serene retreat.",
    coverImage: "/design/exterior/cover.png",
    gallery: ["/design/exterior/cover.png"],
    role: "Designer, Builder, Project Manager",
  },
  {
    id: "coastal-mountain-residence",
    title: "Coastal Mountain Residence",
    category: "Civil Site Work",
    location: "Big Sur, CA",
    description: "Over 11 months, we reshaped a 1.2-acre mountain site in Big Sur, a project that required both heavy machinery and a delicate touch. We moved over 3,000 cubic yards of earth, constructed 320 linear feet of retaining walls, and built a 900 sq ft custom garage and workshop. Our work focused on erosion control and drainage systems, all while preserving the property's stunning ocean views and protecting the natural landscape.",
    coverImage: "/design/exterior/1.png",
    gallery: ["/design/exterior/1.png"],
    role: "Owner Representative, Designer, Builder, Project Manager, Permit Procurement",
    subtitle: "3,000 cu yds Earth Moved | 320 ln ft Retaining Walls",
  },
  {
    id: "s-florida-condo",
    title: "S. Florida",
    subtitle: "High Rise Luxe Condo",
    category: "Residential Construction",
    location: "S. Florida",
    description: "Over a 5 month time, the newest Smart-Home Technologies were obtained and installed, with most components not even available to the public, in this Country, yet. Custom scalloped Solid Wood Paneling, made from some very special and rare South American wood. The likes of which cannot be obtained in this country any more. Hand-picked craftsman, world-class millworkers, and some extremely talented craftsmen who installed hand-applied specialty wall finishes, all worked in perfect harmony, to deliver this one of a kind ocean-side, high-rise residence, on time, on budget, and with every aspect of this remodel being on point. The delivery was flawless and made-ready for a world renown Interior Designer, who had nothing but praise for the fit and finish, throughout. All of this was accomplished at the height of a tragic world events, when everywhere else, the world had come to a screeching halt. Our hand-picked, old-world style craftsman, and modern technologists seamlessly went about their work, without faltering. The rare wood was sourced from another millwork company with a tragic cancelled order during this tragic time period. Going the extra many, many miles to Source the wood material, and then stepping in to purchase the lot, allowed for many jobs to be saved. Some of the Solid wood panels were even bent, into ¼-rounds, using old-world wood bending techniques, to form the beautiful ends of the custom built-ins, in the Living Room. The residence was transformed from all white, to warm and beautiful. On Budget, On Schedule, and Perfectly On Point, thanks to a harmonious and incredible group of hand-picked craftsmen!",
    coverImage: "/design/interiors/cover.png",
    gallery: ["/design/interiors/cover.png"],
    sqft: "4,200",
    bedrooms: "4",
    baths: "4",
    role: "Contractor Identification/Contract Negotiation/Project Management, Owner Representation, Property Management, International Furniture/Material/Art Receiving, Vehicle/Management/Procurement/Shipping",
  },
  {
    id: "south-coast-renovation",
    title: "South Coast Renovation",
    category: "Complete Remodel",
    location: "Big Sur, CA",
    description: "This 3,800 sq ft residence was completely reimagined through our design-build process. Over 16 months, we opened up the home to panoramic ocean views with new floor-to-ceiling windows and custom skylights. The interior transformation features white oak flooring, a gourmet kitchen with waterfall quartzite countertops, and spa-quality bathrooms with radiant heat. We undertook a complete structural renovation, culminating in a home that is as solid as it is beautiful, a true sanctuary on the Big Sur coast.",
    coverImage: "/design/southcoast-kitchen/11 Kitchen AFTER.jpg",
    gallery: ["/design/southcoast-kitchen/11 Kitchen AFTER.jpg"],
    sqft: "3,800",
    role: "Project Manager, Owner Representative, Designer, Int. Designer, Builder, Property Manager, Owner Assignee - During Photo Ad Campaign and Cinema Movie Shoots",
  },
  {
    id: "carmel-valley-new",
    title: "Carmel Valley New",
    category: "Custom Residence",
    location: "Carmel Valley, CA",
    description: "In the heart of Carmel Valley, we crafted a 4,800 sq ft custom residence that is a dialogue between architecture and nature. This 20-month design-build project features exposed steel beams and floor-to-ceiling glass walls that frame the oak-studded landscape. We integrated the home with its surroundings through extensive site work and native habitat restoration, creating a dwelling that is both a part of and a tribute to the natural beauty of the valley.",
    coverImage: "/design/exterior/2.png",
    gallery: ["/design/exterior/2.png"],
    sqft: "4,800",
    role: "Designer, Builder, Project Manager, Civil Engineering Contractor",
  },
  // Map other design albums to projects to populate the site
  ...designAlbums.map(album => ({
    id: album.id,
    title: album.title,
    category: "Design",
    location: "Various Locations",
    description: album.description,
    coverImage: album.coverImage,
    gallery: album.images,
  }))
];

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};

export const categories = ["All", ...new Set(projects.map((project) => project.category))];
