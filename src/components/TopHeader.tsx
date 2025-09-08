import { Home } from "lucide-react";

// 1. DADOS DE TRADUÇÃO
// Manter os textos em um objeto facilita a manutenção e adição de novos idiomas.
// A mensagem foi adaptada para o contexto da sua ONG.
const translations = {
  pt: { welcome: "Bem-vindo(a) à Ação Social" },
  en: { welcome: "Welcome to Social Action" },
  es: { welcome: "Bienvenido(a) a Acción Social" },
};

// 2. DADOS DOS IDIOMAS
// Lista de idiomas que aparecerão no seletor.
const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
];

// Tipo para as props do componente
interface TopHeaderProps {
  currentLanguage: "pt" | "en" | "es";
  onLanguageChange: (lang: "pt" | "en" | "es") => void;
}

// 3. O COMPONENTE
export function TopHeader({
  currentLanguage,
  onLanguageChange,
}: TopHeaderProps) {
  return (
    <header className="font-sans">
      {" "}
      {/* Usando uma fonte sans-serif padrão */}
      <div className="bg-gray-100 border-b-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-2 text-sm">
            {/* Lado Esquerdo: Ícone e Mensagem de Boas-Vindas */}
            <div className="flex items-center text-gray-700 mb-2 md:mb-0">
              <Home className="h-5 w-5" aria-hidden="true" />
              <span className="ml-2">
                {translations[currentLanguage].welcome}
              </span>
            </div>

            {/* Lado Direito: Seletor de Idiomas */}
            <nav>
              <ul className="flex items-center space-x-5">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => onLanguageChange(lang.code)}
                      className={`
                        transition-colors duration-200
                        ${
                          currentLanguage === lang.code
                            ? "font-bold text-gray-900"
                            : "text-gray-600 hover:text-black"
                        }
                      `}
                    >
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
