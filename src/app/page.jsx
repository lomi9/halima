import Banner from "./_components/Banner";
import HomeCategory from "./_components/(Home)/HomeCategory";
import Presentation from "./_components/(Home)/Presentation";
import section1image1 from "../../public/huile-olive-maroc-home.webp";
import section1image2 from "../../public/olivier-maroc-home.webp";
import section2image1 from "../../public/huile-argan-maroc-home.webp";
import section2image2 from "../../public/huile-argan-home.webp";
import section3image1 from "../../public/mortier-epices-home.webp";
import section3image2 from "../../public/epices-vrac-maroc-home.webp";
import section4image1 from "../../public/cafe-maroc-home.webp";
import section4image2 from "../../public/terrasse-maroc-home.webp";
import ParallaxImage from "./_components/(Home)/ParallaxImage";
import banner1 from "../../public/branches_oliviers.webp";
import banner2 from "../../public/porte_maroc.webp";
import banner3 from "../../public/epices_maroc.webp";
import banner4 from "../../public/amandes_maroc.webp";


export default function Home() {

  const parallax1 = banner1.src;
  const parallax2 = banner2.src;
  const parallax3 = banner3.src;
  const parallax4 = banner4.src;

  const section1topImage = section1image1.src;
  const section1behindImage = section1image2.src;
  const section1title = "Huiles Alimentaires";
  const section1paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";
  const section1btnLink = "/edible";
  const section1btnText = "Voir les produits"

  const section2topImage = section2image1.src;
  const section2behindImage = section2image2.src;
  const section2title = "Huiles de Beauté";
  const section2paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";
  const section2btnLink = "/beauty";
  const section2btnText = "Voir les produits"

  const section3topImage = section3image1.src;
  const section3behindImage = section3image2.src;
  const section3title = "Épices";
  const section3paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";
  const section3btnLink = "/spices";
  const section3btnText = "Voir les produits"

  const section4topImage = section4image1.src;
  const section4behindImage = section4image2.src;
  const section4title = "Gourmandises";
  const section4paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";
  const section4btnLink = "/treats";
  const section4btnText = "Voir les produits"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner/>
      <div id="content">
        <Presentation/>
        <ParallaxImage imageUrl={parallax1} />
        <HomeCategory topImage={section1topImage} behindImage={section1behindImage} title={section1title} paragraph={section1paragraph} btnLink={section1btnLink} btnText={section1btnText}/>
        <ParallaxImage imageUrl={parallax2} />
        <HomeCategory topImage={section2topImage} behindImage={section2behindImage} title={section2title} paragraph={section2paragraph} btnLink={section2btnLink} btnText={section2btnText}/>
        <ParallaxImage imageUrl={parallax3} />
        <HomeCategory topImage={section3topImage} behindImage={section3behindImage} title={section3title} paragraph={section3paragraph} btnLink={section3btnLink} btnText={section3btnText}/>
        <ParallaxImage imageUrl={parallax4} />
        <HomeCategory topImage={section4topImage} behindImage={section4behindImage} title={section4title} paragraph={section4paragraph} btnLink={section4btnLink} btnText={section4btnText}/>
      </div>
    </main>
  );
}
