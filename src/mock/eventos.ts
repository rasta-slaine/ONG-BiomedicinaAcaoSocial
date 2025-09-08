export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  service?: number;
  professional?: number;
  isFeatured: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title:
      "1ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2018-05-12",
    time: "08:00 AM - 12:00 PM",
    location: "Campo do ARXV (Parada 15 de Novembro)",
    image: "/images/ong-evento-1.jpg",
    category: "Saúde",
    service: 84,
    professional: 15,
    isFeatured: false,
  },
  {
    id: "2",
    title:
      "2ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2018-09-15",
    time: "08:00 AM - 12:00 PM",
    location: "Rua Jiparana (Parada 15 de Novembro)",
    image: "/images/ong-evento-2.jpg",
    category: "Saúde",
    service: 117,
    professional: 22,
    isFeatured: false,
  },
  {
    id: "3",
    title:
      "3ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2018-05-12",
    time: "08:00 AM - 12:00 PM",
    location: "Rua Anny. São João Clímaco (Heliópolis)",
    image: "/images/ong-evento-3.jpg",
    category: "Saúde",
    service: 160,
    professional: 22,
    isFeatured: false,
  },
  {
    id: "4",
    title:
      "4ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2019-05-11",
    time: "08:00 AM - 12:00 PM",
    location: "Av. líder Praça 7 (Cidade líder)",
    image: "/images/ong-evento-4.jpg",
    category: "Saúde",
    service: 171,
    professional: 43,
    isFeatured: false,
  },
  {
    id: "5",
    title:
      "5ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2019-11-20",
    time: "08:00 AM - 12:00 PM",
    location: "Parque do Carmo ",
    image: "/images/ong-evento-5.jpg",
    category: "Saúde",
    service: 324,
    professional: 63,
    isFeatured: false,
  },
  {
    id: "6",
    title:
      "6ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2020-02-09",
    time: "08:00 AM - 12:00 PM",
    location: "Vila Progresso ",
    image: "/images/ong-evento-6.jpg",
    category: "Saúde",
    service: 128,
    professional: 31,
    isFeatured: false,
  },
  {
    id: "7",
    title:
      "7ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2021-10-12",
    time: "08:00 AM - 12:00 PM",
    location: "Campo do ARXV (Itaquera)",
    image: "/images/ong-evento-7.jpg",
    category: "Saúde",
    service: 67,
    professional: 29,
    isFeatured: false,
  },
  {
    id: "8",
    title:
      "8ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2021-11-07",
    time: "08:00 AM - 12:00 PM",
    location: "Salvador (Bahia)",
    image: "/images/ong-evento-8.jpg",
    category: "Saúde",
    service: 38,
    professional: 10,
    isFeatured: false,
  },
  {
    id: "9",
    title:
      "9ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-05-08",
    time: "08:00 AM - 12:00 PM",
    location: "Recife (Pernambuco)",
    image: "/images/ong-evento-9.jpg",
    category: "Saúde",
    service: 23,
    professional: 1,
    isFeatured: false,
  },
  {
    id: "10",
    title:
      "10ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-06-25",
    time: "08:00 AM - 12:00 PM",
    location: "Centro de Itaquera",
    image: "/images/ong-evento-10.jpg",
    category: "Saúde",
    service: 54,
    professional: 34,
    isFeatured: false,
  },
  {
    id: "11",
    title:
      "11ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-06-26",
    time: "08:00 AM - 12:00 PM",
    location: "largo do Cambuci",
    image: "/images/ong-evento-11.jpg",
    category: "Saúde",
    service: 78,
    professional: 41,
    isFeatured: false,
  },
  {
    id: "12",
    title:
      "12ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-06-22",
    time: "08:00 AM - 12:00 PM",
    location: "Praça 7 (Cidade líder)",
    image: "/images/ong-evento-12.jpg",
    category: "Saúde",
    service: 93,
    professional: 34,
    isFeatured: false,
  },
  {
    id: "13",
    title:
      "13ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-09-24",
    time: "08:00 AM - 12:00 PM",
    location: "Cidade Tiradentes ",
    image: "/images/ong-evento-13.jpg",
    category: "Saúde",
    service: 57,
    professional: 25,
    isFeatured: false,
  },
  {
    id: "14",
    title:
      "14ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-10-12",
    time: "08:00 AM - 12:00 PM",
    location: "Estação da Luz (Centro de SP)",
    image: "/images/ong-evento-14.jpg",
    category: "Saúde",
    service: 38,
    professional: 18,
    isFeatured: false,
  },
  {
    id: "15",
    title:
      "15ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-10-15",
    time: "08:00 AM - 12:00 PM",
    location: "Comunidade Capadócia (Zona Oeste)",
    image: "/images/ong-evento-15.jpg",
    category: "Saúde",
    service: 76,
    professional: 23,
    isFeatured: false,
  },
  {
    id: "16",
    title:
      "16ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2022-11-20",
    time: "08:00 AM - 12:00 PM",
    location: "Comunidade Heliópolis. (Zona Sul)",
    image: "/images/ong-evento-16.jpg",
    category: "Saúde",
    service: 93,
    professional: 58,
    isFeatured: false,
  },
  {
    id: "17",
    title:
      "17ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2023-04-17",
    time: "08:00 AM - 12:00 PM",
    location: " Morro do Barbante ( Rio de Janeiro)",
    image: "/images/ong-evento-17.jpg",
    category: "Saúde",
    service: 53,
    professional: 1,
    isFeatured: false,
  },
  {
    id: "18",
    title:
      "18ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2023-06-05",
    time: "08:00 AM - 12:00 PM",
    location: " Rio Centro (Rio de Janeiro)",
    image: "/images/ong-evento-18.jpg",
    category: "Saúde",
    service: 38,
    professional: 7,
    isFeatured: false,
  },
  {
    id: "19",
    title:
      "19ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2023-09-21",
    time: "08:00 AM - 12:00 PM",
    location: "Rua Santa Ifigênia (Centro de São Paulo)",
    image: "/images/ong-evento-19.jpg",
    category: "Saúde",
    service: 78,
    professional: 26,
    isFeatured: false,
  },
  {
    id: "20",
    title:
      "20ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2023-10-12",
    time: "08:00 AM - 12:00 PM",
    location: "Campo do ARXV (Itaquera)",
    image: "/images/ong-evento-20.jpg",
    category: "Saúde",
    service: 63,
    professional: 45,
    isFeatured: false,
  },
  {
    id: "21",
    title:
      "21ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-03-18",
    time: "08:00 AM - 12:00 PM",
    location: "Associação Universo do Aprender (Centro de Itaquera)",
    image: "/images/ong-evento-21.jpg",
    category: "Saúde",
    service: 65,
    professional: 12,
    isFeatured: false,
  },
  {
    id: "22",
    title:
      "22ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-03-18",
    time: "08:00 AM - 12:00 PM",
    location: "Associação Universo do Aprender (Centro de Itaquera)",
    image: "/images/ong-evento-22.jpg",
    category: "Saúde",
    service: 28,
    professional: 10,
    isFeatured: false,
  },
  {
    id: "23",
    title:
      "23ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-04-25",
    time: "08:00 AM - 12:00 PM",
    location: "Fatec (Ipiranga)",
    image: "/images/ong-evento-23.jpg",
    category: "Saúde",
    service: 47,
    professional: 11,
    isFeatured: false,
  },
  {
    id: "24",
    title:
      "24ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-06-29",
    time: "08:00 AM - 12:00 PM",
    location: "Rua Rocha (bela Vista SP)",
    image: "/images/ong-evento-24.jpg",
    category: "Saúde",
    service: 128,
    professional: 50,
    isFeatured: false,
  },
  {
    id: "25",
    title:
      "25ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-07-13",
    time: "08:00 AM - 12:00 PM",
    location: "Parque linear do Rio Verde. (Itaquera)",
    image: "/images/ong-evento-25.jpg",
    category: "Saúde",
    service: 84,
    professional: 30,
    isFeatured: false,
  },
  {
    id: "26",
    title:
      "26ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-08-24",
    time: "08:00 AM - 12:00 PM",
    location: "Associação AVIVA (Vila Leopodina)",
    image: "/images/ong-evento-26.jpg",
    category: "Saúde",
    service: 203,
    professional: 9,
    isFeatured: false,
  },
  {
    id: "27",
    title:
      "27ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-09-15",
    time: "08:00 AM - 12:00 PM",
    location: "Campo do ARXV (Parada 15 de Novembro)",
    image: "/images/ong-evento-27.jpg",
    category: "Saúde",
    service: 38,
    professional: 8,
    isFeatured: false,
  },
  {
    id: "28",
    title:
      "28ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-09-22",
    time: "08:00 AM - 12:00 PM",
    location: "Bairro dos Pimentas (Guarulhos)",
    image: "/images/ong-evento-28.jpg",
    category: "Saúde",
    service: 43,
    professional: 21,
    isFeatured: false,
  },
  {
    id: "29",
    title:
      "29ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-09-27",
    time: "08:00 AM - 12:00 PM",
    location: "Shopping Metrô Tatuapé)",
    image: "/images/ong-evento-29.jpg",
    category: "Saúde",
    service: 27,
    professional: 9,
    isFeatured: false,
  },
  {
    id: "30",
    title:
      "30ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Homenagem com entrega de troféus para os Profissionais e estudantes voluntários da área da saúde.",
    date: "2024-09-28",
    time: "08:00 AM - 12:00 PM",
    location: "Rua Gomes Cardim (Brás)",
    image: "/images/ong-evento-30.jpg",
    category: "Premiação",
    service: 0,
    professional: 78,
    isFeatured: true,
  },
  {
    id: "31",
    title:
      "31ª Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-10-10",
    time: "08:00 AM - 12:00 PM",
    location: "Rodovia Presidente Dutra. (Taubaté)",
    image: "/images/ong-evento-31.jpg",
    category: "Saúde",
    service: 23,
    professional: 5,
    isFeatured: true,
  },
  {
    id: "32",
    title:
      "32ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2024-12-01",
    time: "08:00 AM - 12:00 PM",
    location: "Parque Ceret (Tatuapé)",
    image: "/images/ong-evento-32.jpg",
    category: "Saúde",
    service: 97,
    professional: 63,
    isFeatured: true,
  },
  {
    id: "33",
    title:
      "33ª  Ação de Saúde Social de Combate a Prevencão de Diabetes e pressão alta.",
    description:
      "Venha fazer seu atendimento com : Biomedico,Nutricionista e Enfermeiro ",
    date: "2025-04-06",
    time: "08:00 AM - 12:00 PM",
    location: "Praça Silvio Romero (Tatuapé)",
    image: "/images/ong-evento-32.jpg",
    category: "Saúde",
    service: 0,
    professional: 0,
    isFeatured: true,
  },
];
