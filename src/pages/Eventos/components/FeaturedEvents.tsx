import { useState } from "react";
import { events } from "@/mock/eventos";
import { EventCard } from "./EventCard";

export const FeaturedEvents = () => {
  const [eventsData] = useState(events);
  const [searchQuery] = useState("");
  const [selectedCategory] = useState("Todas Categorias");

  const filteredEventsFeatured = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todas Categorias" ||
      event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mb-10">
      <div className="mb-10 text-center flex flex-col items-center space-y-4">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Upcoming Events
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover and join our upcoming events. From tech conferences to
          community gatherings, there's something for everyone.
        </p>
      </div>

      <h2 className="mb-6 text-2xl font-bold">Proximos Eventos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEventsFeatured
          .filter((event) => event.isFeatured)
          .map((event) => (
            <EventCard key={event.id} event={event} view="grid" />
          ))}
      </div>
    </div>
  );
};
