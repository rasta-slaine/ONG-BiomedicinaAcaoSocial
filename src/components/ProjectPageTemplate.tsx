import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaVoluntarioEDoacao } from "@/components/cta-voluntario-e-doacao";

// --- TIPOS DE DADOS PARA O TEMPLATE ---
// Define a "forma" dos dados que cada página de projeto precisa ter
type Stat = { value: number; suffix: string; label: string };
type Pillar = { icon: React.ElementType; title: string; description: string };
type FAQ = { question: string; answer: string };

export interface ProjectPageProps {
  projectName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  impactStats: Stat[];
  pillars: Pillar[];
  faqData: FAQ[];
}

// --- Sub-componente StatCounter ---
const StatCounter = ({ value, suffix, label }: Stat) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-extrabold text-white">
        {inView && <CountUp end={value} duration={3} />}
        {suffix}
      </p>
      <p className="text-lg text-green-200 mt-2">{label}</p>
    </div>
  );
};

// --- O TEMPLATE EM SI ---
export function ProjectPageTemplate({
  projectData,
}: {
  projectData: ProjectPageProps;
}) {
  const {
    projectName,
    heroTitle,
    heroSubtitle,
    heroImageUrl,
    impactStats,
    pillars,
    faqData,
  } = projectData;

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImageUrl}
            alt={projectName}
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-green-300">
              {projectName}
            </p>
            <h1
              className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: heroTitle }}
            ></h1>
            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE INTRODUÇÃO E IMPACTO */}
      <section className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((item) => (
              <StatCounter key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PILARES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Nossos Pilares de Atuação
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Nosso trabalho se baseia em frentes que se complementam para gerar
              um impacto real e duradouro na comunidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pilar) => (
              <div
                key={pilar.title}
                className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-fit bg-green-100 text-green-700 p-4 rounded-full mb-5">
                  <pilar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pilar.title}
                </h3>
                <p className="text-gray-600">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaVoluntarioEDoacao />

      {/* 5. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Dúvidas Frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pl-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
