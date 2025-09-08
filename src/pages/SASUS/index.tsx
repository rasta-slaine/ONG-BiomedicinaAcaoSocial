// src/pages/SasusPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Users,
  CalendarCheck,
  Video,
  ArrowRight,
  Heart,
  HeartPulse,
} from "lucide-react";

// --- DADOS DA PÁGINA ---

const image = "/images/modern-clinic-image.png";

const featuresData = [
  {
    icon: Users,
    title: "Apoio Profissional Voluntário",
    description:
      "Nossa equipe de profissionais da saúde dedica seu tempo para oferecer atendimentos adicionais, ajudando a desafogar o sistema público.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Simplificado",
    description:
      "Através de uma plataforma online intuitiva, facilitamos a marcação de consultas e exames, otimizando seu tempo.",
  },
  {
    icon: Video,
    title: "Telemedicina Acessível",
    description:
      "Oferecemos consultas online com profissionais qualificados, ampliando o acesso à saúde e levando cuidado a todo o país.",
  },
];

const impactData = [
  { value: 40, suffix: "%", label: "Redução no tempo de espera" },
  { value: 1500, suffix: "+", label: "Consultas realizadas por mês" },
  { value: 200, suffix: "+", label: "Voluntários dedicados" },
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Faça seu Cadastro",
    description:
      "Crie sua conta em nossa plataforma de forma rápida e segura com seu cartão do SUS.",
  },
  {
    step: 2,
    title: "Encontre seu Atendimento",
    description:
      "Busque a especialidade ou o exame que você precisa e veja a disponibilidade.",
  },
  {
    step: 3,
    title: "Agende e Confirme",
    description:
      "Escolha o melhor horário e confirme sua consulta. Simples, rápido e sem filas.",
  },
];

// --- Sub-componente StatCounter ---
const StatCounter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-extrabold text-green-600">
        {inView && <CountUp end={value} duration={3} />}
        {suffix}
      </p>
      <p className="text-lg text-gray-600 mt-2">{label}</p>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export function SasusPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION MELHORADA */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Ambiente de saúde moderno e acolhedor"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/70 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl">
            <div className="w-fit bg-white/10 p-3 rounded-full mb-4">
              <HeartPulse className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
              Menos <span className="text-red-300">Fila</span>,
              <br />
              Mais <span className="text-green-300">Saúde</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed drop-shadow-md">
              O SASUS é a nossa iniciativa para fortalecer o SUS, usando
              tecnologia e voluntariado para tornar seu acesso à saúde mais
              rápido e humano.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/sasus/agendamento"
                className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors text-center"
              >
                Agendar Atendimento
              </a>
              <a
                href="#como-funciona"
                className="inline-block bg-transparent border-2 border-white/50 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors text-center"
              >
                Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO "PROBLEMA -> SOLUÇÃO" */}
      <section id="como-funciona" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              O Desafio que Enfrentamos. A Solução que Construímos.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Sabemos que as filas e a longa espera são barreiras reais para o
              cuidado. Por isso, criamos o SASUS, uma plataforma que atua em
              três frentes para apoiar e otimizar o SUS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-fit bg-green-100 text-green-700 p-4 rounded-full mb-5">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE IMPACTO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Resultados que Falam por Si
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactData.map((item) => (
              <StatCounter key={item.label} {...item} />
            ))}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-lg text-green-800 italic">
                "O SASUS não é um sistema paralelo, é um braço de apoio. Nosso
                objetivo é somar forças com o SUS. Cada consulta que adiantamos
                é uma vitória para a saúde pública."
              </p>
              <p className="mt-4 font-semibold text-green-900">
                - Anderson Do Nascimento, Fundador
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO "COMO FUNCIONA" (AGENDAMENTO) */}
      <section id="agendamento" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Seu Atendimento em 3 Passos Simples
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 border-t-2 border-dashed border-gray-300"></div>
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold border-4 border-slate-50 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/sasus/agendamento"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-md text-white bg-green-600 hover:bg-green-700 transition-transform hover:scale-105"
            >
              Começar Agendamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE CTA FINAL */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <Heart className="w-12 h-12 mx-auto text-red-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            Junte-se a Nós Nesta Missão
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            O SASUS é movido por pessoas. Seja um profissional da saúde querendo
            voluntariar ou um cidadão buscando apoiar a causa, sua ajuda é
            fundamental.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/voluntariado"
              className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700"
            >
              Quero ser Voluntário
            </Link>
            <Link
              to="/doacao"
              className="inline-block bg-transparent border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100"
            >
              Apoiar o Projeto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
