import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, MapPin } from "lucide-react";

interface Event {
  service?: number;
  professional?: number;
  location?: string; // Added location property
}

interface StatsProps {
  events: Event[];
  className?: string;
}

export function Stats({ events, className }: StatsProps) {
  // Calcular estatísticas
  const totalServices = events.reduce(
    (total, event) => total + (event.service || 0),
    0
  );
  const totalProfessionals = events.reduce(
    (total, event) => total + (event.professional || 0),
    0
  );
  const totalEvents = events.length;

  // Total de locais únicos
  const uniqueLocations = new Set(events.map((event) => event.location)).size;

  return (
    <div
      className={`grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-4 ${className}`}
    >
      <StatCard
        icon={<Heart className="h-6 w-6 text-rose-500" />}
        value={totalServices.toLocaleString("pt-BR")}
        label="Atendimentos"
        color="rose"
      />

      <StatCard
        icon={<Users className="h-6 w-6 text-purple-500" />}
        value={totalProfessionals.toLocaleString("pt-BR")}
        label="Profissionais"
        color="purple"
      />

      <StatCard
        icon={<Calendar className="h-6 w-6 text-blue-500" />}
        value={totalEvents.toLocaleString("pt-BR")}
        label="Eventos"
        color="blue"
      />

      <StatCard
        icon={<MapPin className="h-6 w-6 text-emerald-500" />}
        value={uniqueLocations.toLocaleString("pt-BR")}
        label="Locais"
        color="emerald"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: "rose" | "purple" | "blue" | "emerald";
}

function StatCard({ icon, value, label, color }: StatCardProps) {
  const colorClasses = {
    rose: "bg-rose-50 border-rose-100",
    purple: "bg-purple-50 border-purple-100",
    blue: "bg-blue-50 border-blue-100",
    emerald: "bg-emerald-50 border-emerald-100",
  };

  return (
    <Card className={`border ${colorClasses[color]}`}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-black">
          {label}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-black">{value}</p>
      </CardContent>
    </Card>
  );
}
