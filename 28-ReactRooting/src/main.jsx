import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from "./components/Context/FavoritesContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
     <App />
    </FavoritesProvider>
  </BrowserRouter>
);
