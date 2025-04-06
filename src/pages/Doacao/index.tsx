import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FormDonation } from "./components/FormDonation";

export function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-500 to-red-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Sua doação salva vidas
          </h1>
          <p className="text-lg mb-8">
            Com seu apoio, conseguimos levar saúde, informação e dignidade a
            quem mais precisa. Junte-se a nós nessa missão de cuidado e
            transformação.
          </p>
          <Button
            size="lg"
            className="px-10 py-5 text-lg shadow-lg hover:scale-105 transition"
            asChild
          >
            <Link to="/doar/formulario">Fazer Doação Agora</Link>
          </Button>
        </div>
      </section>

      <FormDonation />
    </div>
  );
}
