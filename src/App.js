import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
     </Routes>
    </BrowserRouter>

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);