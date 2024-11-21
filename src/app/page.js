"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("./components/Hero"), { ssr: false });
const DynamicBenefitsSection = dynamic(() => import("./components/BenefitsSection"), {
  ssr: false,
});
const DynamicServiceCatalog = dynamic(() => import("./components/ServiceCatalog"), {
  ssr: false,
});
const DynamicSupportChannels = dynamic(() => import("./components/SupportChannels"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-[#DE492A] flex items-center justify-center z-50">
          <img
            src="/assets/LogoLoading.svg"
            alt="Logo"
            className="h-50 w-auto object-contain"
          />
        </div>
      )}

      {!loading && (
        <div>
          <DynamicHero />
          <DynamicBenefitsSection />
          <DynamicServiceCatalog />
          <DynamicSupportChannels />
          <DynamicFooter />
        </div>
      )}
    </>
  );
}
