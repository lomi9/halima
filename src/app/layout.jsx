import { Kodchasan, Judson, Chakra_Petch } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import "./globals.css";
import "./styles/HomeCategory.scss";
import "./styles/ParallaxImage.scss";
import "./styles/ProductsGallery.scss";
import "./styles/ProductsDescription.scss";
import "./styles/ProductCard.scss";
import "./styles/LitleCard.scss";
import "./styles/Login.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'], 
  variable: '--font-kodchasan',
});

const judson = Judson({
  subsets: ["latin"],
  weight: ['400', "700"],
  variable: '--font-judson',
});

const chakrapetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra', 
});

export const metadata = {
  title: "Halima Garden",
  description: "Produits marrocains d'exception",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={frFR}>
    <html lang="fr" data-theme="mytheme">
      <body className={`${kodchasan.variable} ${judson.variable} ${chakrapetch.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
