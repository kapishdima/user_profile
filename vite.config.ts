import { defineConfig } from "vite";

import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react-swc";

import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
            app: path.resolve(__dirname, "resources/js/app"),
            components: path.resolve(__dirname, "resources/js/components"),
            modules: path.resolve(__dirname, "resources/js/modules"),
            pages: path.resolve(__dirname, "resources/js/pages"),
        },
    },

    plugins: [
        react(),
        laravel({
            input: ["resources/js/index.tsx"],
            buildDirectory: "build/js/",
        }),
    ],
});
