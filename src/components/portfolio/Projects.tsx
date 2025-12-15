import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Advanced AI Reasoning System",
      subtitle: "Enterprise LLM Application",
      description:
        "A sophisticated enterprise-level application leveraging Large Language Models for complex reasoning tasks. Features include multi-step reasoning, context-aware responses, and optimized prompt engineering.",
      highlights: [
        "Implemented advanced RAG architecture for enhanced context retrieval",
        "Optimized LLM performance with custom prompt engineering techniques",
        "Integrated vector databases for efficient semantic search",
        "Built scalable backend with real-time processing capabilities",
      ],
      technologies: ["Python", "LangChain", "FAISS", "PyTorch", "Streamlit"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
    {
      title: "Neural Data Analyst",
      subtitle: "AI-Powered Business Suite",
      description:
        "An intelligent business analytics platform that uses AI to automatically analyze data, generate insights, and create visualizations. Combines NLP with data science for automated reporting.",
      highlights: [
        "Developed NLP-based query interface for natural language data exploration",
        "Implemented automated insight generation using deep learning models",
        "Created interactive dashboards with real-time data processing",
        "Built ETL pipelines for seamless data integration",
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Hugging Face"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
  ];

  return (
    <section id="projects" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 xl:space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)]"
              >
                <CardHeader>
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl xl:text-3xl">{project.title}</CardTitle>
                      <p className="text-base xl:text-lg text-primary font-semibold">
                        {project.subtitle}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full xl:w-auto"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm xl:text-base text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-base xl:text-lg font-semibold mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-sm xl:text-base text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base xl:text-lg font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs xl:text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Projects;
