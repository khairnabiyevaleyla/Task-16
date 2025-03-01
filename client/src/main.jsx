import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "remixicon/fonts/remixicon.css";
import { CartProvider } from "@/providers/CartContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const ShowDevToolsInDevelopment = import.meta.env.MODE === "development" && (
  <ReactQueryDevtools initialIsOpen={false} />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <App />
      </CartProvider>
      {ShowDevToolsInDevelopment}
    </QueryClientProvider>
  </StrictMode>
);
