import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import {
  ShieldCheck,
  Download,
  FileText,
  Heart,
  Users,
  Stethoscope,
  Microscope,
  Beaker,
} from "lucide-react";

// --- DADOS DA PÁGINA ---
// Manter os dados aqui facilita a edição
const financialData = {
  totalRaised: 90000,
  breakdown: [
    { name: "Atendimento Médico Gratuito", value: 45, color: "#3b82f6" }, // blue-500
    { name: "Treinamento de Voluntários", value: 25, color: "#10b981" }, // emerald-500
    { name: "Suprimentos Médicos", value: 15, color: "#06b6d4" }, // cyan-500
    { name: "Logística e Transporte", value: 10, color: "#84cc16" }, // lime-500
    { name: "Administração", value: 5, color: "#a855f7" }, // purple-500
  ],
};

const impactNumbers = [
  { value: 12847, label: "Consultas Realizadas", icon: Stethoscope },
  { value: 3521, label: "Famílias Assistidas", icon: Heart },
  { value: 98, label: "Voluntários Ativos", icon: Users },
];

const reports = [
  { name: "Relatório Anual 2024", href: "#" },
  { name: "Demonstrações Financeiras 2024", href: "#" },
  { name: "Relatório de Impacto 2024", href: "#" },
  { name: "Estatuto Social", href: "#" },
];

// --- SUB-COMPONENTES PARA ORGANIZAÇÃO E REUTILIZAÇÃO ---

// Anima a entrada das seções quando elas aparecem na tela
const MotionSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Anima a contagem dos números de impacto
const StatCounter = ({
  value,
  label,
  icon: Icon,
}: {
  value: number;
  label: string;
  icon: React.ElementType;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-fit mx-auto bg-green-100 text-green-700 p-4 rounded-full mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-4xl font-extrabold text-gray-900">
        {inView && <CountUp end={value} duration={2.5} separator="." />}
      </div>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

// Renderiza a fatia ativa (maior) do gráfico de rosca
const ActiveShape = (props: unknown) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-2xl font-bold"
      >
        {`${payload.value}%`}
      </text>
      <text
        x={cx}
        y={cy + 10}
        dy={8}
        textAnchor="middle"
        fill="#6b7280"
        className="text-sm"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const BackgroundIcons = () => (
  <div className="absolute inset-0 overflow-hidden">
    <Microscope className="absolute top-[10%] left-[5%] h-32 w-32 text-white/5 rotate-12" />
    <Beaker className="absolute bottom-[15%] right-[5%] h-32 w-32 text-white/5 -rotate-12" />
    <Heart className="absolute top-[20%] right-[10%] h-32 w-32 text-white/5" />
  </div>
);

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export function TransparencyPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: unknown, index: number) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <div className="bg-white">
      <MotionSection className="relative bg-green-600 text-white text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-fit mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-full mb-6">
            <ShieldCheck className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Transparência é Nosso Compromisso
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100 leading-relaxed">
            Acreditamos que a confiança é construída com clareza e
            responsabilidade. Aqui, cada doação tem seu valor publicamente
            demonstrado.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Seu Apoio em Ação
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Estes são os números que provam como sua contribuição se
              transforma em cuidado, saúde e esperança para milhares de pessoas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactNumbers.map((item) => (
              <StatCounter key={item.label} {...item} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Para Onde Vai Cada Real
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Priorizamos o investimento direto em nossas ações finalísticas.
              Explore o gráfico para ver a distribuição transparente dos nossos
              recursos.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialData.breakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={130}
                    paddingAngle={3}
                    dataKey="value"
                    activeShape={ActiveShape}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {financialData.breakdown.map(
                      (entry: unknown, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          className="outline-none cursor-pointer"
                        />
                      )
                    )}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Distribuição de Recursos 2024
              </h3>
              <p className="text-gray-600">
                Total Arrecadado:{" "}
                <span className="font-bold">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(financialData.totalRaised)}
                </span>
              </p>
              {financialData.breakdown.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center p-3 rounded-lg transition-all cursor-pointer"
                  style={{
                    backgroundColor:
                      activeIndex === index ? `${item.color}20` : "transparent",
                  }} // '20' no final adiciona opacidade
                  onMouseEnter={() => onPieEnter(null, index)}
                  onMouseLeave={onPieLeave}
                >
                  <div
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-700">
                    {item.name}:{" "}
                    <span className="font-semibold">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Central de Relatórios
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Acesso fácil e irrestrito aos documentos que formalizam nosso
              compromisso com a ética e a boa governança.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reports.map((report) => (
              <a
                key={report.name}
                href={report.href}
                className="group flex items-center justify-between p-6 bg-slate-50 rounded-lg transition-all hover:bg-green-100 hover:shadow-md"
              >
                <div className="flex items-center">
                  <FileText className="w-6 h-6 mr-4 text-green-700" />
                  <span className="font-semibold text-gray-800">
                    {report.name}
                  </span>
                </div>
                <Download className="w-6 h-6 text-gray-400 transition-transform group-hover:text-green-700 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 6. SEÇÃO FINAL DE CTA */}
      <MotionSection className="relative bg-green-600 text-white text-center py-20 md:py-24 overflow-hidden">
        <BackgroundIcons />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Faça Parte da Nossa História
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100">
            Juntos, podemos continuar escrevendo capítulos de esperança e saúde.
            Seja como voluntário, parceiro ou doador, seu apoio é fundamental.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/voluntariado"
              className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors"
            >
              Seja Voluntário
            </Link>
            <Link
              to="/doacao"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors"
            >
              Faça uma Doação
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
