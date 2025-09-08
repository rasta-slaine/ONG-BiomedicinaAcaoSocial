// src/pages/AboutPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Target, Handshake, Microscope, Beaker } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- DADOS COMPLETOS DA PÁGINA ---
// Edite todas as informações da sua ONG aqui facilmente

const teamMembers = [
  {
    name: "Anderson Do Nascimento",
    title: "Fundador e Diretor Executivo",
    bio: "Biomédico apaixonado por saúde pública, Anderson fundou a Ação Social para levar cuidado de qualidade a quem mais precisa.",
    image: "/images/Anderson Do Nascimento.png",
  },
  {
    name: "Dra. Maria Silva",
    title: "Diretora de Programas",
    bio: "Com vasta experiência em saúde pública, Maria garante que nossos projetos gerem um impacto real e duradouro.",
    image: "/images/pessoas/helena-costa.png",
  },
  {
    name: "Carlos Mendes",
    title: "Coordenador de Voluntários",
    bio: "Carlos é o coração da nossa rede de voluntários, conectando profissionais talentosos à nossa causa.",
    image: "/images/pessoas/carlos-andrade.png",
  },
  {
    name: "Juliana Pereira",
    title: "Gerente de Parcerias",
    bio: "Juliana constrói as pontes com parceiros estratégicos que compartilham nossa visão de um Brasil mais saudável.",
    image: "/images/pessoas/juliana-silva.png",
  },
];

const philosophyData = [
  {
    id: "missao",
    icon: Heart,
    title: "Nossa Missão",
    description:
      "Levar saúde de qualidade, educação preventiva e cuidado multiprofissional a comunidades em situação de vulnerabilidade, transformando conhecimento em bem-estar e dignidade.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: "visao",
    icon: Target,
    title: "Nossa Visão",
    description:
      "Ser referência em ação social na saúde, construindo um futuro onde todos, independentemente da condição socioeconômica, tenham acesso a um padrão de vida mais saudável e justo.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "valores",
    icon: Handshake,
    title: "Nossos Valores",
    description:
      "Nossas ações são guiadas pela Humanização, que coloca as pessoas no centro de tudo; pela Excelência, buscando a mais alta qualidade; e pela Colaboração, pois acreditamos que juntos somos mais fortes.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const statsData = [
  { value: "+5.000", label: "Pessoas Atendidas" },
  { value: "10+", label: "Projetos Ativos" },
  { value: "200+", label: "Voluntários Engajados" },
  { value: "4", label: "Estados de Atuação" },
];

const milestones = [
  {
    year: "2018",
    title: "O Início de um Sonho",
    description:
      "A ONG é fundada com a missão de levar saúde preventiva a comunidades carentes de São Paulo.",
  },
  {
    year: "2019",
    title: "Primeiros 1.000 Atendimentos",
    description:
      "Alcançamos nosso primeiro marco significativo, provando o impacto e a necessidade do nosso trabalho.",
  },
  {
    year: "2021",
    title: "Expansão Nacional",
    description:
      "Nossas ações ultrapassam as fronteiras de São Paulo, chegando a comunidades na Bahia, Pernambuco e Rio de Janeiro.",
  },
  {
    year: "2024",
    title: "Reconhecimento e Celebração",
    description:
      "Realizamos nossa 30ª Ação Social e homenageamos os voluntários que tornaram tudo isso possível.",
  },
];

const BackgroundIcons = () => (
  <div className="absolute inset-0 overflow-hidden">
    <Microscope className="absolute top-[10%] left-[5%] h-32 w-32 text-white/5 rotate-12" />
    <Beaker className="absolute bottom-[15%] right-[5%] h-32 w-32 text-white/5 -rotate-12" />
    <Heart className="absolute top-[20%] right-[10%] h-32 w-32 text-white/5" />
  </div>
);

// --- COMPONENTE PRINCIPAL DA PÁGINA "SOBRE NÓS" ---
export function PaginaSobre() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/voluntaria-em-acao.png"
            alt="Ação Comunitária"
            className="absolute top-0 left-0 w-1/2 h-1/2 object-cover opacity-30"
          />
          <img
            src="/images/cientista-no-laboratorio.png"
            alt="Pesquisa Biomédica"
            className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover opacity-30"
          />
          <img
            src="/images/criancas-sorrindo.png"
            alt="Comunidade feliz"
            className="absolute bottom-1/4 left-10 w-1/3 h-1/3 object-cover rounded-full opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 via-green-700/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Nossa Causa é a <span className="text-green-300">Saúde</span>.
            <br />
            Nossa Força é a <span className="text-green-300">União</span>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
            Somos o Instituto de Saúde Multiprofissional, um movimento que une
            ciência e cuidado para construir um futuro mais saudável e justo
            para as comunidades que servimos.
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO DE FILOSOFIA COM ABAS INTERATIVAS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              A Essência do Nosso Trabalho
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Nossa filosofia é a bússola que guia cada projeto, cada voluntário
              e cada parceria. É o porquê por trás de tudo o que fazemos.
            </p>
          </div>

          <Tabs defaultValue="missao" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-gray-200/75 rounded-lg">
              <TabsTrigger
                value="missao"
                className="py-3 text-base data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md"
              >
                Nossa Missão
              </TabsTrigger>
              <TabsTrigger
                value="visao"
                className="py-3 text-base data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md"
              >
                Nossa Visão
              </TabsTrigger>
              <TabsTrigger
                value="valores"
                className="py-3 text-base data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md"
              >
                Nossos Valores
              </TabsTrigger>
            </TabsList>

            {philosophyData.map((item) => (
              <TabsContent value={item.id} key={item.id} className="mt-8">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center text-center md:text-left gap-8"
                  >
                    <div
                      className={`flex-shrink-0 w-fit p-4 rounded-full ${item.bgColor}`}
                    >
                      <item.icon className={`w-12 h-12 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 3. SEÇÃO DE IMPACTO EM NÚMEROS */}
      <section className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-green-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO NOSSA JORNADA (TIMELINE) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Nossa Jornada
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Desde 2018, nossa história é escrita com a dedicação de
              voluntários e a confiança de parceiros. Cada ano representa um
              novo capítulo de crescimento e impacto.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></div>
            <div className="space-y-16">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex items-center group"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full ring-8 ring-white z-10 transition-colors duration-300 group-hover:bg-green-600"></div>
                  <div
                    className={`w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl ${
                      index % 2 === 0 ? "text-right" : "ml-auto text-left"
                    }`}
                  >
                    <p className="font-bold text-green-600 text-lg">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE EQUIPE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Nossa Liderança
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Conheça as pessoas que guiam nossa organização com paixão,
              expertise e um compromisso inabalável com a nossa missão.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">{member.title}</p>
                <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO FINAL DE CTA */}
      <section className="relative bg-green-600 text-white text-center py-20 md:py-24 overflow-hidden">
        <BackgroundIcons />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Faça Parte da Nossa História
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100">
            Juntos, podemos continuar escrevendo capítulos de esperança e saúde.
            Seja como voluntário, parceiro ou doador, seu apoio é fundamental.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/voluntariado"
              className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors"
            >
              Seja Voluntário
            </Link>
            <Link
              to="/doacao"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Faça uma Doação
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
