import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Heart, MapPin, Users, Award } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  service?: number;
  professional?: number;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className={cn("relative space-y-8", className)}>
      {sortedEvents.map((event, index) => {
        const formattedDate = format(
          parseISO(event.date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: ptBR }
        );

        // Calcular o impacto total (serviços + profissionais)
        const totalImpact = (event.service || 0) + (event.professional || 0);

        return (
          <div key={event.id} className="relative pl-6 md:pl-10 group">
            {/* Linha vertical */}
            {index < sortedEvents.length - 1 && (
              <div className="absolute left-3 top-6 h-full w-0.5 bg-primary/30 md:left-5" />
            )}

            {/* Círculo do marcador */}
            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white md:left-2">
              <span className="h-3 w-3 rounded-full bg-white" />
            </div>

            <div className="group-hover:bg-muted transition-colors duration-200 rounded-lg p-4 shadow-sm border">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <p className="font-medium text-primary">{formattedDate}</p>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{event.location}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold leading-tight md:text-xl">
                {event.title}
              </h3>

              <div className="mt-2 text-muted-foreground">
                <p>{event.description}</p>
              </div>

              {(event.service || event.professional) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {event.service ? (
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm">
                      <Heart className="h-3.5 w-3.5 text-primary" />
                      <span>{event.service} atendimentos</span>
                    </div>
                  ) : null}

                  {event.professional ? (
                    <div className="flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-sm">
                      <Users className="h-3.5 w-3.5 text-purple-500" />
                      <span>{event.professional} profissionais</span>
                    </div>
                  ) : null}

                  {totalImpact > 0 && (
                    <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-sm">
                      <Award className="h-3.5 w-3.5 text-blue-500" />
                      <span>{totalImpact} impactos</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
