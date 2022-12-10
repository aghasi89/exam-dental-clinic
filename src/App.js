import "./App.css";
import Home from "./pages/Home";
import Doctor from "./pages/DoctorProfile/Doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import DoctorProfileLanguages from "./pages/DoctorProfile/DoctorProfileLanguages/DocsLanguages";
import DoctorProfileContacts from "./pages/DoctorProfile/DoctorProfileContacts/DocsContacts";
import DoctorProfileGallery from "./pages/DoctorProfile/DoctorProfileGallery/DocsGallery";
import LanguageContext from "./pages/Language/LanguageContext";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("hy");

  return (
    <div className="App">
      <Provider store={store}>
        <LanguageContext.Provider
          value={{ language, changeLanguage: setLanguage }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="doctor" element={<Doctor />} />
              <Route
                path="DocsLanguages"
                element={<DoctorProfileLanguages />}
              />
              <Route path="DocsContacts" element={<DoctorProfileContacts />} />
              <Route path="DocsGallery" element={<DoctorProfileGallery />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </Provider>
    </div>
  );
}
