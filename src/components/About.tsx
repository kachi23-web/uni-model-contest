import { Award, Globe, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Platform",
      description: "Connect with industry professionals and agencies worldwide",
    },
    {
      icon: Users,
      title: "Inclusive",
      description: "Open to all ages, sizes, and backgrounds - true diversity",
    },
    {
      icon: Award,
      title: "Expert Judges",
      description: "Renowned fashion industry leaders and casting directors",
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "Agency contracts, portfolios, and international exposure",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the Contest
          </h2>
          <p className="text-lg text-muted-foreground">
            The Universal Modeling Contest celebrates beauty in all its forms. We're seeking fresh faces who embody confidence, 
            professionalism, and unique style to represent the next generation of modeling talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
