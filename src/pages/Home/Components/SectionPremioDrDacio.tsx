// src/components/TextHeroSection.tsx

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

import { BookOpen, Heart } from "lucide-react";

// --- DADOS DO COMPONENTE ---
// Edite a mensagem da sua ONG facilmente aqui
const headlineText = `Prêmio Dr.Dácio Campos`;
const subText = `
No  <span class="bg-green-100 text-green-800 font-medium px-2 py-1 rounded-md"> Instituto de Saúde Multiprofissional </span>, acreditamos que a colaboração entre diferentes áreas do conhecimento acelera a descoberta. 
Por isso, criamos o  <span class="bg-green-100 text-green-800 font-medium px-2 py-1 rounded-md"> Prêmio Biomedico Dr. Dácio Campos </span> para reconhecer e incentivar a excelência em pesquisas científicas sobre diabetes.
A premiação é destinada a profissionais e estudantes cujos trabalhos — desde estudos epidemiológicos a novas abordagens terapêuticas — 
contribuem significativamente para o avanço da ciência e para a criação de um futuro com mais saúde e bem-estar para os pacientes.

`;

// --- Animações ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada palavra
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function SectionPremioDrDacio() {
  return (
    <section className="bg-white">
      <div className="container mb-15 mx-auto px-4 min-h-[80vh] flex flex-col items-center justify-center text-center">
        {/* Manchete Anima da */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tighter"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={wordVariants}
            >
              {word} {/* Adiciona um espaço após cada palavra */}
            </motion.span>
          ))}
        </motion.h1>

        {/* Parágrafo de Apoio */}
        <motion.p
          className="mt-8 max-w-6xl text-lg md:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          // A prop dangerouslySetInnerHTML é usada aqui para renderizar os <span> de destaque
          dangerouslySetInnerHTML={{ __html: subText }}
        />

        {/* Botões de Chamada para Ação (CTA) */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <a
            href="/premio-dacio-campos-inscricao"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Submeta sua Pesquisa
          </a>
          <a
            href="/dr-dacio-campos"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <Heart className="mr-2 h-5 w-5" />
            Conheça Dr. Dácio Campos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
