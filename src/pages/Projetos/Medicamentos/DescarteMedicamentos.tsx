import { useState } from "react";
import { ShieldCheck, Biohazard, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Package, Truck } from "lucide-react"; // <<-- Adicione estes ícones

// --- DADOS DA PÁGINA ---
const oQueNaoFazer = [
  {
    icon: Biohazard,
    title: "Não jogue no lixo comum",
    description:
      "Medicamentos misturados ao lixo podem ser consumidos acidentalmente por crianças ou animais e contaminam o solo dos aterros.",
  },
  {
    icon: Biohazard,
    title: "Não descarte no vaso sanitário ou pia",
    description:
      "As estações de tratamento de esgoto não conseguem eliminar 100% dos compostos químicos, que acabam contaminando rios e mares.",
  },
];

const comoFazer = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Separe e Organize",
    description:
      "Junte todos os medicamentos vencidos ou em desuso, incluindo cartelas, frascos e pomadas. Não os remova de suas embalagens originais.",
  },
  {
    step: 2,
    icon: Package,
    title: "Proteja os Itens",
    description:
      "Coloque tudo em uma sacola plástica resistente e bem fechada para evitar vazamentos e garantir o manuseio seguro.",
  },
  {
    step: 3,
    icon: Truck,
    title: "Leve ao Ponto Certo",
    description:
      "Encontre o ponto de coleta mais próximo – como farmácias e UBS – e deposite na urna específica para descarte de medicamentos.",
  },
];

const pontosDeDescarte = [
  {
    id: "droga-raia",
    nome: "Droga Raia - Av. Paulista",
    endereco: "Av. Paulista, 2300 - Bela Vista, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577513326!2d-46.656571584406!3d-23.5613393674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x2074d0880b1e3a5!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886562431",
  },
  {
    id: "ubs-se",
    nome: "UBS Sé",
    endereco:
      "Rua Frederico Alvarenga, 259 - Centro Histórico de São Paulo, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.82281861596!2d-46.63211758819793!3d-23.538167978719884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa00155555%3A0x6a0a80f33192f153!2sUBS%20S%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1678886562432",
  },
];

export function ProjetoDescarteConsciente() {
  const [activeLocation, setActiveLocation] = useState(pontosDeDescarte[0]);
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-red-600 text-white text-center py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-fit mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
            <ShieldCheck className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Descarte Consciente, Proteja o Futuro
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-red-100 leading-relaxed">
            Um pequeno gesto que protege o meio ambiente, a saúde da sua família
            e ajuda a combater o grave problema das superbactérias.
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO "POR QUE É IMPORTANTE?" */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-semibold text-red-600">O Perigo Invisível</p>
              <h2 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight">
                O Risco das Superbactérias
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Quando medicamentos, especialmente antibióticos, são descartados
                incorretamente, seus resíduos químicos entram em contato com
                bactérias presentes no ambiente. Essa exposição constante
                permite que elas desenvolvam resistência, tornando-se
                "superbactérias".
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Infecções causadas por esses micro-organismos são extremamente
                difíceis de tratar, representando uma das maiores ameaças à
                saúde global. O descarte correto é uma das formas mais eficazes
                de quebrar esse ciclo perigoso.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {oQueNaoFazer.map((item) => (
                <Card key={item.title} className="bg-red-50 border-red-200">
                  <CardHeader>
                    <item.icon className="w-8 h-8 text-red-600 mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO "COMO FAZER O DESCARTE CORRETO" */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              O Jeito Certo em 3 Passos
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              É mais fácil do que parece. Siga esta jornada e faça sua parte
              pela saúde de todos.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Linha conectora vertical */}
            <div
              className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            ></div>

            <div className="space-y-12">
              {comoFazer.map((item) => (
                <div
                  key={item.step}
                  className="relative flex items-start group"
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-green-500">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="w-full p-6 bg-white rounded-lg shadow-md ml-20 md:w-[calc(50%-4rem)] md:ml-0 md:[&:nth-child(even)]:ml-auto">
                    <p className="font-bold text-green-600">
                      PASSO {item.step}
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOVA SEÇÃO "ONDE DESCARTAR?" */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Onde Descartar Corretamente
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Muitas farmácias e Unidades Básicas de Saúde (UBS) possuem
              coletores oficiais. Clique em um endereço abaixo para ver no mapa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {pontosDeDescarte.map((ponto) => (
                <div
                  key={ponto.id}
                  className={`flex items-start p-4 rounded-lg cursor-pointer border-2 transition-all ${
                    activeLocation.id === ponto.id
                      ? "border-red-500 bg-red-50"
                      : "border-transparent hover:bg-white"
                  }`}
                  onClick={() => setActiveLocation(ponto)}
                >
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{ponto.nome}</h3>
                    <p className="text-gray-500">{ponto.endereco}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                title={`Mapa para ${activeLocation.nome}`}
                src={activeLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
