import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BiografiaDrDacio } from "./components/BiografiaDrDacio";
import { Faq, FaqData } from "@/components/Faq";
import { PremioDrDacio } from "./components/PremioDrDacio";

const faqInfo: FaqData[] = [
  {
    quest: "Quem pode participar do Prêmio Dr. Dácio Campos?",
    answer:
      "O prêmio é aberto a pesquisadores, estudantes de pós-graduação e profissionais da área da saúde que desenvolvam trabalhos científicos relevantes sobre diabetes. Não há restrições quanto à nacionalidade ou instituição de origem.",
  },
  {
    quest: " Quais tipos de pesquisa são aceitos?",
    answer:
      "São aceitas pesquisas científicas originais sobre diabetes em todas as suas formas, abrangendo desde estudos epidemiológicos até novas abordagens terapêuticas e tecnologias para diagnóstico e tratamento. As pesquisas podem ser básicas, clínicas ou aplicadas, desde que contribuam para o avanço do conhecimento sobre diabetes.",
  },
  {
    quest: "Qual é o valor da premiação?",
    answer:
      "O valor da premiação varia de acordo com a categoria e é divulgado anualmente no edital do prêmio. Além do valor monetário, os vencedores recebem um certificado, um troféu e têm a oportunidade de apresentar sua pesquisa em eventos científicos nacionais e internacionais.",
  },
  {
    quest: "Posso submeter mais de uma pesquisa?",
    answer:
      "Sim, é possível submeter mais de uma pesquisa, desde que sejam trabalhos diferentes e que cada um seja submetido separadamente, seguindo todas as diretrizes estabelecidas. No entanto, cada pesquisador só poderá ser premiado uma vez por edição do prêmio.",
  },
  {
    quest: "Como é feita a avaliação das pesquisas?",
    answer:
      "As pesquisas são avaliadas por um comitê científico composto por especialistas em diabetes e áreas correlatas. A avaliação é feita às cegas, ou seja, os avaliadores não têm acesso à identidade dos autores. Os critérios de avaliação incluem relevância científica e social, originalidade e inovação, metodologia e rigor científico, potencial de aplicação prática e impacto na qualidade de vida dos pacientes.",
  },
];

export function DrDacioCamposPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Dr. Dácio Campos
          </h1>
          <p className="text-xl leading-relaxed">
            O Pioneiro que Revolucionou a Biomedicina no Brasil
          </p>
        </div>
      </section>

      <BiografiaDrDacio />
      <PremioDrDacio />

      <Faq data={faqInfo} />

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Participe do Prêmio Dr. Dácio Campos
            </h2>
            <p className="mb-8 text-lg">
              Submeta sua pesquisa científica sobre diabetes e contribua para o
              avanço do conhecimento e para a melhoria da qualidade de vida dos
              pacientes. Sua pesquisa pode fazer a diferença!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/premio-dacio-campos/inscricao">
                  Inscreva sua Pesquisa
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
