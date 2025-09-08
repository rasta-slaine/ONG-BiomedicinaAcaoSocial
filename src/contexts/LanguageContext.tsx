import { createContext, useState, useContext, ReactNode } from "react";
import { Language } from "@/lib/translations";

// Define a "forma" do nosso contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Cria o contexto com um valor padrão
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Cria o "Provedor" que vai envolver nosso app
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt"); // Idioma padrão é Português

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Cria um "Hook" customizado para facilitar o uso do contexto
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
