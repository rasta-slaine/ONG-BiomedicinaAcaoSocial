import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  Users,
  CheckCircle,
  Microscope,
  GraduationCap,
  Beaker,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Stats } from "@/components/Stats";
import { events } from "@/mock/eventos";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { PremioDrDacio } from "../Premiacao/components/PremioDrDacio";
import { ProximosEventos } from "../Sobre/Biomedicina/components/ProximosEventos";
import { Separator } from "@/components/ui/separator";

// Sample testimonials
const testimonials = [
  {
    quote:
      "The support from EcoHope changed my community forever. We now have clean water and sustainable agriculture practices that have improved everyone's lives.",
    name: "Anderson do Nascimento",
    role: "Fundador e Diretor Executivo",
    image: "/images/Anderson Do Nascimento.png",
  },
  {
    quote:
      "Volunteering with EcoHope has been the most rewarding experience of my life. I've seen firsthand how dedicated they are to creating lasting change.",
    name: "Dr Dacio Campos",
    role: "Ex-Presidente do Conselho Federal de Biomedicina",
    image: "/images/dr-dacio-campos.jpg",
  },
  {
    quote:
      "As a donor, I appreciate how transparent EcoHope is about their finances and impact. I know my contributions are making a real difference.",
    name: "Priya Patel",
    role: "Monthly Donor",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 py-24 text-white md:py-36">
        {/* Padrão de fundo em grade */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
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
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 container px-6 mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl drop-shadow-md">
            Biomedicina Ação Social
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Atuamos com ações sociais, projetos de saúde preventiva e educação
            para comunidades em situação de vulnerabilidade. Acreditamos que o
            cuidado com a vida começa pelo acesso à informação, atendimento e
            dignidade.
          </p>

          {/* Botões de ação */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-5 shadow-lg shadow-black/20 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/doar">❤️ Apoiar Iniciativas</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-700 border-white hover:bg-white/90 text-lg px-8 py-5 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,160C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224V320H0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Estatísticas de Impacto */}
      <section className="py-8 flex flex-col items-center w-full">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Nosso Impacto
        </h2>
        <Stats className="w-full p-8" events={events} />
      </section>

      {/* Missão e Visão */}
      <section className="flex flex-col items-center mb-40">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="">
              <CardHeader>
                <div className="mb-2 rounded-full p-3 w-fit">
                  <Heart className="h-6 w-6 " />
                </div>
                <CardTitle className="text-2xl ">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  A Biomedicina Ação Social trabalha para promover saúde através
                  da prevenção e combate a diabetes e hipertensão em comunidades
                  carentes. Nosso foco está em levar atendimento biomédico,
                  nutricional e enfermagem de qualidade a pessoas que não têm
                  acesso facilitado a serviços de saúde.
                </p>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="mb-2 rounded-full  p-3 w-fit">
                  <CheckCircle className="h-6 w-6 " />
                </div>
                <CardTitle className="text-2xl ">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Sonhamos com um Brasil onde todas as comunidades,
                  independentemente de sua localização ou condição
                  socioeconômica, tenham acesso a informações e atendimento de
                  saúde preventiva, reduzindo a incidência de doenças crônicas
                  como diabetes e hipertensão.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" bg-muted  bg-gradient-to-r from-emerald-600 to-green-500 flex flex-col items-center py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            As Vozes do Impacto
          </h2>

          <div className="grid gap-8 md:grid-cols-3  ">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background  bg-muted  ">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="mb-6 italic text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProximosEventos />
      <Separator className=" p-4 bg-gradient-to-r from-emerald-600 to-green-500" />
      <section className="py-16 md:py-24">
        <div className="w-full flex flex-col justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              O que é Biomedicina?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              A biomedicina é um campo na interseção da biologia e medicina que
              aplica princípios biológicos e de ciências naturais à prática
              clínica. Abrange uma ampla gama de disciplinas, incluindo
              bioquímica, genética, imunologia, neurociência, farmacologia e
              engenharia biomédica.
            </p>
            <p className="text-lg text-muted-foreground">
              Por meio de pesquisa científica rigorosa e aplicação clínica, a
              biomedicina busca compreender o corpo humano, os mecanismos das
              doenças e desenvolver tratamentos inovadores, diagnósticos e
              estratégias preventivas para melhorar os resultados de saúde em
              todo o mundo.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 p-8">
            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Pesquisa & Descoberta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investigando processos biológicos fundamentais e mecanismos de
                  doenças para desenvolver novos conhecimentos e identificar
                  potenciais alvos terapêuticos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <Beaker className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Translação & Aplicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transformando descobertas científicas em aplicações práticas
                  como medicamentos, vacinas, dispositivos médicos e ferramentas
                  de diagnóstico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Educação & Treinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Preparando a próxima geração de cientistas biomédicos,
                  pesquisadores e profissionais de saúde para avançar o campo e
                  melhorar a saúde global.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Botões de ação */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-emerald-600 to-green-500 text-white border-white hover:bg-white/90 text-lg px-8 py-5 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/sobre">Conheça A Biomedicina</Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className=" p-4 bg-gradient-to-r from-emerald-600 to-green-500" />
      <PremioDrDacio />
      <Separator className=" p-4 bg-gradient-to-r from-emerald-600 to-green-500" />
      {/* Featured Content Tabs */}
      <section className=" mt-9 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-center md:text-4xl">
            Como Você Pode Ajudar
          </h2>
          <Tabs defaultValue="donate" className="mx-auto max-w-4xl">
            {/* <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="blog">Latest News</TabsTrigger>
              <TabsTrigger value="donate">Ways to Help</TabsTrigger>
            </TabsList> */}

            {/* Events Tab */}
            {/* <TabsContent value="events" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {featuredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {formatDate(event.date)}
                      </div>
                      <CardTitle className="line-clamp-1">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" asChild>
                  <Link to="/events">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent> */}

            {/* Blog Tab */}
            {/* <TabsContent value="blog" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.category}</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <CardTitle className="line-clamp-1">
                        {post.title}
                      </CardTitle>
                      <CardDescription>By {post.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    View All Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent> */}

            {/* Donate Tab */}
            <TabsContent value="donate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Faça uma Doação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Sua contribuição financeira nos ajuda a continuar
                      promovendo saúde, cuidado e transformação social nas
                      comunidades que mais precisam.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/donate">Quero Doar</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Seja Voluntário</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Doe seu tempo e talento para causar um impacto direto nos
                      nossos projetos e transformar vidas com a sua dedicação.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/volunteer">Saiba Mais</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Fique por Dentro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Assine nossa newsletter e receba novidades sobre eventos,
                      ações sociais e como você pode continuar apoiando essa
                      causa.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Assinar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary bg-gradient-to-r from-emerald-600 to-green-500 py-16 text-primary-foreground md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl text-white font-bold tracking-tight md:text-4xl">
              Junte-se à Nossa Missão Hoje
            </h2>
            <p className="mb-8 text-lg text-white md:text-xl">
              Juntos, podemos gerar mudanças duradouras. Seja doando, atuando
              como voluntário ou espalhando essa causa, o seu apoio torna nosso
              trabalho possível.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-white hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/donate">Fazer uma Doação</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-white "
                asChild
              >
                <Link to="/contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
