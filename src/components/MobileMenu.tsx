import { motion } from "framer-motion";
import { X, Heart } from "lucide-react";

// Interfaces para os tipos de dados
interface LinkItem {
  href: string;
  label: string;
}

interface Projeto {
  id: number;
  nome: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: LinkItem[];
  projetos: Projeto[];
  onClose: () => void;
}

export function MobileMenu({ navLinks, projetos, onClose }: MobileMenuProps) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
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
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-green-700">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <motion.nav
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-1"
        >
          {/* Links Principais */}
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={itemVariants}
              className="p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/sasus"
            variants={itemVariants}
            className="p-3 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
          >
            SASUS
          </motion.a>

          {/* Divisor */}
          <div className="pt-4 mt-4 border-t">
            <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase">
              Nossos Projetos
            </h3>
            <div className="mt-2 space-y-1">
              {projetos.map((projeto) => (
                <motion.a
                  key={projeto.id}
                  href={projeto.href}
                  variants={itemVariants}
                  className="block p-3 text-lg text-gray-700 rounded-md hover:bg-gray-100"
                >
                  {/* Nome do projeto simplificado para mobile */}
                  {projeto.nome
                    .replace("Projeto ", "")
                    .replace(" Ação Social", "")}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Botão de Doação */}
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
