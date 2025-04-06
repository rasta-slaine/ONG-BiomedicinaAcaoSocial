import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CtaB = () => {
  return (
    <section className="bg-green-600 py-16 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Apoie o Avanço Biomédico</h2>
          <p className="mb-8 text-lg">
            Sua contribuição ajuda a financiar pesquisas críticas, proporciona
            oportunidades educacionais e apoia o desenvolvimento de soluções
            inovadoras de saúde para aqueles que mais precisam.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-white/90"
              asChild
            >
              <Link to="/donate">Faça uma Doação</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/volunteer">Envolva-se</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
