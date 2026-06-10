import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: set `base` to "/<your-repo-name>/" for GitHub Pages project sites.
// If you deploy to a custom domain or a <username>.github.io root repo, use "/".
export default defineConfig({
  plugins: [react()],
  base: "/ZM_Masum/",
  // base: "/",
});
