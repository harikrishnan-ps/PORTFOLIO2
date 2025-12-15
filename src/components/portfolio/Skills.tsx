import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL"],
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: [
        "NLP",
        "LLMs",
        "RAG",
        "Deep Learning",
        "Model Evaluation",
        "Prompt Engineering",
        "Vector Databases",
      ],
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        "PyTorch",
        "TensorFlow",
        "LangChain",
        "Hugging Face",
        "Scikit-learn",
        "FAISS",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Git",
        "GitHub",
        "Jupyter",
        "Google Colab",
        "VS Code",
        "MySQL",
      ],
    },
    {
      icon: Lightbulb,
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Performance Optimization",
        "Database Systems",
        "ETL Pipelines",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.2)]"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 xl:h-7 xl:w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl xl:text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-muted text-foreground rounded-md text-xs xl:text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
