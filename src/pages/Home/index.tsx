import { Link } from "react-router-dom";
//import { Heart, Users, CheckCircle } from "lucide-react";
//import { Stats } from "@/components/Stats";
//import { events } from "@/mock/eventos";
import { Button } from "@/components/ui/button";

import { ProjectsGrid } from "./Components/ProjectsGrid";
import { SectionSasus } from "./Components/SectionSasus";
import { SectionSobre } from "./Components/SectionSobre";
import { SectionPremioDrDacio } from "./Components/SectionPremioDrDacio";
//import { MissionInAction } from "./Components/MissionInAction";
import { SectionDoeMedicamento } from "./Components/SectionDoeMedicamento";
import { SectionProximosEventos } from "./Components/SectionProximosEventos";
import { SectionParceiros } from "./Components/SectionParceiros";
import { SectionTestemunhos } from "./Components/SectionTestemunhos";
import { SectionTampinha } from "./Components/SectionTampinhas";
import { SectionProgramaCuidar } from "./Components/SectionProgramaCuidar";
/*
//import { Slide } from "./components/Slide";
import CardLayout from "@/components/CardLayout";

const CardTextOurVision = [
  {
    title: "Nossa Missão",
    content:
      "A Biomedicina Ação Social trabalha para promover saúde através da prevenção e combate a diabetes e hipertensão em comunidades carentes. Nosso foco está em levar atendimento biomédico, nutricional e enfermagem de qualidade a pessoas que não têm acesso facilitado a serviços de saúde.",
    Icon: Heart,
  },
  {
    title: "Nossa Visão",
    content:
      "Sonhamos com um Brasil onde todas as comunidades, independentemente de sua localização ou condição socioeconômica, tenham acesso a informações e atendimento de saúde preventiva, reduzindo a incidência de doenças crônicas como diabetes e hipertensão.",
    Icon: CheckCircle,
  },
  {
    title: "Nossos Valores",
    content:
      "Acreditamos na dignidade humana, no respeito à diversidade e na importância de agir com ética e transparência. Valorizamos a solidariedade, a inclusão social e o compromisso com a melhoria da qualidade de vida das pessoas.",
    Icon: Users,
  },
];

*/

export function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 py-24 text-white md:py-36">
        {/* Padrão de fundo em grade */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 container px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-5xl drop-shadow-md">
            Instituto de Saúde Multiprofissional
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Atuamos com ações sociais, projetos de saúde preventiva e educação
            para comunidades em situação de vulnerabilidade. Acreditamos que o
            cuidado com a vida começa pelo acesso à informação, atendimento e
            dignidade.
          </p>

          {/* Botões de ação */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-5 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/doar">❤️ Apoiar Iniciativas</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-700 border-white hover:bg-white/90 text-lg px-8 py-5 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,160C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224V320H0Z"
            ></path>
          </svg>
        </div>
      </section>

      <ProjectsGrid />
      <SectionPremioDrDacio />
      <SectionTampinha />
      <SectionSobre />
      <SectionSasus />
      <SectionProgramaCuidar />
      <SectionProximosEventos />
      <SectionTestemunhos />
      <SectionParceiros />
      <SectionDoeMedicamento />

      {/* 
      
      <MissionInAction />
       
      <section className="py-8 flex flex-col items-center w-full">
        <h2 className="mb-4 text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-6xl drop-shadow-md  ">
          Nosso Impacto
        </h2>
        <Stats className="w-full p-8" events={events} />
      </section>
      

      <section className=" flex flex-col md:flex-row text-sm mb-16 p-3">
        {CardTextOurVision.map((item, index) => (
          <CardLayout
            key={index}
            title={item.title}
            content={item.content}
            Icon={item.Icon}
          />
        ))}
      </section>

      */}
    </div>
  );
}
