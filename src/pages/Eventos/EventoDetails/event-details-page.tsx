"use client";

import type React from "react";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Heart,
  ArrowLeft,
  Users,
  Briefcase,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Event interface
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  service?: number;
  professional?: number;
  isFeatured: boolean;
}

// Import events data
import { events } from "@/mock/eventos";

export function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);

  // Find the event with the matching ID
  const event = events.find((e) => e.id === eventId);

  // If event not found, show error message
  if (!event) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>
            Evento não encontrado. O evento que você está procurando pode ter
            sido removido ou não existe.
          </AlertDescription>
        </Alert>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => navigate("/events")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Eventos
          </Button>
        </div>
      </div>
    );
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  // Get next and previous events
  const currentIndex = events.findIndex((e) => e.id === eventId);
  const prevEvent = currentIndex > 0 ? events[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < events.length - 1 ? events[currentIndex + 1] : null;

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationSubmitted(true);
    // In a real app, you would submit the form data to your backend
  };

  // Check if event is in the past
  const isPastEvent = new Date(event.date) < new Date();

  return (
    <div className="bg-background pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-black/50 md:h-[50vh]">
        <img
          src={event.image || "/placeholder.svg?height=600&width=1200"}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-10 flex h-full flex-col justify-end pb-1">
          <Button
            variant="outline"
            size="sm"
            className="mb-4 w-fit bg-background/80 backdrop-blur-sm"
            onClick={() => navigate("/events")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Eventos
          </Button>

          {/* <Badge className="mb-2 w-fit p-1">{event.category}</Badge> */}
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl p-8">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white p-2">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>{event.location}</span>
            </div>
            {event.isFeatured && (
              <Badge
                variant="secondary"
                className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30"
              >
                Destaque
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 p-8">
        {/* Left Column - Event Details */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Sobre Este Evento</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>

            <Separator />

            {/* Stats Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Estatísticas do Evento
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {typeof event.service === "number" && (
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Atendimentos Realizados
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Users className="mr-2 h-5 w-5 text-primary" />
                        <span className="text-3xl font-bold">
                          {event.service}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {typeof event.professional === "number" && (
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Profissionais Envolvidos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5 text-primary" />
                        <span className="text-3xl font-bold">
                          {event.professional}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="mb-4 text-2xl font-bold">Localização</h2>
              <div className="mb-4 rounded-lg border p-4">
                <div className="mb-2 flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                <div className="mt-4 h-[300px] w-full overflow-hidden rounded-md bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    Mapa do local - Em um aplicativo real, um mapa seria
                    incorporado aqui
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation between events */}
            <div className="flex justify-between pt-4">
              {prevEvent ? (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/events/${prevEvent.id}`)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Evento Anterior
                </Button>
              ) : (
                <div></div>
              )}

              {nextEvent && (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/events/${nextEvent.id}`)}
                >
                  Próximo Evento{" "}
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Registration and Related Events */}
        <div className="space-y-8">
          {/* Registration Card */}
          <Card>
            <CardHeader>
              <CardTitle>Participar deste Evento</CardTitle>
              <CardDescription>
                {isPastEvent
                  ? "Este evento já ocorreu"
                  : `Garanta sua vaga na ${event.title}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isPastEvent ? (
                <Alert className="bg-amber-500/10 border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  </div>
                  <AlertDescription>
                    Este evento já aconteceu. Confira nossos próximos eventos
                    disponíveis.
                  </AlertDescription>
                </Alert>
              ) : registrationSubmitted ? (
                <Alert className="bg-primary/10 border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <h4 className="font-medium">
                      Inscrição Realizada com Sucesso!
                    </h4>
                  </div>
                  <AlertDescription>
                    Obrigado por se inscrever. Enviamos um e-mail de confirmação
                    com todos os detalhes.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="Digite seu telefone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comments">
                      Comentários ou Necessidades Especiais
                    </Label>
                    <Textarea
                      id="comments"
                      placeholder="Alguma necessidade especial ou pergunta?"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Inscrever-se Agora
                  </Button>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Compartilhar</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Salvar</span>
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Contatar Organizador</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contatar Organizador do Evento</DialogTitle>
                    <DialogDescription>
                      Envie uma mensagem para o organizador de {event.title}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Seu Nome</Label>
                      <Input id="contact-name" placeholder="Digite seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Seu E-mail</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Mensagem</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Digite sua mensagem aqui"
                        rows={5}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Enviar Mensagem</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          {/* Event Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Evento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Data</p>
                  <p className="text-muted-foreground">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-muted-foreground">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Local</p>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </div>
              {typeof event.service === "number" && event.service > 0 && (
                <div className="flex items-start">
                  <Users className="mr-3 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Atendimentos</p>
                    <p className="text-muted-foreground">
                      {event.service} pessoas atendidas
                    </p>
                  </div>
                </div>
              )}
              {typeof event.professional === "number" &&
                event.professional > 0 && (
                  <div className="flex items-start">
                    <Briefcase className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Profissionais</p>
                      <p className="text-muted-foreground">
                        {event.professional} profissionais envolvidos
                      </p>
                    </div>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
