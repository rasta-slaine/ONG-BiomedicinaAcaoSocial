import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Microscope, Beaker } from "lucide-react";

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

const BackgroundIcons = () => (
  <div className="absolute inset-0 overflow-hidden">
    <Microscope className="absolute top-[10%] left-[5%] h-32 w-32 text-white/5 rotate-12" />
    <Beaker className="absolute bottom-[15%] right-[5%] h-32 w-32 text-white/5 -rotate-12" />
    <Heart className="absolute top-[20%] right-[10%] h-32 w-32 text-white/5" />
  </div>
);

export const CtaVoluntarioEDoacao = () => {
  return (
    <div>
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
};
