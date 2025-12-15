import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7736673917",
      href: "tel:+917736673917",
    },
    {
      icon: Mail,
      label: "Email",
      value: "harikrishnanpsofficial@gmail.com",
      href: "mailto:harikrishnanpsofficial@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ernakulam, Kerala, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harikrishnanpsofficial",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harikrishnan-ps",
    },
  ];

  return (
    <section id="contact" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 xl:mb-16">
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base xl:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or collaborations. 
              Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 xl:p-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 xl:h-6 xl:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs xl:text-sm font-semibold text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm xl:text-base text-foreground hover:text-primary transition-colors break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm xl:text-base text-foreground break-words">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 xl:p-8">
                <h3 className="text-lg xl:text-xl font-semibold mb-6 text-center">
                  Connect with Me
                </h3>
                <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="w-full xl:w-auto"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
