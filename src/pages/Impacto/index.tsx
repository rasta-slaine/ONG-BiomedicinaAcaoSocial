import { useState } from "react";

import {
  TrendingUp,
  GraduationCap,
  Globe,
  Calendar,
  Heart,
} from "lucide-react";

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

// Sample impact statistics by year
const yearlyStatistics = {
  "2018": {
    qtdeEventos: 3,
    qtdeProfissionais: 59,
    qtdeAtendidos: 361,
    qtdeLocais: 3,
    qtdeCidades: 1,
    qtdeEstados: 1,
  },
  "2019": {
    qtdeEventos: 2,
    qtdeProfissionais: 106,
    qtdeAtendidos: 495,
    qtdeLocais: 2,
    qtdeCidades: 2,
    qtdeEstados: 1,
  },
  "2020": {
    qtdeEventos: 1,
    qtdeProfissionais: 31,
    qtdeAtendidos: 128,
    qtdeLocais: 1,
    qtdeCidades: 1,
    qtdeEstados: 1,
  },
  "2021": {
    qtdeEventos: 2,
    qtdeProfissionais: 39,
    qtdeAtendidos: 105,
    qtdeLocais: 2,
    qtdeCidades: 2,
    qtdeEstados: 2,
  },
  "2022": {
    qtdeEventos: 8,
    qtdeProfissionais: 266,
    qtdeAtendidos: 515,
    qtdeLocais: 8,
    qtdeCidades: 5,
    qtdeEstados: 1,
  },
  "2023": {
    qtdeEventos: 4,
    qtdeProfissionais: 79,
    qtdeAtendidos: 232,
    qtdeLocais: 4,
    qtdeCidades: 3,
    qtdeEstados: 2,
  },
  "2024": {
    qtdeEventos: 10,
    qtdeProfissionais: 132,
    qtdeAtendidos: 526,
    qtdeLocais: 10,
    qtdeCidades: 8,
    qtdeEstados: 1,
  },
};

// Sample impact statistics
const impactStats = [
  {
    value: "2,616+",
    label: "Atendimentos",
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
  {
    value: "28+",
    label: "Locais",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    value: "32+",
    label: "Eventos Realizados",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    value: "854+",
    label: "Profissionais",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
];

// Format currency function
// const formatCurrency = (amount: number) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     maximumFractionDigits: 0,
//   }).format(amount);
// };

// Format number with commas
const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

export function ImpactAwardsPage() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const currentYearStats =
    yearlyStatistics[selectedYear as keyof typeof yearlyStatistics];

  // Calculate growth percentages
  const calculateGrowth = (metric: keyof (typeof yearlyStatistics)["2024"]) => {
    const currentYear = Number.parseInt(selectedYear);
    const previousYear = (currentYear - 1).toString();

    if (yearlyStatistics[previousYear as keyof typeof yearlyStatistics]) {
      const current =
        yearlyStatistics[selectedYear as keyof typeof yearlyStatistics][metric];
      const previous =
        yearlyStatistics[previousYear as keyof typeof yearlyStatistics][metric];
      const growthPercentage = ((current - previous) / previous) * 100;
      return growthPercentage.toFixed(1);
    }
    return 0;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Nosso Impacto e Reconhecimento
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Celebrando nossas conquistas, medindo nosso impacto e reconhecendo
              os esforços coletivos que avançam nossa missão em cuidados
              biomédicos
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 flex flex-col items-center justify-center bg-muted">
        <div className="container">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl align-center">
              Estatisticas Anuais
            </h2>

            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium">Selecione o Ano:</span>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022"> 2022 </SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {formatNumber(currentYearStats.qtdeAtendidos)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("qtdeAtendidos")}% Em Comporação com os
                    Anos Anteriores
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Pessoas Atendidas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.qtdeProfissionais}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("qtdeProfissionais")}% Em Comporação com os
                    Anos Anteriores
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Profissionais</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.qtdeEventos}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("qtdeEventos")}% Em Comporação com os Anos
                    Anteriores
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Eventos Realizados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.qtdeLocais}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("qtdeLocais")}% Em Comporação com os Anos
                    Anteriores
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Locais</p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {formatCurrency(currentYearStats.fundingSecured)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("fundingSecured")}%  Em Comporação com os Anos Anteriores
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Funding Secured</p>
              </CardContent>
            </Card> */}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {currentYearStats.qtdeEstados}
                </CardTitle>
                <CardDescription className="flex items-center"></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Estados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {currentYearStats.qtdeCidades}
                </CardTitle>
                <CardDescription className="flex items-center"></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Cidades</p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {formatNumber(currentYearStats.livesImpacted)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <span>Total lives positively impacted</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Overall Impact</p>
              </CardContent>
            </Card> */}
          </div>
          {/* 
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/about#financials">
                View Detailed Annual Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-muted py-16 mb-16 ">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Nosso Impacto
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
                  {stat.icon}
                </div>
                <h3 className="mb-1 text-3xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
