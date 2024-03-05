"use client"
import { Kodchasan, Judson, Chakra_Petch } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { frFR } from "@clerk/localizations";
import "./globals.css";
import "./styles/_variables.scss"
import "./styles/HomeCategory.scss";
import "./styles/ParallaxImage.scss";
import "./styles/ProductsGallery.scss";
import "./styles/ProductCard.scss";
import "./styles/LitleCard.scss";
import "./styles/Presentation.scss";
import "./styles/Login.scss";
import "./styles/_fonts.scss";
import "./styles/Sign-In.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import TarteAuCitron from "./_components/TarteAuCitron";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

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

//export const metadata = {
//  title: "Halima Garden",
//  description: "Produits marrocains d'exception",
//};




export default function RootLayout({ children }) {

const [cart, setCart]=useState([]);


  return (
    <ClerkProvider localization={frFR} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <CartContext.Provider value={{cart, setCart}}>
    <html lang="fr" data-theme="mytheme">
      <body className={`${kodchasan.variable} ${judson.variable} ${chakrapetch.variable}`}>
        <TarteAuCitron/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </CartContext.Provider>
    </ClerkProvider>
  );
}
