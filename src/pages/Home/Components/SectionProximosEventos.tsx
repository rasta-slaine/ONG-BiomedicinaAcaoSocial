//import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { events as mockEvents } from "@/mock/eventos"; // Certifique-se que o caminho está correto

// --- DADOS (Mantidos aqui para o exemplo ser funcional) ---
// Em um projeto real, isso viria de uma API ou de um arquivo separado
const events = mockEvents || [
  {
    id: "1",
    title: "Mutirão de Saúde Comunitária",
    description:
      "Junte-se a nós para um dia de atendimento, exames e educação em saúde na comunidade do Sol Nascente. Uma oportunidade de fazer a diferença!",
    date: "2025-10-26T10:00:00.000Z",
    location: "Praça Central, Sol Nascente",
    image: "/path/to/mutirao-saude.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Seminário de Biomedicina e Inovação",
    description:
      "Explore as últimas tendências e pesquisas em biomedicina com palestrantes renomados. Um evento imperdível para estudantes e profissionais.",
    date: "2025-11-15T18:00:00.000Z",
    location: "Auditório Principal, UnB",
    image: "/path/to/seminario-biomedicina.jpg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Campanha de Doação de Sangue",
    description:
      "Sua doação pode salvar até três vidas. Participe da nossa campanha anual em parceria com o hemocentro local e seja um herói.",
    date: "2025-12-05T09:00:00.000Z",
    location: "Hemocentro de Brasília",
    image: "/path/to/doacao-sangue.jpg",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Workshop de Primeiros Socorros",
    description:
      "Aprenda técnicas essenciais que podem salvar vidas em situações de emergência. Workshop prático e aberto a toda a comunidade.",
    date: "2025-12-12T14:00:00.000Z",
    location: "Sede da Ação Social",
    image: "/path/to/primeiros-socorros.jpg",
    isFeatured: true,
  },
];

type Event = (typeof events)[0];

// --- FUNÇÃO DE FORMATAR DATA (sem alterações) ---
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

// --- SUB-COMPONENTE PARA O CARD DE EVENTO ---
// Isso torna o código principal mais limpo e o card reutilizável
const EventCard = ({ event }: { event: Event }) => {
  return (
    <a
      href={`/eventos/${event.id}`}
      className="group block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            {formatDate(event.date)}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1.5" />
            <span>{event.location}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm flex-grow line-clamp-3">
          {event.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="inline-flex items-center font-semibold text-green-600 group-hover:text-green-700 transition-colors">
            Ver Detalhes
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
};

// --- COMPONENTE PRINCIPAL DA SEÇÃO ---
export const SectionProximosEventos = () => {
  const featuredEvents = events
    .filter((e) => e.isFeatured === true)
    .slice(0, 4); // Mostra no máximo 4 eventos

  return (
    <section className="bg-white-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl  sm:text-7xl font-extrabold text-gray-900 tracking-tight">
            Próximos Eventos
          </h2>
          <div className="mt-6 mb-8 w-auto h-1.5 bg-green-500 rounded-full sm:w-0.5"></div>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Participe de nossas ações, workshops e mutirões. Sua presença
            fortalece nossa comunidade e transforma vidas.
          </p>
        </div>

        {/* Grade de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Botão para Ver Todos */}
        <div className="mt-16 text-center">
          <a
            href="/eventos"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
          >
            Ver Todos os Eventos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
