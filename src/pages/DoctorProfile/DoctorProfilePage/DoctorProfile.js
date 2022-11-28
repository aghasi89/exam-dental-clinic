import DoctorProfilePage from "./DoctorProfilePage";
import Header from "../../Header/Header"

import Nav from "../../Nav/Nav"
import ScrollButton from "../../../components/ScrollButton/ScrollButton"
import Footer from "../../Footer/Footer"
export default function DoctorProfile() {
    return (
      <div >
        <Header/>
        <Nav/>
        <DoctorProfilePage/>
        <ScrollButton/>
        <Footer/>
      </div>
    );
  }
  