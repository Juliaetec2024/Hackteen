import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente Home - Página inicial
 * Exibe cards de funcionalidades principais
 */
export default function Home() {
  const featureCards = [
    {
      icon: "🧬",
      title: "SIMULAÇÃO",
      description: "Visualize as reações de seu corpo a medicamentos em tempo real.",
      link: "/simulacao",
      buttonClass: "primary"
    },
    {
      icon: "🌎",
      title: "IMPORTÂNCIA SOCIAL",
      description: "Reduza tempo e custos com tratamentos frequentes.",
      link: "/importancia",
      buttonClass: "secondary"
    },
    {
      icon: "♿",
      title: "ACESSIBILIDADE",
      description: "Transformamos a relação entre pacientes e médicos com medicina digital mais humana e democrática."
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">
            <span className="gradient-text">Bridge</span>ToHealth
          </h1>
          <p className="subtitle">Tecnologia Digital Twin para uma Medicina Humana.</p>
          
          <div className="unified-card-grid">
            {featureCards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>

        <ComingSoonCard />
      </div>
    </div>
  );
}

/**
 * Componente FeatureCard - Card de funcionalidade
 */
const FeatureCard = ({ icon, title, description, link, buttonClass }) => (
  <div className="unified-card">
    <div className="card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    {link && (
      <Link to={link} className={`unified-card-button ${buttonClass}`}>
        Saiba Mais
      </Link>
    )}
  </div>
);

/**
 * Componente ComingSoonCard - Card de funcionalidade futura
 */
const ComingSoonCard = () => (
  <div className="placeholder-card">
    <div className="placeholder-content">
      <div className="card-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#67e8f9">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
      <h3>EM BREVE</h3>
      <p>Estamos preparando uma visualização 3D interativa do corpo humano, baseada em Digital Twin.</p>
      <div className="placeholder-loader"></div>
    </div>
  </div>
);