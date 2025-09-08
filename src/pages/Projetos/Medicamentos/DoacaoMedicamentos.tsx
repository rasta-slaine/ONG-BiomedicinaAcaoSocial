// src/pages/DoarMedicamentosPage.tsx

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HeartHandshake,
  Box,
  CalendarOff,
  PackageCheck,
  MapPin,
} from "lucide-react";

// --- DADOS DA PÁGINA ---
const criteriosData = [
  {
    icon: PackageCheck,
    title: "Dentro da Validade",
    description:
      "Verifique a data de validade na embalagem. Aceitamos apenas medicamentos que ainda não venceram para garantir a eficácia e segurança.",
  },
  {
    icon: Box,
    title: "Embalagens Originais",
    description:
      "As caixas podem estar abertas, mas as cartelas de comprimidos ou frascos devem estar lacrados para garantir a integridade do medicamento.",
  },
  {
    icon: CalendarOff,
    title: "Não Refrigerados",
    description:
      "No momento, não temos estrutura para manter a cadeia de frio. Por isso, não podemos aceitar medicamentos como insulinas.",
  },
];

const pontosDeColeta = [
  {
    id: "cruzeiro-do-sul",
    nome: "Faculdade Cruzeiro do Sul - Polo São Miguel",
    endereco:
      "R. Cel. Manuel Feliciano de Souza, 1048 - Vila Jacuí, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.673768214267!2d-46.45982172549006!3d-23.502384059426504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce616b15a267e7%3A0xbacc8560af9639cc!2sR.%20Cel.%20Manuel%20Feliciano%20de%20Souza%2C%201048%20-%20Vila%20Jacu%C3%AD%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008060-060%2C%20Brazil!5e0!3m2!1sen!2sus!4v1757292632462!5m2!1sen!2sus",
  },
  {
    id: "uninove",
    nome: "Universidade Nove de Julho (UNINOVE) - Campus Memorial",
    endereco: "Av. Dr. Adolpho Pinto, 109 - Barra Funda, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0925607624463!2d-46.66887562548901!3d-23.529173060408862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce580368d96d6f%3A0x8b3c06abc7c30c94!2sAv.%20Dr.%20Adolpho%20Pinto%2C%20109%20-%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001156-050%2C%20Brazil!5e0!3m2!1sen!2sus!4v1757292775910!5m2!1sen!2sus",
  },
  {
    id: "sede-ong",
    nome: "Sede da Ação Social",
    endereco: "Rua do Bem, 789 - Vila Esperança, São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7779426329507!2d-46.522822425488435!3d-23.540487860823983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e0393edfabd%3A0xc86de66d8e29fdb4!2sR.%20do%20Bem%20-%20Vila%20Nova%20Savoia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003531-040%2C%20Brazil!5e0!3m2!1sen!2sus!4v1757292858731!5m2!1sen!2sus",
  },
];

export function ProjetoDoarMedicamentos() {
  const [activeLocation, setActiveLocation] = useState(pontosDeColeta[0]);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-600 text-white text-center py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-fit mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
            <HeartHandshake className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Doe Medicamentos, Salve Vidas
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed">
            Seu gesto de cuidado pode garantir a continuidade de um tratamento e
            levar alívio para quem mais precisa. Veja como é simples participar.
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO DE CRITÉRIOS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna de Texto */}
            <div className="order-2 lg:order-1">
              <p className="font-semibold text-blue-600">
                Critérios para Doação
              </p>
              <h2 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight">
                Garantindo a Segurança de Todos
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Para que sua doação seja segura e eficaz, seguimos rigorosamente
                as diretrizes da ANVISA. O cuidado com quem doa e com quem
                recebe é a nossa maior prioridade.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Verificar estes três critérios simples antes de separar seus
                medicamentos garante que seu gesto de cuidado chegue da melhor
                forma possível a quem precisa. Agradecemos sua colaboração!
              </p>
            </div>

            {/* Coluna de Cards (CORRIGIDA) */}
            <div className="order-1 lg:order-2 space-y-6">
              {criteriosData.map((item) => (
                <Card key={item.title} className="bg-blue-50 border-blue-200">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="bg-white p-3 rounded-full">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 ml-16 -mt-4">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PONTOS DE COLETA (INTERATIVA) */}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Nossos Pontos de Coleta
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Clique em um endereço para focar no mapa e encontre o local mais
              próximo para entregar sua doação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {pontosDeColeta.map((ponto) => (
                <div
                  key={ponto.id}
                  className={`flex items-start p-4 rounded-lg cursor-pointer border-2 transition-all ${
                    activeLocation.id === ponto.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-transparent hover:bg-white"
                  }`}
                  onClick={() => setActiveLocation(ponto)}
                >
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" />
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
