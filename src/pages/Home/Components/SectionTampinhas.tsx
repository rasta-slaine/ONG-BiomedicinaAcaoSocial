import { Link } from "react-router-dom";
import { Recycle, ArrowRight } from "lucide-react";

export function SectionTampinha() {
  return (
    <section className="bg-white mb-26">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-green-600 to-teal-500 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
            {/* Coluna 1: Imagem e Ícones */}
            <div className="relative h-48 md:h-full w-full flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-white/20 rounded-full animate-pulse"></div>
              <Recycle className="relative w-24 h-24 text-white drop-shadow-lg" />
            </div>

            {/* Coluna 2: Texto Principal */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="font-semibold text-teal-200">
                Um Projeto Pessoal do Dr. Dácio Campos
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                Projeto Tampinha do Bem
              </h2>
              <p className="mt-4 text-lg text-green-100 max-w-2xl">
                Junte suas tampinhas plásticas e troque por kits incríveis! Cada
                tampinha coletada nos ajuda a construir e doar cadeiras de
                rodas, transformando um simples gesto em mobilidade e dignidade.
              </p>
              <div className="mt-6">
                <Link
                  to="/projetos/tampinhas"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-green-700 bg-white hover:bg-green-50 transition-transform hover:scale-105"
                >
                  Saiba Como Ajudar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
