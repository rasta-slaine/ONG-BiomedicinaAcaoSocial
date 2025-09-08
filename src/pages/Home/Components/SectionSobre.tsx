import { ArrowRight } from "lucide-react";

const Slide1 = "/images/voluntaria-em-acao.png";
const Slide2 = "/images/cientista-no-laboratorio.png";
const Slide3 = "/images/close-up-pesquisa.png";
const Slide4 = "/images/palestra-educativa.png";
const Slide5 = "/images/criancas-sorrindo.png";

// --- DADOS DO COMPONENTE ---
// Edite facilmente o conteúdo aqui. Use as imagens que você gerou!
const images = [
  {
    src: Slide1,
    alt: "Voluntária da ONG em ação comunitária",
    position: "absolute top-1/3 left-1/7 -translate-y-1/2 -translate-x-1/2", // Posição na colagem
  },
  {
    src: Slide2,
    alt: "Pesquisadora em laboratório",
    position: "absolute top-1/2 left-102 -translate-y-1/2 -translate-x-1/2",
  },
  {
    src: Slide3,
    alt: "Pesquisadora em laboratório",
    position: "absolute top-1/3 left-160 -translate-y-1/2 -translate-x-1/2",
  },
  {
    src: Slide4,
    alt: "Pesquisadora em laboratório",
    position: "absolute top-50 left-216 -translate-y-1/2 -translate-x-1/2",
  },
  {
    src: Slide5,
    alt: "Crianças beneficiadas pelo projeto",
    position: "absolute top-1/3 left-270 -translate-y-1/2 -translate-x-1/2",
  },
];

const imageCredits = "Fotos por: Voluntários da Ação Social";
const headline = "Nossa História é Sobre Cuidado, Ciência e Comunidade";

// --- COMPONENTE PRINCIPAL ---
export function SectionSobre() {
  return (
    <section className="bg-white-">
      <div className="mx-auto ">
        {/* --- Banner de Imagens Estático --- */}
        <div className="relative px-4 w-full h-48 md:h-64 lg:h-80 bg-green-600 rounded-b-lg overflow-hidden">
          {/* Fundo com formas circulares */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-white -translate-x-1/4"></div>
            <div className="w-80 h-80 rounded-full bg-white translate-x-1/4"></div>
          </div>

          {/* Colagem de Imagens Estática */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-xl ${image.position}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-right text-xs text-gray-400 mt-2 pr-2">
          <p>| {imageCredits}</p>
        </div>

        {/* --- Bloco de Texto --- */}
        <div className="max-w-4xl mx-auto py-12 md:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {headline}
          </h2>

          <div className="mt-4 mb-8 w-24 h-1.5 bg-green-500 rounded-full mx-auto"></div>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Desde 2015, O Instituto de Saúde Multiprofissional tem sido um pilar
            de esperança e transformação Somos mais do que uma ONG; somos um
            movimento. Reunimos a paixão e o conhecimento de centenas de
            voluntários de diversas áreas – biomedicina, enfermagem, psicologia,
            medicina, nutrição
            <strong className="font-bold text-gray-800 border-b border-dotted border-gray-400">
              biomedicina
            </strong>
            ,{" "}
            <strong className="font-bold text-gray-800 border-b border-dotted border-gray-400">
              enfermagem
            </strong>{" "}
            ,
            <strong className="font-bold text-gray-800 border-b border-dotted border-gray-400">
              psicologia
            </strong>{" "}
            ,
            <strong className="font-bold text-gray-800 border-b border-dotted border-gray-400">
              medicina
            </strong>{" "}
            e muitas outras – para criar uma rede de apoio que leva saúde onde
            ela é mais necessária. <br />
          </p>
        </div>

        {/* Botão para Ver Todos */}
        <div className="mt-1 text-center">
          <a
            href="/sobre"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
          >
            Conheça Nossa História
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
