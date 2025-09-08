// src/pages/SasusSchedulingPage.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";

// --- DADOS MOCKADOS ---
const specialties = ["Clínica Geral", "Cardiologia", "Psicologia", "Nutrição"];
const professionals: Record<string, { name: string; crm: string }[]> = {
  Cardiologia: [
    { name: "Dr. João Silva", crm: "CRM 12345" },
    { name: "Dra. Ana Costa", crm: "CRM 67890" },
  ],
  "Clínica Geral": [
    { name: "Dr. Carlos Mendes", crm: "CRM 11223" },
    { name: "Dra. Beatriz Lima", crm: "CRM 44556" },
  ],
};
const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

// --- COMPONENTE PRINCIPAL ---
export function SasusAgendamento() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: "",
    professional: "",
    date: new Date(),
    time: "",
    patientName: "",
    susCard: "",
  });
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Agendamento Enviado:", formData);
      setLoading(false);
      setStep(4);
    }, 2000);
  };

  const progress = (step / 4) * 100;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-green-600 text-white text-center py-12">
        <h1 className="text-4xl font-extrabold">Agende sua Consulta</h1>
        <p className="mt-4 text-lg text-green-100">
          Simples, rápido e sem filas. Sua saúde em primeiro lugar.
        </p>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader>
              <Progress value={progress} className="mb-4" />
              {step < 4 && <CardDescription>Passo {step} de 3</CardDescription>}
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div>
                  <CardTitle className="mb-6">
                    Qual especialidade você precisa?
                  </CardTitle>
                  <Label htmlFor="specialty">Especialidade</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((f) => ({ ...f, specialty: value }))
                    }
                    value={formData.specialty}
                  >
                    <SelectTrigger className="bg-white text-black border-gray-300">
                      {" "}
                      {/* CORREÇÃO AQUI */}
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {" "}
                      {/* CORREÇÃO AQUI */}
                      {specialties.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.specialty}
                    className="w-full mt-8"
                  >
                    Próximo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <CardTitle className="mb-6">
                    Escolha o profissional, a data e o horário
                  </CardTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label>Profissionais Disponíveis</Label>
                        <div className="space-y-2 mt-2">
                          {(professionals[formData.specialty] || []).map(
                            (p) => (
                              <Button
                                key={p.crm}
                                variant={
                                  formData.professional === p.name
                                    ? "default"
                                    : "outline"
                                }
                                className="w-full justify-start data-[state=selected]:bg-green-600 data-[state=selected]:text-white" // MELHORIA
                                onClick={() =>
                                  setFormData((f) => ({
                                    ...f,
                                    professional: p.name,
                                  }))
                                }
                              >
                                {p.name}
                              </Button>
                            )
                          )}
                        </div>
                      </div>
                      <div>
                        <Label>Horários Disponíveis</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {availableTimes.map((t) => (
                            <Button
                              key={t}
                              variant={
                                formData.time === t ? "default" : "outline"
                              }
                              className="data-[state=selected]:bg-green-600 data-[state=selected]:text-white" // MELHORIA
                              onClick={() =>
                                setFormData((f) => ({ ...f, time: t }))
                              }
                            >
                              {t}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label>Data da Consulta</Label>
                      {/* CORREÇÃO DO CALENDÁRIO COM CLASSES ESPECÍFICAS */}
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) =>
                          setFormData((f) => ({
                            ...f,
                            date: date || new Date(),
                          }))
                        }
                        className="rounded-md border p-0 bg-white"
                        classNames={{
                          months:
                            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 p-4",
                          month: "space-y-4",
                          caption:
                            "flex justify-center pt-1 relative items-center",
                          caption_label: "text-sm font-medium",
                          nav: "space-x-1 flex items-center",
                          nav_button:
                            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell:
                            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                          row: "flex w-full mt-2",
                          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md",
                          day_selected:
                            "bg-green-600 text-white hover:bg-green-600 focus:bg-green-600",
                          day_today: "bg-gray-200 text-accent-foreground",
                          day_outside: "text-muted-foreground opacity-50",
                          day_disabled: "text-muted-foreground opacity-50",
                          day_range_middle:
                            "aria-selected:bg-accent aria-selected:text-accent-foreground",
                          day_hidden: "invisible",
                        }}
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={
                        !formData.professional ||
                        !formData.date ||
                        !formData.time
                      }
                    >
                      Próximo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <CardTitle className="mb-2">
                    Confirme os Detalhes e Preencha seus Dados
                  </CardTitle>
                  <CardDescription className="mb-6">
                    Revise as informações antes de confirmar o agendamento.
                  </CardDescription>
                  <div className="bg-slate-50 p-4 rounded-lg mb-6 space-y-2">
                    <p>
                      <strong>Especialidade:</strong> {formData.specialty}
                    </p>
                    <p>
                      <strong>Profissional:</strong> {formData.professional}
                    </p>
                    <p>
                      <strong>Data:</strong>{" "}
                      {formData.date.toLocaleDateString("pt-BR")}
                    </p>
                    <p>
                      <strong>Horário:</strong> {formData.time}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="patientName">Seu Nome Completo</Label>
                      <Input
                        id="patientName"
                        value={formData.patientName}
                        onChange={(e) =>
                          setFormData((f) => ({
                            ...f,
                            patientName: e.target.value,
                          }))
                        }
                        required
                        className="bg-white"
                      />{" "}
                      {/* CORREÇÃO AQUI */}
                    </div>
                    <div>
                      <Label htmlFor="susCard">Número do Cartão do SUS</Label>
                      <Input
                        id="susCard"
                        value={formData.susCard}
                        onChange={(e) =>
                          setFormData((f) => ({
                            ...f,
                            susCard: e.target.value,
                          }))
                        }
                        required
                        className="bg-white"
                      />{" "}
                      {/* CORREÇÃO AQUI */}
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        type="button"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                      </Button>
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Confirmando...
                          </>
                        ) : (
                          <>
                            Confirmar Agendamento{" "}
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 mx-auto text-green-600 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Agendamento Confirmado!
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Sua consulta com <strong>{formData.professional}</strong>{" "}
                    foi agendada para{" "}
                    <strong>{formData.date.toLocaleDateString("pt-BR")}</strong>{" "}
                    às <strong>{formData.time}</strong>.
                  </p>
                  <p className="mt-2 text-gray-600">
                    Você receberá uma confirmação por e-mail e SMS em breve. Por
                    favor, chegue com 15 minutos de antecedência.
                  </p>
                  <Button asChild className="mt-8">
                    <Link to="/">Voltar para a Página Inicial</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
