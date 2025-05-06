import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Componente Header - Barra de navegação principal
 * Responsável por:
 * - Exibir o menu de navegação
 * - Gerenciar o estado do menu mobile
 * - Destacar a rota ativa
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: "/", label: "Início" },
    { path: "/simulacao", label: "Simulação" },
    { path: "/importancia", label: "Importância Social" }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <h3>
          <span className="text-gradient">Bridge</span>ToHealth
        </h3>

        {/* Menu Hamburguer (Mobile) */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`} />
        </button>

        {/* Navegação */}
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}