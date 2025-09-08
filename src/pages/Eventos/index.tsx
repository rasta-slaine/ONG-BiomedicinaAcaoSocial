import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { events } from "../../mock/eventos";
import { EventCard } from "./components/EventCard";
import { Pagination } from "./components/Pagination";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Building2, Award } from "lucide-react";

export function EventsPage() {
  const [eventsData] = useState(events);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas Categorias");
  const [viewType] = useState("grid");
  const categories = ["Todas Categorias", "Saúde", "Premiação"];

  useEffect(() => {
    setCurrentPage(1); // Resetar para a primeira página ao buscar
  }, [searchQuery, selectedCategory]);

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todas Categorias" ||
      event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvents = filteredEvents.slice(firstEventIndex, lastEventIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className=" md:flex flex-col">
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-500  py-24 text-white text-center mb-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Participe dos Nossos Eventos
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            A cada evento, levamos saúde, conhecimento e acolhimento às
            comunidades. Acompanhe nossas ações e junte-se a nós para promover
            um futuro mais saudável e solidário.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button
              size="lg"
              className="shadow-lg hover:scale-105 transition"
              asChild
            >
              <Link to="/eventos/calendario">Ver Calendário</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
              asChild
            >
              <Link to="/voluntarios">Quero Me Voluntariar</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar eventos..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        {viewType === "grid" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} view="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} view="list" />
            ))}
          </div>
        )}

        {currentEvents.length === 0 && (
          <div className="my-10 text-center">
            <h3 className="text-xl font-medium">Nenhum evento encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar sua pesquisa ou critérios de filtro
            </p>
          </div>
        )}
      </div>

      <Pagination
        totalItems={filteredEvents.length}
        itemsPerPage={eventsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
