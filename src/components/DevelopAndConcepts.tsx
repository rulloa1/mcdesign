import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const developmentConcepts = [
  {
    title: "Land Development",
    tags: ["Entitlements", "Infrastructure", "Planning"],
  },
  {
    title: "Residential Communities",
    tags: ["Master Plan", "Amenities", "HOA"],
  },
  {
    title: "Resort & Hospitality",
    tags: ["Mixed-Use", "Golf", "Private Clubs"],
  },
  {
    title: "Renovation & Repositioning",
    tags: ["Historic", "Adaptive Reuse", "Restoration"],
  },
];

const DevelopAndConcepts = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {developmentConcepts.map((concept, index) => (
        <Card key={index} className="bg-background border-border hover:border-gold/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-serif font-light">{concept.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {concept.tags.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-wider bg-secondary px-2 py-1 rounded-sm text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DevelopAndConcepts;
