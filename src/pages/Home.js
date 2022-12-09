import "../App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}
