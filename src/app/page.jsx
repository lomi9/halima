import Banner from "./components/Banner";
import HomeCategory from "./components/HomeCategory";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import section1image1 from "../../public/olive1.jpg";
import section1image2 from "../../public/olive2.jpg";
import section2image1 from "../../public/beaute1.jpg";
import section2image2 from "../../public/beaute2.jpg";
import section3image1 from "../../public/epices1.jpg";
import section3image2 from "../../public/epices2.jpg";
import section4image1 from "../../public/gourmandises1.jpg";
import section4image2 from "../../public/gourmandises2.jpg";
import ParallaxImage from "./components/ParallaxImage";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";
import banner4 from "../../public/banner4.jpg";

export default function Home() {

  const parallax1 = banner1.src;
  const parallax2 = banner2.src;
  const parallax3 = banner3.src;
  const parallax4 = banner4.src;

  const section1topImage = section1image1.src;
  const section1behindImage = section1image2.src;
  const section1title = "Huiles Alimentaires";
  const section1paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";

  const section2topImage = section2image1.src;
  const section2behindImage = section2image2.src;
  const section2title = "Huiles de Beauté";
  const section2paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";

  const section3topImage = section3image1.src;
  const section3behindImage = section3image2.src;
  const section3title = "Épices";
  const section3paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";

  const section4topImage = section4image1.src;
  const section4behindImage = section4image2.src;
  const section4title = "Gourmandises";
  const section4paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis soluta cumque alias numquam, deserunt beatae cupiditate qui, voluptatibus natus blanditiis exercitationem commodi possimus laborum maxime quis praesentium officiis consequuntur.";


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Banner/>
      <div className="">
        <div className="page-bg h-500 bg-black">
        </div>
        <p id="content" className="bg-main-color">
        Bonjour !
        </p>
        <Presentation/>
        <ParallaxImage imageUrl={parallax1} />
        <HomeCategory topImage={section1topImage} behindImage={section1behindImage} title={section1title} paragraph={section1paragraph}/>
        <ParallaxImage imageUrl={parallax2} />
        <HomeCategory topImage={section2topImage} behindImage={section2behindImage} title={section2title} paragraph={section2paragraph}/>
        <ParallaxImage imageUrl={parallax3} />
        <HomeCategory topImage={section3topImage} behindImage={section3behindImage} title={section3title} paragraph={section3paragraph}/>
        <ParallaxImage imageUrl={parallax4} />
        <HomeCategory topImage={section4topImage} behindImage={section4behindImage} title={section4title} paragraph={section4paragraph}/>
      </div>
    </main>
  );
}
