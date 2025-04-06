import type React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function PremioDacioCamposInscricaoPage() {
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",

    // Research Information
    researchTitle: "",
    researchCategory: "",
    coAuthors: "",
    abstract: "",

    // Files
    researchDocument: null,
    curriculum: null,
    declaration: null,

    // Terms
    termsAccepted: false,
    dataProcessingAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [fieldName]: e.target.files?.[0] }));
    }
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dr-dacio-campos">
                  Dr. Dácio Campos
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/premio-dacio-campos/inscricao">
                  Inscrição
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Premiação</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight">
              Inscrição para o Prêmio Dr. Dácio Campos
            </h1>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo para submeter sua pesquisa científica
              sobre diabetes e concorrer ao Prêmio Dr. Dácio Campos.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {formSubmitted ? (
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    Inscrição Enviada com Sucesso!
                  </CardTitle>
                  <CardDescription>
                    Agradecemos pelo seu interesse no Prêmio Dr. Dácio Campos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p>
                    Sua inscrição foi recebida e será analisada por nossa
                    equipe. Você receberá um e-mail de confirmação com os
                    detalhes da sua inscrição em breve.
                  </p>
                  <p>
                    O número de protocolo da sua inscrição é:{" "}
                    <strong>
                      DCP-{new Date().getFullYear()}-
                      {Math.floor(1000 + Math.random() * 9000)}
                    </strong>
                  </p>
                  <Alert className="mt-6 bg-primary/10 border-primary/20">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Próximos Passos</AlertTitle>
                    <AlertDescription>
                      Nossa equipe irá revisar sua inscrição e documentação.
                      Caso haja alguma pendência, entraremos em contato através
                      do e-mail informado. O resultado da primeira fase de
                      avaliação será divulgado em outubro.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild>
                    <Link to="/dr-dacio-campos">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar para a página do Dr. Dácio Campos
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Formulário de Inscrição</CardTitle>
                    <Badge variant="outline">Etapa {formStep} de 3</Badge>
                  </div>
                  <CardDescription>
                    {formStep === 1 && "Informações Pessoais"}
                    {formStep === 2 && "Informações da Pesquisa"}
                    {formStep === 3 && "Documentos e Termos"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {formStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">
                                Nome Completo{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Digite seu nome completo"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">
                                E-mail{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="phone">
                                Telefone{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                placeholder="(00) 00000-0000"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="institution">
                                Instituição{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="institution"
                                name="institution"
                                placeholder="Digite o nome da sua instituição"
                                value={formData.institution}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="position">
                              Cargo/Função{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="position"
                              name="position"
                              placeholder="Ex: Pesquisador, Professor, Estudante de Pós-Graduação"
                              value={formData.position}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                          <div className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <p className="text-sm text-muted-foreground">
                              Todas as comunicações sobre o prêmio serão
                              enviadas para o e-mail informado. Certifique-se de
                              que o endereço está correto e verifique
                              regularmente sua caixa de entrada.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Research Information */}
                    {formStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="researchTitle">
                              Título da Pesquisa{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="researchTitle"
                              name="researchTitle"
                              placeholder="Digite o título completo da sua pesquisa"
                              value={formData.researchTitle}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="researchCategory">
                              Categoria{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Select
                              value={formData.researchCategory}
                              onValueChange={(value) =>
                                handleSelectChange("researchCategory", value)
                              }
                              required
                            >
                              <SelectTrigger id="researchCategory">
                                <SelectValue placeholder="Selecione a categoria da sua pesquisa" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="basic">
                                  Pesquisa Básica em Diabetes
                                </SelectItem>
                                <SelectItem value="innovation">
                                  Inovação em Diagnóstico e Tratamento
                                </SelectItem>
                                <SelectItem value="epidemiology">
                                  Estudos Epidemiológicos e Saúde Pública
                                </SelectItem>
                                <SelectItem value="education">
                                  Educação e Qualidade de Vida
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="coAuthors">
                              Coautores (se houver)
                            </Label>
                            <Input
                              id="coAuthors"
                              name="coAuthors"
                              placeholder="Nome completo dos coautores, separados por vírgula"
                              value={formData.coAuthors}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="abstract">
                              Resumo da Pesquisa{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                              id="abstract"
                              name="abstract"
                              placeholder="Descreva brevemente sua pesquisa (máximo 500 palavras)"
                              rows={6}
                              value={formData.abstract}
                              onChange={handleInputChange}
                              required
                            />
                            <p className="text-xs text-muted-foreground">
                              Máximo de 500 palavras. Inclua objetivos,
                              metodologia, resultados principais e conclusões.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                          <div className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                            <p className="text-sm text-muted-foreground">
                              O resumo deve apresentar uma visão geral clara da
                              sua pesquisa. O documento completo será enviado na
                              próxima etapa.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Documents and Terms */}
                    {formStep === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">
                            Documentos Necessários
                          </h3>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="researchDocument">
                                Documento da Pesquisa{" "}
                                <span className="text-destructive">*</span>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="ml-1 inline h-4 w-4 cursor-help text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        Arquivo PDF contendo sua pesquisa
                                        completa, seguindo a estrutura: Título,
                                        Resumo, Introdução, Metodologia,
                                        Resultados, Discussão, Conclusão e
                                        Referências.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <div className="flex items-center gap-4">
                                <Input
                                  id="researchDocument"
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) =>
                                    handleFileChange(e, "researchDocument")
                                  }
                                  required
                                  className="cursor-pointer"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                >
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Formato: PDF, tamanho máximo: 10MB
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="curriculum">
                                Currículo{" "}
                                <span className="text-destructive">*</span>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="ml-1 inline h-4 w-4 cursor-help text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        Currículo atualizado destacando formação
                                        acadêmica, experiência profissional e
                                        produções científicas relacionadas à
                                        área de diabetes.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <div className="flex items-center gap-4">
                                <Input
                                  id="curriculum"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) =>
                                    handleFileChange(e, "curriculum")
                                  }
                                  required
                                  className="cursor-pointer"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                >
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Formatos aceitos: PDF, DOC, DOCX, tamanho
                                máximo: 5MB
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="declaration">
                                Declaração de Originalidade{" "}
                                <span className="text-destructive">*</span>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="ml-1 inline h-4 w-4 cursor-help text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        Documento assinado por todos os autores
                                        confirmando que a pesquisa é original e
                                        não foi publicada anteriormente ou
                                        submetida simultaneamente a outros
                                        prêmios.
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </Label>
                              <div className="flex items-center gap-4">
                                <Input
                                  id="declaration"
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) =>
                                    handleFileChange(e, "declaration")
                                  }
                                  required
                                  className="cursor-pointer"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                >
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Formato: PDF, tamanho máximo: 2MB
                              </p>
                            </div>
                          </div>

                          <Separator className="my-6" />

                          <h3 className="text-lg font-medium">
                            Termos e Condições
                          </h3>

                          <div className="space-y-4">
                            <div className="flex items-start space-x-2">
                              <Checkbox
                                id="termsAccepted"
                                checked={formData.termsAccepted}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange(
                                    "termsAccepted",
                                    checked as boolean
                                  )
                                }
                                required
                              />
                              <div className="grid gap-1.5 leading-none">
                                <Label
                                  htmlFor="termsAccepted"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Aceito os termos e condições do Prêmio Dr.
                                  Dácio Campos{" "}
                                  <span className="text-destructive">*</span>
                                </Label>
                                <p className="text-xs text-muted-foreground">
                                  Declaro que li e aceito os{" "}
                                  <Link
                                    to="/termos-e-condicoes"
                                    className="text-primary hover:underline"
                                  >
                                    termos e condições
                                  </Link>{" "}
                                  do Prêmio Dr. Dácio Campos, incluindo as
                                  regras de participação e os critérios de
                                  avaliação.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2">
                              <Checkbox
                                id="dataProcessingAccepted"
                                checked={formData.dataProcessingAccepted}
                                onCheckedChange={(checked) =>
                                  handleCheckboxChange(
                                    "dataProcessingAccepted",
                                    checked as boolean
                                  )
                                }
                                required
                              />
                              <div className="grid gap-1.5 leading-none">
                                <Label
                                  htmlFor="dataProcessingAccepted"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Autorizo o tratamento dos meus dados pessoais{" "}
                                  <span className="text-destructive">*</span>
                                </Label>
                                <p className="text-xs text-muted-foreground">
                                  Autorizo o tratamento dos meus dados pessoais
                                  para fins de participação no Prêmio Dr. Dácio
                                  Campos, de acordo com a{" "}
                                  <Link
                                    to="/politica-de-privacidade"
                                    className="text-primary hover:underline"
                                  >
                                    política de privacidade
                                  </Link>
                                  .
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Alert
                          variant="destructive"
                          className="bg-destructive/10 border-destructive/20 text-destructive"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Atenção</AlertTitle>
                          <AlertDescription>
                            Certifique-se de que todos os documentos estão
                            corretos e completos antes de enviar. Após o envio,
                            não será possível fazer alterações na sua inscrição.
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {formStep > 1 ? (
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar
                    </Button>
                  ) : (
                    <Button variant="outline" asChild>
                      <Link to="/dr-dacio-campos">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar
                      </Link>
                    </Button>
                  )}

                  {formStep < 3 ? (
                    <Button onClick={nextStep}>Próximo</Button>
                  ) : (
                    <Button onClick={handleSubmit}>Enviar Inscrição</Button>
                  )}
                </CardFooter>
              </Card>
            )}

            {/* FAQ Section */}
            {!formSubmitted && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold">Dúvidas Frequentes</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Quais são os prazos para inscrição?
                    </AccordionTrigger>
                    <AccordionContent>
                      As inscrições para o Prêmio Dr. Dácio Campos estão abertas
                      de 1º de março a 30 de junho. Após este período, não serão
                      aceitas novas inscrições. Recomendamos que você não deixe
                      para o último dia, pois problemas técnicos podem ocorrer.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Posso editar minha inscrição após o envio?
                    </AccordionTrigger>
                    <AccordionContent>
                      Não, após o envio da inscrição não é possível fazer
                      alterações. Por isso, recomendamos que você revise
                      cuidadosamente todas as informações e documentos antes de
                      finalizar o processo. Caso seja absolutamente necessário
                      fazer alguma correção, entre em contato com nossa equipe
                      através do e-mail premio@daciocampos.org.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Como saberei se minha inscrição foi recebida?
                    </AccordionTrigger>
                    <AccordionContent>
                      Após o envio da inscrição, você receberá uma confirmação
                      na tela e um e-mail com o número de protocolo da sua
                      inscrição. Se você não receber o e-mail de confirmação em
                      até 24 horas, verifique sua pasta de spam ou entre em
                      contato conosco.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Quais são os critérios de avaliação?
                    </AccordionTrigger>
                    <AccordionContent>
                      As pesquisas serão avaliadas com base nos seguintes
                      critérios: relevância científica e social, originalidade e
                      inovação, metodologia e rigor científico, potencial de
                      aplicação prática e impacto na qualidade de vida dos
                      pacientes com diabetes. Para mais detalhes, consulte o
                      regulamento completo do prêmio.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Section */}
      {!formSubmitted && (
        <section className="bg-muted py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Precisa de Ajuda?</h2>
              <p className="mb-6 text-muted-foreground">
                Se você tiver dúvidas sobre o processo de inscrição ou encontrar
                algum problema técnico, nossa equipe está à disposição para
                ajudar.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button variant="outline" asChild>
                  <a href="mailto:premio@daciocampos.org">
                    <Mail className="mr-2 h-4 w-4" />
                    premio@daciocampos.org
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+551199999999">
                    <Phone className="mr-2 h-4 w-4" />
                    (11) 9999-9999
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
