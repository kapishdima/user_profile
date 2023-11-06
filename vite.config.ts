import { defineConfig } from "vite";

import laravel from "laravel-vite-plugin";

export default defineConfig({
    assetsInclude: ["**/*.gltf", "**/*.glb"],

    resolve: {
        alias: {
            styles: "resources/sass",
        },
    },
    plugins: [
        laravel({
            input: [
                "resources/js/front/app.js",
                "resources/js/front/preloader/index.js",
                "resources/sass/app.scss",
            ],
            refresh: true,
            buildDirectory: "build/front",
        }),
    ],
});
