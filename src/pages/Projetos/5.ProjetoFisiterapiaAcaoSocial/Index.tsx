import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { PersonStanding, HeartPulse, Accessibility } from "lucide-react"; // Ícones para Fisioterapia

const fisioterapiaData: ProjectPageProps = {
  projectName: "Projeto Fisioterapia Ação Social",
  heroTitle: "Movimento<br/>é Qualidade de Vida.",
  heroSubtitle:
    "Reabilitamos, prevenimos lesões e promovemos a autonomia funcional, levando mais qualidade de vida para a rotina da comunidade.",
  heroImageUrl: "/images/Fisioterapia_banner_img.png",
  impactStats: [
    { value: 3000, suffix: "+", label: "Sessões de Fisioterapia" },
    { value: 90, suffix: "+", label: "Fisioterapeutas Voluntários" },
    { value: 500, suffix: "+", label: "Pacientes Reabilitados" },
  ],
  pillars: [
    {
      icon: PersonStanding,
      title: "Reabilitação Motora",
      description:
        "Atendemos pacientes com sequelas de AVC, lesões ortopédicas e dores crônicas, restaurando a função e aliviando a dor.",
    },
    {
      icon: HeartPulse,
      title: "Fisioterapia Preventiva",
      description:
        "Criamos grupos de exercícios terapêuticos e escolas de postura para idosos e trabalhadores, prevenindo lesões e promovendo o envelhecimento ativo.",
    },
    {
      icon: Accessibility,
      title: "Inclusão e Acessibilidade",
      description:
        "Oferecemos orientação para cuidadores e adaptamos atividades para pessoas com deficiência, promovendo maior autonomia e inclusão social.",
    },
  ],
  faqData: [
    {
      question: "Que tipo de atendimentos são oferecidos?",
      answer:
        "Focamos em fisioterapia ortopédica, neurológica (casos de menor complexidade), reumatológica e saúde do idoso. Não realizamos atendimentos de alta complexidade em nossas ações.",
    },
    {
      question: "Preciso de encaminhamento médico para ser atendido?",
      answer:
        "O ideal é que você traga um encaminhamento ou exames prévios, pois isso agiliza e qualifica o atendimento. No entanto, realizamos uma triagem inicial para todos que nos procuram.",
    },
  ],
};

export function ProjetoFisioterapiaAcaoSocial() {
  return <ProjectPageTemplate projectData={fisioterapiaData} />;
}
