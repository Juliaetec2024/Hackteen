import React, { useState } from "react";
import {
  FaUser,
  FaWeight,
  FaRulerVertical,
  FaHeartbeat,
  FaNotesMedical,
  FaAllergies,
  FaHistory,
  FaSyringe,
  FaBirthdayCake,
  FaTint,
  FaRunning,
  FaSmoking,
  FaWineGlassAlt
} from "react-icons/fa";

const InputField = React.memo(({ label, name, icon, value, onChange, type = "text", placeholder, required = false, ...props }) => (
  <div className="form-group">
    <label className="flex items-center gap-2 text-gray-300 mb-2">
      {icon}
      {label}:
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
      required={required}
      {...props}
    />
  </div>
));

const SelectField = React.memo(({ label, name, icon, value, onChange, children, required = false }) => (
  <div className="form-group">
    <label className="flex items-center gap-2 text-gray-300 mb-2">
      {icon}
      {label}:
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
      required={required}
    >
      {children}
    </select>
  </div>
));

const TextareaField = React.memo(({ label, name, icon, value, onChange, required = false }) => (
  <div className="form-group">
    <label className="flex items-center gap-2 text-gray-300 mb-2">
      {icon}
      {label}:
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      className="w-full bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
      required={required}
    />
  </div>
));

const CheckboxField = React.memo(({ label, name, icon, checked, onChange }) => (
  <label className="checkbox-label flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 text-primary rounded-full focus:ring-primary border-gray-600"
    />
    {icon}
    <span>{label}</span>
  </label>
));

const SectionHeader = React.memo(({ icon, title }) => (
  <h2 className="section-title text-xl font-semibold mb-4 flex items-center gap-3">
    {icon}
    {title}
  </h2>
));

export default function Simulacao() {
  // =============== ESTADO =============== 
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    genero: "",
    peso: "",
    altura: "",
    tipoSanguineo: "",
    alergias: "",
    medicamentos: "",
    historico: "",
    sintomas: "",
    frequenciaCardiaca: "",
    pressaoArterial: "",
    glicemia: "",
    diabetes: false,
    hipertensao: false,
    cardiopatia: false,
    fuma: false,
    bebe: false,
    atividadeFisica: ""
  });

  // =============== HANDLERS OTIMIZADOS ===============
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formatField(name, value)
    }));
  };

  const formatField = (name, value) => {
    const formatters = {
      peso: v => v.replace(/[^0-9.]/g, ''),
      altura: v => v.replace(/[^0-9]/g, ''),
      glicemia: v => v.replace(/[^0-9]/g, '').slice(0, 3),
      pressaoArterial: v => formatBloodPressure(v),
      frequenciaCardiaca: v => v.replace(/[^0-9]/g, '').slice(0, 3)
    };
    return formatters[name] ? formatters[name](value) : value;
  };

  const formatBloodPressure = (value) => {
    let cleaned = value.replace(/[^\d/]/g, '');
    const parts = cleaned.split('/');
    
    if (parts.length > 2) cleaned = parts[0] + '/' + parts.slice(1).join('');
    if (parts[0]?.length > 3) cleaned = parts[0].slice(0, 3) + (parts[1] ? '/' + parts[1] : '');
    if (parts[1]?.length > 3) cleaned = parts[0] + '/' + parts[1].slice(0, 3);
    
    return cleaned;
  };

  // =============== RENDER ===============
  return (
    <div className="page-container bg-dark text-light">
      {/* Hero Section */}
      <div className="impact-container">
        <div className="impact-hero">
          <h1 className="impact-title">
            <span className="text-gradient"> Anamnese</span> - Dados Clínicos do Paciente
          </h1>
          <p className="impact-subtitle">
            Preencha com informações detalhadas para uma simulação precisa.
          </p>
        </div>

        <form className="medical-form bg-card-bg backdrop-blur-md rounded-xl p-6 border border-border-color shadow-xl">
          {/* Seção 1: Informações Pessoais */}
          <div className="form-section mb-8 p-5 bg-gray-900 bg-opacity-30 rounded-lg">
            <SectionHeader 
              icon={<FaUser className="text-primary" />} 
              title="Informações Pessoais" 
            />
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <InputField 
                label="Nome Completo" 
                name="nome" 
                icon={<FaUser className="text-primary" />}
                value={formData.nome}
                onChange={handleChange}
                required 
              />
              
              <InputField 
                label="Data de Nascimento" 
                name="dataNascimento" 
                type="date" 
                icon={<FaBirthdayCake className="text-primary" />}
                value={formData.dataNascimento}
                onChange={handleChange}
                required 
              />
              
              <SelectField 
                label="Gênero" 
                name="genero" 
                icon={<FaUser className="text-primary" />}
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outro</option>
              </SelectField>

              <InputField 
                label="Peso (kg)" 
                name="peso" 
                icon={<FaWeight className="text-primary" />}
                value={formData.peso}
                onChange={handleChange}
                placeholder="Ex: 68.5"
                required
                inputMode="decimal"
              />

              <InputField 
                label="Altura (cm)" 
                name="altura" 
                icon={<FaRulerVertical className="text-primary" />}
                value={formData.altura}
                onChange={handleChange}
                placeholder="Ex: 175"
                required
                inputMode="numeric"
              />

              <SelectField 
                label="Tipo Sanguíneo" 
                name="tipoSanguineo" 
                icon={<FaTint className="text-primary" />}
                value={formData.tipoSanguineo}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="Não tenho essa informação.">Não tenho essa informação.</option>
              </SelectField>
            </div>
          </div>

          {/* Seção 2: Histórico Médico */}
          <div className="form-section mb-8 p-5 bg-gray-900 bg-opacity-30 rounded-lg">
            <SectionHeader 
              icon={<FaHistory className="text-primary" />} 
              title="Histórico Médico" 
            />
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextareaField 
                label="Alergias Conhecidas" 
                name="alergias" 
                icon={<FaAllergies className="text-primary" />}
                value={formData.alergias}
                onChange={handleChange}
              />
              
              <TextareaField 
                label="Medicamentos em Uso" 
                name="medicamentos" 
                icon={<FaSyringe className="text-primary" />}
                value={formData.medicamentos}
                onChange={handleChange}
                required
              />

              <TextareaField 
                label="Histórico Familiar" 
                name="historico" 
                icon={<FaHistory className="text-primary" />}
                value={formData.historico}
                onChange={handleChange}
              />

              <TextareaField 
                label="Sintomas Atuais" 
                name="sintomas" 
                icon={<FaNotesMedical className="text-primary" />}
                value={formData.sintomas}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Seção 3: Dados Clínicos */}
          <div className="form-section mb-8 p-5 bg-gray-900 bg-opacity-30 rounded-lg">
            <SectionHeader 
              icon={<FaHeartbeat className="text-primary" />} 
              title="Dados Clínicos" 
            />
            
            <div className="form-grid grid grid-cols-1 md:grid-cols-3 gap-5">
              <InputField 
                label="Frequência Cardíaca (bpm)" 
                name="frequenciaCardiaca" 
                icon={<FaHeartbeat className="text-primary" />}
                value={formData.frequenciaCardiaca}
                onChange={handleChange}
                placeholder="Ex: 72"
                inputMode="numeric"
              />

              <InputField 
                label="Pressão Arterial (mmHg)" 
                name="pressaoArterial" 
                icon={<FaHeartbeat className="text-primary" />}
                value={formData.pressaoArterial}
                onChange={handleChange}
                placeholder="Ex: 120/80"
                inputMode="numeric"
              />

              <InputField 
                label="Glicemia (mg/dL)" 
                name="glicemia" 
                icon={<FaHeartbeat className="text-primary" />}
                value={formData.glicemia}
                onChange={handleChange}
                placeholder="Ex: 90"
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Seção 4: Hábitos e Condições */}
          <div className="form-section mb-8 p-5 bg-gray-900 bg-opacity-30 rounded-lg">
            <SectionHeader 
              icon={<FaRunning className="text-primary" />} 
              title="Hábitos e Condições" 
            />
            
            <div className="checkbox-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <CheckboxField 
                label="Diabetes" 
                name="diabetes" 
                icon={<FaSyringe className="text-primary" />}
                checked={formData.diabetes}
                onChange={handleChange}
              />
              
              <CheckboxField 
                label="Hipertensão" 
                name="hipertensao" 
                icon={<FaHeartbeat className="text-primary" />}
                checked={formData.hipertensao}
                onChange={handleChange}
              />
              
              <CheckboxField 
                label="Cardiopatia" 
                name="cardiopatia" 
                icon={<FaHeartbeat className="text-primary" />}
                checked={formData.cardiopatia}
                onChange={handleChange}
              />

              <CheckboxField 
                label="Fumante" 
                name="fuma" 
                icon={<FaSmoking className="text-primary" />}
                checked={formData.fuma}
                onChange={handleChange}
              />

              <CheckboxField 
                label="Consume álcool" 
                name="bebe" 
                icon={<FaWineGlassAlt className="text-primary" />}
                checked={formData.bebe}
                onChange={handleChange}
              />
            </div>

            <SelectField 
              label="Nível de Atividade Física" 
              name="atividadeFisica" 
              icon={<FaRunning className="text-primary" />}
              value={formData.atividadeFisica}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="sedentario">Sedentário</option>
              <option value="leve">Leve (1-2x/semana)</option>
              <option value="moderado">Moderado (3-5x/semana)</option>
              <option value="intenso">Intenso (6-7x/semana)</option>
            </SelectField>
          </div>

          <button type="button" className="submit-button">
            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" />
            </svg>
            Gerar Simulação
          </button>
        </form>
      </div>

      {/* Seção Digital Twin */}
      <div className="digital-twin-section">
        <div className="unified-card-grid">
          <div className="unified-card placeholder-wide">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#67e8f9" strokeWidth="2" />
                <path d="M3 7L12 12L21 7" stroke="#67e8f9" strokeWidth="2" />
                <path d="M12 12V22" stroke="#67e8f9" strokeWidth="2" />
              </svg>
            </div>
            <h3>EM BREVE: VISUALIZAÇÃO DO DIGITAL TWIN!</h3>
            <p>Interaja com o modelo 3D para análise detalhada dos sistemas corporais.</p>
            <div className="placeholder-loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
}