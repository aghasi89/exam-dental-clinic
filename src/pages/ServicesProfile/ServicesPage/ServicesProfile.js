import ServicesProfilePage from "./ServicesProfilePage";
import SeviceProfileImages from "./SeviceProfileImages";
import Header from "../../Header/Header"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"

export default function ServicesProfile() {
    return (
      <div >
        <Header/>
        <Nav/>
        <SeviceProfileImages />
        <ServicesProfilePage />
        <Footer/>
      </div>
    );
  }
  