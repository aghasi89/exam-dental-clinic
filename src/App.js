import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./pages/Home";
import Doctor from "./pages/DoctorProfile/Doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfileLanguages from "./pages/DoctorProfile/DoctorProfileLanguages/DocsLanguages"
import DoctorProfileContacts from "./pages/DoctorProfile/DoctorProfileContacts/DocsContacts"
import DoctorProfileGallery from "./pages/DoctorProfile/DoctorProfileGallery/DocsGallery"
import Services from "./pages/ServicesProfile/Services";
export default function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="doctor" element={<Doctor />} />
    <Route path="services" element={<Services />} />
    <Route path="DocsLanguages" element={<DoctorProfileLanguages />} />
    <Route path="DocsContacts" element={<DoctorProfileContacts />} />
    <Route path="DocsGallery" element={<DoctorProfileGallery />} />
     </Routes>
    </BrowserRouter>

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);