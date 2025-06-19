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
const logoImage = "/images/logo-ong.jpg";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="flex items-center  px-7 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <img
              src={logoImage}
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="text-sm text-muted-foreground">
              Acreditamos que o cuidado com a vida começa pelo acesso à
              informação, atendimento e dignidade.
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
            <h2 className="text-lg font-bold">Links</h2>
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
            <h2 className="text-lg font-bold">Veja Mais</h2>
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
            <h2 className="text-lg font-bold">Entre Em Contato</h2>
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
              Assine nossa newsletter para receber atualizações e novidades.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Coloque seu Email..."
                className="bg-background"
              />
              <Button>Inscrever-se</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between px-4 py-6 md:flex-row">
          <p className="mb-4 text-center text-sm text-muted-foreground md:mb-0">
            © {new Date().getFullYear()} &nbsp;
            <span style={{ color: "oklch(0.723 0.219 149.579)" }}>
              BiomedicinaAçãoSocial.
            </span>
            &nbsp; Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">
              Politica de privacidade
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Termos de Serviço
            </Link>
            <Link to="/cookies" className="hover:text-foreground">
              Politica de Cookie
            </Link>
          </div>
        </div>
      </div>

      {/* Creator Bottom Footer */}
      <div className="border-t bg-muted/40">
        <div className="container flex flex-col items-center px-4 py-6 md:flex-row">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            Desenvolvido por
            <a
              href="https://seulink.com"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              &nbsp; Nathan Slaine
            </a>
          </p>
          <div className="flex flex-wrap justify-center p-3.5 gap-4 text-sm text-muted-foreground">
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
      </div>
    </footer>
  );
}
