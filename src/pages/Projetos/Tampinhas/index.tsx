// src/pages/TampinhaDoBemPage.tsx

import { useState } from "react";
//import { Link } from "react-router-dom";
import { Recycle, Gift, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
//import { Button } from "@/components/ui/button";

// --- DADOS DA PÁGINA ---
const categoriasData = [
  {
    categoria: 1,
    garrafa: "200ml",
    tampinhas: 80,
    kit: "Kit Básico",
    itens: ["Camiseta Exclusiva", "Caneta Personalizada"],
    cor: "border-teal-500",
  },
  {
    categoria: 2,
    garrafa: "600ml",
    tampinhas: 240,
    kit: "Kit Intermediário",
    itens: ["Camiseta Exclusiva", "Agenda Ecológica", "Garrafa de Água"],
    cor: "border-green-500",
  },
  {
    categoria: 3,
    garrafa: "2 Litros",
    tampinhas: 800,
    kit: "Kit Avançado",
    itens: [
      "Camiseta Exclusiva",
      "Agenda Ecológica",
      "Garrafa de Água",
      "Bolsa Térmica",
    ],
    cor: "border-yellow-500",
  },
];

const pontosDeColeta = [
  {
    id: "cruzeiro-do-sul",
    nome: "Faculdade Cruzeiro do Sul - Polo São Miguel",
    endereco:
      "R. Cel. Manuel Feliciano de Souza, 1048 - Vila Jacuí, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.530559199343!2d-46.44281068819869!3d-23.513524978735313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce64047e14013d%3A0xe546a36f2f2f98e!2sR.%20Cel.%20Manuel%20Feliciano%20de%20Souza%2C%201048%20-%20Vila%20Jacu%C3%AD%2C%20S%C3%20Paulo%20-%20SP%2C%2008060-060!5e0!3m2!1spt-BR!2sbr!4v1678886562431",
  },
  {
    id: "uninove",
    nome: "Universidade Nove de Julho (UNINOVE) - Campus Memorial",
    endereco: "Av. Dr. Adolpho Pinto, 109 - Barra Funda, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.925509919539!2d-46.66632198819808!3d-23.53489197872248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce581c356b080f%3A0x8c728e46a782a170!2sUNINOVE%20-%20Campus%20Memorial!5e0!3m2!1spt-BR!2sbr!4v1678886562432",
  },
  {
    id: "sede-ong",
    nome: "Sede da Ação Social",
    endereco: "Rua do Bem, 789 - Vila Esperança, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577513326!2d-46.656571584406!3d-23.5613393674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x2074d0880b1e3a5!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886562431", // Exemplo genérico, substitua
  },
];

const faqData = [
  {
    q: "Quais tipos de tampinhas são aceitas?",
    a: "Aceitamos todos os tipos de tampinhas plásticas de garrafas (refrigerante, água, leite, etc.), produtos de limpeza e de higiene. O importante é que sejam de plástico rígido.",
  },
  {
    q: "Preciso lavar as tampinhas antes de entregar?",
    a: "Sim, por favor! Uma lavagem simples com água e sabão é suficiente. Isso ajuda a manter a higiene nos pontos de coleta e facilita o processo de reciclagem.",
  },
  {
    q: "Posso entregar as tampinhas fora da garrafa PET?",
    a: "O ideal é entregar dentro das garrafas PET (200ml, 600ml ou 2L) para validarmos a categoria do seu kit. Se tiver uma quantidade muito grande, entre em contato para combinarmos a entrega.",
  },
];

export function ProjetoTampinhas() {
  const [activeLocation, setActiveLocation] = useState(pontosDeColeta[0]);
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-green-600 text-white text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-fit mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
            <Recycle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Projeto Tampinha do Bem
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100 leading-relaxed">
            Uma iniciativa pessoal do Dr. Dácio Campos que transforma reciclagem
            em mobilidade, dignidade e um futuro mais sustentável.
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO "COMO FUNCIONA" (CATEGORIAS E KITS) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Junte Tampinhas, Ganhe Kits e Ajude a Mover Vidas
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              É muito simples participar. Basta juntar tampinhas plásticas em
              garrafas PET e trocá-las por kits exclusivos em nossos pontos de
              coleta. Cada tampinha nos aproxima de uma nova cadeira de rodas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categoriasData.map((cat) => (
              <Card
                key={cat.categoria}
                className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow border-t-4 ${cat.cor}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-500">
                      Categoria {cat.categoria}
                    </p>
                    <div className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                      {cat.tampinhas} tampinhas
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Garrafa de {cat.garrafa}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <h4 className="font-bold">Você ganha o {cat.kit}:</h4>
                  <ul className="space-y-2">
                    {cat.itens.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600"
                      >
                        <Gift className="w-4 h-4 mr-3 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO PONTOS DE COLETA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">
                Onde Entregar Suas Tampinhas
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Nossos pontos de coleta estão em nossas faculdades parceiras.
                **Clique em um endereço** para ver no mapa e encontre o mais
                próximo de você.
              </p>
              <div className="mt-8 space-y-4">
                {pontosDeColeta.map((ponto) => (
                  <div
                    key={ponto.id}
                    className={`flex items-start p-4 rounded-lg cursor-pointer border-2 transition-all ${
                      activeLocation.id === ponto.id
                        ? "border-green-500 bg-green-50"
                        : "border-transparent hover:bg-slate-50"
                    }`}
                    onClick={() => setActiveLocation(ponto)}
                  >
                    <MapPin className="w-6 h-6 mr-4 mt-1 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{ponto.nome}</h3>
                      <p className="text-gray-500">{ponto.endereco}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                title={`Mapa para ${activeLocation.nome}`}
                src={activeLocation.mapUrl} // O 'src' agora é dinâmico!
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

      {/* 4. SEÇÃO DE FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Dúvidas Frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pl-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
