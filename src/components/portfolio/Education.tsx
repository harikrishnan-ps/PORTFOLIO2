import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 xl:py-24 bg-card/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)]">
            <CardContent className="p-6 xl:p-10">
              <div className="flex flex-col xl:flex-row xl:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 xl:h-10 xl:w-10 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-2">
                      Bachelor of Technology in Computer Science Engineering
                    </h3>
                    <p className="text-base xl:text-lg text-primary font-semibold">
                      Muthoot Institute of Technology and Science
                    </p>
                  </div>

                  <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-6 text-sm xl:text-base text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 xl:h-5 xl:w-5 text-primary" />
                      <span>2022 - 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 xl:h-5 xl:w-5 text-primary" />
                      <span>Kerala, India</span>
                    </div>
                  </div>

                  <p className="text-sm xl:text-base text-foreground/80 leading-relaxed pt-2">
                    Pursuing a comprehensive education in computer science with a focus on artificial 
                    intelligence, machine learning, and software engineering. Actively engaged in 
                    research projects and practical applications of AI/ML technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
