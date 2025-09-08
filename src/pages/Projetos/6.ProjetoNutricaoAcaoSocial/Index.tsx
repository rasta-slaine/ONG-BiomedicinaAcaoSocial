import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { Salad, CookingPot, Leaf } from "lucide-react"; // Ícones para Nutrição

const nutricaoData: ProjectPageProps = {
  projectName: "Projeto Nutrição Ação Social",
  heroTitle: "Alimento<br/>que Nutre e Transforma.",
  heroSubtitle:
    "Promovemos a segurança alimentar e a educação nutricional, mostrando que comer bem é um ato de saúde, cultura e cuidado.",
  heroImageUrl: "/images/Nutricao_banner_img.png",
  impactStats: [
    { value: 6000, suffix: "+", label: "Orientações Nutricionais" },
    { value: 100, suffix: "+", label: "Nutricionistas Voluntários" },
    { value: 20, suffix: "+", label: "Oficinas Culinárias" },
  ],
  pillars: [
    {
      icon: Leaf,
      title: "Nutrição Clínica Social",
      description:
        "Oferecemos atendimento nutricional individualizado para gestantes, crianças com baixo peso, diabéticos e hipertensos.",
    },
    {
      icon: CookingPot,
      title: "Oficinas Culinárias",
      description:
        "Ensinamos na prática como preparar refeições saudáveis, saborosas e de baixo custo, valorizando os alimentos locais.",
    },
    {
      icon: Salad,
      title: "Segurança Alimentar",
      description:
        "Mapeamos famílias em situação de vulnerabilidade e atuamos na distribuição de alimentos, além de criar hortas comunitárias.",
    },
  ],
  faqData: [
    {
      question: "O atendimento nutricional é focado em emagrecimento?",
      answer:
        "Nosso foco principal é a saúde e a reeducação alimentar, tratando condições como desnutrição, diabetes e hipertensão. O emagrecimento pode ser uma consequência de um plano alimentar saudável, mas não é nosso objetivo primário.",
    },
    {
      question: "Como funcionam as oficinas de culinária?",
      answer:
        "São encontros práticos e divertidos, abertos à comunidade, onde nossos voluntários ensinam receitas e técnicas para aproveitar melhor os alimentos, evitando o desperdício.",
    },
  ],
};

export function ProjetoNutricaoAcaoSocial() {
  return <ProjectPageTemplate projectData={nutricaoData} />;
}
