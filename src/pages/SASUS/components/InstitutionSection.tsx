import { AlertCircle, CheckCircle, Building, Hospital } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

enum TabType {
  SIMPLE = "simples",
  COMPOSED = "Composed",
}

interface ListItem {
  icon?: React.ElementType;
  text: string;
  style?: string;
}

interface ContentItem {
  title?: string;
  description?: string;
  list?: ListItem[];
  badge?: {
    value: string;
    style?: string;
  };
  items?: {
    title: string;
    list: ListItem[];
  }[];
  services?: {
    title: string;
    list: { value: string }[];
  }[];
  working?: {
    title: string;
    list: { value: string }[];
  }[];
}

interface CardItem {
  icon?: React.ElementType;
  type: TabType;
  iconStyle?: string;
  title: string;
  description: string;
  content: ContentItem[];
}

interface TabItem {
  value: string;
  title: string;
  card: CardItem[];
}

const TabTriggerList = ({ tabs }: { tabs: TabItem[] }) => (
  <TabsList className="grid w-full grid-cols-4">
    {tabs.map((tab: TabItem) => (
      <TabsTrigger key={tab.value} value={tab.value} className="w-52">
        {tab.title}
      </TabsTrigger>
    ))}
  </TabsList>
);

const ContentItemComposedComponent = ({
  content,
}: {
  content: ContentItem;
}) => (
  <div className="rounded-lg border p-4 mb-5">
    {content.title && (
      <h3 className="mb-2 text-lg font-medium">{content.title}</h3>
    )}
    {content.description && (
      <p className="mb-2 text-muted-foreground">{content.description}</p>
    )}
    {content.list && (
      <ul className="space-y-1 text-muted-foreground">
        {content.list.map((value: ListItem, index: number) => (
          <li key={index} className="flex items-start">
            {value.icon && (
              <value.icon
                className={`mr-2 mt-0.5 h-4 w-4 ${value.style || ""}`}
              />
            )}
            <span>{value.text}</span>
          </li>
        ))}
      </ul>
    )}
    {content.badge && (
      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium">Procure:</span>
        <Badge className={`bg-destructive ${content.badge.style}`}>
          {content.badge.value}
        </Badge>
      </div>
    )}
  </div>
);

const ContentItemSimpleComponent = ({ content }: { content: ContentItem }) => (
  <div className="space-y-4">
    {content.title && <p className="mb-2">{content.title}</p>}
    {content.items && (
      <ul className="space-y-1 text-muted-foreground">
        {content.items.map((item, index: number) => (
          <div key={index}>
            <h4 className="mb-2 font-medium">{item.title}</h4>
            <ul className="space-y-1 text-muted-foreground">
              {item.list.map((listItem, listIndex) => (
                <li key={listIndex} className="flex items-start">
                  {listItem.icon && (
                    <listItem.icon
                      className={`mr-2 mt-0.5 h-4 w-4 ${listItem.style || ""}`}
                    />
                  )}
                  <span>{listItem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    )}
    <div className="grid gap-4 md:grid-cols-2">
      {content.services &&
        content.services.map((service, index) => (
          <div key={index}>
            <h4 className="mb-2 font-medium">{service.title}</h4>
            {service.list.map((item, index) => (
              <ul
                key={index}
                className="space-y-1 text-sm text-muted-foreground"
              >
                <li>{item.value}</li>
              </ul>
            ))}
          </div>
        ))}

      {content.working &&
        content.working.map((working, index) => (
          <div key={index}>
            <h4 className="mb-2 font-medium">{working.title}</h4>
            {working.list.map((item, index) => (
              <ul
                key={index}
                className="space-y-1 text-sm text-muted-foreground"
              >
                <li>{item.value}</li>
              </ul>
            ))}
          </div>
        ))}
    </div>
  </div>
);

const CardComponent = ({ card }: { card: CardItem }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center">
        {card.icon && (
          <div className="mr-4 rounded-full bg-orange-500/10 p-3">
            <card.icon className={`h-6 w-6 ${card.iconStyle || ""}`} />
          </div>
        )}

        <div>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      {card.type === TabType.COMPOSED &&
        card.content.map((contentItem: ContentItem, index: number) => (
          <ContentItemComposedComponent key={index} content={contentItem} />
        ))}

      {card.type === TabType.SIMPLE &&
        card.content.map((contentItem: ContentItem, index: number) => (
          <ContentItemSimpleComponent key={index} content={contentItem} />
        ))}
    </CardContent>
  </Card>
);

const TabCompoonent = ({ tabs }: { tabs: TabItem[] }) => (
  <div className="mx-auto max-w-4xl">
    <Tabs defaultValue="overview" className="w-full">
      <TabTriggerList tabs={tabs} />
      {tabs.map((tab: TabItem) => (
        <TabsContent key={tab.value} value={tab.value} className="w-4xl">
          {tab.card.map((card: CardItem, index: number) => (
            <CardComponent key={index} card={card} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  </div>
);

export const InstitutionSection = () => {
  const TabsInfo: TabItem[] = [
    {
      value: "overview",
      title: "Visão Geral",
      card: [
        {
          type: TabType.COMPOSED,
          title: "Qual instituição devo procurar?",
          description:
            "Entenda as diferenças entre os serviços de saúde e saiba onde buscar atendimento de acordo com suas necessidades",
          content: [
            {
              title: "Casos de Emergência",
              description: "Em situações que representam risco de vida, como:",
              list: [
                {
                  icon: AlertCircle,
                  text: "Dor no peito intensa",
                  style: "text-red-500",
                },
                {
                  icon: AlertCircle,
                  text: "AVC (derrame)",
                  style: "text-red-500",
                },
                {
                  icon: AlertCircle,
                  text: "Acidentes graves",
                  style: "text-red-500",
                },
                {
                  icon: AlertCircle,
                  text: "Parada cardiorrespiratória",
                  style: "text-red-500",
                },
              ],
              badge: {
                value: "Pronto-Socorro de Hospital",
                style: "bg-red-500",
              },
            },
            {
              title: "Urgências",
              description:
                "Situações que precisam de atendimento rápido, mas não representam risco imediato de vida:",
              list: [
                {
                  icon: AlertCircle,
                  text: "Febre alta",
                  style: "text-orange-500",
                },
                {
                  icon: AlertCircle,
                  text: "Fraturas e cortes profundos",
                  style: "text-orange-500",
                },
                {
                  icon: AlertCircle,
                  text: "Crise de asma",
                  style: "text-orange-500",
                },
                {
                  icon: AlertCircle,
                  text: "Desidratação",
                  style: "text-orange-500",
                },
              ],
              badge: {
                value: "UPA - Unidade de Pronto Atendimento",
                style: "bg-orange-500",
              },
            },
            {
              title: "Atendimento de Rotina",
              description:
                "Consultas agendadas, acompanhamento de condições crônicas e prevenção:",
              list: [
                {
                  icon: CheckCircle,
                  text: "Consultas de rotina",
                  style: "text-green-500",
                },
                {
                  icon: CheckCircle,
                  text: "Acompanhamento de hipertensão e diabetes",
                  style: "text-green-500",
                },
                {
                  icon: CheckCircle,
                  text: "Pré-natal",
                  style: "text-green-500",
                },
                {
                  icon: CheckCircle,
                  text: "Vacinação",
                  style: "text-green-500",
                },
              ],
              badge: {
                value: "UBS - Unidade Básica de Saúde",
                style: "bg-green-500",
              },
            },
          ],
        },
      ],
    },
    {
      value: "upa",
      title: "UPA",
      card: [
        {
          type: TabType.SIMPLE,
          iconStyle: "text-orange-500",
          title: "O que é uma UPA?",
          description: "Unidade de Pronto Atendimento",
          icon: Building,
          content: [
            {
              title:
                "As Unidades de Pronto Atendimento (UPAs) são estabelecimentos de saúde de complexidade intermediária, que fazem parte da Rede de Atenção às Urgências. Elas funcionam 24 horas por dia, sete dias por semana, e podem resolver grande parte das urgências e emergências.",
              items: [
                {
                  title: "Quando procurar uma UPA:",
                  list: [
                    {
                      icon: AlertCircle,
                      text: "Febre alta",
                      style: "text-orange-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Fraturas e cortes com pouco sangramento",
                      style: "text-orange-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Crise de asma ou falta de ar moderada",
                      style: "text-orange-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Desidratação",
                      style: "text-orange-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Vômitos e diarreia persistentes",
                      style: "text-orange-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Cólicas renais",
                      style: "text-orange-500",
                    },
                  ],
                },
              ],
              services: [
                {
                  title: "Serviços oferecidos:",
                  list: [
                    { value: "Atendimento de urgência e emergência" },
                    { value: "Raio-X" },
                    { value: "Eletrocardiograma" },
                    { value: "Exames laboratoriais básicos" },
                    { value: "Observação por até 24 horas" },
                  ],
                },
              ],
              working: [
                {
                  title: "Funcionamento:",
                  list: [
                    { value: "Atendimento 24 horas" },
                    { value: "Não é necessário agendamento" },
                    {
                      value:
                        "Atendimento por ordem de prioridade (classificação de risco)",
                    },
                    { value: "Casos graves são encaminhados para hospitais" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "ubs",
      title: "UBS",
      card: [
        {
          type: TabType.SIMPLE,
          iconStyle: "text-green-500",
          title: "O que é uma UBS?",
          description: "Unidade Básica de Saúde",
          icon: Building,
          content: [
            {
              title:
                "As Unidades Básicas de Saúde (UBS), também conhecidas como postos de saúde ou centros de saúde, são a porta de entrada preferencial do Sistema Único de Saúde (SUS). Elas são responsáveis por atender até 80% dos problemas de saúde da população, sem que haja a necessidade de encaminhamento para hospitais.",
              items: [
                {
                  title: "Quando procurar uma UBS:",
                  list: [
                    {
                      icon: AlertCircle,
                      text: "Consultas de rotina e acompanhamento",
                      style: "text-green-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Vacinação",
                      style: "text-green-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Pré-natal",
                      style: "text-green-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Acompanhamento de doenças crônicas (hipertensão, diabetes)",
                      style: "text-green-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Prevenção e rastreamento de doenças",
                      style: "text-green-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Planejamento familiar",
                      style: "text-green-500",
                    },
                  ],
                },
              ],
              services: [
                {
                  title: "Serviços oferecidos:",
                  list: [
                    { value: "Consultas médicas" },
                    { value: "Consultas de enfermagem" },
                    { value: "Odontologia" },
                    { value: "Curativos e procedimentos básicos" },
                    { value: "Dispensação de medicamentos" },
                    { value: "Acompanhamento de gestantes e crianças" },
                  ],
                },
              ],
              working: [
                {
                  title: "Funcionamento:",
                  list: [
                    { value: "Horário comercial (geralmente 7h às 17h)" },
                    { value: "Atendimento por agendamento" },
                    {
                      value:
                        "Atendimento por território (cada UBS atende uma região específica)",
                    },
                    { value: "Estratégia Saúde da Família (ESF)" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "hospital",
      title: "Hospital",
      card: [
        {
          type: TabType.SIMPLE,
          iconStyle: "text-red-500",
          title: "O que é um Hospital?",
          description: "Unidade de alta complexidade",
          icon: Hospital,
          content: [
            {
              title:
                "Os hospitais são estabelecimentos de saúde destinados a prestar assistência médica e hospitalar a pacientes em regime de internação, além de oferecer atendimento ambulatorial e de emergência. São unidades de alta complexidade que contam com infraestrutura para procedimentos cirúrgicos, exames avançados e tratamentos especializados.",
              items: [
                {
                  title: "Quando procurar um Hospital:",
                  list: [
                    {
                      icon: AlertCircle,
                      text: "Emergências com risco de vida",
                      style: "text-red-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Dor no peito intensa",
                      style: "text-red-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "AVC (derrame)",
                      style: "text-red-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Acidentes graves",
                      style: "text-red-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Parada cardiorrespiratória",
                      style: "text-red-500",
                    },
                    {
                      icon: AlertCircle,
                      text: "Traumas graves",
                      style: "text-red-500",
                    },
                  ],
                },
              ],
              services: [
                {
                  title: "Serviços oferecidos:",
                  list: [
                    { value: "Pronto-socorro 24 horas" },
                    { value: "Internação" },
                    { value: "Cirurgias" },
                    { value: "UTI (Unidade de Terapia Intensiva)" },
                    { value: "Exames de alta complexidade" },
                    { value: "Tratamentos especializados" },
                    { value: "Maternidade (em alguns hospitais)" },
                  ],
                },
              ],
              working: [
                {
                  title: "Funcionamento:",
                  list: [
                    { value: "Pronto-socorro: atendimento 24 horas" },
                    { value: "Ambulatório: consultas agendadas" },
                    { value: "Internação: mediante encaminhamento médico" },
                    {
                      value:
                        "Classificação de risco para atendimentos de emergência",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return <TabCompoonent tabs={TabsInfo} />;
};
