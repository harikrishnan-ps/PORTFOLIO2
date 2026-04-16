import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Predictor",
      subtitle: "ML-Based Health Risk Analysis (2024)",
      description:
        "A Heart Disease Prediction System that analyzes user health data and estimates disease risk using Machine Learning. Features performance evaluation through accuracy metrics, R² score, and risk-based clustering insights.",
      highlights: [
        "Implemented Linear Regression and K-Means clustering for disease risk analysis",
        "Evaluated model performance using accuracy, R² score and cluster-based insights",
        "Built a clean web interface using HTML and CSS for user health data input",
      ],
      technologies: ["Python", "HTML", "CSS", "Linear Regression", "K-Means"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
    {
      title: "CampusConnect",
      subtitle: "Campus Collaboration Web Platform (2024)",
      description:
        "A web platform that enables collaboration, communication, and resource sharing within a campus. Supports real-time Q&A, event listings, and shared resources to foster peer-to-peer learning and efficient academic interaction.",
      highlights: [
        "Built real-time Q&A and event listing features for campus-wide interaction",
        "Integrated MongoDB for dynamic content and resource management",
        "Designed an intuitive UI with HTML, CSS, and JavaScript for seamless navigation",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "React + Vercel Deployment (2025)",
      description:
        "Developed and deployed a personal portfolio website using React with AI-assisted design support. Integrated Git-based version control and automated deployment on Vercel, implementing a CI/CD-like workflow.",
      highlights: [
        "Deployed on Vercel with automatic build and deployment on every code push",
        "Implemented Git-based version control for structured CI/CD-like workflow",
        "Used build logs for debugging and ensured smooth live deployment",
      ],
      technologies: ["React", "Vercel", "Git"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
    {
      title: "Detect ML",
      subtitle: "Android Malware Detection System (2025)",
      description:
        "An anomaly-based Android malware detection system that analyzes APKs using static features like API calls and intents. Enables lightweight, server-side malware detection without on-device processing.",
      highlights: [
        "Analyzed APKs using static features: API calls, permissions, and intents",
        "Evaluated with KNN, Random Forest, XGBoost, and LightGBM classifiers",
        "Built a web interface for uploading and detecting malware server-side",
      ],
      technologies: ["Python", "HTML", "CSS", "KNN", "Random Forest", "XGBoost", "LightGBM"],
      githubUrl: "https://github.com/harikrishnan-ps",
    },
    {
      title: "Fall Detector",
      subtitle: "Wearable Fall Detection System (2025)",
      description:
        "A wearable fall detection system that automatically identifies fall events of elderly individuals and alerts caregivers for better monitoring and healthcare assistance.",
      highlights: [
        "Integrated sensor data (accelerometer, gyroscope) to detect fall events in real time",
        "Used GPS module to transmit location on fall detection for caregiver alerts",
        "Built a Flutter mobile app for caregiver notifications and patient monitoring",
      ],
      technologies: ["Flutter", "Python", "Sensors", "GPS Module"],
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
