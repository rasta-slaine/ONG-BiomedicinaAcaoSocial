import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { events } from "@/mock/eventos";

// Função para formatar data
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

export const ProximosEventos = () => {
  const upcomingEvents = events.filter((e) => {
    return e.isFeatured === true;
  });

  return (
    <section className="py-16  ">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Próximos Eventos
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden shadow-2xl   hover:shadow-md transition-all"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground bg-primary">
                    <Badge variant="outline">{formatDate(event.date)}</Badge>
                    <span>{event.location}</span>
                  </div>
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/events/${event.id}`}>
                      Ver Detalhes do Evento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link to="/events">
                Ver Todos os Eventos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
