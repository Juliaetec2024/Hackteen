import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Simulacao from "./pages/Simulacao";
import Importancia from "./pages/Importancia";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      {/* Container principal com gradiente escuro */}
      <div className="bg-gradient-to-br from-gray-900 via-[#0b1120] to-gray-900 min-h-screen text-white">
        
        {/* Header fixo em todas as páginas */}
        <Header />
        
        {/* Container do conteúdo principal */}
        <main className="container mx-auto px-4 py-6">
          <Routes>
            {/* Rota para a página inicial */}
            <Route 
              path="/" 
              element={<Home />} 
            />
            
            {/* Rota para simulação (sem header duplicado) */}
            <Route 
              path="/simulacao" 
              element={<Simulacao />} 
            />
            
            {/* Rota para importância social */}
            <Route 
              path="/importancia" 
              element={<Importancia />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}