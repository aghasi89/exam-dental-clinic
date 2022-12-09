import "../App.css";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";
import Footer from "./Footer/Footer";
import Language from "./Language/Language";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <FirstSection id="/home#about" />
      <SecondSection id="/home#service" />
      <ThirdSection id="/home#docPage" />
      <ForthSection id="/home#clinic" />
      <FifthSection id="/home#contact" />
      <ScrollButton />
      <Footer />
      <Language />
    </div>
  );
}
