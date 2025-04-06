import { Award, GraduationCap, Users, Building } from "lucide-react";

const image = "/images/dr-dacio-campos.jpg";

export const BiografiaDrDacio = () => {
  return (
    <div>
      <section className="py-16 md:py-24 p-8">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-lg border">
                  <img
                    src={image}
                    alt="Dr. Dácio Campos"
                    className="h-full  w-full object-cover"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    <span>Formado em 1973 - Universidade Barão de Mauá</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    <span>Biomédico do Ano - CRBM-1</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    <span>
                      Ex-Presidente do Conselho Federal de Biomedicina
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>Vereador por 4 mandatos em Ribeirão Preto</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="mb-6 text-3xl font-bold">Biografia</h2>

              <div className="space-y-6 text-lg">
                <p>
                  Dr. Dácio Eduardo Leandro Campos não apenas testemunhou, mas
                  também moldou os rumos da biomedicina no Brasil. Sua
                  trajetória inspiradora demonstra como a dedicação e a visão
                  estratégica podem transformar uma profissão e impactar
                  positivamente a saúde e a ciência de um país inteiro.
                </p>

                <h3 className="text-2xl font-bold">
                  Formação e Início de Carreira
                </h3>
                <p>
                  Formado em 1973 pela Universidade Barão de Mauá (Uni-Mauá), em
                  Ribeirão Preto, Dr. Dácio integrou a primeira turma de
                  Ciências Biológicas – modalidade médica – do Brasil. Este
                  pioneirismo acadêmico estabeleceu as bases para uma carreira
                  dedicada ao desenvolvimento e reconhecimento da biomedicina
                  como profissão essencial para o sistema de saúde brasileiro.
                </p>

                <h3 className="text-2xl font-bold">
                  Contribuições Institucionais
                </h3>
                <p>
                  Como membro fundador e presidente por dois mandatos
                  consecutivos do Conselho Federal de Biomedicina (CFBM), Dr.
                  Dácio desempenhou papel crucial na regulamentação e
                  reconhecimento da profissão no país. Sua gestão no Conselho
                  Regional de Biomedicina da 1ª Região (CRBM-1) foi marcada pela
                  reestruturação funcional e modernização do sistema de
                  informática, o que lhe rendeu o reconhecimento como "Biomédico
                  do Ano".
                </p>

                <h3 className="text-2xl font-bold">
                  Atuação Política e Educacional
                </h3>
                <p>
                  A versatilidade de Dr. Dácio se estendeu à política, onde
                  exerceu quatro mandatos como vereador e três como presidente
                  da Câmara Municipal de Ribeirão Preto. Também atuou como
                  secretário municipal de Cultura e Esportes, demonstrando seu
                  compromisso com o desenvolvimento social além da saúde.
                </p>
                <p>
                  No campo educacional, como pró-reitor do Centro Universitário
                  Barão de Mauá, influenciou diretamente na formação de novos
                  profissionais. Sua expertise foi reconhecida em nível federal,
                  onde atuou como consultor do Ministério da Educação (MEC) e do
                  Ministério da Ciência, Tecnologia e Inovação (MCTI).
                </p>

                <h3 className="text-2xl font-bold">
                  Defesa e Expansão da Profissão
                </h3>
                <p>
                  Durante a pandemia de COVID-19, sob sua liderança, os
                  biomédicos estiveram na linha de frente, contribuindo
                  significativamente para o diagnóstico e combate ao vírus. Este
                  momento crítico reforçou a importância da profissão para a
                  saúde pública brasileira.
                </p>
                <p>
                  Dr. Dácio foi fundamental na inclusão de práticas integrativas
                  e complementares em saúde, como acupuntura e ozonioterapia,
                  ampliando o campo de atuação dos biomédicos e atendendo às
                  demandas contemporâneas de saúde.
                </p>

                <div className="rounded-lg bg-muted p-6">
                  <h4 className="mb-2 text-xl font-bold">Legado</h4>
                  <p className="italic">
                    "Dr. Dácio Campos é mais que um profissional; é uma lenda
                    viva da biomedicina brasileira. Sua trajetória inspira não
                    apenas biomédicos, mas todos que acreditam no poder
                    transformador da dedicação e da visão estratégica. Que sua
                    história nos motive a buscar incessantemente a excelência e
                    a inovação em nossas áreas de atuação."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Trajetória Profissional
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                  <div className="h-full w-0.5 bg-border"></div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    1973
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Formação Acadêmica</h3>
                  <p className="text-muted-foreground">
                    Graduou-se na primeira turma de Ciências Biológicas –
                    modalidade médica – da Universidade Barão de Mauá, em
                    Ribeirão Preto.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                  <div className="h-full w-0.5 bg-border"></div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    1980s
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Atuação Política</h3>
                  <p className="text-muted-foreground">
                    Iniciou sua carreira política como vereador em Ribeirão
                    Preto, onde exerceria quatro mandatos e seria presidente da
                    Câmara Municipal por três vezes.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                  <div className="h-full w-0.5 bg-border"></div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    1990s
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Conselho Federal de Biomedicina
                  </h3>
                  <p className="text-muted-foreground">
                    Participou da fundação do CFBM e posteriormente seria eleito
                    presidente por dois mandatos consecutivos, contribuindo
                    decisivamente para a regulamentação da profissão.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                  <div className="h-full w-0.5 bg-border"></div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    2000s
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Atuação Acadêmica</h3>
                  <p className="text-muted-foreground">
                    Como pró-reitor do Centro Universitário Barão de Mauá,
                    contribuiu para a formação de novos profissionais e para o
                    desenvolvimento acadêmico da biomedicina no Brasil.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                  <div className="h-full w-0.5 bg-border"></div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    2010s
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Consultoria Governamental
                  </h3>
                  <p className="text-muted-foreground">
                    Atuou como consultor do Ministério da Educação (MEC) e do
                    Ministério da Ciência, Tecnologia e Inovação (MCTI), levando
                    sua experiência para o desenvolvimento de políticas
                    públicas.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <span className="block h-4 w-4"></span>
                  </div>
                </div>
                <div className="pb-8">
                  <div className="mb-1 text-sm font-bold text-primary">
                    2020
                  </div>
                  <h3 className="mb-2 text-lg font-bold">
                    Liderança Durante a Pandemia
                  </h3>
                  <p className="text-muted-foreground">
                    Durante a pandemia de COVID-19, liderou a mobilização dos
                    biomédicos na linha de frente do diagnóstico e combate ao
                    vírus, reafirmando a importância da profissão para a saúde
                    pública.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
