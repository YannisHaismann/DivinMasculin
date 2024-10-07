import { useEffect } from "react";

const GoogleTag: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TQE6Y17ZC4";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];

        // Utilisation d'une fonction d'expression (ou d'une fonction fléchée)
        window.gtag = (...args: any[]) => {
          window.dataLayer.push(args);
        };

        window.gtag("js", new Date());
        window.gtag("config", "G-TQE6Y17ZC4");
      }
    };

    // Nettoyage au démontage
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTag;
