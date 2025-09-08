import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Heart } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

// Defina as constantes de dados aqui (como mostrado no Passo 1)
// Coloque estas constantes no topo do seu arquivo Navbar.tsx

const projetos = [
  {
    id: 1,
    nome: "Projeto Biomedicina Ação Social",
    href: "/projetos/biomedicina",
  },
  {
    id: 2,
    nome: "Projeto Enfermagem Ação Social",
    href: "/projetos/enfermagem",
  },
  {
    id: 3,
    nome: "Projeto Psicológia Ação Social",
    href: "/projetos/psicologia",
  },
  { id: 4, nome: "Projeto Farmácia Ação Social", href: "/projetos/farmacia" },
  {
    id: 5,
    nome: "Projeto Fisioterapia Ação Social",
    href: "/projetos/fisioterapia",
  },
  { id: 6, nome: "Projeto Nutrição Ação Social", href: "/projetos/nutricao" },
  {
    id: 7,
    nome: "Projeto Veterinária Ação Social",
    href: "/projetos/veterinaria",
  },
  { id: 8, nome: "Projeto Medicina Ação Social", href: "/projetos/medicina" },
  {
    id: 9,
    nome: "Projeto Acupuntura Ação Social",
    href: "/projetos/acupuntura",
  },
  {
    id: 10,
    nome: "Projeto Odontologia Ação Social",
    href: "/projetos/odontologia",
  },
];

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/eventos", label: "Eventos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-green-700">
              Ação Social
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Dropdown "Mega Menu" */}
            <motion.div
              onHoverStart={() => setIsDropdownOpen(true)}
              onHoverEnd={() => setIsDropdownOpen(false)}
              className="relative"
            >
              <button className="flex items-center bg-white text-gray-600 hover:text-green-700 transition-colors font-medium">
                <span>Projetos</span>
                <ChevronDown
                  className={`h-5 w-5 ml-1 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 5 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -left-1/2 mt-2"
                  >
                    <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-x-12 gap-y-4 w-max">
                      {projetos.map((projeto) => (
                        <a
                          key={projeto.id}
                          href={projeto.href}
                          className="block text-gray-700 hover:text-green-700 hover:bg-green-50 p-2 rounded-md transition-colors"
                        >
                          {projeto.nome}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Link SASUS com Tooltip */}
            <div className="relative group flex items-center">
              <a
                href="/sasus"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                SASUS
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2">
                  Sistema de Apoio ao Sistema Único de Saúde
                  <svg
                    className="absolute text-gray-800 h-2 w-full left-0 top-full"
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                  >
                    <polygon
                      className="fill-current"
                      points="0,0 127.5,127.5 255,0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de Doação e Ícone Mobile */}
          <div className="flex items-center space-x-4">
            <a
              href="/doacao"
              className="hidden md:flex items-center bg-yellow-400 text-yellow-900 font-bold py-2 px-5 rounded-full hover:bg-yellow-500 transition-colors shadow-sm"
            >
              <Heart className="h-5 w-5 mr-2" />
              Doação
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Componente do Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            projetos={projetos}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
