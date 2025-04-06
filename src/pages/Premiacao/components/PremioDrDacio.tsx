import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Microscope,
  FileText,
  Calendar,
  ArrowRight,
  Download,
  Upload,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PremioDrDacio = () => {
  return (
    <>
      <section className="py-16 md:py-24 p-8 ">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4">Premiação</Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Prêmio Dr. Dácio Campos
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Em homenagem ao legado do Dr. Dácio Campos, criamos uma premiação
              anual para reconhecer e incentivar pesquisas científicas
              inovadoras na área de diabetes, contribuindo para o avanço do
              conhecimento e para a melhoria da qualidade de vida dos pacientes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sobre a Premiação</CardTitle>
                <CardDescription>
                  Reconhecendo a excelência em pesquisa científica sobre
                  diabetes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  O Prêmio Dr. Dácio Campos foi criado para reconhecer pesquisas
                  científicas inovadoras na área de diabetes, abrangendo desde
                  estudos epidemiológicos até novas abordagens terapêuticas e
                  tecnologias para diagnóstico e tratamento.
                </p>
                <p>
                  A premiação é aberta a pesquisadores, estudantes de
                  pós-graduação e profissionais da área da saúde que desenvolvam
                  trabalhos científicos relevantes sobre diabetes, contribuindo
                  para o avanço do conhecimento e para a melhoria da qualidade
                  de vida dos pacientes.
                </p>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="mb-2 font-medium">Categorias</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Pesquisa Básica em Diabetes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Inovação em Diagnóstico e Tratamento</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Estudos Epidemiológicos e Saúde Pública</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>Educação e Qualidade de Vida</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Como Participar</CardTitle>
                <CardDescription>
                  Submeta sua pesquisa científica sobre diabetes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Para participar do Prêmio Dr. Dácio Campos, os candidatos
                  devem submeter um documento contendo sua pesquisa científica
                  sobre diabetes, seguindo as diretrizes estabelecidas pelo
                  comitê organizador.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Cronograma</h4>
                      <p className="text-sm text-muted-foreground">
                        Inscrições: 1º de março a 30 de junho
                        <br />
                        Avaliação: julho a setembro
                        <br />
                        Anúncio dos finalistas: outubro
                        <br />
                        Cerimônia de premiação: novembro (Dia Mundial do
                        Diabetes)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Requisitos do Documento</h4>
                      <p className="text-sm text-muted-foreground">
                        Formato: PDF
                        <br />
                        Extensão: 15-30 páginas
                        <br />
                        Idioma: Português ou Inglês
                        <br />
                        Estrutura: Introdução, Metodologia, Resultados,
                        Discussão, Conclusão e Referências
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Critérios de Avaliação</h4>
                      <p className="text-sm text-muted-foreground">
                        Relevância científica e social
                        <br />
                        Originalidade e inovação
                        <br />
                        Metodologia e rigor científico
                        <br />
                        Potencial de aplicação prática
                        <br />
                        Impacto na qualidade de vida dos pacientes
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/premio-dacio-campos/inscricao">
                    Inscreva sua Pesquisa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Processo de Submissão
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 font-bold">Inscrição</h3>
                <p className="text-sm text-muted-foreground">
                  Preencha o formulário de inscrição com seus dados pessoais e
                  informações sobre sua pesquisa
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 font-bold">Submissão</h3>
                <p className="text-sm text-muted-foreground">
                  Envie o documento com sua pesquisa científica sobre diabetes,
                  seguindo as diretrizes estabelecidas
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 font-bold">Avaliação</h3>
                <p className="text-sm text-muted-foreground">
                  Sua pesquisa será avaliada por um comitê de especialistas com
                  base nos critérios estabelecidos
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mb-2 font-bold">Premiação</h3>
                <p className="text-sm text-muted-foreground">
                  Os finalistas serão convidados para a cerimônia de premiação,
                  onde os vencedores serão anunciados
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Documentos Necessários</h3>

              <Tabs defaultValue="pesquisa" className="w-full">
                <TabsList className="grid w-full grid-cols-3 justify-center ">
                  <TabsTrigger value="pesquisa" className="w-3xs ">
                    Documento de Pesquisa
                  </TabsTrigger>
                  <TabsTrigger value="curriculo" className="w-3xs ">
                    Currículo
                  </TabsTrigger>
                  <TabsTrigger value="declaracao" className="w-3xs ">
                    Declaração de Originalidade
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pesquisa" className="mt-4 space-y-4">
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
                        <strong>Discussão:</strong> Interpretação dos resultados
                        e comparação com a literatura
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 rounded-full bg-primary/10 p-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>
                        <strong>Conclusão:</strong> Síntese dos principais
                        achados e implicações
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
                </TabsContent>

                <TabsContent value="curriculo" className="mt-4 space-y-4">
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
                    <Button variant="outline" className="mt-2">
                      <Upload className="mr-2 h-4 w-4" />
                      Enviar Currículo
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="declaracao" className="mt-4 space-y-4">
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
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
