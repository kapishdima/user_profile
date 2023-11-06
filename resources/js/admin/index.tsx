import React from "react";
import App from "./app/index";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");

const root = createRoot(container);
root.render(<App tab="home" />);
