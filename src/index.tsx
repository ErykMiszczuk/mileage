/* @refresh reload */
import { render } from "solid-js/web";

import "@unocss/reset/tailwind-compat.css";
import "uno.css";
import "./App.css";

import App from "./App.tsx";

const root = document.getElementById("root");

render(() => <App />, root!);
