import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Allow this external host (e.g. localtunnel / loca.lt hostname)
    allowedHosts: ["https://honest-papers-jam.loca.lt"],
  },
});
