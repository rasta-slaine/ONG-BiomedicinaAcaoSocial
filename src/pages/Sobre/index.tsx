import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, ArrowRight, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { events } from "@/mock/eventos";

const teamMembers = [
  {
    name: "Anderson Do Nascimento",
    title: "Fundador e Diretor Executivo",
    bio: "Biomédico dedicado à saúde pública, Anderson fundou a Biomedicina Ação Social com a visão de levar atendimento de saúde de qualidade a comunidades carentes. Sua liderança e paixão por ajudar os outros têm sido fundamentais para o crescimento da organização.",
    image: "/images/Anderson Do Nascimento.png",
  },
  {
    name: "Dra. Maria Silva",
    title: "Diretora de Programas",
    bio: "Maria supervisiona todas as iniciativas da Biomedicina Ação Social. Com formação em saúde pública, ela garante que nossos projetos criem impacto positivo duradouro nas comunidades que atendemos.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Carlos Mendes",
    title: "Coordenador de Voluntários",
    bio: "Carlos gerencia nossa rede de profissionais voluntários, garantindo que cada ação conte com a equipe necessária para atender às necessidades da comunidade.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Juliana Pereira",
    title: "Gerente de Parcerias",
    bio: "Juliana desenvolve e mantém relacionamentos com parceiros estratégicos que apoiam nossa missão de levar saúde a comunidades carentes.",
    image: "/placeholder.svg?height=300&width=300",
  },
];

// Parceiros
const partners = [
  {
    name: "Universidade São Paulo",
    category: "Educacional",
    logo: "/images/usp.png",
  },
  {
    name: "Conselho Regional de Biomedicina",
    category: "Institucional",
    logo: "/images/biomedicina conselho.jpeg",
  },
  {
    name: "Prefeitura de São Paulo",
    category: "Governamental",
    logo: "/images/cidade sao paulo.jpeg",
  },
  {
    name: "Associação Comunitária de Itaquera",
    category: "Comunitário",
    logo: "/images/itaquera.jpg",
  },
];

export function AboutPage() {
  const [timelineFilter, setTimelineFilter] = useState<string>("todos");

  // Filtrar eventos para a timeline
  interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    category: string;
    service?: number;
    professional?: number;
  }

  const filteredEvents: Event[] =
    timelineFilter === "todos"
      ? events
      : timelineFilter === "maiores"
      ? events
          .sort(
            (a: Event, b: Event) =>
              (b.service || 0) +
              (b.professional || 0) -
              ((a.service || 0) + (a.professional || 0))
          )
          .slice(0, 10)
      : events.filter((event: Event) => (event.professional || 0) > 30);

  // Marcos importantes
  const milestones = [
    {
      id: "inicio",
      title: "Fundação da Biomedicina Ação Social",
      description:
        "Anderson Do Nascimento estabelece a ONG com a missão de combater diabetes e pressão alta em comunidades carentes.",
      date: "2018-01-01",
      location: "São Paulo",
      category: "Institucional",
    },
    {
      id: "1a-acao",
      title: "Primeira Ação Social",
      description:
        "Realização da primeira ação social na Parada 15 de Novembro, marcando o início de uma jornada de impacto na saúde pública.",
      date: "2018-05-12",
      location: "Campo do ARXV (Parada 15 de Novembro)",
      category: "Marco",
      service: 84,
      professional: 15,
    },
    {
      id: "100-prof",
      title: "100º Profissional Voluntário",
      description:
        "A ONG celebra a marca de 100 profissionais de saúde voluntários participando das ações.",
      date: "2019-06-15",
      location: "São Paulo",
      category: "Marco",
    },
    {
      id: "1000-atend",
      title: "1000º Atendimento Realizado",
      description:
        "Marca importante que demonstra o impacto crescente das ações de saúde na comunidade.",
      date: "2019-12-01",
      location: "São Paulo",
      category: "Marco",
    },
    {
      id: "expansao",
      title: "Expansão para Outros Estados",
      description:
        "A Biomedicina Ação Social expande suas atividades para além de São Paulo, chegando a Bahia, Pernambuco e Rio de Janeiro.",
      date: "2021-10-01",
      location: "Brasil",
      category: "Expansão",
    },
    {
      id: "premio",
      title: "Reconhecimento e Premiação",
      description:
        "Homenagem e entrega de troféus para os Profissionais e estudantes voluntários da área da saúde.",
      date: "2024-09-28",
      location: "Rua Gomes Cardim (Brás)",
      category: "Premiação",
      professional: 78,
    },
    {
      id: "30-acoes",
      title: "30ª Ação de Saúde Social",
      description:
        "Celebração de um marco importante, com 30 ações de saúde realizadas em diferentes comunidades.",
      date: "2024-09-28",
      location: "Rua Gomes Cardim (Brás)",
      category: "Marco",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Quem Somos
          </h1>
          <p className="text-xl leading-relaxed">
            Uma organização sem fins lucrativos dedicada a promover saúde e
            qualidade de vida através de ações de prevenção e combate a diabetes
            e hipertensão em comunidades carentes. Fundada pelo biomédico
            Anderson Do Nascimento, nossa missão é levar atendimento de saúde de
            qualidade a quem mais precisa.
          </p>
        </div>
      </section>

      {/* Estatísticas de Impacto */}
      <section className="py-8 flex flex-col items-center w-full">
        <h2 className="text-center text-3xl font-bold mb-8 ">Nosso Impacto</h2>
        <Stats className="w-full p-8" events={events} />
      </section>

      {/* Missão e Visão */}
      <section className="flex flex-col items-center">
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

      {/* Nossa Equipe */}
      <section className="py-16 flex flex-col items-center">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold ">
            Nossa Equipe
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-purple-100">
                <div className="aspect-square w-full overflow-hidden bg-purple-100">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm ">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Parceiros */}
      <section className="py-16 ">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold ">
            Nossos Parceiros
          </h2>

          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-center ">
              Colaboramos com diversos parceiros que compartilham nosso
              compromisso em promover saúde e bem-estar nas comunidades. Juntos,
              ampliamos nosso impacto e alcançamos mais pessoas necessitadas.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 h-20 w-full overflow-hidden rounded-md border bg-white p-4 border-purple-100">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-center font-medium ">{partner.name}</h3>
                  <p className="text-center text-sm ">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História - Timeline */}
      <section className="py-16 ">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold ">
            Nossa Jornada
          </h2>

          <div className="mx-auto max-w-4xl mb-10">
            <p className="text-center mb-8">
              Desde 2018, a Biomedicina Ação Social tem trabalhado
              incansavelmente para levar saúde e bem-estar a comunidades em todo
              o Brasil. Nossa jornada é marcada por dedicação, crescimento e
              impacto positivo na vida das pessoas.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Marcos Importantes</h3>
              <Timeline events={milestones} />
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold ">Histórico de Ações</h3>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 " />
                <select
                  value={timelineFilter}
                  onChange={(e) => setTimelineFilter(e.target.value)}
                  className="text-sm border rounded-md py-1 px-2 "
                >
                  <option value="todos">Todas as ações</option>
                  <option value="maiores">10 maiores ações</option>
                  <option value="profissionais">
                    Ações com mais voluntários
                  </option>
                </select>
              </div>
            </div>

            <Timeline events={filteredEvents} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Faça Parte desta Missão</h2>
            <p className="mb-8 text-lg">
              Juntos, podemos transformar a vida de milhares de pessoas levando
              saúde preventiva às comunidades. Seja como doador, voluntário ou
              parceiro, seu apoio é fundamental para continuarmos fazendo a
              diferença.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/donate">Faça uma Doação</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 border-white/30"
                asChild
              >
                <Link to="/contact">
                  Seja Voluntário
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
