// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     federation({
//       name: "component",
//       filename: "components.js",
//       exposes: {
//         "./Button": "./src/components/ui/button.tsx",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
//   build: {
//     modulePreload: false,
//     target: "esnext",
//     minify: false,
//     cssCodeSplit: false,
//   },
//   server: {
//     port: 5001,
//     strictPort: true,
//     cors: true,
//   },
//   preview: {
//     port: 5001,
//     strictPort: true,
//     cors: true,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "component",
      filename: "components.js",
      exposes: {
        "./Button": "./src/components/ui/button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS"],
      allowedHeaders: ["X-Requested-With", "Content-Type", "Accept"],
    },
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS"],
      allowedHeaders: ["X-Requested-With", "Content-Type", "Accept"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
