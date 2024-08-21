import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigation from "./src/core/natigation/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Navigation />
      </QueryClientProvider>
    </Provider>
  );
}
