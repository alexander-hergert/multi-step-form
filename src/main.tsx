import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/normalize.css";
import "./styles/index.css";
import { AppProvider } from "./context.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
