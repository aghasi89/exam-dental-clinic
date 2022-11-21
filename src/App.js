import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./pages/Home";
import Doctor from "./pages/DoctorProfile/Doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorProfileLanguages from "./pages/DoctorProfile/DoctorProfileLanguages/DocsLanguages"
export default function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="doctor" element={<Doctor />} />
    <Route path="DocsLanguages" element={<DoctorProfileLanguages />} />
     </Routes>
    </BrowserRouter>

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);