import React from "react";
import { 
  FaAccessibleIcon, 
  FaClinicMedical, 
  FaUserMd, 
  FaGlobeAmericas 
} from "react-icons/fa";

/**
 * Componente Importancia - Página sobre o impacto social
 * Mostra os benefícios sociais da plataforma em cards organizados
 */
export default function Importancia() {
  const impactCards = [
    {
      icon: <FaAccessibleIcon className="impact-icon" />,
      title: "Acesso Democrático",
      content: {
        description: "Levamos orientação médica de qualidade para regiões em que consultas presenciais são raras:",
        items: [
          "Visualização 3D interativa do próprio corpo",
          "Explicações em linguagem simples e acessível",
          "Alertas preventivos personalizados",
          "Integração com instituições de medicina"
        ]
      }
    },
    {
      icon: <FaUserMd className="impact-icon" />,
      title: "Educação em Saúde",
      content: {
        description: "Transformamos conceitos médicos complexos em experiências visuais intuitivas:",
        items: [
          "Simulações da atuação de medicamentos no organismo",
          "Efeitos visuais de condições crônicas",
          "Orientações médicas personalizadas",
          "Alertas sobre fatores de risco individuais"
        ]
      }
    },
    {
      icon: <FaClinicMedical className="impact-icon" />,
      title: "Atendimento Eficiente",
      content: {
        description: "Potencializamos o trabalho de profissionais da saúde com:",
        items: [
          "Redução de até 60% no tempo de diagnóstico",
          "Simulações precisas de tratamentos",
          "Banco de dados anonimizado para pesquisas",
          "Integração com prontuários eletrônicos"
        ]
      }
    },
    {
      icon: <FaGlobeAmericas className="impact-icon" />,
      title: "Impacto Global",
      wide: true,
      content: {
        description: "Nossa tecnologia cria oportunidades em escala mundial:",
        items: [
          "Modelo replicável para países em desenvolvimento",
          "Plataforma multilíngue",
          "Adaptável a diferentes realidades culturais"
        ]
      }
    }
  ];

  return (
    <div className="page-container">
      <div className="impact-container">
        {/* Hero Section */}
        <ImpactHero 
          title="BridgeToHealth - Revolucionando o Acesso à Saúde"
          subtitle="Tecnologia de ponta para democratizar informações médicas e transformar vidas."
        />

        {/* Introdução */}
        <IntroSection />

        {/* Cards de Impacto */}
        <div className="impact-grid">
          {impactCards.map((card, index) => (
            <ImpactCard 
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              wide={card.wide}
            />
          ))}
        </div>

        {/* Seção de Encerramento */}
        <ClosingSection />
      </div>
    </div>
  );
}

// Subcomponentes -----------------------------------------------------------------

const ImpactHero = ({ title, subtitle }) => (
  <div className="impact-hero">
    <h1 className="impact-title">
      <span className="text-gradient">Bridge</span>{title.split("Bridge")[1]}
    </h1>
    <p className="impact-subtitle">{subtitle}</p>
  </div>
);

const IntroSection = () => (
  <div className="intro-section">
    <p>
      Em um país onde milhões têm acesso limitado a serviços de saúde básicos,
      o BridgeToHealth surge como uma ponte entre a medicina de excelência e as
      comunidades carentes. Nosso projeto utiliza a tecnologia <strong>Digital Twin</strong> para
      criar representações virtuais precisas do organismo humano, permitindo que
      qualquer pessoa, em qualquer lugar, entenda sua saúde de maneira simplificada
      e acessível. Além disso, a tecnologia será integrada diretamente aos médicos,
      garantindo um acompanhamento remoto e personalizado, promovendo um acesso mais
      eficaz e humanizado a um sistema de saúde de qualidade. Empoderando os pacientes
      e fortalecendo nossos médicos!
    </p>
  </div>
);

const ImpactCard = ({ icon, title, content, wide = false }) => (
  <div className={`impact-card ${wide ? "wide-card" : ""}`}>
    <div className="impact-card-header">
      {icon}
      <h2>{title}</h2>
    </div>
    <div className="impact-card-content">
      <p>{content.description}</p>
      <ul className="benefits-list">
        {content.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ClosingSection = () => (
  <div className="impact-hero secondary-hero">
    <div className="closing-content">
      <p>
        O BridgeToHealth não é apenas uma plataforma - é um movimento que redefine o conceito de cuidado
        médico. Ao capacitar indivíduos com conhecimento sobre seu próprio corpo, estamos
        construindo uma sociedade onde:
      </p>

      <div className="highlight-box">
        <p>
          "A saúde deixa de ser privilégio de poucos e se transforma em direito acessível a todos,
          independentemente de localização geográfica ou condição socioeconômica."
        </p>
      </div>

      <p>
        Nosso projeto tem como objetivo mesclar ciência, tecnologia e acessividade. Essa é apenas a primeira etapa
        de uma revolução que vai transformar o sistema de saúde como conhecemos.
      </p>
    </div>
  </div>
);