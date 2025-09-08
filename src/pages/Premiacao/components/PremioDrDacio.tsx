import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  FileText,
  Calendar,
  ArrowRight,
  Download,
  CheckCircle,
} from "lucide-react";

import CardLayout from "@/components/CardLayout";

const ProcessSteps = [
  {
    step: 1,
    title: "Inscrição",
    description:
      "Preencha o formulário de inscrição com seus dados pessoais e informações sobre sua pesquisa",
  },
  {
    step: 2,
    title: "Submissão",
    description:
      "Envie o documento com sua pesquisa científica sobre diabetes, seguindo as diretrizes estabelecidas",
  },
  {
    step: 3,
    title: "Avaliação",
    description:
      "Sua pesquisa será avaliada por um comitê de especialistas com base nos critérios estabelecidos",
  },
  {
    step: 4,
    title: "Premiação",
    description:
      "Os finalistas serão convidados para a cerimônia de premiação, onde os vencedores serão anunciados",
  },
];

const DetailsCard = [
  {
    title: "Cronograma",
    content:
      "Inscrições: 1º de março a 30 de junho\nAvaliação: julho a setembro\nAnúncio dos finalistas: outubro\nCerimônia de premiação: novembro (Dia Mundial do Diabetes)",
    Icon: Calendar,
  },
  {
    title: "Requisitos do Documento",
    content:
      "Formato: PDF\nExtensão: 15-30 páginas\nIdioma: Português ou Inglês\nEstrutura: Introdução, Metodologia, Resultados, Discussão, Conclusão e Referências",
    Icon: FileText,
  },
  {
    title: "Critérios de Avaliação",
    content:
      "Relevância científica e social\nOriginalidade e inovação\nMetodologia e rigor científico\nPotencial de aplicação prática\nImpacto na qualidade de vida dos pacientes",
    Icon: CheckCircle,
  },
];

export const PremioDrDacio = () => {
  return (
    <>
      <section className="w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 260"
          className=" -z-50 relative"
        >
          <path
            fill="#00B55C"
            d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,192C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" -z-50 relative"
        >
          <path
            fill="#00B55C"
            d="M0,320L48,288C96,256,192,192,288,154.7C384,117,480,107,576,85.3C672,64,768,32,864,26.7C960,21,1056,43,1152,48C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className=" mt-[-150px]">
          <div className="p-9 text-center">
            <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-4xl drop-shadow-md  ">
              Prêmio Biomedico Dr. Dácio Campos
            </h2>
            <p className="mt-10 pl-50 pr-50 text-center text-lg text-muted-foreground font-semibold z-50 relative">
              Em homenagem ao legado do Dr. Dácio Campos, criamos uma premiação
              anual para reconhecer e incentivar pesquisas científicas
              inovadoras na área de diabetes, contribuindo para o avanço do
              conhecimento e para a melhoria da qualidade de vida dos pacientes.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            height="auto"
            width="w-full"
            className="mt-[-160px]"
          >
            <path
              fill="#00B55C"
              d="M0,32L60,80C120,128,240,224,360,272C480,320,600,320,720,282.7C840,245,960,171,1080,122.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
          <div className="">
            <div className="bg-[#00B55C] py-2  text-white text-center">
              <section className="mb-8 space-y-4">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {
                    //<Microscope className="h-6 w-6 text-green-300" />
                  }
                </div>
                <h3 className="mb-3 text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-4xl drop-shadow-md  ">
                  Sobre a Premiação
                </h3>
                <p className="text-center text-lg text-muted-foreground font-semibold">
                  Reconhecendo a excelência em pesquisa científica sobre
                  diabetes
                </p>
              </section>
              <section className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  O Prêmio Biomedico Dr. Dácio Campos foi criado para reconhecer
                  pesquisas científicas inovadoras na área de diabetes,
                  abrangendo desde estudos epidemiológicos até novas abordagens
                  terapêuticas e tecnologias para diagnóstico e tratamento.
                </p>
                <p className="text-lg text-muted-foreground">
                  A premiação é aberta a pesquisadores, estudantes de
                  pós-graduação e profissionais da área da saúde que desenvolvam
                  trabalhos científicos relevantes sobre diabetes, contribuindo
                  para o avanço do conhecimento e para a melhoria da qualidade
                  de vida dos pacientes.
                </p>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 text-lg font-bold">Categorias</h4>
                  <ul className="space-y-2 flex flex-row flex-wrap justify-center">
                    <li className="flex items-start p-2">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 bg-green-400 rounded-full bg-primary"></div>
                      </div>
                      <span>Pesquisa Básica em Diabetes</span>
                    </li>
                    <li className="flex items-start p-2">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 bg-green-400 rounded-full bg-primary"></div>
                      </div>
                      <span>Inovação em Diagnóstico e Tratamento</span>
                    </li>
                    <li className="flex items-start p-2">
                      <div className="mr-2 mt-1 rounded-full bg-green-100/10 p-1">
                        <div className="h-2 w-2  bg-green-400 rounded-full bg-primary"></div>
                      </div>
                      <span>Estudos Epidemiológicos e Saúde Pública</span>
                    </li>
                    <li className="flex items-start p-2">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 bg-green-400 rounded-full bg-primary"></div>
                      </div>
                      <span>Educação e Qualidade de Vida</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#00B55C"
                height="auto"
                width="w-full"
                d="M0,64L60,106.7C120,149,240,235,360,229.3C480,224,600,128,720,122.7C840,117,960,203,1080,202.7C1200,203,1320,117,1380,74.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
            <div className="mt-1">
              <section className="flex flex-col items-center space-y-4">
                <h2 className="mb-3 text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-4xl drop-shadow-md ">
                  Como Participar
                </h2>
                <p className="text-center text-lg text-muted-foreground font-semibold">
                  Submeta sua pesquisa científica sobre diabetes
                </p>
              </section>
              <section className="space-y-4 text-lg text-muted-foreground p-6">
                <p>
                  Para participar do Prêmio Biomedico Dr. Dácio Campos, os
                  candidatos devem submeter um documento contendo sua pesquisa
                  científica sobre diabetes, seguindo as diretrizes
                  estabelecidas pelo comitê organizador.
                </p>

                <div className="flex  items-center justify-center mt-12">
                  {ProcessSteps.map((step) => (
                    <div
                      key={step.step}
                      className="mt-8 flex flex-col items-center space-x-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center mb-3 rounded-3xl bg-green-600 bg-primary text-primary-foreground">
                        <span className="text-lg text-white font-bold">
                          {step.step}
                        </span>
                      </div>
                      <div className="items-center text-center">
                        <h4 className="mb-2 font-bold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground p-3">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row items-center space-y-4 p-10 text-sm">
                  {DetailsCard.map((item, index) => (
                    <CardLayout
                      key={index}
                      Icon={item.Icon}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </section>

              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-600 to-green-500 text-white border-white hover:bg-white/90 text-lg px-8 py-5 hover:scale-105 transition-transform duration-200"
                  asChild
                >
                  <Link to="/premio-dacio-campos/inscricao">
                    {" "}
                    Inscreva sua Pesquisa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="bg-muted py-16">
        <div className="">
          <h2 className="mb-5 text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-4xl drop-shadow-md ">
            Documentos Necessários para Submissão
          </h2>

          <div className=" p-7 flex flex-row items-start justify-center space-x-8 text-sm">
            <div className="mt-12 rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Documentos de Pesquisa</h3>
              <div>
                <p>
                  O documento principal deve conter sua pesquisa científica
                  sobre diabetes, seguindo a estrutura:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Título e Resumo:</strong> Apresentação clara e
                      concisa do trabalho
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Introdução:</strong> Contextualização,
                      justificativa e objetivos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Metodologia:</strong> Descrição detalhada dos
                      métodos utilizados
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Resultados:</strong> Apresentação dos dados
                      obtidos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Discussão:</strong> Interpretação dos resultados e
                      comparação com a literatura
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Conclusão:</strong> Síntese dos principais achados
                      e implicações
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Referências:</strong> Lista de fontes citadas no
                      trabalho
                    </span>
                  </li>
                </ul>

                <div className="flex justify-center">
                  <Button variant="outline" className="mt-2" asChild>
                    <a href="#download-template">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Modelo de Documento
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center space-x-8 text-sm">
              <div className="mt-12 rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Currículo </h3>
                <div>
                  <p>
                    Envie seu currículo atualizado, destacando sua formação
                    acadêmica, experiência profissional e produções científicas
                    relacionadas à área de diabetes.
                  </p>
                  <p>
                    Para pesquisadores brasileiros, recomendamos o envio do
                    Currículo Lattes. Pesquisadores internacionais podem enviar
                    currículo em formato livre ou CV padrão.
                  </p>

                  <div className="flex justify-center">
                    <Button variant="outline" className="mt-2" asChild>
                      <a href="#download-declaration">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar Modelo de Declaração
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">
                  Declaração de Originalidade
                </h3>
                <div>
                  <p>
                    É necessário enviar uma declaração de originalidade,
                    confirmando que a pesquisa é de sua autoria e que não foi
                    publicada anteriormente ou submetida simultaneamente a
                    outros prêmios ou publicações.
                  </p>
                  <p>
                    A declaração deve ser assinada por todos os autores da
                    pesquisa e deve incluir informações sobre possíveis
                    conflitos de interesse e aspectos éticos da pesquisa.
                  </p>

                  <div className="flex justify-center">
                    <Button variant="outline" className="mt-2" asChild>
                      <a href="#download-declaration">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar Modelo de Declaração
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
