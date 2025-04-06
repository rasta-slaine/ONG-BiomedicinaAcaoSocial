// Linha do tempo de avanços biomédicos
const breakthroughsTimeline = [
  {
    year: "1928",
    title: "Descoberta da Penicilina",
    description:
      "Alexander Fleming descobriu a penicilina, o primeiro antibiótico, revolucionando o tratamento de infecções bacterianas.",
    impact:
      "Salvou milhões de vidas ao proporcionar tratamento para infecções anteriormente fatais",
  },
  {
    year: "1953",
    title: "Elucidação da Estrutura do DNA",
    description:
      "Watson e Crick, baseando-se no trabalho de Rosalind Franklin, descreveram a estrutura de dupla hélice do DNA.",
    impact: "Formou a base para a biologia molecular moderna e genética",
  },
  {
    year: "1967",
    title: "Primeiro Transplante de Coração",
    description:
      "Dr. Christiaan Barnard realizou o primeiro transplante de coração bem-sucedido de humano para humano.",
    impact:
      "Pioneiro no transplante de órgãos como tratamento viável para insuficiência orgânica terminal",
  },
  {
    year: "1978",
    title: "Primeiro Bebê de FIV",
    description:
      "Louise Brown nasceu como o primeiro bebê concebido por fertilização in vitro (FIV).",
    impact:
      "Permitiu que milhões de pessoas com problemas de fertilidade tivessem filhos biológicos",
  },
  {
    year: "1996",
    title: "Clonagem da Ovelha Dolly",
    description:
      "Cientistas do Instituto Roslin criaram Dolly, o primeiro mamífero clonado a partir de uma célula adulta.",
    impact:
      "Demonstrou o potencial da transferência nuclear de células somáticas e pesquisa com células-tronco",
  },
  {
    year: "2003",
    title: "Conclusão do Projeto Genoma Humano",
    description:
      "Esforço internacional de pesquisa completou o sequenciamento de todo o genoma humano.",
    impact:
      "Acelerou a pesquisa genética e abordagens de medicina personalizada",
  },
  {
    year: "2012",
    title: "Edição Genética CRISPR",
    description:
      "Doudna e Charpentier desenvolveram a tecnologia de edição genética CRISPR-Cas9.",
    impact:
      "Criou uma ferramenta revolucionária para modificação genética precisa com vasto potencial terapêutico",
  },
  {
    year: "2020",
    title: "Desenvolvimento de Vacinas de mRNA",
    description:
      "Desenvolvimento e implementação rápidos de vacinas de mRNA para COVID-19.",
    impact:
      "Demonstrou o potencial da tecnologia de mRNA e transformou os prazos de desenvolvimento de vacinas",
  },
];

export const LinhaDoTempoAvancosBiomedicina = () => {
  return (
    <section className=" py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Principais Avanços Biomédicos
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {breakthroughsTimeline.map((breakthrough, index) => (
              <div key={index} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-green-600 p-2 text-white">
                    <span className="block h-4 w-4"></span>
                  </div>
                  {index < breakthroughsTimeline.length - 1 && (
                    <div className="h-full w-0.5 bg-blue-200"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-green-600">
                    {breakthrough.year}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    {breakthrough.title}
                  </h3>
                  <p className="mb-2 text-muted-foreground">
                    {breakthrough.description}
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    Impacto: {breakthrough.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
