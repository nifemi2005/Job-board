import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SavedJobsProvider } from "./Context/SavedJobsContext.jsx";

createRoot(document.getElementById("root")).render(
  <SavedJobsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SavedJobsProvider>,
);
