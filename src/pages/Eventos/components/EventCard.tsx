import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { Event } from "../../../mock/eventos";

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const EventCard = ({ event, view }: { event: Event; view: string }) => {
  if (view === "grid") {
    return (
      <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline">{event.category}</Badge>
            <div className="text-xs text-muted-foreground">
              {formatDate(event.date)}
            </div>
          </div>
          <h3 className="mb-1 text-lg font-bold">{event.title}</h3>
          <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">
            {event.description}
          </p>
          <div className="mb-3 space-y-1">
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {event.time}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {event.location}
            </div>
          </div>
          <Button size="sm" className="w-full" asChild>
            <Link to={`/events/${event.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md sm:flex-row">
      <div className="h-48 w-full sm:h-auto sm:w-48 md:w-64">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline">{event.category}</Badge>
            <div className="text-sm text-muted-foreground">
              {formatDate(event.date)}
            </div>
          </div>
          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {event.description}
          </p>
        </div>
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
          <div className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              {event.time}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              {event.location}
            </div>
          </div>
          <Button asChild>
            <Link to={`/events/${event.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
