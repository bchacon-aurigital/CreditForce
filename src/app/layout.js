import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icon: "/favicon.ico", 
  title: "CreditForce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>

        <meta name="author" content="CreditForce" />

        <meta property="og:title" content="CreditForce" />
        <meta property="og:image" content="/assets/Logo.png" />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CreditForce",
            "logo": "https://calendarhit.com/Logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+506-40014370",
              "contactType": "Customer Service",
            },
            "sameAs": [
              "https://www.linkedin.com/company/sistemascreditforce/",
              "https://www.facebook.com/aurigital/",
            ]
          }`
        }} />


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}




