import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { BrainCircuit, MessageSquare, Users } from "lucide-react"; // Ícones para Psicologia

const psicologiaData: ProjectPageProps = {
  projectName: "Projeto Psicologia Ação Social",
  heroTitle: "Saúde Mental<br/>é Essencial.",
  heroSubtitle:
    "Oferecemos escuta qualificada, apoio emocional e ferramentas para o bem-estar mental, fortalecendo indivíduos e comunidades.",
  heroImageUrl: "/images/Psicologia_banner_img.png",
  impactStats: [
    { value: 2000, suffix: "+", label: "Acolhimentos Realizados" },
    { value: 80, suffix: "+", label: "Psicólogos Voluntários" },
    { value: 30, suffix: "+", label: "Grupos Terapêuticos" },
  ],
  pillars: [
    {
      icon: MessageSquare,
      title: "Acolhimento Individual",
      description:
        "Proporcionamos sessões de psicoterapia breve e plantão psicológico para acolher demandas emergenciais da comunidade.",
    },
    {
      icon: Users,
      title: "Grupos de Apoio",
      description:
        "Criamos espaços seguros para a partilha de experiências em grupos, abordando temas como ansiedade, luto e parentalidade.",
    },
    {
      icon: BrainCircuit,
      title: "Psicoeducação",
      description:
        "Realizamos rodas de conversa e palestras para desmistificar a saúde mental e promover o autoconhecimento e a resiliência.",
    },
  ],
  faqData: [
    {
      question: "Preciso ter CRP ativo para ser voluntário?",
      answer:
        "Sim, para os atendimentos individuais e em grupo, exigimos que o profissional ou estudante (em estágio) tenha seu registro ativo e regular junto ao Conselho Regional de Psicologia.",
    },
    {
      question: "Os atendimentos são sigilosos?",
      answer:
        "Absolutamente. Seguimos rigorosamente o código de ética profissional. Todo atendimento é confidencial, garantindo um ambiente seguro e de confiança para todos.",
    },
  ],
};

export function ProjetoPsicologiaAcaoSocial() {
  return <ProjectPageTemplate projectData={psicologiaData} />;
}
