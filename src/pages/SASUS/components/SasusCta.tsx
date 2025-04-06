import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SasusCta = () => {
  return (
    <div className="bg-primary py-16 text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Cuide da Sua Saúde</h2>
          <p className="mb-8 text-lg">
            O SASUS está aqui para facilitar seu acesso aos serviços de saúde
            pública. Agende uma consulta, tire suas dúvidas ou conheça melhor o
            Sistema Único de Saúde.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" variant="secondary" asChild>
              <a href="#schedule">Agendar Consulta</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
