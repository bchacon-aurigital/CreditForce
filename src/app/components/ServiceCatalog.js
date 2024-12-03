import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "origin",
    titleImage: {
      avif: "/assets/ORIGIN.avif",
      png: "/assets/ORIGIN.png",
    },
    description:
      "Origin es el sistema que le permite automatizar el flujo de solicitudes, las reglas y los árboles de decisión para la originación de créditos desde cualquier punto de venta o plataforma en línea, según el nivel de riesgo deseado.",
    pdfFile: "/Docs/Origin.pdf",
  },
  {
    id: "core",
    titleImage: {
      avif: "/assets/CORE.avif",
      png: "/assets/CORE.png",
    },
    description:
      "Core es el sistema que le permite administrar todo su cartera de crédito, de forma ágil y precisa, incluyendo la gestión de créditos según sus características específicas.",
    pdfFile: "/Docs/Core.pdf",
  },
  {
    id: "store",
    titleImage: {
      avif: "/assets/STORE.avif",
      png: "/assets/STORE.png",
    },
    description:
      "Store es el sistema que le permite habilitar nuevos puntos de originación de crédito desde su plataforma de comercio, permitiéndole a sus consumidores realizar compras al instante o a través de diversos planes de financiamiento.",
    pdfFile: "/Docs/Store.pdf",
  },
  {
    id: "collect",
    titleImage: {
      avif: "/assets/COLLECT.avif",
      png: "/assets/COLLECT.png",
    },
    description:
      "Collect es el sistema de gestión de cobranza que le permite fortificar la cartera, optimizar la rentabilidad, mejorar la productividad y asegurar la recuperación de créditos de manera eficiente y oportuna.",
    pdfFile: "/Docs/Collect.pdf",
  },
  {
    id: "check",
    titleImage: {
      avif: "/assets/CHECK.avif",
      png: "/assets/CHECK.png",
    },
    description:
      "Check es el sistema que le permite automatizar y agilizar el proceso de evaluación y validación de personas, garantizando que su organización tome decisiones informadas y confiables sobre a quién otorgarle un crédito.",
    pdfFile: "/Docs/Check.pdf",
  },
  {
    id: "legal",
    titleImage: {
      avif: "/assets/LEGAL.avif",
      png: "/assets/LEGAL.png",
    },
    description:
      "Legal es el sistema que le facilita la gestión del ciclo de vida legal de su cartera financiera en mora, permitiéndole evaluar diversos tipos de demandas, administrar la preparación y presentación de la cartera así como el seguimiento de las etapas judiciales del caso.",
    pdfFile: "/Docs/Legal.pdf",
  },
];

const ServiceCatalog = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const itemsRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);

  const handlePdfClick = (pdfPath) => (e) => {
    e.preventDefault();
    window.open(window.location.origin + pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gradient-to-b from-[#E7E9EA] to-transparent w-full mt-10">
      <div className="pt-10 lg:p-8 max-w-7xl mx-auto text-center">
        <h2 className="md:pt-24 text-xl md:text-3xl lg:text-4xl font-bold text-[#717375] mx-auto mb-16">
          Nuestro catálogo de servicios está <br />
          disponible para usted
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80%] gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemsRefs.current[index] = el)}
                data-id={service.id}
                className={`relative bg-white rounded-sm shadow-[0_-10px_10px_rgba(150,150,150,0.2),0_5px_10px_rgba(0,0,0,0.3)] transition-shadow duration-300 cursor-pointer overflow-hidden min-h-[420px] max-w-[280px] mx-auto w-full ${
                  isMobile && visibleItems.includes(service.id)
                    ? "shadow-[0_5px_15px_rgba(222,73,42,0.4)]"
                    : ""
                } hover:shadow-[0_5px_20px_rgba(222,73,42,0.4)]`}
              >
                <div className="p-8 flex flex-col items-center h-full py-16">
                  <div className="h-12 text-center">
                    <picture>
                      <source
                        srcSet={service.titleImage.png}
                        type="image/png"
                      />
                      <img
                        src={service.titleImage.avif}
                        alt={`${service.id} logo`}
                        className="h-full object-contain"
                      />
                    </picture>
                  </div>
                  <div className="flex justify-center items-center flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed px-3 mt-2 text-justify">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <button
                      onClick={handlePdfClick(service.pdfFile)}
                      className="text-[#DE492A] hover:text-[#a43617] text-sm cursor-pointer"
                    >
                      Saber más {">>>"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;