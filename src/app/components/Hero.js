"use client";
import React from "react";

const Hero = () => {
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
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-[90%] max-w-[1400px] mx-auto rounded-md shadow-md "
        >
          <source src="./assets/heroVideo.webm" type="video/webm" />
          <source src="./assets/heroVideo.mp4" type="video/mp4" />
          Su navegador no soporta videos HTML5.
        </video> */}
        <picture>
          <source srcSet="./assets/hero-img.png" type="image/png" />
          <img
            src="./assets/hero-img.avif"
            type="image/avif"
            alt="Professional People"
            className="w-[90%] max-w-[1400px] mx-auto rounded-md shadow-md"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
