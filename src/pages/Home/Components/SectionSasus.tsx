import { Microscope, Beaker, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Image = "/images/Block-img-1.png";

const headline = "Ação e Inovação: Fortalecendo o SUS para Todos";

const keyFacts = [
  "Através do nosso projeto SASUS (Sistema de Apoio ao SUS), unimos tecnologia e voluntariado para combater um dos maiores desafios da saúde pública: as longas filas de espera. ",
  "Nossa missão é democratizar o acesso a um atendimento digno e ágil, fortalecendo o sistema que pertence a cada brasileiro.",
];

const mainText = `
 Nossas equipes de profissionais voluntários oferecem atendimento complementar em especialidades de alta demanda, enquanto nossa plataforma online simplifica o agendamento de consultas. 
 Com a telemedicina, garantimos que a distância não seja uma barreira para o cuidado, otimizando recursos e levando saúde para quem mais precisa.
`;

const secondaryText = `
  Apoiamos o desenvolvimento de novos cientistas e fortalecemos a estrutura de saúde local, estabelecendo um padrão de excelência e sustentabilidade em nossas ações.
`;

export function SectionSasus() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1 items-center">
          {/* --- Coluna da Esquerda: O Bloco Gráfico --- */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[400px]  bg-green-600 rounded-2xl shadow-lg p-6 flex items-center justify-center overflow-hidden">
            {/* Padrão de fundo sutil */}
            <Microscope className="absolute -top-8 -left-10 h-32 w-32 text-white/10 rotate-12" />
            <Beaker className="absolute -bottom-10 -right-8 h-32 w-32 text-white/10 rotate-[-15deg]" />
            <Heart className="absolute bottom-1/2 right-1/4 h-24 w-24 text-white/10" />

            {/* Imagens Circulares */}
            <div className="relative w-full h-full">
              <img
                src={Image}
                alt="Biomedicina"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              ></img>
            </div>
          </div>

          {/* --- Coluna da Direita: O Conteúdo de Texto --- */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              {headline}
            </h1>

            <div className="mt-6 mb-8 w-24 h-1.5 bg-green-500 rounded-full"></div>

            <div className="bg-green-100 text-green-800 p-6 rounded-xl space-y-4">
              {keyFacts.map((fact, index) => (
                <p key={index} className="font-semibold">
                  {fact}
                </p>
              ))}
            </div>

            <div className="mt-8 text-gray-600 space-y-4 text-base leading-relaxed">
              <p>{mainText}</p>
              <p>{secondaryText}</p>
            </div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <a
                href="/sasus"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Faça Parte da Solução
              </a>
              <a
                href="/voluntariado"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <Heart className="mr-2 h-5 w-5" />
                Sou Profissional da Saúde
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
