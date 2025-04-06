import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { ListEspecialists } from "@/mock/formSelect";

const CardInfo = [
  {
    title: "Benefícios da Telemedicina",
    content: [
      {
        icon: CheckCircle,
        title: "Comodidade",
        description:
          "Consulte-se com um profissional de saúde sem sair de casa, economizando tempo e evitando deslocamentos.",
      },
      {
        icon: CheckCircle,
        title: "Rapidez",
        description:
          "Atendimento mais rápido para casos que não exigem exame físico, com menor tempo de espera.",
      },
      {
        icon: CheckCircle,
        title: "Acessibilidade",
        description:
          "Ideal para pessoas com dificuldade de locomoção, que moram em áreas remotas ou com agenda apertada.",
      },
      {
        icon: CheckCircle,
        title: "Continuidade do cuidado",
        description:
          "Acompanhamento de condições crônicas e retornos sem necessidade de deslocamento.",
      },
    ],
    footer: [
      {
        title: " Casos ideais para telemedicina:",
        list: [
          { value: "Orientações gerais de saúde" },
          { value: "Dúvidas sobre medicamentos" },
          { value: "Acompanhamento de condições crônicas estáveis" },
          { value: "Renovação de receitas" },
          { value: "Avaliação inicial de sintomas leves" },
        ],
      },
    ],
  },
];

export const AgendamentoConsultaOnline = () => {
  const [onlineConsultSubmitted, setOnlineConsultSubmitted] = useState(false);

  const handleOnlineConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log("Online consultation submitted");
    setOnlineConsultSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setOnlineConsultSubmitted(false);
    }, 5000);
  };

  return (
    <div id="online-consult" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Consulta Online
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Converse com um profissional de saúde sem sair de casa, através da
            nossa plataforma de telemedicina.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              {CardInfo.map((value, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent key={index} className="space-y-4">
                    {value.content.map((value, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 rounded-full bg-primary/10 p-2">
                          <value.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    {value.footer.map((value, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-muted p-4 w-full"
                      >
                        <h4 className="mb-2 font-medium">{value.title}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {value.list.map((item, index) => (
                            <li key={index}>{`• ${item.value}`}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Solicitar Consulta Online</CardTitle>
                  <CardDescription>
                    Preencha o formulário para solicitar uma consulta por
                    telemedicina
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {onlineConsultSubmitted ? (
                    <Alert className="bg-primary/10 border-primary/20">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <AlertTitle>Solicitação enviada com sucesso!</AlertTitle>
                      <AlertDescription>
                        Sua solicitação de consulta online foi recebida. Em
                        breve entraremos em contato para confirmar o horário.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <form
                      onSubmit={handleOnlineConsultSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="online-specialty">Especialidade</Label>
                        <Select required>
                          <SelectTrigger id="online-specialty">
                            <SelectValue placeholder="Selecione uma especialidade" />
                          </SelectTrigger>

                          <SelectContent>
                            {ListEspecialists.map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Preferência de Horário</Label>
                        <RadioGroup defaultValue="morning">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="morning" id="morning" />
                            <Label htmlFor="morning">Manhã (8h às 12h)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="afternoon" id="afternoon" />
                            <Label htmlFor="afternoon">
                              Tarde (13h às 17h)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="evening" id="evening" />
                            <Label htmlFor="evening">Noite (18h às 21h)</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="online-reason">
                          Motivo da Consulta
                        </Label>
                        <Textarea
                          id="online-reason"
                          placeholder="Descreva brevemente o motivo da sua consulta"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact">Telefone para Contato</Label>
                        <Input
                          id="contact"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Video className="mr-2 h-4 w-4" />
                        Solicitar Consulta Online
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
