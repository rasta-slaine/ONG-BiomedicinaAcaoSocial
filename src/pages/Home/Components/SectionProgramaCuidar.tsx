import { Link } from "react-router-dom";
import { HandHeart, ArrowRight } from "lucide-react";

export function SectionProgramaCuidar() {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Coluna 1: Texto Principal */}
            <div className="text-center md:text-left">
              <p className="font-semibold text-green-600">
                Um Espaço para Quem Cuida
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Programa Cuidar
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Sabemos que sua jornada é de dedicação intensa. Por isso,
                criamos um programa exclusivo para você, profissional da saúde.
                Um espaço de acolhimento e cuidado integral para renovar suas
                energias e zelar pelo seu bem-estar.
              </p>
              <div className="mt-6">
                <Link
                  to="/programa-cuidar"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
                >
                  Conheça o Programa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Coluna 2: Imagem e Ícones */}
            <div className="relative h-64 md:h-full w-full flex items-center justify-center">
              <div className="absolute w-48 h-48 bg-green-100 rounded-full animate-pulse"></div>
              <HandHeart className="relative w-32 h-32 text-green-600 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
