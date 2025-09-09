import {
  HeartHandshake,
  ShieldCheck,
  Microscope,
  Beaker,
  Heart,
} from "lucide-react";

// --- DADOS DA SEÇÃO (sem alterações) ---
const sectionData = {
  title: "Sua Farmácia Doméstica Pode Salvar Vidas e Proteger o Futuro",
  subtitle:
    "Medicamentos parados na sua gaveta têm um destino muito melhor do que o lixo. Saiba como ajudar e proteger o meio ambiente.",
  cards: [
    {
      icon: HeartHandshake,
      title: "Doe Medicamentos, Salve Vidas",
      description:
        "Um gesto de cuidado. Medicamentos que você não usa mais, dentro da validade e lacrados, podem ser essenciais para o tratamento de alguém em nossas comunidades que não tem condições de comprá-los.",
      buttonText: "Encontrar Pontos de Coleta",
      buttonHref: "/doar-medicamento",
      colorTheme: {
        iconBg: "bg-blue-50",
        iconText: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 text-white",
      },
    },
    {
      icon: ShieldCheck,
      title: "Descarte Consciente, Proteja o Futuro",
      description:
        "Um gesto de proteção. Jogar remédios no lixo comum ou no esgoto contamina o solo e a água, e é uma das principais causas do surgimento de bactérias multirresistentes (superbactérias), um grave risco para a saúde de todos.",
      buttonText: "Aprender a Descartar",
      buttonHref: "/descarte-consciente",
      colorTheme: {
        iconBg: "bg-red-50",
        iconText: "text-red-600",
        button: "bg-white text-red-700 border border-red-300 hover:bg-red-50",
      },
    },
  ],
};

// --- COMPONENTE PRINCIPAL CORRIGIDO ---
export function SectionDoeMedicamento() {
  return (
    <section className="relative w-full bg-green-600 overflow-hidden py-16 sm:py-24">
      {/* Camada de Fundo com o Padrão de Ícones */}
      <Microscope className="absolute -top-8 left-100 h-100 w-180 text-white/10 rotate-12" />
      <Beaker className="absolute -top-1 -right-70 h-150 w-230 text-white/10 rotate-[-15deg]" />
      <Heart className="absolute  -top-4 -right-2 h-240 w-550 text-white/10" />

      {/* Camada de Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Cabeçalho da Seção (com cores de texto ajustadas) */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {sectionData.title}
          </h2>
          <p className="mt-6 text-lg text-green-100 leading-relaxed">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Grade com os Cards de Ação */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {sectionData.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`p-4 rounded-full mb-6 ${card.colorTheme.iconBg}`}
              >
                <card.icon
                  className={`w-10 h-10 ${card.colorTheme.iconText}`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">{card.description}</p>
              <a
                href={card.buttonHref}
                className={`w-full sm:w-auto inline-block px-8 py-3 font-semibold rounded-lg transition-colors duration-300 ${card.colorTheme.button}`}
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
