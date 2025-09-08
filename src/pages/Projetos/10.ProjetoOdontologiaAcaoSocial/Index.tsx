import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { Book, Smile, Sparkles } from "lucide-react"; // Ícones para Odontologia

const odontologiaData: ProjectPageProps = {
  projectName: "Projeto Odontologia Ação Social",
  heroTitle: "Um Sorriso Saudável<br/>Abre Portas.",
  heroSubtitle:
    "Levamos saúde bucal para comunidades, focando na prevenção, no tratamento básico e na recuperação da autoestima através do sorriso.",
  heroImageUrl: "/images/odontologia_banner_img.png",
  impactStats: [
    { value: 5000, suffix: "+", label: "Procedimentos Realizados" },
    { value: 130, suffix: "+", label: "Dentistas Voluntários" },
    { value: 10000, suffix: "+", label: "Kits de Higiene Distribuídos" },
  ],
  pillars: [
    {
      icon: Sparkles,
      title: "Ações Preventivas",
      description:
        "Realizamos palestras sobre higiene bucal, aplicação de flúor e distribuição de kits de escovação para crianças e adultos.",
    },
    {
      icon: Book,
      title: "Atendimento Básico",
      description:
        "Em nossas unidades móveis, realizamos procedimentos como limpeza, restaurações simples e extrações de emergência.",
    },
    {
      icon: Smile,
      title: "Reabilitação do Sorriso",
      description:
        "Atuamos em parceria com clínicas para viabilizar tratamentos de maior complexidade, devolvendo a função e a autoestima aos pacientes.",
    },
  ],
  faqData: [
    {
      question: "Quais procedimentos são feitos nos mutirões?",
      answer:
        "Nossas ações focam em prevenção (profilaxia, flúor) e procedimentos de baixa complexidade, como restaurações e extrações simples. Casos complexos são avaliados e encaminhados.",
    },
    {
      question: "O atendimento é gratuito?",
      answer:
        "Sim, todos os atendimentos e materiais fornecidos durante nossos mutirões são totalmente gratuitos para a comunidade.",
    },
  ],
};

export function ProjetoOdontologiaAcaoSocial() {
  return <ProjectPageTemplate projectData={odontologiaData} />;
}
