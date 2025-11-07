import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              UMC 2025
            </h3>
            <p className="text-secondary-foreground/80">
              Redefining the future of modeling with diversity and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#categories" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#apply" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Apply
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contest Rules
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 Universal Modeling Contest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
