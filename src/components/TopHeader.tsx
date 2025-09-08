import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // <-- Usa nosso novo hook
import { translations, languages } from "@/lib/translations"; // <-- Pega os dados do arquivo central

export function TopHeader() {
  // Pega o idioma atual e a função para mudá-lo do contexto global
  const { language, setLanguage } = useLanguage();

  return (
    <header className="font-sans border-b-4 border-green-500 bg-white-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 text-sm">
          <div className="flex items-center text-slate-700 mb-2 md:mb-0">
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="ml-2">{translations[language].welcome}</span>
          </div>

          <nav>
            <ul className="flex items-center space-x-6">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`transition-colors duration-200 ${
                      language === lang.code
                        ? "font-bold text-green-400"
                        : "text-slate-600 hover:text-black"
                    }`}
                  >
                    {lang.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
