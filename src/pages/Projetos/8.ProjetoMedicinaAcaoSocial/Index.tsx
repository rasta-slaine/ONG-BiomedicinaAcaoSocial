import {
  ProjectPageTemplate,
  ProjectPageProps,
} from "@/components/ProjectPageTemplate";
import { HeartPulse, Stethoscope, ClipboardPlus } from "lucide-react"; // Ícones para Medicina

const medicinaData: ProjectPageProps = {
  projectName: "Projeto Medicina Ação Social",
  heroTitle: "Diagnóstico Certo,<br/>Futuro Saudável.",
  heroSubtitle:
    "Levamos atendimento médico qualificado e humanizado a comunidades com acesso restrito, focando no diagnóstico precoce e no cuidado integral.",
  heroImageUrl: "/images/Medicina_banner_img.png",
  impactStats: [
    { value: 7000, suffix: "+", label: "Consultas Médicas" },
    { value: 180, suffix: "+", label: "Médicos Voluntários" },
    { value: 1200, suffix: "+", label: "Encaminhamentos ao SUS" },
  ],
  pillars: [
    {
      icon: Stethoscope,
      title: "Atendimento Clínico Geral",
      description:
        "Oferecemos consultas com médicos generalistas para triagem, diagnóstico e tratamento de condições de saúde comuns.",
    },
    {
      icon: ClipboardPlus,
      title: "Saúde Preventiva",
      description:
        "Realizamos check-ups básicos e campanhas de conscientização sobre doenças crônicas como hipertensão e diabetes.",
    },
    {
      icon: HeartPulse,
      title: "Encaminhamento Especializado",
      description:
        "Atuamos como uma ponte para o SUS, identificando casos que necessitam de acompanhamento especializado e orientando o paciente.",
    },
  ],
  faqData: [
    {
      question: "Vocês oferecem atendimento com especialistas?",
      answer:
        "Nossas ações focam no atendimento com médicos generalistas (Clínica Geral e Saúde da Família). Casos que demandam especialistas são diagnosticados e encaminhados para a rede pública do SUS com um relatório.",
    },
    {
      question: "Estudantes de medicina podem participar?",
      answer:
        "Sim! Estudantes a partir do internato (últimos dois anos) são bem-vindos para atuar em atividades de triagem e educação em saúde, sempre sob a supervisão direta de um médico formado.",
    },
  ],
};

export function ProjetoMedicinaAcaoSocial() {
  return <ProjectPageTemplate projectData={medicinaData} />;
}
