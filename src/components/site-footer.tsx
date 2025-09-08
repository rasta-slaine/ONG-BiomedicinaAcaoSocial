// src/components/SiteFooter.tsx

import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// --- DADOS DO FOOTER ---
// Manter os dados aqui facilita a manutenção

const logoUrl = "/images/logo/Logo_ong_new_semfundo_size2.png";
const ongName = "Instituto de Saúde Multiprofissional";
const ongSlogan =
  "Acreditamos que o cuidado com a vida começa pelo acesso à informação, atendimento e dignidade.";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/sasus", label: "SASUS" },
  { href: "/contato", label: "Contato" },
];

const projectLinks = [
  { href: "/projetos/biomedicina", label: "Biomedicina Ação Social" },
  { href: "/projetos/enfermagem", label: "Enfermagem Ação Social" },
  { href: "/projetos/psicologia", label: "Psicologia Ação Social" },
  { href: "/projetos/farmacia", label: "Farmácia Ação Social" },
  { href: "/projetos/fisioterapia", label: "Fisioterapia Ação Social" },
  // Adicione outros projetos se desejar
];
const programLinks = [
  { href: "/programa-cuidar", label: "Programa Cuidar" },
  { href: "/tampinha-do-bem", label: "Tampinha do Bem" },
  { href: "/doar-medicamentos", label: "Doação de Medicamentos" },
  { href: "/descarte-consciente", label: "Descarte Consciente" },
];

const socialLinks = [
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

const contactDetails = [
  { icon: MapPin, text: "Rua da Ação Social, 123, São Paulo - SP", href: "#" },
  { icon: Phone, text: "(11) 99999-8888", href: "tel:+5511999998888" },
  { icon: Mail, text: "contato@suaong.org", href: "mailto:contato@suaong.org" },
];

export function SiteFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e Social */}
          <div className="lg:col-span-1 space-y-4">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="font-bold text-lg">{ongName}</span>
            </a>
            <p className="text-sm text-gray-600">{ongSlogan}</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-green-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação e Projetos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Navegue</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Programas
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {programLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 3: Programas */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Nossos Projetos
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Entre em Contato
            </h3>
            <ul className="space-y-3 text-sm">
              {contactDetails.map((item) => (
                <li key={item.text} className="flex items-start">
                  <item.icon
                    size={18}
                    className="mt-1 mr-3 text-gray-400 flex-shrink-0"
                  />
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior Unificada */}
      <div className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} {ongName}. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link to="/privacidade" className="hover:text-gray-900">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-gray-900">
              Termos de Serviço
            </Link>
          </div>
          <p className="text-sm text-center text-gray-500">
            Desenvolvido por
            <a
              href="https://seulinkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 hover:underline"
            >
              &nbsp;Nathan Slaine
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
