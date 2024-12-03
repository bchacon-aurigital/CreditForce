import React from "react";

const WebIcon = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`my-2 ${className}`}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`my-2 ${className}`}
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`my-2 ${className}`}
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M22 7l-10 7L2 7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SupportChannels = () => {
  const channels = [
    {
      icon: <WebIcon />,
      title: "Soporte a través de la web",
      href: "https://creditforce.myservicetonic.com/ServiceTonic/login.jsf",
    },
    {
      icon: <PhoneIcon />,
      title: "Soporte a través del teléfono",
      href: "http://wa.link/th6rbo",
    },
    {
      icon: <MailIcon />,
      title: "Soporte a través de la dirección de correo",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mesadeayuda@credit-force.com&su=Soporte&body=Por%20favor%20detalla%20tu%20consulta%20aquí.",
    },
  ];

  return (
    <div className="w-full p-8 lg:p-16 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-6 w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#DE492A] mb-10 text-center lg:text-start">
              Nuestros canales de soporte le ayudarán a resolver incidentes y
              consultas
            </h2>

            {channels.map((channel, index) => (
              <a
                key={index}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-6 flex items-center gap-6 bg-gray-50 hover:bg-[#DE492A80] group transition-colors duration-500 rounded-2xl shadow-md lg:min-h-[150px]"
              >
                <div className="flex justify-center items-center h-full min-w-[64px] text-[#DE492A] group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(channel.icon, {
                    className: "text-current w-16 h-16",
                  })}
                </div>
                <span className="text-center mx-auto text-2xl text-[#404040] font-[900] font-FuturaHeavy group-hover:text-white transition-colors duration-500 font-medium whitespace-pre-line leading-tight flex items-center">
                  {channel.title}
                </span>
              </a>
            ))}
          </div>

          <div className="relative w-full">
            <div className="bg-gray-100 rounded-lg h-full">
              <picture>
                <source srcSet="/assets/ChannelImg.png" type="image/png" />
                <img
                  src="/assets/ChannelImg.avif"
                  type="image/avif" 
                  alt="Credit Force Laptop"
                  className="w-full h-full object-cover rounded-lg"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/Docs/instructivo soporte.pdf"
            download="GuiaDeSoporte.pdf"
            className="px-8 py-4 text-lg text-center bg-transparent border-2 border-[#DE492A] text-[#DE492A] rounded-lg hover:bg-[#DE492A] hover:text-white transition-colors duration-500 text-xl font-[800]"
          >
            Descargue la Guía de
            <br />
            Soporte
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportChannels;
