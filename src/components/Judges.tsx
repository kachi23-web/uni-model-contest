import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
    {
      name: "Sarah Martinez",
      role: "Fashion Director",
      agency: "Elite Model Management",
      expertise: ["Runway", "High Fashion"],
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      agency: "Vogue International",
      expertise: ["Editorial", "Photography"],
    },
    {
      name: "Aisha Johnson",
      role: "Casting Director",
      agency: "IMG Models",
      expertise: ["Commercial", "Brand Campaigns"],
    },
  ];

  return (
    <section id="judges" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Judges
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry experts who will evaluate and select the winners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">
                  {judge.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-1">
                {judge.name}
              </h3>
              <p className="text-primary font-semibold mb-1">{judge.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{judge.agency}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {judge.expertise.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
