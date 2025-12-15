import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "Dev-Clash 24-Hour Hackathon Participant",
      description:
        "Participated in an intensive 24-hour hackathon, developing innovative solutions under time constraints and collaborating with fellow developers.",
      year: "2024",
    },
    {
      icon: Trophy,
      title: "Open-Source AI/ML Developer",
      description:
        "Active contributor to open-source AI/ML projects, helping advance the community through code contributions, documentation, and collaboration.",
      year: "2024-2025",
    },
    {
      icon: Award,
      title: "Finalist, MaTPO Aptitude Idol 2025",
      description:
        "Recognized as a finalist in the MaTPO Aptitude Idol competition, demonstrating strong problem-solving and analytical skills.",
      year: "2025",
    },
  ];

  return (
    <section id="achievements" className="py-16 xl:py-24 bg-card/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] group"
              >
                <CardContent className="p-6 xl:p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-7 w-7 xl:h-8 xl:w-8 text-primary" />
                    </div>
                    <span className="text-xs xl:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg xl:text-xl font-bold text-foreground leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;
