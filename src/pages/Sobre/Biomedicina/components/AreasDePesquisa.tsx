import { Link } from "react-router-dom";
import {
  HeartPulse,
  Dna,
  Brain,
  Pill,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure these components exist and are correctly implemented

// Áreas de pesquisa biomédica
const researchAreas = [
  {
    title: "Biologia Molecular e Genética",
    description:
      "Estudo de processos biológicos a nível molecular, incluindo interações de DNA, RNA e proteínas que formam a base da vida e das doenças.",
    icon: <Dna className="h-6 w-6 text-primary" />,
    applications: [
      "Terapia gênica para doenças hereditárias",
      "Testes genéticos e medicina personalizada",
      "Tecnologias de edição genética CRISPR",
      "Genômica do câncer e terapias direcionadas",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Imunologia e Doenças Infecciosas",
    description:
      "Pesquisa sobre o sistema imunológico e sua resposta a patógenos, com aplicações no desenvolvimento de vacinas, tratamentos para doenças autoimunes e controle de doenças infecciosas.",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    applications: [
      "Desenvolvimento de vacinas e imunoterapia",
      "Tratamentos para doenças autoimunes",
      "Preparação e resposta a pandemias",
      "Soluções para resistência antimicrobiana",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Neurociência",
    description:
      "Exploração do sistema nervoso, função cerebral e distúrbios neurológicos para desenvolver tratamentos para condições como Alzheimer, Parkinson e transtornos de saúde mental.",
    icon: <Brain className="h-6 w-6 text-primary" />,
    applications: [
      "Tratamentos para doenças neurodegenerativas",
      "Interfaces cérebro-computador",
      "Terapias para transtornos de saúde mental",
      "Pesquisa em aprimoramento cognitivo",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Farmacologia e Desenvolvimento de Medicamentos",
    description:
      "Desenvolvimento e teste de novos medicamentos, compreensão dos mecanismos de ação e aprimoramento de sistemas de entrega de medicamentos para tratamentos mais eficazes.",
    icon: <Pill className="h-6 w-6 text-primary" />,
    applications: [
      "Descoberta e desenvolvimento de novos medicamentos",
      "Sistemas de entrega de medicamentos direcionados",
      "Medicamentos órfãos para doenças raras",
      "Reaproveitamento de medicamentos para novas indicações",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Engenharia Biomédica",
    description:
      "Aplicação de princípios de engenharia à medicina e biologia para desenvolver dispositivos médicos, próteses, tecnologias de imagem e engenharia de tecidos.",
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
    applications: [
      "Inovação em dispositivos médicos",
      "Órgãos artificiais e engenharia de tecidos",
      "Próteses e tecnologias assistivas",
      "Avanços em imagens biomédicas",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
];

export const AreasDePesquisa = () => {
  return (
    <section id="research-areas" className="py-16">
      <div className="">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Áreas-Chave de Pesquisa
        </h2>

        <Tabs
          defaultValue="Biologia Molecular e Genética"
          className="mx-auto max-w-4xl"
        >
          <div className="">
            <TabsList className="w-full flex flex-row space-x-2.5">
              {researchAreas.map((area, index) => (
                <TabsTrigger key={index} value={area.title} className="">
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {researchAreas.map((area, index) => (
            <TabsContent key={index} value={area.title}>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="mr-4 rounded-fullp-3">{area.icon}</div>
                    <div>
                      <CardTitle>{area.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {area.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="mb-4 text-lg font-medium">
                    Principais Aplicações
                  </h3>
                  <ul className="space-y-2">
                    {area.applications.map((application, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        </div>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link to={`/research/${area.title}`}>
                      Saiba Mais Sobre {area.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
