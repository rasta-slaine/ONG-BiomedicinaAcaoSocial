import { ArrowRight } from "lucide-react";

// --- DADOS DOS PARCEIROS ---
// Adicione seus parceiros aqui. Coloque os logos na pasta /public/partners/
const partnersData = [
  {
    name: "Fundação Cuidar",
    logoUrl: "/images/parceiros/fundacao-cuidar-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Universidade da Saúde",
    logoUrl: "/images/parceiros/universidade-saude-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Inova Labs",
    logoUrl: "/images/parceiros/inova-labs-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Governo Local",
    logoUrl: "/images/parceiros/governo-local-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Clínica Bem Viver",
    logoUrl: "/images/parceiros/clinica-bem-viver-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Pharma Solutions",
    logoUrl: "/images/parceiros/pharma-solutions-logo.png",
    websiteUrl: "#",
  },
  {
    name: "Tech for Good",
    logoUrl: "/images/parceiros/tech-for-good-logo.png",
    websiteUrl: "#",
  },
];

export function SectionParceiros() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nossos Parceiros e Apoiadores
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Nenhum grande impacto é alcançado sozinho. Agradecemos profundamente
            às instituições que acreditam em nossa missão e investem em um
            futuro mais saudável para todos.
          </p>
        </div>

        {/* Marquee de Rolagem Infinita */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {partnersData.map((partner, index) => (
              <li key={index}>
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {partnersData.map((partner, index) => (
              <li key={index}>
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="mt-16 text-center">
          <a
            href="/seja-um-parceiro"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
          >
            Torne-se um Parceiro
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
