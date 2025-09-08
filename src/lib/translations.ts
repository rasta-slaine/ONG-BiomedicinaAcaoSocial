// src/lib/translations.ts

// Lista de idiomas que aparecerão no seletor.
export const languages = [
  { code: "pt", name: "Português" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
] as const; // 'as const' é uma boa prática para tipos literais

export type Language = (typeof languages)[number]["code"];

export const translations = {
  pt: {
    welcome: "Bem-vindo(a) ao Instituto de Saúde Multiprofissional",
    // Adicione outros textos aqui:
    // homeTitle: "Página Inicial",
  },
  en: {
    welcome: "Welcome to the Multiprofessional Health Institute",
    // homeTitle: "Home Page",
  },
  es: {
    welcome: "Bienvenido(a) al Instituto de Salud Multiprofesional",
    // homeTitle: "Página de Inicio",
  },
};
