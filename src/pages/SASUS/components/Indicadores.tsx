import { Clock, FileText, Building, Thermometer } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

export const Indicadores = () => {
  const CardInfo = [
    {
      title: "Unidades de saúde em São Paulo",
      icon: Building,
      value: "1.342",
      list: [
        {
          value: "468",
          title: "UBS",
        },
        {
          value: "116",
          title: "UPA",
        },
        {
          value: "189",
          title: "Hospitais",
        },
        {
          value: "569",
          title: "Hospitais",
        },
      ],
    },
    {
      title: "Tempo médio de espera",
      icon: Clock,
      value: "43 dias",
      list: [
        {
          value: "15 dias",
          title: "Clínico Geral",
        },
        {
          value: "62 dias",
          title: "Cardiologia",
        },
        {
          value: "48 dias",
          title: "Ortopedia",
        },
        {
          value: "75 dias",
          title: "Oftalmologia",
        },
      ],
    },
    {
      title: "Exames mais solicitados",
      icon: FileText,
      value: "Top 5",
      list: [
        {
          value: "28%",
          title: "Hemograma",
        },
        {
          value: "22%",
          title: "Raio-X",
        },
        {
          value: "18%",
          title: "Ultrassonografia",
        },
        {
          value: "15%",
          title: "Eletrocardiograma",
        },
        {
          value: "12%",
          title: "Glicemia",
        },
      ],
    },
    {
      title: "Doenças mais comuns",
      icon: Thermometer,
      value: "Top 5",
      list: [
        {
          value: "32%",
          title: "Hipertensão",
        },
        {
          value: "24%",
          title: "Diabetes",
        },
        {
          value: "18%",
          title: "Infecções respiratórias",
        },
        {
          value: "15%",
          title: "Doenças cardiovasculares",
        },
        {
          value: "11%",
          title: "Transtornos mentais",
        },
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24  flex flex-row justify-center ">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Indicadores de Saúde
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {CardInfo.map((card, index) => (
            <div>
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold">
                    {card.value}
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <card.icon className="mr-1 h-4 w-4 text-primary" />
                    <span>{card.title}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-1">
                    {card.list.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between text-xs">
                          <span>{item.title}</span>
                          <span>{item.value}</span>
                        </div>
                        <Progress value={35} className="h-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-12 text-center">
                  <Button variant="outline" asChild>
                    <Link to="/indicadores">
                      Ver Todos os Indicadores
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div> */}
    </div>
  );
};
