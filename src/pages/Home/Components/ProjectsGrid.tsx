// src/components/ProjectsGrid.tsx

import React from "react";
import {
  Microscope,
  Stethoscope,
  BrainCircuit,
  FlaskConical,
  PersonStanding,
  Salad,
  Dog,
  HeartPulse,
  Target,
  BookOpen,
} from "lucide-react";

// --- DADOS DOS PROJETOS ---
// Centralize todas as informações aqui para facilitar a manutenção.
// Você pode mudar cores, ícones e textos facilmente.
const projectsData = [
  {
    id: 1,
    title: "Biomedicina Ação Social",
    href: "/projetos/biomedicina",
    Icon: Microscope,
    colorClass: "bg-green-600 hover:bg-green-700",
  },
  {
    id: 2,
    title: "Enfermagem Ação Social",
    href: "/projetos/enfermagem",
    Icon: Stethoscope,
    colorClass: "bg-teal-600 hover:bg-teal-700",
  },
  {
    id: 3,
    title: "Psicologia Ação Social",
    href: "/projetos/psicologia",
    Icon: BrainCircuit,
    colorClass: "bg-sky-600 hover:bg-sky-700",
  },
  {
    id: 4,
    title: "Farmácia Ação Social",
    href: "/projetos/farmacia",
    Icon: FlaskConical,
    colorClass: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    id: 5,
    title: "Fisioterapia Ação Social",
    href: "/projetos/fisioterapia",
    Icon: PersonStanding,
    colorClass: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 6,
    title: "Nutrição Ação Social",
    href: "/projetos/nutricao",
    Icon: Salad,
    colorClass: "bg-lime-600 hover:bg-lime-700",
  },
  {
    id: 7,
    title: "Veterinária Ação Social",
    href: "/projetos/veterinaria",
    Icon: Dog,
    colorClass: "bg-amber-600 hover:bg-amber-700",
  },
  {
    id: 8,
    title: "Medicina Ação Social",
    href: "/projetos/medicina",
    Icon: HeartPulse,
    colorClass: "bg-red-600 hover:bg-red-700",
  },
  {
    id: 9,
    title: "Acupuntura Ação Social",
    href: "/projetos/acupuntura",
    Icon: Target,
    colorClass: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    id: 10,
    title: "Odontologia Ação Social",
    href: "/projetos/odontologia",
    Icon: BookOpen,
    colorClass: "bg-blue-600 hover:bg-blue-700",
  },
];

// --- Sub-componente para o Card Individual ---
// Isso mantém o código principal mais limpo.
interface ProjectCardProps {
  id: number;
  title: string;
  href: string;
  Icon: React.ElementType;
  colorClass: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  href,
  Icon,
  colorClass,
}) => {
  return (
    <a
      href={href}
      className={`relative p-5 rounded-lg text-white flex flex-col justify-between h-48 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${colorClass}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl font-extrabold text-white/50">{id}</span>
        <h3 className="text-right text-base font-bold uppercase tracking-wider leading-tight w-2/3">
          {title.replace(" Ação Social", "")}
        </h3>
      </div>
      <div className="self-start">
        <Icon className="w-14 h-14 text-white/80" />
      </div>
    </a>
  );
};

// --- Componente Principal da Grade ---
export function ProjectsGrid() {
  return (
    <section className=" mt-[-100px] py-1 sm:py-24">
      <div className="container mx-auto">
        {/* Texto Introdutório */}
        <div className="max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Nossas Frentes de Atuação
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Nossos projetos são o coração da nossa missão. Cada um deles
            representa um compromisso com a saúde, o bem-estar e o
            desenvolvimento de nossas comunidades. Através da dedicação de
            nossos voluntários, transformamos conhecimento em ação direta e
            impacto social. Conheça as áreas em que atuamos:
          </p>
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
