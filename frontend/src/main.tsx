import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { NotesProvider } from "./contexts/notescontext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NotesProvider>
      <App />
    </NotesProvider>
  </BrowserRouter>,
);
