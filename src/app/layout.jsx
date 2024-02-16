import { Kodchasan, Judson, Chakra_Petch } from "next/font/google";
import "./globals.css";
import "./styles/HomeCategory.scss";
import "./styles/ParallaxImage.scss";
import "./styles/ProductsGallery.scss";
import "./styles/ProductsDescription.scss";
import "./styles/ProductCard.scss";
import "./styles/LitleCard.scss";

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
    <html lang="fr" data-theme="mytheme">
      <body className={`${kodchasan.variable} ${judson.variable} ${chakrapetch.variable}`}>
        {children}
      </body>
    </html>
  );
}
