import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Permite que o Vite aceite conexões externas
    port: 5173, // Mantém a mesma porta do Vite
    strictPort: true, // Garante que o Vite não mude de porta
    allowedHosts: ["f6a6-170-254-147-86.ngrok-free.app"], // Adiciona o domínio do ngrok
  },
});
