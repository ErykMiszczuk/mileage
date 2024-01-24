import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

import { presetWind } from "unocss";
import { presetDaisy } from "./src/preset/presetDaisy";

export default defineConfig({
    plugins: [
        UnoCSS({
            presets: [
                presetWind(),
                presetDaisy({
                    themes: ["night"],
                }),
            ],
        }),
        solid(),
    ],
});
