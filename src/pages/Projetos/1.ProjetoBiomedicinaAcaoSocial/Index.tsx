import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Microscope,
  Users,
  BookOpen,
  ArrowRight,
  Award,
  GraduationCap,
} from "lucide-react";
//import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CtaVoluntarioEDoacao } from "@/components/cta-voluntario-e-doacao";

// --- DADOS DA PÁGINA ---
const pilares = [
  {
    icon: Microscope,
    title: "Pesquisa que Salva",
    description:
      "Conduzimos pesquisas aplicadas para combater doenças que afetam nossas comunidades, como diabetes e endemias locais.",
  },
  {
    icon: BookOpen,
    title: "Educação em Saúde",
    description:
      "Capacitamos futuros profissionais e levamos conhecimento à população através de workshops, palestras e materiais educativos.",
  },
  {
    icon: Users,
    title: "Ação Comunitária",
    description:
      "Realizamos mutirões de saúde, oferecendo exames básicos, diagnósticos e orientação para quem mais precisa.",
  },
];

const impactoNumeros = [
  { value: 5000, suffix: "+", label: "Pessoas Atendidas" },
  { value: 200, suffix: "+", label: "Voluntários Engajados" },
  { value: 30, suffix: "+", label: "Artigos Publicados" },
];

const ctaCardsData = [
  {
    icon: Microscope,
    title: "A História da Biomedicina",
    description:
      "Descubra a jornada da profissão que une pesquisa e cuidado, e entenda sua importância fundamental para a saúde no Brasil.",
    href: "/biomedicine",
    buttonText: "Explorar História",
  },
  {
    icon: GraduationCap,
    title: "O Legado de Dr. Dácio Campos",
    description:
      "Conheça a trajetória do pioneiro que inspirou nossa missão e dedicou sua vida para fortalecer a biomedicina e o serviço público.",
    href: "/dr-dacio-campos",
    buttonText: "Conhecer o Legado",
  },
  {
    icon: Award,
    title: "Prêmio de Excelência",
    description:
      "Veja como honramos o legado do Dr. Dácio Campos incentivando a próxima geração de cientistas através do nosso prêmio anual de pesquisa.",
    href: "/premio-dacio-campos",
    buttonText: "Ver o Prêmio",
  },
];

const img = "/images/biomedicinalab.png";

// --- Sub-componente StatCounter ---
const StatCounter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
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

// --- COMPONENTE PRINCIPAL ---
export function ProjetoBiomedicinaAcaoSocial() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION MELHORADA */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Laboratório moderno com foco em pesquisa biomédica"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-green-300">
              Projeto Biomedicina Ação Social
            </p>
            <h1 className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
              Ciência a Serviço da Comunidade
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
              Unimos o rigor da pesquisa biomédica à paixão por cuidar,
              transformando conhecimento em saúde e esperança para todos.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE INTRODUÇÃO E IMPACTO */}
      <section className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactoNumeros.map((item) => (
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
              Nosso trabalho se baseia em três frentes que se complementam para
              gerar um impacto real e duradouro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar) => (
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

      {/* 4. NOVA SEÇÃO DE CTA CARDS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Explore Nossas Raízes e Inspirações
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Nosso projeto é construído sobre uma base rica de história, legado
              e reconhecimento. Conheça as histórias que nos movem.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ctaCardsData.map((card) => (
              <Card
                key={card.title}
                className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-fit mx-auto bg-green-100 text-green-700 p-4 rounded-full mb-4">
                    <card.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button
                    asChild
                    className="w-full  bg-green-600 text-white hover:bg-green-700"
                  >
                    <Link to={card.href}>
                      {card.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaVoluntarioEDoacao />
      {/* 6. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24 bg-white">
        {/* ...seu código do FAQ... */}
      </section>
    </div>
  );
}
