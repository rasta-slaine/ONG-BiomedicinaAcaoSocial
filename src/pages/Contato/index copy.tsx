import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Heart,
  UserPlus,
  Microscope,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Faq, FaqData } from "@/components/Faq";

// Sample office locations for Biomedicina Ação Social
const officeLocations = [
  {
    name: "Sede Nacional",
    address: "Av. Paulista 1500, 10º andar, São Paulo, SP 01310-200",
    phone: "+55 (11) 3123-4567",
    email: "contato@biomedicinacaosocial.org.br",
    hours: "Segunda-Sexta: 8:30 - 17:30",
  },
  {
    name: "Centro de Pesquisa e Atendimento",
    address: "Rua das Flores 250, Rio de Janeiro, RJ 22240-070",
    phone: "+55 (21) 2987-6543",
    email: "pesquisa@biomedicinacaosocial.org.br",
    hours: "Segunda-Sexta: 8:00 - 18:00",
  },
  {
    name: "Unidade Móvel de Atendimento",
    address: "Rua Amazonas 780, Belo Horizonte, MG 30180-001",
    phone: "+55 (31) 3456-7890",
    email: "movel@biomedicinacaosocial.org.br",
    hours: "Segunda-Sábado: 7:00 - 16:00",
  },
];

// Sample FAQ items for Biomedicina Ação Social
const faqItems: FaqData[] = [
  {
    quest: "Como posso me voluntariar na Biomedicina Ação Social?",
    answer:
      "Temos diversas oportunidades para profissionais da área da saúde, estudantes de biomedicina e voluntários gerais. Visite nossa página de Voluntariado para conhecer as oportunidades atuais e preencher nosso formulário de inscrição. Buscamos principalmente profissionais de saúde para atendimentos comunitários, pesquisadores para nossos programas de estudo, e voluntários para campanhas de conscientização.",
  },
  {
    quest: "Para onde vai minha doação?",
    answer:
      "Sua doação apoia diretamente nossos programas de atendimento médico gratuito, pesquisa em doenças negligenciadas, e projetos de educação em saúde em comunidades carentes. Mantemos o compromisso de que pelo menos 85% de todas as doações são direcionadas para despesas de programas. Nossos relatórios anuais e demonstrações financeiras estão disponíveis na página Sobre Nós.",
  },
  {
    quest: "Posso especificar qual programa minha doação deve apoiar?",
    answer:
      "Sim! Ao fazer uma doação, você pode escolher destinar seu apoio a um programa ou iniciativa específica, como nosso programa de diagnóstico móvel, pesquisa em doenças tropicais, ou educação em saúde. Se tiver dúvidas sobre como direcionar sua doação, entre em contato com nossa equipe pelo e-mail doacoes@biomedicinacaosocial.org.br.",
  },
  {
    quest:
      "A Biomedicina Ação Social oferece estágios ou oportunidades de emprego?",
    answer:
      "Regularmente oferecemos estágios para estudantes de biomedicina, enfermagem, medicina e áreas correlatas, além de vagas de emprego em nossos diversos departamentos. Visite nossa página de Carreiras para ver as oportunidades atuais e instruções de candidatura.",
  },
  {
    quest:
      "Como minha empresa pode estabelecer parceria com a Biomedicina Ação Social?",
    answer:
      "Oferecemos diversas oportunidades de parceria corporativa, desde patrocínios até programas de engajamento de funcionários e apoio logístico para nossas campanhas de saúde. Entre em contato com nossa equipe de parcerias pelo e-mail parcerias@biomedicinacaosocial.org.br para discutir como podemos trabalhar juntos.",
  },
  {
    quest: "A Biomedicina Ação Social atua internacionalmente?",
    answer:
      "Sim, atualmente operamos programas em 5 países da América Latina e África, com foco em comunidades com acesso limitado a serviços de saúde. Nosso trabalho internacional concentra-se em diagnóstico de doenças tropicais, capacitação de profissionais locais, e desenvolvimento de protocolos acessíveis para diagnósticos em contextos de poucos recursos.",
  },
];

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary py-20 text-primary-foreground md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Entre em Contato
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Tem dúvidas, sugestões ou quer participar dos nossos projetos de
              biomedicina social? Adoraríamos ouvir você. Entre em contato com
              nossa equipe usando as informações abaixo ou preencha nosso
              formulário de contato.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-background"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="flex flex-col justify-center ">
        <div className=" w-full p-8 ">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="mb-6 text-2xl font-bold ">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full  p-3">
                    <MapPin className="h-5 w-5 " />
                  </div>
                  <div>
                    <h3 className="font-medium">Sede Nacional</h3>
                    <p className="text-muted-foreground">
                      Av. Paulista 1500, 10º andar
                      <br />
                      São Paulo, SP 01310-200
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full  p-3">
                    <Phone className="h-5 w-5 " />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+551131234567"
                        className="hover:text-blue-600"
                      >
                        +55 (11) 3123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full  p-3">
                    <Mail className="h-5 w-5 " />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:contato@biomedicinacaosocial.org.br"
                        className="hover:text-blue-600"
                      >
                        contato@biomedicinacaosocial.org.br
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Para doações:{" "}
                      <a
                        href="mailto:doacoes@biomedicinacaosocial.org.br"
                        className="hover:text-blue-600"
                      >
                        doacoes@biomedicinacaosocial.org.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full  p-3">
                    <Clock className="h-5 w-5 " />
                  </div>
                  <div>
                    <h3 className="font-medium">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda-Sexta: 8:30 - 17:30
                      <br />
                      Sábado-Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-medium">Conecte-se Conosco</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-muted p-3 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato o mais
                    rápido possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="mb-4 rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-medium">
                        Mensagem Enviada!
                      </h3>
                      <p className="mb-6 text-muted-foreground">
                        Obrigado por entrar em contato. Recebemos sua mensagem e
                        responderemos em breve.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>
                        Enviar Outra Mensagem
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      id="contact-form"
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Seu Nome</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="João Silva"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Endereço de Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="joao@exemplo.com.br"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Select
                          name="subject"
                          value={formData.subject}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, subject: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              Pergunta Geral
                            </SelectItem>
                            <SelectItem value="donation">
                              Informações sobre Doações
                            </SelectItem>
                            <SelectItem value="volunteer">
                              Oportunidades de Voluntariado
                            </SelectItem>
                            <SelectItem value="partnership">
                              Proposta de Parceria
                            </SelectItem>
                            <SelectItem value="service">
                              Serviços de Diagnóstico
                            </SelectItem>
                            <SelectItem value="research">
                              Colaboração em Pesquisa
                            </SelectItem>
                            <SelectItem value="media">
                              Contato para Imprensa
                            </SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Como podemos ajudar você?"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button type="submit" className="w-full ">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Nossos Programas
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-100  p-4">
                    <Microscope className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center font-bold">
                  Diagnóstico Comunitário
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Exames laboratoriais gratuitos para comunidades carentes em
                  todo o Brasil.
                </p>
              </CardContent>
            </Card>

            <Card className="">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center font-bold">
                  Pesquisa em Saúde Global
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Desenvolvimento de soluções acessíveis para diagnóstico de
                  doenças negligenciadas.
                </p>
              </CardContent>
            </Card>

            <Card className="">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-purple-100 p-4">
                    <UserPlus className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center font-bold">
                  Capacitação Profissional
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Treinamento de profissionais de saúde em técnicas de
                  diagnóstico avançadas.
                </p>
              </CardContent>
            </Card>

            <Card className="">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-red-100 p-4">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center font-bold">
                  Conscientização em Saúde
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                  Campanhas educativas sobre prevenção e diagnóstico precoce em
                  saúde.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section className="flex flex-col items-center py-8">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Nossas Unidades
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {officeLocations.map((office, index) => (
              <Card key={index} className="">
                <CardHeader className="">
                  <CardTitle className="">{office.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start">
                    <MapPin className="mr-2 h-4 w-4 " />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-2 h-4 w-4 " />
                    <a
                      href={`tel:${office.phone}`}
                      className="hover:text-blue-600"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-2 h-4 w-4 " />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-blue-600"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-2 h-4 w-4 " />
                    <span>{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold  md:text-3xl">
            Encontre-nos
          </h2>

          <div className="overflow-hidden rounded-lg border ">
            <div className="h-[400px] w-full ">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1786079439466!2d-46.659892127685225!3d-23.56202791473886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c925263541%3A0x4b30df73fca5a36b!2sAv.%20Paulista%2C%201500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1743456513276!5m2!1spt-BR!2sbr"
                  className="h-[400px] w-full "
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq data={faqItems} />
    </div>
  );
}
