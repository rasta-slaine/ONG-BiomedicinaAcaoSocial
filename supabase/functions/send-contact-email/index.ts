/*
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.2.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NGO_EMAIL = "institutodesaudemultiprofissio@gmail.com"; // <-- IMPORTANTE: Coloque o e-mail da sua ONG aqui

const resend = new Resend(RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // E-mail para a ONG
    const emailToNgo = {
      from: "onboarding@resend.dev",
      to: [NGO_EMAIL],
      subject: `Nova Mensagem de Contato:    ${subject}`,
      html: `
        <h1>Nova mensagem recebida pelo site:</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // E-mail de confirmação para o usuário
    const emailToUser = {
      from: "onboarding@resend.dev",
      to: [email],
      subject: "✅ Recebemos sua mensagem!",
      html: `
        <h1>Olá, ${name}!</h1>
        <p>Agradecemos por entrar em contato com a Ação Social. Recebemos sua mensagem e nossa equipe responderá o mais breve possível.</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p>Atenciosamente,<br>Equipe da Ação Social</p>
      `,
    };

    await Promise.all([
      resend.emails.send(emailToNgo),
      resend.emails.send(emailToUser),
    ]);

    return new Response(JSON.stringify({ message: "E-mails enviados!" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});


*/
