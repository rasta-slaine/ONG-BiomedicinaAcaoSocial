import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SobreSASUS } from "./components/SobreSASUS";
import { InstitutionSection } from "./components/InstitutionSection";
import { Indicadores } from "./components/Indicadores";
import { AgendamentoConsulta } from "./components/AgendamentoConsulta";
import { SasusFaq } from "./components/SasusFaq";
import { SasusCta } from "./components/SasusCta";
import { AgendamentoConsultaOnline } from "./components/AgendamentoConsultaOnline";

export function Sasus() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl mb-12">
          <Badge className="mb-4">Sistema de Apoio ao SUS</Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Conheça o SASUS{" "}
          </h1>
          <p className="text-xl leading-relaxed">
            Facilitando o acesso à saúde pública e reduzindo filas de espera no
            Sistema Único de Saúde
          </p>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a href="#schedule">Agendar Consulta</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="#online-consult">Consulta Online</a>
          </Button>
        </div>
      </section>

      <SobreSASUS />
      <InstitutionSection />
      <Indicadores />
      <AgendamentoConsulta />
      <AgendamentoConsultaOnline />
      <SasusFaq />
      <SasusCta />
    </div>
  );
}
