import { Calendar, Clock } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "January 15, 2025",
      title: "Applications Open",
      description: "Start submitting your applications and portfolios",
    },
    {
      date: "March 1, 2025",
      title: "Application Deadline",
      description: "Last day to submit your contest entry",
    },
    {
      date: "March 15, 2025",
      title: "Finalists Announced",
      description: "Selected candidates will be notified via email",
    },
    {
      date: "April 20, 2025",
      title: "Final Competition",
      description: "Live event with runway show and winner announcement",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Important Dates
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendar with these key milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-elegant" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
