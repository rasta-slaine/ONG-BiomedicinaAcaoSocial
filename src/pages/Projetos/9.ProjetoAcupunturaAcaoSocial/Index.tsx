import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { Target, Leaf, Accessibility } from "lucide-react"; // Ícones para Acupuntura

const acupunturaData: ProjectPageProps = {
  projectName: "Projeto Acupuntura Ação Social",
  heroTitle: "Equilíbrio e Alívio,<br/>Ao Alcance de Todos.",
  heroSubtitle:
    "Oferecemos os benefícios da medicina tradicional chinesa para o tratamento da dor crônica e do estresse em nossas comunidades.",
  heroImageUrl: "/images/Acupuntura_banner_img.png",
  impactStats: [
    { value: 2500, suffix: "+", label: "Sessões Realizadas" },
    { value: 40, suffix: "+", label: "Acupunturistas Voluntários" },
    { value: 85, suffix: "%", label: "dos Pacientes Relatam Melhora" },
  ],
  pillars: [
    {
      icon: Target,
      title: "Tratamento da Dor",
      description:
        "Focamos no alívio de dores crônicas, como dores na coluna, enxaquecas e fibromialgia, melhorando a qualidade de vida.",
    },
    {
      icon: Leaf,
      title: "Saúde Emocional",
      description:
        "Utilizamos a auriculoterapia e a acupuntura sistêmica para tratar sintomas de ansiedade, insônia e estresse.",
    },
    {
      icon: Accessibility,
      title: "Cuidado Integrativo",
      description:
        "Promovemos a acupuntura como uma terapia complementar segura e eficaz, que pode ser integrada aos tratamentos convencionais do SUS.",
    },
  ],
  faqData: [
    {
      question: "O tratamento com acupuntura é seguro?",
      answer:
        "Sim, todos os nossos voluntários são profissionais qualificados e utilizamos apenas materiais descartáveis e esterilizados, seguindo todas as normas de biossegurança.",
    },
    {
      question: "Quantas sessões são necessárias?",
      answer:
        "O número de sessões varia para cada pessoa e condição. Em nossas ações, geralmente oferecemos um ciclo inicial de tratamento e orientamos sobre a continuidade, quando necessário.",
    },
  ],
};

export function ProjetoAcupunturaAcaoSocial() {
  return <ProjectPageTemplate projectData={acupunturaData} />;
}
