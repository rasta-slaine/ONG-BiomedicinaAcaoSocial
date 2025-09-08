import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  Users,
  MessageSquare,
} from "lucide-react";

// --- DADOS DOS TESTEMUNHOS (sem alterações) ---
const testimonialsData = [
  {
    quote:
      "Fazer parte da Ação Social como voluntária de enfermagem mudou minha perspectiva. A gente não só aplica o que aprende, mas se conecta de verdade com as pessoas. É a ciência com alma.",
    author: "Juliana Silva",
    role: "Voluntária de Enfermagem",
    avatarUrl: "/images/pessoas/juliana-silva.png",
  },
  {
    quote:
      "O mutirão de saúde na nossa comunidade foi um divisor de águas. Muitos de nós não tínhamos acesso a exames básicos há anos. O trabalho do Instituto é essencial e trouxe esperança para todos nós.",
    author: "Carlos Andrade",
    role: "Líder Comunitário",
    avatarUrl: "/images/pessoas/carlos-andrade.png",
  },
  {
    quote:
      "A parceria com a Ação Social permitiu que nossos alunos de biomedicina tivessem uma experiência prática inestimável, aplicando o conhecimento para gerar um impacto social real. É uma colaboração que forma profissionais mais humanos.",
    author: "Dra. Helena Costa",
    role: "Coordenadora da Universidade da Saúde",
    avatarUrl: "/images/pessoas/helena-costa.png",
  },
  {
    quote:
      "Receber orientação nutricional para meu filho diabético fez toda a diferença. As voluntárias foram incríveis, pacientes e nos ensinaram a ter uma vida mais saudável e feliz.",
    author: "Maria Oliveira",
    role: "Mãe de Paciente Atendido",
    avatarUrl: "/images/pessoas/maria-oliveira.png",
  },
];

// --- Sub-componentes para Navegação do Carousel (sem alterações) ---
const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <button
    className="absolute top-1/2 left-4 md:left-0 -translate-y-1/2 md:-translate-x-1/2 bg-white p-3 rounded-full shadow-md disabled:opacity-50 transition-opacity z-10"
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowLeft className="w-6 h-6 text-gray-700" />
  </button>
);
const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <button
    className="absolute top-1/2 right-4 md:right-0 -translate-y-1/2 md:translate-x-1/2 bg-white p-3 rounded-full shadow-md disabled:opacity-50 transition-opacity z-10"
    onClick={onClick}
    disabled={!enabled}
  >
    <ArrowRight className="w-6 h-6 text-gray-700" />
  </button>
);

// --- NOVO SUB-COMPONENTE PARA O PADRÃO DE FUNDO ---
const BackgroundIcons = () => {
  const icons = [
    {
      Icon: HeartHandshake,
      className:
        "absolute top-[15%] left-[5%] h-28 w-28 text-white/5 rotate-12",
    },
    {
      Icon: Users,
      className:
        "absolute top-[20%] right-[10%] h-32 w-32 text-white/5 -rotate-6",
    },
    {
      Icon: MessageSquare,
      className:
        "absolute top-[50%] left-[20%] h-24 w-24 text-white/5 rotate-6",
    },
    {
      Icon: Users,
      className:
        "absolute bottom-[10%] right-[15%] h-28 w-28 text-white/5 -rotate-12",
    },
    {
      Icon: HeartHandshake,
      className:
        "absolute bottom-[5%] left-[40%] h-20 w-20 text-white/5 rotate-12",
    },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((item, index) => (
        <item.Icon key={index} className={item.className} strokeWidth={1} />
      ))}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL AJUSTADO ---
export function SectionTestemunhos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-green-600 py-16 sm:py-24 overflow-hidden">
      {/* Estilos para o Embla Carousel (sem alterações) */}
      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1280px) {
          .embla__slide {
            flex: 0 0 33.3333%;
          }
        }
      `}</style>

      {/* Camada de Fundo com Padrão de Ícones */}
      <BackgroundIcons />

      {/* Camada de Conteúdo */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Vozes do Impacto
          </h2>
          <p className="mt-6 text-lg text-green-100 leading-relaxed">
            O verdadeiro impacto do nosso trabalho é contado pelas pessoas que
            fazem parte da nossa jornada.
          </p>
        </div>

        <div className="relative">
          <div className="embla -mx-4" ref={emblaRef}>
            <div className="embla__container">
              {testimonialsData.map((testimonial, index) => (
                <div className="embla__slide" key={index}>
                  <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col">
                    <Quote className="w-12 h-12 text-green-100 mb-4" />
                    <p className="text-gray-600 italic flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-bold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  selectedIndex === index
                    ? "bg-white"
                    : "bg-green-400 hover:bg-green-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
