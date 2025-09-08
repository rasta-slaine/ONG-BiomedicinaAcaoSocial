import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Building2,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

const legadoData = [
  {
    icon: GraduationCap,
    title: "Pioneirismo Acadêmico",
    description:
      "Formado em 1973 pela Universidade Barão de Mauá, foi um dos primeiros a desbravar e a consolidar o campo da Biomedicina no Brasil.",
  },
  {
    icon: Building2,
    title: "Liderança Institucional",
    description:
      "Sua visão o levou à presidência do Conselho Federal de Biomedicina, onde lutou incansavelmente pela valorização da profissão.",
  },
  {
    icon: Users,
    title: "Serviço Público",
    description:
      "Eleito vereador por quatro mandatos em Ribeirão Preto, levou a pauta da saúde pública para a esfera política com integridade e dedicação.",
  },
  {
    icon: Award,
    title: "Reconhecimento e Inspiração",
    description:
      "Homenageado como Biomédico do Ano pelo CRBM-1, seu legado continua a inspirar novas gerações de cientistas e profissionais da saúde.",
  },
];

const faqData = [
  // Seus dados do FAQ aqui...
  {
    quest: "Quem pode participar do Prêmio Dr. Dácio Campos?",
    answer:
      "O prêmio é aberto a pesquisadores, estudantes de pós-graduação e profissionais da área da saúde que desenvolvam trabalhos científicos relevantes sobre diabetes.",
  },
  {
    quest: "Quais tipos de pesquisa são aceitos?",
    answer:
      "São aceitas pesquisas científicas originais sobre diabetes em todas as suas formas, abrangendo desde estudos epidemiológicos até novas abordagens terapêuticas e tecnologias.",
  },
  {
    quest: "Qual é o valor da premiação?",
    answer:
      "O valor da premiação varia e é divulgado anualmente no edital. Além do valor monetário, os vencedores recebem um certificado, um troféu e visibilidade.",
  },
  {
    quest: "Como é feita a avaliação das pesquisas?",
    answer:
      "As pesquisas são avaliadas por um comitê científico de especialistas de forma anônima, com base em critérios como relevância, originalidade e rigor metodológico.",
  },
];

const img = "/images/dr-dacio-campos.jpg";
const img2 = "/images/trofeu-premio.png";

// --- COMPONENTE PRINCIPAL ---
export function DrDacioCamposPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-green-600">
                Um Legado na Saúde Brasileira
              </p>
              <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tighter">
                Dr. Dácio Campos
              </h1>
              <blockquote className="mt-6 border-l-4 border-green-500 pl-4">
                <p className="text-xl md:text-2xl text-gray-600 italic">
                  "A Biomedicina não é apenas uma profissão, é uma missão de
                  vida a serviço da saúde e do bem-estar da nossa gente."
                </p>
              </blockquote>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-green-200 rounded-full transform -translate-x-4 translate-y-4"></div>
              <img
                src={img} // <<-- SUBSTITUA PELA FOTO
                alt="Retrato do Dr. Dácio Campos"
                className="relative w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO "PILares de um legado" */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Pilares de um Legado
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              A trajetória do Dr. Dácio Campos foi marcada por uma dedicação
              multifacetada à saúde, à ciência e à sociedade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legadoData.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-8 rounded-lg text-center transition-transform hover:-translate-y-2"
              >
                <div className="w-fit mx-auto bg-green-100 text-green-700 p-4 rounded-full mb-5">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DO PRÊMIO */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-900">
                O Prêmio Dr. Dácio Campos
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Para honrar seu legado e incentivar a contínua busca pela
                excelência, criamos o Prêmio Dr. Dácio Campos. Uma iniciativa
                para reconhecer e premiar as pesquisas mais inovadoras na área
                de diabetes, um campo pelo qual ele tinha grande apreço.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Acreditamos que, ao apoiar os cientistas de hoje, mantemos viva
                a chama do pioneirismo e da dedicação que o Dr. Dácio nos
                deixou.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className=" w-fit bg-green-600 text-white hover:bg-green-700"
                >
                  <Link to="/premio-dacio-campos/inscricao">
                    Submeta sua Pesquisa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={img2}
                alt="Troféu do Prêmio Dr. Dácio Campos"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Perguntas Frequentes sobre o Prêmio
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.quest}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pl-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
