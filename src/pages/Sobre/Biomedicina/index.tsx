// src/pages/HistoriaBiomedicinaPage.tsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Dna,
  FlaskConical,
  Microscope,
  Stethoscope,
  BrainCircuit,
  Syringe,
  Briefcase,
} from "lucide-react";

// --- DADOS DA PÁGINA ---
const timelineData = [
  {
    ano: "1928",
    titulo: "Descoberta da Penicilina",
    descricao:
      "Alexander Fleming descobre o primeiro antibiótico, revolucionando o tratamento de infecções bacterianas e inaugurando uma nova era na medicina.",
    icone: FlaskConical,
  },
  {
    ano: "1953",
    titulo: "A Estrutura do DNA",
    descricao:
      "Watson e Crick desvendam a estrutura de dupla hélice do DNA, abrindo as portas para a genética molecular e a engenharia genética.",
    icone: Dna,
  },
  {
    ano: "1983",
    titulo: "Invenção do PCR",
    descricao:
      "Kary Mullis desenvolve a Reação em Cadeia da Polimerase (PCR), uma técnica que permite amplificar pequenas amostras de DNA, transformando o diagnóstico e a pesquisa forense.",
    icone: Microscope,
  },
  {
    ano: "2003",
    titulo: "Projeto Genoma Humano",
    descricao:
      "A sequência completa do genoma humano é mapeada, oferecendo um roteiro sem precedentes para entender doenças e desenvolver medicinas personalizadas.",
    icone: BrainCircuit,
  },
  {
    ano: "2020",
    titulo: "Vacinas de mRNA",
    descricao:
      "O desenvolvimento e a implementação recorde de vacinas de RNA mensageiro contra a COVID-19 demonstram o poder da biotecnologia moderna.",
    icone: Syringe,
  },
];

const areasPesquisa = [
  {
    titulo: "Terapia Genética",
    descricao:
      "Corrigindo ou substituindo genes defeituosos para tratar doenças hereditárias na sua origem.",
  },
  {
    titulo: "Imunoterapia",
    descricao:
      "Utilizando o próprio sistema imunológico do corpo para combater doenças como o câncer.",
  },
  {
    titulo: "Medicina Regenerativa",
    descricao:
      "Desenvolvendo tecidos e órgãos em laboratório para substituir partes do corpo danificadas.",
  },
  {
    titulo: "Neurociência Computacional",
    descricao:
      "Mapeando o cérebro para entender e tratar distúrbios neurológicos e psiquiátricos.",
  },
];

const carreirasData = [
  {
    titulo: "Análises Clínicas",
    descricao:
      "Realiza exames laboratoriais essenciais para o diagnóstico e acompanhamento de doenças.",
  },
  {
    titulo: "Pesquisa Científica",
    descricao:
      "Atua na fronteira do conhecimento, buscando novas curas e entendimentos sobre a vida.",
  },
  {
    titulo: "Indústria Farmacêutica",
    descricao:
      "Desenvolve e testa novos medicamentos, garantindo sua segurança e eficácia.",
  },
  {
    titulo: "Genética Forense",
    descricao:
      "Aplica técnicas de análise de DNA para auxiliar em investigações criminais.",
  },
];

const MotionSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const img = "/images/Biomedicina_banner_img.png";

// --- COMPONENTE PRINCIPAL ---
export function BiomedicinePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center text-white">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Montagem de imagens representando a história da biomedicina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            A Jornada da Biomedicina
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
            Da descoberta de um fungo em uma placa de Petri à edição do código
            da vida. Explore a história que transformou a medicina e moldou o
            futuro da saúde humana.
          </p>
        </div>
      </section>

      {/* 2. INTRODUÇÃO "O QUE É" */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              A Ponte Entre a Ciência e a Vida
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Biomedicina é o campo da ciência que aplica os princípios da
              biologia e da química para a prática médica. É a força motriz por
              trás dos diagnósticos precisos, dos tratamentos inovadores e do
              nosso entendimento sobre o corpo humano.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Do microscópio ao sequenciador de DNA, o biomédico é o detetive
              que investiga as causas das doenças, o engenheiro que projeta
              novas terapias e o guardião da qualidade nos laboratórios que
              apoiam a saúde de todos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <Microscope className="w-10 h-10 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">Diagnóstico</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <Dna className="w-10 h-10 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">Pesquisa</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <Syringe className="w-10 h-10 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">Tratamento</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <Stethoscope className="w-10 h-10 mx-auto text-green-600 mb-2" />
              <p className="font-semibold">Prevenção</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE DE AVANÇOS */}
      <MotionSection className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Uma Jornada de Descobertas
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              A história da biomedicina é marcada por marcos que redefiniram os
              limites da medicina.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-1 bg-green-200"
              aria-hidden="true"
            ></div>
            <div className="space-y-12">
              {timelineData.map((item) => (
                <div
                  key={item.ano}
                  className="relative flex items-start md:items-center group"
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-green-200 flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-green-600">
                    <item.icone className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="w-full md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-md ml-12 md:ml-0 md:[&:nth-child(even)]:ml-auto">
                    <p className="font-bold text-green-600 text-lg">
                      {item.ano}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      {item.titulo}
                    </h3>
                    <p className="text-gray-500 mt-2">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 4. ÁREAS-CHAVE DE PESQUISA */}
      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Fronteiras da Pesquisa
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Hoje, a biomedicina avança em campos que antes pareciam ficção
              científica. Estas são algumas das áreas mais promissoras.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {areasPesquisa.map((area) => (
              <div
                key={area.titulo}
                className="bg-slate-50 p-8 rounded-lg border-l-4 border-green-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {area.titulo}
                </h3>
                <p className="text-gray-600">{area.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 5. CARREIRAS DO FUTURO */}
      <MotionSection className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Carreiras do Futuro, Hoje
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              A biomedicina oferece um leque diversificado de carreiras de alto
              impacto, essenciais para o ecossistema da saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {carreirasData.map((carreira) => (
              <div key={carreira.titulo} className="group [perspective:1000px]">
                <div className="relative h-48 w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-green-600 rounded-xl flex flex-col items-center justify-center p-6">
                    <Briefcase className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-xl font-bold text-white text-center">
                      {carreira.titulo}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-xl p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-gray-600">{carreira.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
