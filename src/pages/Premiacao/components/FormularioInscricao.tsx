import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  CheckCircle,
  Info,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  position: string;
  researchTitle: string;
  researchCategory: string;
  coAuthors: string;
  abstract: string;
  researchDocument: File | null;
  curriculum: File | null;
  declaration: File | null;
  termsAccepted: boolean;
  dataProcessingAccepted: boolean;
};

export function FormularioInscricao() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",
    researchTitle: "",
    researchCategory: "",
    coAuthors: "",
    abstract: "",
    researchDocument: null,
    curriculum: null,
    declaration: null,
    termsAccepted: false,
    dataProcessingAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormDataState
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [fieldName]: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.researchDocument ||
      !formData.curriculum ||
      !formData.declaration
    ) {
      setError("Todos os documentos são obrigatórios.");
      return;
    }
    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      setError("Você precisa aceitar os termos e a política de privacidade.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formPayload = new FormData();
      formPayload.append("documento_pesquisa", formData.researchDocument!);
      formPayload.append("curriculo", formData.curriculum!);
      formPayload.append("declaracao_orientador", formData.declaration!);
      formPayload.append("nome_completo", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("telefone", formData.phone);
      formPayload.append("instituicao", formData.institution);
      formPayload.append("cargo_funcao", formData.position);
      formPayload.append("titulo_pesquisa", formData.researchTitle);
      formPayload.append("categoria_pesquisa", formData.researchCategory);
      formPayload.append("coautores", formData.coAuthors);
      formPayload.append("resumo_pesquisa", formData.abstract);

      const response = await fetch(
        "https://institudo-de-saude-multiprossional.onrender.com/submit",
        { method: "POST", body: formPayload }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Erro ao enviar formulário");
      }

      setFormSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err: any) {
      console.error(err);
      setError("Erro ao enviar o formulário. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <section>
        <div className="bg-[#00B55C] py-12">
          <div className="mx-auto mt-16 max-w-3xl text-center px-4">
            <h1 className="text-4xl text-white font-extrabold leading-tight tracking-tight md:text-5xl drop-shadow-md">
              Inscrição para o Prêmio Dr. Dácio Campos
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Submeta sua pesquisa científica sobre oncologia e concorra.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg  mb-12">
        {formSubmitted ? (
          <div className="w-full text-center py-8 sm:py-12">
            <Card className="border-none shadow-none">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-3xl">Inscrição Enviada!</CardTitle>
                <CardDescription className="text-base">
                  Obrigado por participar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Sua inscrição foi recebida e um e-mail de confirmação foi
                  enviado.
                </p>
                <Alert className="mt-6 text-left">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Próximos Passos</AlertTitle>
                  <AlertDescription>
                    Acompanhe seu e-mail para atualizações. O resultado da
                    primeira fase será divulgado em outubro.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter>
                <a
                  href="/dr-dacio-campos"
                  className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </a>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <>
            <div className="text-center w-full mb-8">
              <h2 className="text-3xl font-bold">Participe Agora!</h2>
              <p className="text-lg text-gray-600 mt-2">
                Preencha todos os campos para se inscrever no prêmio.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              {/* Campos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Nome Completo
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Instituição
                  </label>
                  <input
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Cargo/Função */}
              <div className="flex flex-col">
                <label className="mb-1.5 font-semibold text-gray-700">
                  Cargo/Função
                </label>
                <input
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Pesquisa */}
              <div className="my-6 border-t border-gray-200"></div>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Título da Pesquisa
                  </label>
                  <input
                    name="researchTitle"
                    value={formData.researchTitle}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Categoria
                  </label>
                  <select
                    name="researchCategory"
                    value={formData.researchCategory}
                    onChange={(e) =>
                      handleSelectChange("researchCategory", e.target.value)
                    }
                    required
                    className="p-2 border border-gray-300 rounded-md bg-white hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  >
                    <option value="" disabled>
                      Selecione uma categoria
                    </option>
                    <option value="basic">Pesquisa Básica em Diabetes</option>
                    <option value="innovation">
                      Inovação em Diagnóstico e Tratamento
                    </option>
                    <option value="epidemiology">
                      Estudos Epidemiológicos e Saúde Pública
                    </option>
                    <option value="education">
                      Educação e Qualidade de Vida
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Coautores (se houver)
                  </label>
                  <input
                    name="coAuthors"
                    value={formData.coAuthors}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Resumo da Pesquisa
                  </label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Arquivos */}
              <div className="my-6 border-t border-gray-200"></div>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Documento da Pesquisa (PDF)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "researchDocument")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Currículo (PDF/DOCX)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => handleFileChange(e, "curriculum")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-semibold text-gray-700">
                    Declaração de Originalidade (PDF)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "declaration")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
              </div>

              {/* Termos */}
              <div className="my-6 border-t border-gray-200"></div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      handleCheckboxChange("termsAccepted", e.target.checked)
                    }
                    required
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 mt-0.5"
                  />
                  <label className="text-sm text-gray-700">
                    Declaro que li e aceito os{" "}
                    <Link to="/termos" className="text-green-600 underline">
                      termos e condições
                    </Link>{" "}
                    do prêmio. <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.dataProcessingAccepted}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "dataProcessingAccepted",
                        e.target.checked
                      )
                    }
                    required
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 mt-0.5"
                  />
                  <label className="text-sm text-gray-700">
                    Autorizo o tratamento dos meus dados conforme a{" "}
                    <Link
                      to="/privacidade"
                      className="text-green-600 underline"
                    >
                      política de privacidade
                    </Link>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              {error && (
                <Alert variant="destructive" className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Erro na Inscrição</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando Inscrição...
                    </>
                  ) : (
                    "Enviar Inscrição"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
