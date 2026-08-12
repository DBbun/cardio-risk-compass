import React from "react";
import { createRoot } from "react-dom/client";
import { FairnessWorkbench } from "../app/fairness-workbench";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><FairnessWorkbench /></React.StrictMode>,
);
