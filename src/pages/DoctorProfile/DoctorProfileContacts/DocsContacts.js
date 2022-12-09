import DoctorProfileContacts from "./DoctorProfileContacts";
import Header from "../../Header/Header"
import Nav from "../../Nav/Nav"
import Footer from "../../Footer/Footer"
import ScrollButton from "../../../components/ScrollButton/ScrollButton"
export default function DocsContacts() {
    return (
      <div >
        <Header/>
        <Nav/>
        <DoctorProfileContacts/>
        <ScrollButton/>
        <Footer/>
      </div>
    );
  }
  