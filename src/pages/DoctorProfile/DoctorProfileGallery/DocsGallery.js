import DoctorProfileGallery from "./DoctorProfileGallery";
import Header from "../../Header/Header"
import ScrollButton from "../../../components/ScrollButton/ScrollButton"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"
export default function DocsGallery() {
    return (
      <div >
        <Header/>
        <Nav/>
        <DoctorProfileGallery/>
        <ScrollButton/>
        <Footer/>
      </div>
    );
  }
  