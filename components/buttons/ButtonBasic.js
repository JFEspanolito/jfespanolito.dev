// Botón reutilizable básico: componente flexible para cualquier acción.
// Props:
//   - title: Texto del botón (default: "Basic Button")
//   - onClick: Función callback al hacer clic (default: sin acción)
//   - className: Clases Tailwind/DaisyUI (default: "btn-primary")
// Ejemplo:
//  Botón principal (usa el estilo por defecto 'btn-primary')
//   <ButtonBasic title="Aceptar" onClick={handleAceptar} />
// Botón secundario (le pasamos una clase diferente)
// <ButtonBasic 
//  title="Regresar" 
//  onClick={handleRegresar} 
//  className="btn-outline" 
//  />

"use client";

const ButtonBasic = ({ 
  title = "Basic Button", 
  onClick = () => {}, 
  className = "btn-primary" 
}) => {
  return (
    <button 
      className={`btn ${className}`} 
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonBasic;