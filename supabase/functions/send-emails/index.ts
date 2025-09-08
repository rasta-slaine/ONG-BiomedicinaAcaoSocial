// supabase/functions/send-emails/index.ts
// VERSÃO AJUSTADA PARA QUEM NÃO TEM DOMÍNIO PRÓPRIO

// para salvar a atualização do código, use:
// npx supabase functions deploy send-emails --no-verify-jwtnpx supabase functions deploy send-emails --no-verify-jwt

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const supabaseUrl = Deno.env.get("SUPABASE_URL");

const resend = new Resend(RESEND_API_KEY);
const NGO_EMAIL = "institutodesaudemultiprofissio@gmail.com"; // <-- MUITO IMPORTANTE: Troque pelo e-mail real da sua ONG (pode ser Gmail, Outlook, etc.)

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Permite qualquer origem (para desenvolvimento)
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { userData } = await req.json();

    // Constrói os links para download dos arquivos
    const documentoUrl = `${supabaseUrl}/storage/v1/object/public/arquivos-premio/${userData.caminho_documento_pesquisa}`;
    const curriculoUrl = `${supabaseUrl}/storage/v1/object/public/arquivos-premio/${userData.caminho_curriculo}`;
    const declaracaoUrl = `${supabaseUrl}/storage/v1/object/public/arquivos-premio/${userData.caminho_declaracao}`;

    // Prepara os e-mails
    const emailToUser = {
      // --- AJUSTE PRINCIPAL AQUI ---
      from: "onboarding@resend.dev", // Use o endereço padrão do Resend
      to: [userData.email],
      subject: "✅ Inscrição para o Prêmio Dr. Dácio Campos Recebida!",
      html: `
        <h1>Olá, ${userData.nome_completo}!</h1>
        <p>Sua inscrição para o Prêmio Dr. Dácio Campos foi recebida com sucesso.</p>
        <p><strong>Importante:</strong> Esta é uma confirmação automática. Por favor, não responda a este e-mail.</p>
        <p>Nossa equipe entrará em contato em breve. Boa sorte!</p>
        <p><em>Atenciosamente,<br>Equipe da ONG.</em></p>
      `,
    };

    const emailToNgo = {
      // --- E AQUI TAMBÉM ---
      from: "onboarding@resend.dev",
      to: [NGO_EMAIL],
      subject: ` Premio Dr Dacio Campos Nova Inscrição Recebida: ${userData.nome_completo}`,
      html: `
        <h1>Nova inscrição recebida pelo site!</h1>
        <h2>Dados do Participante:</h2>
        <ul>
          <li><strong>Nome:</strong> ${userData.nome_completo}</li>
          <li><strong>Email:</strong> ${userData.email}</li>
          <li><strong>Telefone:</strong> ${userData.telefone}</li>
        </ul>
        <h2>Dados da Pesquisa:</h2>
        <ul>
          <li><strong>Título:</strong> ${userData.titulo_pesquisa}</li>
          <li><strong>Categoria:</strong> ${userData.categoria_pesquisa}</li>
        </ul>
        <h2>Arquivos Anexados (links para download):</h2>
        <ul>
          <li><a href="${documentoUrl}" target="_blank">Documento da Pesquisa</a></li>
          <li><a href="${curriculoUrl}" target="_blank">Currículo</a></li>
          <li><a href="${declaracaoUrl}" target="_blank">Declaração de Originalidade</a></li>
        </ul>
      `,
    };

    // Envia os e-mails
    await Promise.all([
      resend.emails.send(emailToUser),
      resend.emails.send(emailToNgo),
    ]);

    // Retorna a resposta de sucesso COM os cabeçalhos CORS
    return new Response(JSON.stringify({ message: "E-mails enviados!" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    // Retorna a resposta de erro COM os cabeçalhos CORS
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
