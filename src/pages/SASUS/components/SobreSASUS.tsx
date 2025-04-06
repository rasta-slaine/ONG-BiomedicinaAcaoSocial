import { Calendar, Video, CheckCircle, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

export const SobreSASUS = () => {
  const CardInfo = [
    {
      icon: Users,
      title: "Apoio Profissional",
      content:
        "Contamos com uma equipe de profissionais de saúde voluntários da nossa ONG que oferecem suporte adicional ao sistema público, ajudando a reduzir filas e melhorar o atendimento.",
    },
    {
      icon: Calendar,
      title: "Agendamento Simplificado",
      content:
        "Facilitamos o agendamento de consultas e exames nas unidades de saúde do SUS, com um sistema online intuitivo que reduz a necessidade de deslocamentos.",
    },
    {
      icon: Video,
      title: "Telemedicina",
      content:
        "Oferecemos consultas online com profissionais qualificados para casos que não exigem atendimento presencial, ampliando o acesso à saúde em todo o país.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="w-full ">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Sobre o Projeto
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            O SASUS (Sistema de Apoio ao SUS) é uma iniciativa que visa melhorar
            o acesso aos serviços de saúde pública no Brasil, reduzindo filas de
            espera e otimizando o atendimento no Sistema Único de Saúde.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 p-8">
          {CardInfo.map((card, index) => (
            <Card
              key={index}
              className="border-2 border-primary/10 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Democratizar o acesso à saúde pública de qualidade, reduzindo
                filas de espera e otimizando recursos do Sistema Único de Saúde
                através de tecnologia e apoio profissional.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span>Redução de filas de espera em até 40%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span>
                    Atendimento complementar em especialidades com maior demanda
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary" />
                  <span>
                    Orientação sobre o uso adequado dos serviços de saúde
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Resultados Alcançados</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Consultas realizadas
                    </span>
                    <span className="text-sm font-medium">75.000+</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Redução nas filas
                    </span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2 w-3" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Satisfação dos usuários
                    </span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Municípios atendidos
                    </span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
