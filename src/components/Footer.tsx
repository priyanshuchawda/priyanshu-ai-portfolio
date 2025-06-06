
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/priyanshuchawda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/priyanshuchawda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 Priyanshu Chawda. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with 💻 by Priyanshu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
