// ARQUIVO COMPLETO E CORRIGIDO

import { useState } from "react";
import { Link } from "react-router-dom";

// Importe o cliente Supabase
import { supabase } from "@/lib/supabaseClient";

// Importe apenas os componentes que você realmente usa
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Info,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Tipo para o estado do formulário (sem alterações)
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  // --- TODA A SUA LÓGICA DE HANDLERS E SUBMIT CONTINUA IGUAL E FUNCIONAL ---
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
      setError(
        "Todos os documentos são obrigatórios. Por favor, anexe os arquivos necessários."
      );
      return;
    }
    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      setError(
        "Você precisa aceitar os termos e a política de privacidade para continuar."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const uploadFile = async (file: File, folder: string) => {
        const filePath = `${folder}/${Date.now()}_${file.name.replace(
          /\s/g,
          "_"
        )}`;
        const { data, error: uploadError } = await supabase.storage
          .from("arquivos-premio")
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }
        return data.path;
      };

      const [documentPath, curriculumPath, declarationPath] = await Promise.all(
        [
          uploadFile(formData.researchDocument, "pesquisas"),
          uploadFile(formData.curriculum, "curriculos"),
          uploadFile(formData.declaration, "declaracoes"),
        ]
      );

      const { data: insertData, error: insertError } = await supabase
        .from("inscricoes")
        .insert({
          nome_completo: formData.name,
          email: formData.email,
          telefone: formData.phone,
          instituicao: formData.institution,
          cargo_funcao: formData.position,
          titulo_pesquisa: formData.researchTitle,
          categoria_pesquisa: formData.researchCategory,
          coautores: formData.coAuthors,
          resumo_pesquisa: formData.abstract,
          caminho_documento_pesquisa: documentPath,
          caminho_curriculo: curriculumPath,
          caminho_declaracao: declarationPath,
        })
        .select()
        .single();

      if (insertError) {
        throw insertError;
      }

      if (insertData) {
        await supabase.functions.invoke("send-emails", {
          body: { userData: insertData },
        });
      }

      setFormSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error: unknown) {
      let errorMessage = "Erro desconhecido.";
      if (error && typeof error === "object" && "message" in error) {
        errorMessage = (error as { message: string }).message;
      }
      setError(
        `Falha no envio. O servidor retornou um erro: "${errorMessage}".`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* --- SEÇÃO DO CABEÇALHO --- */}
      <section>
        <div className=" bg-[#00B55C] py-12 ">
          <div className="mx-auto mt-16 max-w-3xl text-center px-4">
            <h1 className="text-4xl text-white font-extrabold leading-tight tracking-tight md:text-5xl drop-shadow-md">
              Inscrição para o Prêmio Dr. Dácio Campos
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Submeta sua pesquisa científica sobre diabetes e concorra.
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="-z-10 relative mt-[-70px]"
        >
          <path
            fill="#00B55C"
            d="M0,192L60,160C120,128,240,64,360,85.3C480,107,600,213,720,261.3C840,309,960,299,1080,261.3C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* --- SEÇÃO DE CONTEÚDO PRINCIPAL --- */}
      <section className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg -mt-16 mb-12">
        {formSubmitted ? (
          // CARD DE SUCESSO
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
                  className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </a>
              </CardFooter>
            </Card>
          </div>
        ) : (
          // FORMULÁRIO DE INSCRIÇÃO
          <>
            <div className="text-center w-full mb-8">
              <h2 className="text-3xl font-bold">Participe Agora!</h2>
              <p className="text-lg text-gray-600 mt-2">
                Preencha todos os campos para se inscrever no prêmio.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              {/* --- Seus campos de formulário estilizados --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="institution"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Instituição
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="position"
                  className="mb-1.5 font-semibold text-gray-700"
                >
                  Cargo/Função
                </label>
                <input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div className="my-6 border-t border-gray-200"></div>

              <div className="space-y-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="researchTitle"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Título da Pesquisa
                  </label>
                  <input
                    id="researchTitle"
                    name="researchTitle"
                    value={formData.researchTitle}
                    onChange={handleInputChange}
                    required
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="researchCategory"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Categoria
                  </label>
                  <select
                    id="researchCategory"
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
                  <label
                    htmlFor="coAuthors"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Coautores (se houver)
                  </label>
                  <input
                    id="coAuthors"
                    name="coAuthors"
                    value={formData.coAuthors}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="abstract"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Resumo da Pesquisa
                  </label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="p-2 border border-gray-300 rounded-md hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="my-6 border-t border-gray-200"></div>

              <div className="space-y-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="researchDocument"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Documento da Pesquisa (PDF, máx. 10MB)
                  </label>
                  <input
                    id="researchDocument"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "researchDocument")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="curriculum"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Currículo (PDF/DOCX, máx. 5MB)
                  </label>
                  <input
                    id="curriculum"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => handleFileChange(e, "curriculum")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="declaration"
                    className="mb-1.5 font-semibold text-gray-700"
                  >
                    Declaração de Originalidade (PDF, máx. 2MB)
                  </label>
                  <input
                    id="declaration"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "declaration")}
                    required
                    className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                </div>
              </div>

              <div className="my-6 border-t border-gray-200"></div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    id="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      handleCheckboxChange("termsAccepted", e.target.checked)
                    }
                    required
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 mt-0.5"
                  />
                  <label
                    htmlFor="termsAccepted"
                    className="text-sm text-gray-700"
                  >
                    Declaro que li e aceito os{" "}
                    <Link to="/termos" className="text-green-600 underline">
                      termos e condições
                    </Link>{" "}
                    do prêmio. <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    id="dataProcessingAccepted"
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
                  <label
                    htmlFor="dataProcessingAccepted"
                    className="text-sm text-gray-700"
                  >
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

export default FormularioInscricao;
