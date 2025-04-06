import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">YourLogo</h2>
            <p className="text-sm text-muted-foreground">
              We provide innovative solutions to help businesses grow and thrive
              in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/service-1"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Service 1
                </Link>
              </li>
              <li>
                <Link
                  to="/services/service-2"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Service 2
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category-1"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Category 1
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category-2"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Category 2
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category-3"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Category 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Business Street, Suite 100, City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-muted-foreground" />
                <a
                  href="tel:+11234567890"
                  className="text-muted-foreground hover:text-foreground"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-muted-foreground" />
                <a
                  href="mailto:info@yourcompany.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  info@yourcompany.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4 sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-bold">Newsletter</h2>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between px-4 py-6 md:flex-row">
          <p className="mb-4 text-center text-sm text-muted-foreground md:mb-0">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
