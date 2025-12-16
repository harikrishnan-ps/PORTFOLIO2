import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 xl:space-y-8">
          <div className="space-y-3 xl:space-y-4">
            <h1 className="text-4xl xl:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Harikrishnan P S</span>
            </h1>
            <h2 className="text-xl xl:text-3xl font-semibold text-foreground/90">
              Software Developer
            </h2>
          </div>

          <p className="text-base xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing  in computer science, cybersecurity, and software engineering. 
            Passionate about building intelligent systems that solve real-world problems.
          </p>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full xl:w-auto"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="w-full xl:w-auto"
            >
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden xl:block"
            type="button"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
