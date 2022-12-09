import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Content from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Content />
  </StrictMode>
);
