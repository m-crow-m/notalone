
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("main.tsx loaded");

const debugEl = document.getElementById("debug");
if (debugEl) debugEl.innerHTML = "React loading...";

const rootElement = document.getElementById("root");
console.log("root element:", rootElement);

if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
    console.log("React app rendered");
    if (debugEl) debugEl.remove();
  } catch (error) {
    console.error("Error rendering app:", error);
    if (debugEl) debugEl.innerHTML = "Error: " + error;
  }
} else {
  console.error("Root element not found!");
  if (debugEl) debugEl.innerHTML = "Root element not found!";
}  