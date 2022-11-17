import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import FirstSection from "./pages/FirstSection/FirstSection";
import SecondSection from "./pages/SecondSection/SecondSection";
import ThirdSection from "./pages/ThirdSection/ThirdSection";
import ForthSection from "./pages/ForthSection/ForthSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
}
