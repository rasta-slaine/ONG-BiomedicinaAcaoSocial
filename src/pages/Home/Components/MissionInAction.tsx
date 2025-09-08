import { Stethoscope, BookOpen, Microscope, ArrowRight } from "lucide-react";

// --- DADOS DA SEÇÃO ---
// Facilita a edição do conteúdo sem tocar no JSX
const pilaresData = [
  {
    icon: Stethoscope,
    title: "Saúde Acessível",
    description:
      "Levamos atendimento primário e preventivo diretamente às comunidades, quebrando barreiras de acesso.",
    actions: [
      "Mutirões de saúde com triagem",
      "Consultas multiprofissionais",
      "Campanhas de vacinação",
    ],
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: BookOpen,
    title: "Educação que Liberta",
    description:
      "Acreditamos que a informação é a ferramenta mais poderosa para a prevenção e o autocuidado.",
    actions: [
      "Palestras em escolas e associações",
      "Workshops sobre saúde da mulher",
      "Produção de material educativo",
    ],

    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Microscope,
    title: "Pesquisa que Transforma",
    description:
      "Nossos projetos de pesquisa aplicada buscam soluções inovadoras para os desafios de saúde locais.",
    actions: [
      "Mapeamento de endemias locais",
      "Estudos sobre nutrição e bem-estar",
      "Iniciação científica para voluntários",
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

// --- Sub-componente para o Card de Pilar ---
const PillarCard = ({
  icon: Icon,
  title,
  description,
  actions,
  color,
  bgColor,
}: (typeof pilaresData)[0]) => (
  <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
    <div className={`w-fit p-3 rounded-full mb-5 ${bgColor}`}>
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-5 flex-grow">{description}</p>
    <ul className="space-y-2">
      {actions.map((action, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="w-4 h-4 mr-3 mt-1 text-green-500 flex-shrink-0" />
          <span className="text-gray-700">{action}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Componente Principal da Seção ---
export function MissionInAction() {
  return (
    // A margem negativa -mt-24 ou -mt-32 é a chave para a transição fluida com a curva da Hero
    <section className="relative  pb-16 md:pb-24 -mt-24 md:-mt-32">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Título da Seção (opcional, pode ser removido se preferir ir direto para os cards) */}
        <div className="text-center mb-12 pt-24 md:pt-32">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Nossa Missão em Ação
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Acreditamos que o cuidado com a vida começa com acesso, informação e
            dignidade. Veja como colocamos isso em prática:
          </p>
        </div>

        {/* Grade de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilaresData.map((pilar) => (
            <PillarCard key={pilar.title} {...pilar} />
          ))}
        </div>
      </div>
    </section>
  );
}
