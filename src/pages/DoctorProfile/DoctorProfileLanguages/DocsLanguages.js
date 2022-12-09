import DoctorProfileLanguages from "./DoctorProfileLanguages";
import Header from "../../Header/Header"
import ScrollButton from "../../../components/ScrollButton/ScrollButton"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"
export default function DocsLanguages() {
    return (
      <div >
        <Header/>
        <Nav/>
        <DoctorProfileLanguages/>
        <ScrollButton />
        <Footer/>
      </div>
    );
  }
  