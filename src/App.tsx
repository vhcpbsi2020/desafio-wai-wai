import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductList from "./pages/ProductList/index.tsx";
import ProductDetail from "./pages/ProductDetail.tsx/index.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                Loja de Produtos
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-blue-600">
                      Produtos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>

          <footer className="bg-white shadow-inner py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                &copy; {new Date().getFullYear()} Loja de Produtos. Todos os
                direitos reservados.
              </p>
            </div>
          </footer>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
