/* @refresh reload */
import { render } from "solid-js/web";

import "@unocss/reset/tailwind-compat.css";
import "uno.css";

import App from "./App";

const root = document.getElementById("root");

// biome-ignore lint: element will always be present in html
render(() => <App />, root!);
