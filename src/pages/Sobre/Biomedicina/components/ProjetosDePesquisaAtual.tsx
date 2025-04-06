import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Projetos de pesquisa atuais
const researchProjects = [
  {
    title: "Sistemas Inovadores de Entrega de Vacinas para Áreas Remotas",
    description:
      "Desenvolvimento de formulações de vacinas estáveis à temperatura e métodos inovadores de entrega que não requerem armazenamento refrigerado, tornando as vacinas acessíveis em regiões remotas com infraestrutura limitada.",
    status: "Em andamento",
    year: "2022-2024",
    partners: ["Instituto de Saúde Global", "Centro Médico Universitário"],
    impact:
      "Potencial para aumentar as taxas de vacinação em 40% em regiões carentes",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Plataforma Portátil de Diagnóstico para Doenças Infecciosas",
    description:
      "Criação de um dispositivo de diagnóstico portátil e acessível que pode detectar rapidamente múltiplas doenças infecciosas com treinamento mínimo, projetado especificamente para uso em ambientes com recursos limitados.",
    status: "Em andamento",
    year: "2021-2023",
    partners: ["Inovações Biotecnológicas", "Departamentos Regionais de Saúde"],
    impact:
      "Reduz o tempo de diagnóstico de dias para minutos, permitindo tratamento mais rápido",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Identificação de Biomarcadores para Detecção Precoce de Doenças",
    description:
      "Pesquisa de novos biomarcadores que podem identificar doenças em seus estágios iniciais, quando o tratamento é mais eficaz, com foco em condições prevalentes em populações carentes.",
    status: "Em andamento",
    year: "2023-2025",
    partners: ["Fundação de Pesquisa Médica", "Rede Hospitalar Universitária"],
    impact:
      "Poderia melhorar as taxas de sobrevivência em até 60% através de intervenção precoce",
    image: "/placeholder.svg?height=250&width=400",
  },
];

export const ProjetosDePesquisaAtual = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    if (expandedProject === title) {
      setExpandedProject(null);
    } else {
      setExpandedProject(title);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Nossos Projetos de Pesquisa Atuais
        </h2>

        <div className="mx-auto max-w-4xl space-y-6">
          {researchProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all"
            >
              <div
                className="flex cursor-pointer items-center justify-between p-6"
                onClick={() => toggleProject(project.title)}
              >
                <div className="flex items-center">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="mr-2">
                        {project.status}
                      </Badge>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                <div>
                  {expandedProject === project.title ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </div>

              {expandedProject === project.title && (
                <div className="border-t px-6 py-4">
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium">
                        Parceiros de Pesquisa
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.partners.map((partner, idx) => (
                          <li key={idx} className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-blue-600" />
                            {partner}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Impacto Potencial</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/research">
              Ver Todos os Projetos de Pesquisa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
