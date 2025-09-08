import { Link } from "react-router-dom";
import { BrainCircuit, Target, Hotel, ArrowRight } from "lucide-react";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// --- DADOS DA PÁGINA ---
const areasDeCuidado = [
  {
    icon: BrainCircuit,
    title: "Apoio Psicológico",
    description:
      "Sessões de terapia e rodas de conversa para lidar com o estresse, a ansiedade e o burnout.",
  },
  {
    icon: Target,
    title: "Acupuntura",
    description:
      "Tratamentos para alívio de dores crônicas, enxaquecas e para o reequilíbrio energético do corpo.",
  },
  {
    icon: Hotel,
    title: "Estética e Bem-Estar",
    description:
      "Terapias de relaxamento, massagens e cuidados que renovam a autoestima e aliviam a tensão do dia a dia.",
  },
  // Adicione outras áreas que vocês oferecem
];

const comoFuncionaSteps = [
  {
    step: 1,
    title: "Acolhimento Inicial",
    description:
      "Você passará por uma consulta de acolhimento com um de nossos especialistas para entendermos suas necessidades.",
  },
  {
    step: 2,
    title: "Plano de Cuidado Personalizado",
    description:
      "Com base na conversa inicial, desenhamos uma jornada de cuidado única para você, integrando diferentes terapias.",
  },
  {
    step: 3,
    title: "Início do Tratamento",
    description:
      "Você inicia seus atendimentos com os profissionais voluntários de cada área recomendada, no seu tempo e ritmo.",
  },
];

const faqData = [
  {
    q: "Quem pode participar do Programa Cuidar?",
    a: "O programa é exclusivo para profissionais da saúde atuantes (médicos, enfermeiros, biomédicos, psicólogos, fisioterapeutas, etc.) e estudantes da área da saúde que atuam em estágios e voluntariado.",
  },
  {
    q: "Os atendimentos têm algum custo?",
    a: "Todos os atendimentos oferecidos através do Programa Cuidar são gratuitos, realizados por profissionais voluntários do nosso instituto como forma de retribuição e apoio à classe.",
  },
  {
    q: "Como meus dados são tratados?",
    a: "Garantimos sigilo e confidencialidade absolutos. Seus dados e o conteúdo das sessões são protegidos pelo código de ética de cada profissão envolvida.",
  },
];

const imag_banner = "/images/serene-health-professional.png";
const imag_cta = "/images/serene-background-image.png";

export function ProjetoProgramaCuidar() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}

      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imag_banner}
            alt="Profissional da saúde em momento de calma"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-green-300">
              Programa Cuidando de Quem Cuida
            </p>
            <h1 className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
              Sua Saúde,
              <br />
              Nossa Prioridade.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
              Um espaço de acolhimento e bem-estar integral, pensado
              exclusivamente para você, profissional da saúde, que dedica a vida
              a cuidar dos outros.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO "COMO FUNCIONA" */}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Sua Jornada de Cuidado em 3 Passos
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Criamos um processo simples e acolhedor para que você possa focar
              no que realmente importa: o seu bem-estar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {comoFuncionaSteps.map((step, index) => (
              <div key={step.step} className="relative px-4">
                <div className="w-20 h-20 mx-auto bg-green-100 text-green-700 flex items-center justify-center rounded-full text-3xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < comoFuncionaSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 w-1/2 h-1 border-t-2 border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO ÁREAS DE CUIDADO */}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Um Cuidado Integral para Você
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Nossa abordagem multiprofissional nos permite oferecer um leque de
              terapias e cuidados para atender você em todas as suas dimensões.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasDeCuidado.map((area) => (
              <div
                key={area.title}
                className="group relative p-1 bg-gradient-to-br from-green-200 to-white rounded-xl"
              >
                <div className="bg-white rounded-lg p-8 h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-fit bg-green-100 text-green-700 p-4 rounded-full mb-6">
                    <area.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE CTA (AGENDAMENTO) */}

      <section className="py-16 md:py-24 bg-white-50">
        <div className="container mx-auto px-4">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center bg-green-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Pronto(a) para Cuidar de Você?
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Agende sua consulta de acolhimento inicial e dê o primeiro passo
                na sua jornada de bem-estar. Um tempo dedicado exclusivamente a
                você.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50 font-bold text-lg py-4 px-8"
                >
                  <Link to="/programa-cuidar/agendamento">
                    Agendar meu Acolhimento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block h-full">
              <img
                src={imag_cta}
                alt="Ambiente calmo e acolhedor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Dúvidas Frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pl-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
