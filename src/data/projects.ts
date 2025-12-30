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

// Recovered pool images from previous file version
const poolImages = [
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-6.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-7.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-8.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-9.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-11.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-12.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-13.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-14.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-16.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-17.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-18.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-19.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-21.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-22.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-23.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-24.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-25.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-26.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-27.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-28.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-29.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-30.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-31.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-32.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-33.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-34.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-35.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-36.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-37.webp",
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
