import { Microscope, GraduationCap, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Faq, FaqData } from "@/components/Faq";
import { AreasDePesquisa } from "./components/AreasDePesquisa";
import { LinhaDoTempoAvancosBiomedicina } from "./components/LinhaDoTempoAvancosBiomedicina";
import { CarreirasBiomedicina } from "./components/CarreirasBiomedicina";
//import { ProjetosDePesquisaAtual } from "./components/ProjetosDePesquisaAtual";
import { Recursos } from "./components/Recursos";
import { CtaB } from "./components/Ctab";
//import { ProximosEventos } from "./components/ProximosEventos";

// Perguntas frequentes sobre biomedicina
const biomedicineFAQs: FaqData[] = [
  {
    quest: "O que é biomedicina?",
    answer:
      "Biomedicina é um ramo da ciência médica que aplica princípios biológicos e fisiológicos à prática clínica. Abrange o estudo do corpo humano, doenças e o desenvolvimento de tratamentos e tecnologias para melhorar os resultados de saúde. A biomedicina integra disciplinas como bioquímica, biologia molecular, genética, imunologia e farmacologia para compreender os mecanismos das doenças e desenvolver intervenções eficazes.",
  },
  {
    quest: "Como a pesquisa biomédica beneficia a sociedade?",
    answer:
      "A pesquisa biomédica leva a novos tratamentos, vacinas, ferramentas de diagnóstico e estratégias preventivas que melhoram a saúde humana e a longevidade. Contribuiu para o aumento da expectativa de vida, redução da mortalidade infantil, melhor gestão de doenças crônicas e melhoria da qualidade de vida para milhões de pessoas em todo o mundo. Além dos benefícios diretos à saúde, os avanços biomédicos também reduzem os custos de saúde, aumentam a produtividade e impulsionam o crescimento econômico através dos setores de saúde e biotecnologia.",
  },
  {
    quest: "Qual educação é necessária para uma carreira em biomedicina?",
    answer:
      "Os requisitos educacionais variam dependendo da trajetória de carreira específica. Posições de pesquisa geralmente exigem doutorado em ciências biomédicas ou áreas relacionadas. Funções clínicas podem exigir diploma de medicina (MD/DO) com treinamento especializado. Posições técnicas frequentemente requerem bacharelado ou mestrado em áreas como engenharia biomédica, biotecnologia ou ciências laboratoriais. Muitas posições também exigem educação continuada para se manter atualizado com tecnologias e metodologias em rápida evolução.",
  },
  {
    quest: "Quais são os maiores desafios da biomedicina hoje?",
    answer:
      "Os desafios atuais incluem o desenvolvimento de tratamentos para doenças complexas como câncer e Alzheimer, o combate à resistência antimicrobiana, garantir acesso equitativo a avanços médicos globalmente, gerenciar considerações éticas de novas tecnologias como edição genética e traduzir eficientemente descobertas laboratoriais em aplicações clínicas. Além disso, o campo enfrenta desafios no gerenciamento de dados, colaboração interdisciplinar e financiamento sustentável para iniciativas de pesquisa de longo prazo.",
  },
  {
    quest: "Como a tecnologia está mudando a biomedicina?",
    answer:
      "A tecnologia está transformando a biomedicina através de avanços como inteligência artificial para descoberta de medicamentos e diagnóstico por imagem, análise de big data para identificar padrões de doenças, medicina de precisão adaptada a perfis genéticos individuais, bioimpressão 3D de tecidos e órgãos, nanomedicina para entrega direcionada de medicamentos e telemedicina para prestação de cuidados de saúde remotos. Essas tecnologias estão acelerando a pesquisa, melhorando a precisão diagnóstica, permitindo tratamentos personalizados e expandindo o acesso à saúde.",
  },
];

export const BiomedicinePage = () => {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Biomedicina: Avançando a Saúde Através da Ciência
          </h1>
          <p className="text-xl leading-relaxed">
            Explorando a interseção entre ciência biológica e prática médica
            para desenvolver soluções inovadoras para desafios globais de saúde
            e melhorar vidas em todo o mundo.
          </p>
        </div>
      </section>

      {/* Seção de Introdução */}
      <section className="py-16 md:py-24">
        <div className="w-full flex flex-col justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              O que é Biomedicina?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              A biomedicina é um campo na interseção da biologia e medicina que
              aplica princípios biológicos e de ciências naturais à prática
              clínica. Abrange uma ampla gama de disciplinas, incluindo
              bioquímica, genética, imunologia, neurociência, farmacologia e
              engenharia biomédica.
            </p>
            <p className="text-lg text-muted-foreground">
              Por meio de pesquisa científica rigorosa e aplicação clínica, a
              biomedicina busca compreender o corpo humano, os mecanismos das
              doenças e desenvolver tratamentos inovadores, diagnósticos e
              estratégias preventivas para melhorar os resultados de saúde em
              todo o mundo.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 p-8">
            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Pesquisa & Descoberta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investigando processos biológicos fundamentais e mecanismos de
                  doenças para desenvolver novos conhecimentos e identificar
                  potenciais alvos terapêuticos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <Beaker className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Translação & Aplicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transformando descobertas científicas em aplicações práticas
                  como medicamentos, vacinas, dispositivos médicos e ferramentas
                  de diagnóstico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Educação & Treinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Preparando a próxima geração de cientistas biomédicos,
                  pesquisadores e profissionais de saúde para avançar o campo e
                  melhorar a saúde global.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AreasDePesquisa />
      <LinhaDoTempoAvancosBiomedicina />
      <CarreirasBiomedicina />
      <Recursos />

      <Faq data={biomedicineFAQs} />
      <CtaB />
    </div>
  );
};
