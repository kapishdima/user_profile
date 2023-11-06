import { defineConfig } from "vite";

import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            app: path.resolve(__dirname, "resources/js/admin/app"),
            shared: path.resolve(__dirname, "resources/js/admin/shared"),
            modules: path.resolve(__dirname, "resources/js/admin/modules"),
            pages: path.resolve(__dirname, "resources/js/admin/pages"),
            validation: path.resolve(
                __dirname,
                "resources/js/admin/validation"
            ),
        },
    },

    plugins: [
        react(),
        laravel({
            input: ["resources/js/admin/index.tsx"],
            buildDirectory: "build/admin/",
        }),
    ],
});
