import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Carreiras em biomedicina
const careerPaths = [
  {
    title: "Pesquisador Biomédico",
    description:
      "Realiza pesquisas laboratoriais para avançar o conhecimento médico e desenvolver novos tratamentos para doenças.",
    education: "Doutorado em Ciências Biomédicas ou área relacionada",
    skills: [
      "Técnicas laboratoriais",
      "Análise de dados",
      "Design de pesquisa",
      "Redação científica",
    ],
    workSettings: [
      "Universidades",
      "Institutos de pesquisa",
      "Empresas farmacêuticas",
      "Agências governamentais",
    ],
  },
  {
    title: "Coordenador de Pesquisa Clínica",
    description:
      "Gerencia e coordena ensaios clínicos para testar novos tratamentos, medicamentos ou dispositivos médicos.",
    education: "Bacharelado ou Mestrado em Ciências da Vida ou Saúde",
    skills: [
      "Gerenciamento de projetos",
      "Conhecimento regulatório",
      "Interação com pacientes",
      "Coleta de dados",
    ],
    workSettings: [
      "Hospitais",
      "Centros de pesquisa",
      "Empresas farmacêuticas",
      "Organizações de pesquisa contratada",
    ],
  },
  {
    title: "Engenheiro Biomédico",
    description:
      "Projeta e desenvolve equipamentos médicos, dispositivos e software para resolver problemas clínicos.",
    education: "Bacharelado ou Mestrado em Engenharia Biomédica",
    skills: [
      "Princípios de engenharia",
      "Design de dispositivos médicos",
      "Resolução de problemas",
      "Redação técnica",
    ],
    workSettings: [
      "Empresas de dispositivos médicos",
      "Hospitais",
      "Instituições de pesquisa",
      "Agências reguladoras",
    ],
  },
  {
    title: "Bioinformático",
    description:
      "Analisa dados biológicos usando métodos computacionais para apoiar pesquisas e aplicações clínicas.",
    education: "Mestrado ou Doutorado em Bioinformática ou área relacionada",
    skills: [
      "Programação",
      "Análise estatística",
      "Gerenciamento de banco de dados",
      "Conhecimento biológico",
    ],
    workSettings: [
      "Instituições de pesquisa",
      "Empresas de biotecnologia",
      "Indústria farmacêutica",
      "Sistemas de saúde",
    ],
  },
];

export const CarreirasBiomedicina = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Carreiras em Biomedicina
        </h2>

        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-lg text-muted-foreground">
            O campo da biomedicina oferece oportunidades de carreira
            diversificadas e gratificantes para aqueles apaixonados por ciência,
            saúde e por fazer a diferença na vida das pessoas.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {careerPaths.map((career, index) => (
              <Card key={index} className="hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>{career.title}</CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium">Educação Necessária</h4>
                      <p className="text-sm text-muted-foreground">
                        {career.education}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-medium">
                        Habilidades Essenciais
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-medium">
                        Ambientes de Trabalho
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {career.workSettings.map((setting, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="mr-2 rounded-full bg-green-100 p-1">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            </div>
                            {setting}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/volunteer">
                Explorar Oportunidades de Voluntariado
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
