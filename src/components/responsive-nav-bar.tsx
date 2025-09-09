// src/components/ResponsiveNavbar.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

// --- DADOS DO MENU ---
// Definidos aqui para fácil manutenção
const projetos = [
  {
    id: 1,
    nome: "Projeto Biomedicina Ação Social",
    href: "/biomedicina",
  },
  {
    id: 2,
    nome: "Projeto Enfermagem Ação Social",
    href: "/enfermagem",
  },
  {
    id: 3,
    nome: "Projeto Psicológia Ação Social",
    href: "/psicologia",
  },
  { id: 4, nome: "Projeto Farmácia Ação Social", href: "/farmacia" },
  {
    id: 5,
    nome: "Projeto Fisioterapia Ação Social",
    href: "/fisioterapia",
  },
  { id: 6, nome: "Projeto Nutrição Ação Social", href: "/nutricao" },
  {
    id: 7,
    nome: "Projeto Veterinária Ação Social",
    href: "/veterinaria",
  },
  { id: 8, nome: "Projeto Medicina Ação Social", href: "/medicina" },
  {
    id: 9,
    nome: "Projeto Acupuntura Ação Social",
    href: "/acupuntura",
  },
  {
    id: 10,
    nome: "Projeto Odontologia Ação Social",
    href: "/odontologia",
  },
];

const programas = [
  { href: "/programa-cuidar", label: "Programa Cuidar" },
  { href: "/tampinha-do-bem", label: "Tampinha do Bem" },
  { href: "/doar-medicamentos", label: "Doação de Medicamentos" },
  { href: "/descarte-consciente", label: "Descarte Consciente" },
];
const img_logo = "/images/logo/Logo_ong_new_semfundo_size2.png";

// --- SUB-COMPONENTE: MENU MOBILE ---
// Definido dentro do arquivo principal para ser autocontido
function MobileMenu({ onClose }: { onClose: () => void }) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 z-50 md:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-[400px] w-4/5 max-w-sm bg-white shadow-xl p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-green-700">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-white text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <motion.nav
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.a
            href="/"
            variants={itemVariants}
            className="p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
          >
            Início
          </motion.a>

          {/* SEÇÃO DE PROJETOS */}
          <div className="pt-2 mt-2 border-t bg-white">
            <h3 className="px-3 pt-2 text-sm font-semibold text-gray-500 uppercase bg-white">
              Projetos
            </h3>
            <div className="mt-1 space-y-1">
              {projetos.map((projeto) => (
                <motion.a
                  key={projeto.id}
                  href={projeto.href}
                  variants={itemVariants}
                  className="block p-3 text-lg text-gray-700 rounded-md bg-white hover:bg-gray-100"
                >
                  {projeto.nome
                    .replace("Projeto ", "")
                    .replace(" Ação Social", "")}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NOVA SEÇÃO DE PROGRAMAS */}
          <div className="pt-2 mt-2 border-t">
            <h3 className="px-3 pt-2 text-sm font-semibold text-gray-500 uppercase">
              Programas
            </h3>
            <div className="mt-1 space-y-1">
              {programas.map((programa) => (
                <motion.a
                  key={programa.label}
                  href={programa.href}
                  variants={itemVariants}
                  className="block p-3 text-lg text-gray-700 rounded-md hover:bg-gray-100"
                >
                  {programa.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* OUTROS LINKS */}
          <div className="pt-2 mt-2 border-t">
            <motion.a
              href="/sasus"
              variants={itemVariants}
              className="block p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              SASUS
            </motion.a>
            <motion.a
              href="/eventos"
              variants={itemVariants}
              className="block p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              Eventos
            </motion.a>
            <motion.a
              href="/transparencia"
              variants={itemVariants}
              className="block p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              Transparência
            </motion.a>
            <motion.a
              href="/sobre"
              variants={itemVariants}
              className="block p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              Sobre Nós
            </motion.a>
            <motion.a
              href="/contato"
              variants={itemVariants}
              className="block p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              Contato
            </motion.a>
          </div>

          <motion.a
            href="/doacao"
            variants={itemVariants}
            className="mt-8 w-full bg-yellow-400 text-yellow-900 font-bold py-3 px-5 rounded-full hover:bg-yellow-500 transition-colors shadow-sm text-center flex items-center justify-center"
          >
            <Heart className="h-5 w-5 mr-2" />
            Faça sua Doação
          </motion.a>
        </motion.nav>
      </motion.div>
    </motion.div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjetosOpen, setIsProjetosOpen] = useState(false);
  const [isProgramasOpen, setIsProgramasOpen] = useState(false); // Novo estado para o dropdown de programas

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex-shrink-0 flex items-center h-19 transition-opacity hover:opacity-80"
            >
              <img src={img_logo} alt="Logo" className="h-full w-auto" />
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                Início
              </a>

              {/* Dropdown Projetos */}
              <motion.div
                onHoverStart={() => setIsProjetosOpen(true)}
                onHoverEnd={() => setIsProjetosOpen(false)}
                className="relative"
              >
                <button className="flex items-center text-gray-600 hover:text-green-700 transition-colors font-medium">
                  <span>Projetos</span>
                  <ChevronDown
                    className={`h-5 w-5 ml-1 transition-transform duration-300 ${
                      isProjetosOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isProjetosOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 5 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2"
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

              {/* NOVO: Dropdown Programas */}
              <motion.div
                onHoverStart={() => setIsProgramasOpen(true)}
                onHoverEnd={() => setIsProgramasOpen(false)}
                className="relative"
              >
                <button className="flex items-center text-gray-600 hover:text-green-700 font-medium">
                  <span>Programas</span>
                  <ChevronDown
                    className={`h-5 w-5 ml-1 transition-transform duration-300 ${
                      isProgramasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isProgramasOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 5 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-max"
                    >
                      <div className="bg-white rounded-xl shadow-xl p-4 space-y-1">
                        {programas.map((programa) => (
                          <a
                            key={programa.label}
                            href={programa.href}
                            className="block text-gray-700 hover:text-green-700 hover:bg-green-50 p-3 rounded-md transition-colors text-sm font-semibold"
                          >
                            {programa.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <a
                href="/sasus"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                SASUS
              </a>
              <a
                href="/eventos"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                Eventos
              </a>
              <a
                href="/sobre"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                Sobre Nós
              </a>
              <a
                href="/contato"
                className="text-gray-600 hover:text-green-700 transition-colors font-medium"
              >
                Contato
              </a>
            </div>

            {/* Botão de Doação e Ícone Mobile */}
            <div className="flex items-center space-x-4">
              <a
                href="/doacao"
                className="hidden md:flex items-center bg-yellow-400 text-yellow-900 font-bold py-2 px-5 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105 shadow-sm"
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

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
