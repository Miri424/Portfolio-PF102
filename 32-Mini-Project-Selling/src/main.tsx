import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BasketProvider } from "./Context/Cart/index.tsx";
import { ProductDetailsProvider } from "./Context/Cart/details.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductDetailsProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
  </ProductDetailsProvider>
);
