import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const HowToApply = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and complete your modeling portfolio with photos and information",
    },
    {
      number: "02",
      title: "Choose Category",
      description: "Select the modeling category that best fits your style and goals",
    },
    {
      number: "03",
      title: "Submit Application",
      description: "Upload your best photos and tell us why you should be selected",
    },
    {
      number: "04",
      title: "Await Selection",
      description: "Our judges will review applications and select the finalists",
    },
  ];

  return (
    <section id="apply" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Apply
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to start your modeling journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {step.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
