// src/pages/DrDacioCamposPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Building2,
  Award,
  Users,
  ArrowRight,
  BookOpen,
  Microscope,
} from "lucide-react";

// --- DADOS COMPLETOS DA PÁGINA ---
// Adicione os detalhes e imagens reais aqui

const biografia = {
  texto1:
    "Dr. Dácio Campos foi mais do que um biomédico; foi um verdadeiro arquiteto da profissão no Brasil. Nascido em Ribeirão Preto, sua jornada começou com uma curiosidade insaciável pela ciência e um profundo desejo de servir à comunidade. Formado em 1973 pela Universidade Barão de Mauá, ele fez parte de uma geração pioneira que não apenas praticou a Biomedicina, mas a defendeu, a estruturou e lutou por seu reconhecimento.",
  texto2:
    "Sua atuação extrapolou os limites do laboratório. Como presidente do Conselho Federal de Biomedicina, ele foi uma voz incansável pela valorização dos profissionais, estabelecendo padrões éticos e técnicos que guiam a área até hoje. No serviço público, como vereador, traduziu seu conhecimento técnico em políticas públicas eficazes, provando que a ciência e a gestão social podem e devem andar juntas. Seu legado é um testemunho de uma vida dedicada à saúde, à educação e ao bem-estar coletivo.",
};

const timelineData = [
  {
    ano: "1973",
    titulo: "Formatura Pioneira",
    descricao:
      "Gradua-se em Biomedicina pela Universidade Barão de Mauá, entre os primeiros do país.",
    icone: GraduationCap,
  },
  {
    ano: "1980",
    titulo: "Liderança no Conselho",
    descricao:
      "Assume um papel de liderança no Conselho Regional de Biomedicina (CRBM-1), iniciando sua luta pela classe.",
    icone: Building2,
  },
  {
    ano: "1992",
    titulo: "Início no Serviço Público",
    descricao:
      "É eleito vereador em Ribeirão Preto pela primeira vez, iniciando uma carreira de 4 mandatos dedicados à saúde.",
    icone: Users,
  },
  {
    ano: "2005",
    titulo: "Presidência do CFBM",
    descricao:
      "Alcança a presidência do Conselho Federal de Biomedicina, consolidando sua influência nacional.",
    icone: Award,
  },
  {
    ano: "2015",
    titulo: "Biomédico do Ano",
    descricao:
      "Recebe a prestigiosa homenagem do CRBM-1, coroando uma carreira de excelência e dedicação.",
    icone: Award,
  },
  {
    ano: "2024",
    titulo: "Criação do Prêmio",
    descricao:
      "Sua história inspira a criação do Prêmio Dr. Dácio Campos para incentivar a pesquisa em diabetes.",
    icone: Microscope,
  },
];

const galeriaImagens = [
  {
    src: "/images/dacio/dacio-formatura.jpg",
    alt: "Dr. Dácio Campos em sua formatura",
  },
  {
    src: "/images/dacio/dacio-conselho.jpg",
    alt: "Dr. Dácio discursando no Conselho de Biomedicina",
  },
  {
    src: "/images/dacio/dacio-vereador.jpg",
    alt: "Dr. Dácio em sessão na câmara de vereadores",
  },
  {
    src: "/images/dacio/dacio-homenagem.jpg",
    alt: "Dr. Dácio recebendo homenagem",
  },
];

const faqData = [
  /* ...seus dados do FAQ... */
];
const imgHero = "/images/dr-dacio-campos.jpg"; // Foto principal

// --- COMPONENTE PRINCIPAL ---
export function DrDacioCamposPage() {
  return (
    <div className="bg-white">
      {/* 1. BANNER / HERO SECTION MELHORADO */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center text-white">
        <div className="absolute inset-0">
          <img
            src="/images/dacio/dacio-palestra.jpg"
            alt="Dr. Dácio Campos em uma palestra"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 via-green-800/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg font-semibold text-green-200">
              Um Legado na Saúde Brasileira
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tighter drop-shadow-lg">
              Dr. Dácio Campos
            </h1>
            <blockquote className="mt-6">
              <p className="text-xl md:text-2xl text-green-100 italic">
                "A Biomedicina não é apenas uma profissão, é uma missão de vida
                a serviço da saúde e do bem-estar da nossa gente."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE BIOGRAFIA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Uma Vida Dedicada à Ciência e ao Cuidado
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {biografia.texto1}
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {biografia.texto2}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={imgHero}
                alt="Retrato Dr. Dácio Campos"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DA TIMELINE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Marcos de uma Carreira Brilhante
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Uma jornada de pioneirismo, liderança e serviço público que moldou
              a história da Biomedicina no Brasil.
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
      </section>

      {/* 4. SEÇÃO GALERIA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Momentos Memoráveis
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galeriaImagens.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DO PRÊMIO E CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            O Prêmio Dr. Dácio Campos
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Para honrar seu legado e incentivar a contínua busca pela
            excelência, criamos o Prêmio Dr. Dácio Campos. Uma iniciativa para
            reconhecer e premiar as pesquisas mais inovadoras na área de
            diabetes.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/premio-dacio-campos/inscricao">
              Submeta sua Pesquisa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 6. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24">
        {/* ... seu código do FAQ ... */}
      </section>
    </div>
  );
}
