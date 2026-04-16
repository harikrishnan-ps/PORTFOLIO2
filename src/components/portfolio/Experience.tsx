import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Audio & Visual Lead",
      organization: "MITS Media Club",
      period: "2022 - Present",
      description:
        "Leading the audio and visual operations of the MITS Media Club, overseeing content production and event media coverage for the institution.",
      responsibilities: [
        "Managed audio-visual setup and operations for college events and functions",
        "Led a team of media volunteers to capture and produce visual content",
        "Coordinated media coverage for technical fests, seminars, and college activities",
        "Maintained and operated AV equipment to ensure high-quality output",
      ],
    },
    {
      title: "Content Developer",
      organization: "µLearn MITS",
      period: "2022 - Present",
      description:
        "Contributing as a Content Developer at µLearn MITS, Kerala's largest student peer-learning community, creating educational content and supporting knowledge sharing among students.",
      responsibilities: [
        "Created structured educational content for peer learning and knowledge sharing",
        "Supported student learning initiatives through µLearn's community platform",
        "Contributed to workshops and collaborative learning sessions",
        "Assisted in building a knowledge-sharing ecosystem within the campus chapter",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 xl:py-24 bg-card/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-4 xl:left-8 top-0 bottom-0 w-0.5 bg-border hidden xl:block" />

            <div className="space-y-8 xl:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-4 xl:left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden xl:block" />

                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] xl:ml-20">
                    <CardContent className="p-6 xl:p-8">
                      <div className="flex flex-col xl:flex-row xl:items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <Briefcase className="h-6 w-6 xl:h-7 xl:w-7 text-primary" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-base xl:text-lg text-primary font-semibold mb-2">
                            {exp.organization}
                          </p>
                          <div className="flex items-center gap-2 text-sm xl:text-base text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm xl:text-base text-foreground/80 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-sm xl:text-base font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm xl:text-base text-foreground/80">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
