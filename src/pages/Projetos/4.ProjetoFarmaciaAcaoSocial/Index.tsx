import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { FlaskConical, Pill, HelpCircle } from "lucide-react"; // Ícones para Farmácia

const farmaciaData: ProjectPageProps = {
  projectName: "Projeto Farmácia Ação Social",
  heroTitle: "Uso Correto,<br/>Saúde em Dobro.",
  heroSubtitle:
    "Promovemos o acesso e o uso consciente de medicamentos, garantindo segurança e eficácia nos tratamentos da comunidade.",
  heroImageUrl: "/images/Farmacia_banner_img.png",
  impactStats: [
    { value: 4500, suffix: "+", label: "Orientações Farmacêuticas" },
    { value: 120, suffix: "+", label: "Farmacêuticos Voluntários" },
    { value: 1000, suffix: "+", label: "Kits de Medicamentos Doados" },
  ],
  pillars: [
    {
      icon: Pill,
      title: "Dispensação Solidária",
      description:
        "Organizamos e distribuímos medicamentos doados, garantindo que cheguem de forma segura a quem realmente precisa.",
    },
    {
      icon: HelpCircle,
      title: "Orientação e Cuidado",
      description:
        "Oferecemos consultoria sobre o uso correto de medicamentos, interações medicamentosas e descarte consciente, evitando riscos à saúde.",
    },
    {
      icon: FlaskConical,
      title: "Atenção Farmacêutica",
      description:
        "Realizamos o acompanhamento farmacoterapêutico de pacientes com doenças crônicas, otimizando seus tratamentos.",
    },
  ],
  faqData: [
    {
      question: "Quais tipos de medicamentos vocês aceitam para doação?",
      answer:
        "Aceitamos medicamentos lacrados, dentro do prazo de validade e com bula. Não aceitamos medicamentos que necessitam de refrigeração ou de controle especial (tarja preta/vermelha).",
    },
    {
      question: "Como funciona o descarte de medicamentos?",
      answer:
        "Temos pontos de coleta específicos onde você pode levar medicamentos vencidos ou em desuso. Nós garantimos que eles sejam encaminhados para a incineração adequada, protegendo o meio ambiente.",
    },
  ],
};

export function ProjetoFarmaciaAcaoSocial() {
  return <ProjectPageTemplate projectData={farmaciaData} />;
}
