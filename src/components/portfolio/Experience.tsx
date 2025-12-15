import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Open-Source Contributor",
      organization: "Various AI/ML Projects",
      period: "May 2025 - Aug 2025",
      description:
        "Contributing to open-source AI/ML projects, focusing on LLM applications and natural language processing tools.",
      responsibilities: [
        "Contributed to LangChain and Hugging Face ecosystem projects",
        "Implemented new features and bug fixes for AI/ML libraries",
        "Collaborated with global developer community on AI innovations",
        "Reviewed and improved documentation for better developer experience",
      ],
    },
    {
      title: "Software Development Intern",
      organization: "KeySoft",
      period: "May 2024 - Aug 2024",
      description:
        "Worked on developing and optimizing software solutions with a focus on AI integration and data processing.",
      responsibilities: [
        "Developed AI-powered features for business applications",
        "Optimized database queries and improved system performance",
        "Collaborated with cross-functional teams on product development",
        "Implemented automated testing and CI/CD pipelines",
      ],
    },
    {
      title: "Community Ambassador",
      organization: "Pregrad Research Community",
      period: "Apr 2023 - May 2023",
      description:
        "Promoted research culture and facilitated knowledge sharing among students interested in AI/ML and computer science research.",
      responsibilities: [
        "Organized workshops and seminars on AI/ML topics",
        "Mentored students in research methodologies and project development",
        "Built connections between students and research opportunities",
        "Created educational content on emerging AI technologies",
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
