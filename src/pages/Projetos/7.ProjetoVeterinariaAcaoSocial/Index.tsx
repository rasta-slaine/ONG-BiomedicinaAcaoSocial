import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { Dog, Bird, Cat } from "lucide-react"; // Ícones para Veterinária

const veterinariaData: ProjectPageProps = {
  projectName: "Projeto Veterinária Ação Social",
  heroTitle: "Cuidado Animal,<br/>Saúde para Todos.",
  heroSubtitle:
    "Entendemos que a saúde dos animais está diretamente ligada ao bem-estar da comunidade. Oferecemos cuidado e orientação para os pets de quem mais precisa.",
  heroImageUrl: "/images/Veterinaria_banner_img.png",
  impactStats: [
    { value: 1500, suffix: "+", label: "Animais Atendidos" },
    { value: 60, suffix: "+", label: "Veterinários Voluntários" },
    { value: 400, suffix: "+", label: "Castrações Realizadas" },
  ],
  pillars: [
    {
      icon: Dog,
      title: "Atendimento Clínico Básico",
      description:
        "Realizamos consultas, vacinação e vermifugação para cães e gatos em comunidades carentes, prevenindo doenças.",
    },
    {
      icon: Cat,
      title: "Controle Populacional",
      description:
        "Promovemos mutirões de castração a baixo custo, uma ferramenta essencial para o controle de zoonoses e o bem-estar animal.",
    },
    {
      icon: Bird,
      title: "Guarda Responsável",
      description:
        "Educamos a população sobre a importância da guarda responsável, dos cuidados básicos de higiene e da prevenção contra maus-tratos.",
    },
  ],
  faqData: [
    {
      question: "Que tipo de animais vocês atendem?",
      answer:
        "Nosso foco principal é o atendimento de cães e gatos, que são os animais de companhia mais comuns nas comunidades que servimos. Não atendemos animais silvestres ou de grande porte.",
    },
    {
      question: "O serviço de castração é gratuito?",
      answer:
        "Realizamos os mutirões a um custo social, muito abaixo do mercado, para cobrir os custos de material. Em casos de extrema vulnerabilidade social, buscamos parceiros para subsidiar o procedimento.",
    },
  ],
};

export function ProjetoVeterinariaAcaoSocial() {
  return <ProjectPageTemplate projectData={veterinariaData} />;
}
