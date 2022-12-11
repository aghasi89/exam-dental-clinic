import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./pages/Home";
import Service from "./pages/ServicesProfile/Service"
import Doctor from "./pages/DoctorProfile/Doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import DoctorProfileLanguages from "./pages/DoctorProfile/DoctorProfileLanguages/DocsLanguages";
import DoctorProfileContacts from "./pages/DoctorProfile/DoctorProfileContacts/DocsContacts";
import DoctorProfileGallery from "./pages/DoctorProfile/DoctorProfileGallery/DocsGallery";
import ServicesPreventative from "./pages/ServicesProfile/ServicesProfilePreventative/ServicesPreventative";
import ServicesRestorative from "./pages/ServicesProfile/ServicesProfileRestorative/ServicesRestorative";
import ServicesComprehensive from "./pages/ServicesProfile/ServicesProfileComprehensive/ServicesComprehensive";
import ServicesOrtodontia from "./pages/ServicesProfile/ServicesProfileOrtodontia/ServicesOrtodontia";
import ServicesCosmetic from "./pages/ServicesProfile/ServicesProfileCosmetic/ServicesCosmetic";



export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="DocsLanguages" element={<DoctorProfileLanguages />} />
            <Route path="DocsContacts" element={<DoctorProfileContacts />} />
            <Route path="DocsGallery" element={<DoctorProfileGallery />} />

            <Route
              path="/service-preventative"
              element={<ServicesPreventative />}
            />

            <Route
              path="service-restorative"
              element={<ServicesRestorative />}
            />

            <Route
              path="service-comprehensive"
              element={<ServicesComprehensive />}
            />

            <Route path="service-ortodontia" element={<ServicesOrtodontia />} />

            <Route path="service-cosmetic" element={<ServicesCosmetic />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
