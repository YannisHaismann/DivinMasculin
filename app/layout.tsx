import type { Metadata } from "next";
import { Lexend, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import Banner from "./components/Banner";
import CTASection from "./components/CTASection";
import FacebookPixel from "./components/FacebookPixel";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Puissance MAXIHOMME™",
  description:
    "La formation Puissance MAXIHOMME™ te permet de maitriser la Rétention Séminale et devenir Multi-Orgasmique en 90 jours (garanti)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <FacebookPixel />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${lexend.className} ${poppins.variable} ${poppins.className} antialiased bg-zinc-900 overflow-x-hidden`}
      >
        <Banner />
        {children}
        <CTASection
          title="Bien plus qu'une simple formation"
          description="Cette formation est ma contribution pour rendre le monde meilleur. J'espère que j'ai réussi à te donner confiance en moi et en ma méthode pour que tu acceptes que je te vienne en aide."
        />
        <Footer />
      </body>
    </html>
  );
}
