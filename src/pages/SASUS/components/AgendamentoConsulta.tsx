import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar, Info, CheckCircle } from "lucide-react";
import { useState } from "react";
import { DatePickerDemo } from "@/components/ui/DatePicker";
import {
  ListHours,
  ListEspecialists,
  ListInstitution,
} from "@/mock/formSelect";

export const AgendamentoConsulta = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log("Appointment submitted:", {
      selectedDate,
      selectedTime,
      selectedUnit,
      selectedSpecialty,
    });
    setAppointmentSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setAppointmentSubmitted(false);
      setSelectedDate("");
      setSelectedTime("");
      setSelectedUnit("");
      setSelectedSpecialty("");
    }, 5000);
  };

  return (
    <div id="schedule" className="bg-muted py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Agende sua Consulta
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Marque uma consulta presencial em uma das unidades de saúde
            disponíveis na sua região.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Agendamento de Consulta</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para agendar sua consulta
                presencial
              </CardDescription>
            </CardHeader>
            <CardContent>
              {appointmentSubmitted ? (
                <Alert className="bg-primary/10 border-primary/20">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertTitle>Agendamento realizado com sucesso!</AlertTitle>
                  <AlertDescription>
                    Sua consulta foi agendada. Você receberá uma confirmação por
                    e-mail com todos os detalhes.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidade</Label>
                      <Select
                        value={selectedSpecialty}
                        onValueChange={setSelectedSpecialty}
                        required
                      >
                        <SelectTrigger id="specialty">
                          <SelectValue placeholder="Selecione uma especialidade" />
                        </SelectTrigger>
                        <SelectContent className=" bg-white text-black  border border-white">
                          {ListEspecialists.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="unit">Unidade de Saúde</Label>
                      <Select
                        value={selectedUnit}
                        onValueChange={setSelectedUnit}
                        required
                      >
                        <SelectTrigger id="unit">
                          <SelectValue placeholder="Selecione uma unidade" />
                        </SelectTrigger>
                        <SelectContent className=" bg-white text-black  border border-white">
                          {ListInstitution.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">Data</Label>
                        <DatePickerDemo />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Horário</Label>
                        <Select
                          value={selectedTime}
                          onValueChange={setSelectedTime}
                          required
                        >
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Selecione um horário" />
                          </SelectTrigger>
                          <SelectContent className=" bg-white text-black  border border-white">
                            {ListHours.map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.text}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Motivo da Consulta</Label>
                      <Textarea
                        id="reason"
                        placeholder="Descreva brevemente o motivo da sua consulta"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-start">
                      <Info className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Lembre-se de levar seu cartão do SUS, documento de
                        identidade e comprovante de residência no dia da
                        consulta.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Consulta
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
