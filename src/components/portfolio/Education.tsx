import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Muthoot Institute of Technology and Science (MITS), Kochi",
      period: "2022 – 2026",
      location: "Kochi, Kerala, India",
      score: "7.85 CGPA",
      description:
        "Pursuing a comprehensive B.Tech in CSE with a minor degree in Mathematics. Active involvement in research projects, ML/AI development, and campus community initiatives.",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "K.P.M.H.S.S Poothotta",
      period: "2020 – 2022",
      location: "Ernakulam, Kerala, India",
      score: "96.5%",
      description:
        "Completed Higher Secondary education with outstanding academic performance in Science stream.",
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Hail Mary E.M.R.H.S.S Perumpally",
      period: "2019",
      location: "Kottayam, Kerala, India",
      score: "99.9%",
      description:
        "Completed Secondary School Certificate examination with near-perfect marks.",
    },
  ];

  return (
    <section id="education" className="py-16 xl:py-24 bg-card/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {educationList.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)]">
                <CardContent className="p-6 xl:p-8">
                  <div className="flex flex-col xl:flex-row xl:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="h-7 w-7 xl:h-8 xl:w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg xl:text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-base xl:text-lg text-primary font-semibold">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm xl:text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-foreground">{edu.score}</span>
                        </div>
                      </div>

                      <p className="text-sm xl:text-base text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
