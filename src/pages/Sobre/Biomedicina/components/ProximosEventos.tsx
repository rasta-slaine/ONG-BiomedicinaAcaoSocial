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
      <div className="items-center justify-center ">
        <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-6xl drop-shadow-md  ">
          Próximos Eventos
        </h2>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2 justify-center">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="w-sm overflow-hidden shadow-2xl transition-all border-4  border-green-100  hover:shadow-md"
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
                  <Button
                    variant="outline"
                    className="w-full border-2 text-green-600 border-green-300 transition-all hover:border-green-600 hover:shadow-md"
                    asChild
                  >
                    <Link to={`/events/${event.id}`}>
                      Ver Detalhes do Evento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-1 flex flex-col items-center  sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-emerald-600 to-green-500 text-white border-white hover:bg-white/90 text-lg px-8 py-5 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link to="/events">
                {" "}
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
