import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep knowledge in NLP, LLMs, and reasoning systems",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end AI-powered applications",
    },
    {
      icon: Sparkles,
      title: "Innovation Focus",
      description: "Creating cutting-edge solutions with latest technologies",
    },
  ];

  return (
    <section id="about" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)]"
              >
                <CardContent className="p-6 xl:p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-primary/10">
                    <item.icon className="h-7 w-7 xl:h-8 xl:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg xl:text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm xl:text-base text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6 xl:p-10">
              <p className="text-base xl:text-lg text-foreground/90 leading-relaxed">
                I am Harikrishnan P S, a dedicated and ambitious Computer Science student with a strong 
                background in {" "}
                <span className="text-primary font-semibold">programming</span>,{" "}
                <span className="text-primary font-semibold">software development</span> and{" "}
                <span className="text-primary font-semibold">algorithm design</span>. 
                I'm passionate about utilizing cutting-edge technology to address complex problems and 
                innovate practical solutions. Continuously seeking opportunities to enhance knowledge in 
                computer science, and software engineering to make a significant impact in the tech industry and beyond.
              </p>
              <p className="text-base xl:text-lg text-foreground/90 leading-relaxed mt-4">
                With experience in both research and practical implementation, I specialize in 
                building AI-powered business solutions that leverage the latest advancements in 
                natural language processing, deep learning, and prompt engineering. I'm passionate 
                about creating intelligent systems that are not only powerful but also efficient 
                and user-friendly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
