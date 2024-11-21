import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: "collect",
      icon: "/assets/icons/collect.svg",
      title: "Collect",
      features: [
        "Aumento en Rentabilidad y Recuperación",
        "Reducción de Costos Operativos",
        "Control Total de la Estrategia de Cobranza",
      ],
    },
    {
      id: "origin",
      icon: "/assets/icons/origin.svg",
      title: "Origin",
      features: [
        "Reducción del riesgo",
        "Eficiencia operativa",
        "Tiempo de aprobación",
      ],
    },
    {
      id: "check",
      icon: "/assets/icons/check.svg",
      title: "Check",
      features: [
        "Conexión a bases gubernamentales",
        "Resultados precisos y exhaustivos",
        "Aumentando la retención de colaboradores en hasta un 36%",
      ],
    },
    {
      id: "legal",
      icon: "/assets/icons/legal.svg",
      title: "Legal",
      features: [
        "Expediente 100% digital",
        "Control detallado de honorarios",
        "Adaptación del proceso legal",
      ],
    },
    {
      id: "core",
      icon: "/assets/icons/core.svg",
      title: "Core",
      features: [
        "Recepción y registro de pagos en tiempo real",
        "Parametrización de plantillas para notificar a clientes y usuarios",
        "Esquema de maker/checker",
      ],
    },
    {
      id: "store",
      icon: "/assets/icons/store.svg",
      title: "Store",
      features: [
        "Obtenga reportes detallados sobre la información del comercio",
        "Administración con líneas de crédito",
        "Eficiencia operativa",
      ],
    },
  ];

  return (
    <div className="relative">
      <div
        className="absolute left-0 w-full bg-gradient-to-b from-[#E7E9EA] to-transparent z-[1] rounded-xl"
        style={{
          top: window.innerWidth >= 1024 ? "-50%" : "clamp(-200px, -30%, -100px)", // Más arriba en desktop
          height: window.innerWidth >= 1024 ? "30vh" : "clamp(10%, 40vh, 20rem)", // Ajusta altura
        }}
      />
      <div className="max-w-[82rem] mx-auto px-4 lg:py-16 z-[10]">
        <div className="text-center mb-16 lg:max-w-[40rem] mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-[#717375] mx-auto font-FuturaHeavy">
            Conozca los beneficios de nuestra <br /> suite de productos
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-black z-[10]">
            Incremente la rentabilidad de su empresa, optimizando sus procesos
            de crédito y cobro con nuestras plataformas tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:items-center">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center lg:items-start group"
            >
              <div
                className="w-16 h-16 transition-transform duration-500 group-hover:scale-125"
              >
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  className="w-full h-full text-[#DE492A]"
                />
              </div>
              <h3 className="text-3xl font-[800] mb-4 font-FuturaHeavy text-[#717375]">
                {benefit.title}
              </h3>
              <ul className="list-disc sm:pl-0 md:pl-5 text-center max-w-[14rem] lg:text-start md:max-w-[20rem] lg:max-w-full">
                {benefit.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-lg font-Futura leading-tight text-black"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
