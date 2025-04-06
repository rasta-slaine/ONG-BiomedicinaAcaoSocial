import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Recursos = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Recursos Biomédicos
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Recursos Educacionais</CardTitle>
                <CardDescription>
                  Materiais de aprendizagem gratuitos para estudantes e
                  profissionais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">
                      Curso de Introdução à Biomedicina
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Acessar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">
                      Guia de Métodos de Pesquisa Biomédica
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Baixar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Série de Videoaulas</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Assistir
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>Publicações Científicas</CardTitle>
                <CardDescription>
                  Nossas contribuições de pesquisa para o campo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">
                      Artigos de Pesquisa Recentes
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Navegar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">
                      Relatório Anual de Pesquisa
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Baixar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                  <Separator />
                  <li className="flex items-center justify-between">
                    <span className="font-medium">Estudos Colaborativos</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Explorar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
