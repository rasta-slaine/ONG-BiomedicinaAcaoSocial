import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { Stethoscope, BookHeart, ClipboardList } from "lucide-react"; // Ícones específicos para enfermagem

// 1. DEFINA OS DADOS ESPECÍFICOS PARA ESTA PÁGINA
const enfermagemData: ProjectPageProps = {
  projectName: "Projeto Enfermagem Ação Social",
  heroTitle: "Cuidado na<br/>Linha de Frente.", // Usamos <br/> para quebra de linha
  heroSubtitle:
    "Nossos voluntários de enfermagem levam atendimento humanizado, prevenção e acolhimento diretamente para a comunidade.",
  heroImageUrl: "/images/enfermagem_banner_img.png", // Crie uma imagem para esta página
  impactStats: [
    { value: 8000, suffix: "+", label: "Atendimentos Realizados" },
    { value: 150, suffix: "+", label: "Voluntários de Enfermagem" },
    { value: 50, suffix: "+", label: "Mutirões de Saúde" },
  ],
  pillars: [
    {
      icon: Stethoscope,
      title: "Atendimento Primário",
      description:
        "Oferecemos consultas de enfermagem, aferição de sinais vitais, curativos e triagem em nossas ações comunitárias.",
    },
    {
      icon: BookHeart,
      title: "Educação Preventiva",
      description:
        "Realizamos palestras e workshops sobre prevenção de doenças, primeiros socorros e cuidados com a saúde da família.",
    },
    {
      icon: ClipboardList,
      title: "Gestão de Saúde",
      description:
        "Apoiamos pacientes com doenças crônicas no acompanhamento de seus tratamentos e na adesão a um estilo de vida mais saudável.",
    },
  ],
  faqData: [
    {
      question: "Preciso ser enfermeiro(a) formado(a) para voluntariar?",
      answer:
        "Não necessariamente! Estudantes de enfermagem a partir do 4º semestre são muito bem-vindos e atuam sob supervisão. Também temos vagas para técnicos de enfermagem.",
    },
    {
      question:
        "Quais são as principais atividades de um voluntário de enfermagem?",
      answer:
        "As atividades incluem triagem de pacientes, aferição de sinais vitais, testes rápidos, curativos simples, orientação sobre saúde e auxílio na organização dos mutirões.",
    },
  ],
};

// 2. RENDERIZE O TEMPLATE COM OS DADOS
export function ProjetoEmfermagemAcaoSocial() {
  return <ProjectPageTemplate projectData={enfermagemData} />;
}
