import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Establece un timeout de 10 segundos para mostrar la imagen de repuesto
    timeoutRef.current = setTimeout(() => {
      if (!videoLoaded) {
        setVideoError(true);
      }
    }, 10000); // 10,000 ms = 10 segundos

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    clearTimeout(timeoutRef.current);
  };

  const handleVideoError = () => {
    setVideoError(true);
    clearTimeout(timeoutRef.current);
  };

  return (
    <div className="bg-white mb-20 flex flex-col items-center text-center px-4">
      <div className="mt-20 md:mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-8 sm:mb-12 md:mb-16 w-full">
        <img
          src="./assets/Logo.png"
          alt="Credit Force Logo"
          className="w-[52%] max-w-[40rem] mx-auto"
          loading="eager"
          priority="high"
        />
      </div>

      <div className="w-full max-w-[90%] lg:max-w-[50rem] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#717375] leading-relaxed font-FuturaHeavy font-900">
          ¡Bienvenido a CreditForce!
        </h1>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 w-full relative z-10">
        <div className="relative w-[90%] max-w-[1400px] mx-auto">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              playsInline
              preload="auto"
              muted={isMuted}
              className="w-full rounded-md shadow-md"
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}
            >
              <source src="./assets/heroVideo.mp4" type="video/mp4" />
              Su navegador no soporta videos HTML5.
            </video>
          ) : (
            <img
              src="./assets/hero-img.avif"
              alt="Imagen de repuesto"
              className="w-full rounded-md shadow-md"
            />
          )}

          {/* Botón de mute/unmute */}
          {!videoError && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200 text-white"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
