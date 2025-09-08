import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // Importe seu cliente Supabase
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- DADOS DA PÁGINA ---
const contactInfo = [
  {
    icon: Mail,
    title: "E-mail Geral",
    value: "contato@suaong.org",
    href: "mailto:contato@suaong.org",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99999-8888",
    href: "tel:+5511999998888",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua da Ação Social, 123, São Paulo - SP",
    href: "#",
  },
];

// Adicione os links reais das suas redes sociais
const socialLinks = {
  Instagram: "https://instagram.com/suaong",
  Facebook: "https://facebook.com/suaong",
  LinkedIn: "https://linkedin.com/company/suaong",
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type FormStatus = { type: "idle" | "success" | "error"; message: string };

// --- COMPONENTE PRINCIPAL ---
export function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setFormStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Agradecemos o seu contato.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpa o formulário
    } catch (error: unknown) {
      setFormStatus({
        type: "error",
        message:
          "Houve um erro ao enviar a mensagem. Tente novamente mais tarde.",
      });
      console.error("Erro ao enviar formulário de contato:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Entre em Contato
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Sua dúvida, sugestão ou proposta de parceria é muito bem-vinda.
            Estamos aqui para ouvir e colaborar.
          </p>
        </div>

        {/* Layout Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coluna da Esquerda: Informações e Mapa */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Nossos Canais
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start group"
                  >
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <item.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-green-600 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Siga-nos
              </h2>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    <span className="sr-only">{name}</span>
                    {/* Você pode adicionar ícones de redes sociais aqui se quiser */}
                    <p className="font-semibold underline">{name}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Nossa Localização
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                {/* IMPORTANTE: Substitua este 'src' pelo link "Incorporar um mapa" do Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577513326!2d-46.656571584406!3d-23.5613393674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x2074d0880b1e3a5!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886562431!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Envie-nos uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Seu Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Seu E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Sua Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                      </>
                    )}
                  </Button>

                  {formStatus.type === "success" && (
                    <div className="text-sm flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="w-5 h-5 mr-2" />{" "}
                      {formStatus.message}
                    </div>
                  )}
                  {formStatus.type === "error" && (
                    <div className="text-sm flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                      <AlertTriangle className="w-5 h-5 mr-2" />{" "}
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
