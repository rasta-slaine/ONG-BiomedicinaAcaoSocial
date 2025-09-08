// src/pages/DonationPage.tsx

import React, { useState } from "react";
import { Heart, Lock, TrendingUp, Building2, Repeat } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- DADOS DA PÁGINA ---
// Manter os dados aqui facilita a edição

const image1Url = "/images/caring-hands-image.png";
const image2Url = "/images/pix-icon.png";

const presetAmounts = {
  oneTime: [25, 50, 100, 250],
  monthly: [25, 50, 75, 100],
};

const impactData = [
  {
    amount: 25,
    title: "Kit de Triagem",
    description:
      "Garante material para 5 testes de glicemia e aferição de pressão.",
    icon: TrendingUp,
  },
  {
    amount: 50,
    title: "Consulta de Nutrição",
    description:
      "Oferece uma orientação nutricional completa para uma família.",
    icon: Heart,
  },
  {
    amount: 100,
    title: "Suprimentos para um Dia",
    description:
      "Abastece um mutirão de saúde com os suprimentos médicos essenciais para um dia de ação.",
    icon: TrendingUp,
  },
];

const faqData = [
  {
    q: "Minha doação é dedutível do imposto de renda?",
    a: "Sim, como somos uma Organização da Sociedade Civil (OSC) qualificada, sua doação é elegível para dedução fiscal. Após a doação, enviaremos um recibo oficial para sua declaração.",
  },
  {
    q: "Como vocês garantem a transparência no uso dos recursos?",
    a: "A transparência é um de nossos valores fundamentais. Todos os nossos relatórios financeiros e de impacto são publicados anualmente em nossa página de Transparência e auditados por uma empresa externa.",
  },
  {
    q: "Posso doar medicamentos ou suprimentos em vez de dinheiro?",
    a: "Sim! Aceitamos doações de medicamentos lacrados e dentro da validade, além de suprimentos médicos. Por favor, entre em contato conosco através da nossa página de Contato para coordenarmos a coleta.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export function DonatePage() {
  const [donationType, setDonationType] = useState<"oneTime" | "monthly">(
    "oneTime"
  );
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCustomAmount(value);
    if (value) {
      setAmount(parseInt(value, 10));
    } else {
      // Volta para o valor padrão (o segundo da lista) se o campo for limpo
      setAmount(presetAmounts[donationType][1]);
    }
  };

  const selectedAmounts =
    donationType === "oneTime" ? presetAmounts.oneTime : presetAmounts.monthly;
  const ctaText = `Doar ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount)} ${donationType === "monthly" ? "Mensalmente" : "Agora"}`;
  const CtaIcon = donationType === "monthly" ? Repeat : Heart;

  return (
    <div className="bg-slate-50">
      {/* 1. HERO SECTION MELHORADA */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image1Url}
            alt="Mãos cuidadoras"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl">
            <div className="w-fit bg-white/10 p-3 rounded-full mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
              Sua Doação Transforma Cuidado em Cura
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
              Cada contribuição nos permite levar saúde, esperança e dignidade a
              comunidades que precisam. Junte-se a nós.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO PRINCIPAL COM WIDGET DE DOAÇÃO MELHORADO */}
      <section className="py-16 md:py-24 -mt-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="sticky top-24 z-20">
            <Card className="shadow-2xl rounded-2xl border-transparent bg-clip-padding p-1 bg-gradient-to-br from-green-200 via-white to-white">
              <div className="bg-white rounded-xl p-6">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold text-center text-gray-900">
                    Faça a sua Parte
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex w-full p-1 bg-gray-100 rounded-full mb-6">
                    <button
                      onClick={() => setDonationType("oneTime")}
                      className={`w-1/2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        donationType === "oneTime"
                          ? "bg-white text-green-700 shadow-md"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Doação Única
                    </button>
                    <button
                      onClick={() => setDonationType("monthly")}
                      className={`w-1/2 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        donationType === "monthly"
                          ? "bg-white text-green-700 shadow-md"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Doação Mensal
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {selectedAmounts.map((val) => (
                      <Button
                        key={val}
                        variant={
                          amount === val && !customAmount
                            ? "default"
                            : "secondary"
                        }
                        size="lg"
                        onClick={() => handleAmountClick(val)}
                      >
                        R${val}
                      </Button>
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Label htmlFor="customAmount" className="sr-only">
                      Outro Valor
                    </Label>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500">
                      R$
                    </span>
                    <Input
                      id="customAmount"
                      type="text"
                      placeholder="Outro Valor"
                      className="pl-12 h-14 text-lg"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-16 text-lg animate-pulse"
                  >
                    <CtaIcon className="mr-2 h-6 w-6" /> {ctaText}
                  </Button>
                  <p className="flex items-center justify-center text-xs text-gray-500 mt-4">
                    <Lock className="w-3 h-3 mr-1.5" /> Pagamento seguro e
                    criptografado.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mt-30 space-y-12 pt-12 lg:pt-0">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Veja o Impacto da Sua Doação
              </h2>
              <div className="space-y-6">
                {impactData.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start p-6 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-green-100 text-green-700 p-3 rounded-full mr-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Com R${item.amount}, você garante:
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Outras Formas de Ajudar
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      Doação via PIX
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Use nossa chave PIX (CNPJ):{" "}
                      <strong className="font-mono bg-gray-100 px-2 py-1 rounded">
                        12.345.678/0001-90
                      </strong>
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <img
                      src={image2Url}
                      alt="PIX"
                      className="w-150 h-90 mr-2"
                    />{" "}
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Building2 className="w-5 h-5 mr-2" /> Parcerias
                      Corporativas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sua empresa pode se tornar uma parceira e transformar
                      vidas conosco.{" "}
                      <a
                        href="/parcerias"
                        className="text-green-600 font-semibold underline"
                      >
                        Saiba mais
                      </a>
                      .
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Ainda tem Dúvidas?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Esclareça os pontos mais comuns sobre o processo de doação.
            </p>
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
