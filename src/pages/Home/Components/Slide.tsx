// src/components/IntroBlock.tsx

import { useState, useEffect } from "react";

const Slide1 = "/images/voluntaria-em-acao.png";
const Slide2 = "/images/cientista-no-laboratorio.png";
const Slide3 = "/images/close-up-pesquisa.png";
const Slide4 = "/images/palestra-educativa.png";
const Slide5 = "/images/criancas-sorrindo.png";

// --- DADOS DO COMPONENTE ---
// Edite facilmente o conteúdo aqui
const images = [
  {
    src: Slide1,
    alt: "Voluntária da ONG em ação comunitária",
  },
  {
    src: Slide2,
    alt: "Pesquisadora em laboratório",
  },
  {
    src: Slide3,
    alt: "Detalhe de pesquisa biomédica",
  },
  {
    src: Slide4,
    alt: "Palestra sobre saúde para a comunidade",
  },
  {
    src: Slide5,
    alt: "Crianças beneficiadas pelo projeto",
  },
];

const imageCredits = "Fotos por: Voluntários da Ação Social";
const headline = "Transformando Vidas em Nossas Comunidades";
const mainText = `
  Promovendo **saúde de qualidade**, **educação em saúde** e progresso social, 
  a Ação Social tem melhorado a vida de milhares de pessoas em nossas comunidades, 
  criando um futuro mais saudável e justo para todos.
`;

// --- HOOK PARA O BOTÃO "VOLTAR AO TOPO" ---
function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { isVisible, scrollToTop };
}

// --- COMPONENTE PRINCIPAL ---
export function Slide() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        {/* --- Bloco de Texto --- */}
        <div className="max-w-4xl mx-auto py-12 md:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {headline}
          </h2>

          <div className="mt-4 mb-8 w-24 h-1.5 bg-green-500 rounded-full mx-auto"></div>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {mainText}
          </p>
        </div>
      </div>

      {/* --- Banner de Imagens --- */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 bg-green-600 rounded-b-lg overflow-hidden">
        {/* Fundo com formas circulares */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-white -translate-x-1/4"></div>
          <div className="w-80 h-80 rounded-full bg-white translate-x-1/4"></div>
        </div>

        {/* Colagem de Imagens */}
        <div className="absolute inset-0 flex items-center justify-center p-4 gap-4 animate-slow-pan">
          {images.map((image, index) => (
            <div key={index} className="w-1/3 h-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-right text-xs text-gray-400 mt-2 pr-2">
        <p>| {imageCredits}</p>
      </div>

      {/* Botão "Voltar ao Topo" */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gray-400 hover:bg-gray-500 text-white text-sm font-bold py-2 px-3 rounded-md transition-opacity duration-300"
        >
          Topo
        </button>
      )}

      {/* Animação CSS para o banner (opcional) */}
      <style>{`
        @keyframes slow-pan {
          0% {
            transform: translateX(25%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-slow-pan {
          width: 200%; /* Faz o container maior para o efeito de pan */
          animation: slow-pan 40s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
