import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

const FacebookPixel: React.FC = () => {
  useEffect(() => {
    // Ajout du Meta Pixel Code uniquement côté client
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function (...args: any[]) {
        if (n.callMethod) {
          n.callMethod(...args);
        } else {
          n.queue.push(args);
        }
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    // Initialisation du pixel Facebook
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("init", "1014407263773087");
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <>
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1014407263773087&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  );
};

export default FacebookPixel;
