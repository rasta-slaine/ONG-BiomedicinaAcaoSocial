// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://dgztzxwrwuyjwqjulblp.supabase.co";

//const supabaseAnonKey =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnenR6eHdyd3V5andxanVsYmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NTc4NzEsImV4cCI6MjA2ODUzMzg3MX0.ZGL4_OjTqKZ92_IDdl8kMQUFxAZlxIKkyX1pXtmVR3M";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Variáveis de ambiente do Supabase (URL e Anon Key) não foram encontradas."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
