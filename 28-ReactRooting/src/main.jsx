import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from "./components/Context/FavoritesContext/index.jsx";
import { BasketProvider } from "./components/Context/BasketContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </FavoritesProvider>
  </BrowserRouter>
);
