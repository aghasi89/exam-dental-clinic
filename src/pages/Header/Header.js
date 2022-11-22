import Logo from "../../icons/logo.png";
import Phone from "../../icons/phone.png";
import Messege from "../../icons/messege.png";

import Am from "../../icons/am.png";
import Ru from "../../icons/ru.png";
import En from "../../icons/en.png";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
    <Link to="/home">  <img src={Logo} className="logo" alt="Logo" /></Link>  

      <div className="header-icons-info">
        <div className="phone-div">
          <img src={Phone} className="phone-icon" alt="Phone" />
          <span>+374 98 42-12-32</span>
        </div>
        <div className="messege-div">
          <img src={Messege} className="messege-icon" alt="Messege" />
          <span>sandoyan_clinics@gmail.com</span>
        </div>
      </div>
      <div className="languages-part">
        <img src={Ru} className="ru" alt="Ru" />
        <img src={Am} className="am" alt="Am" />
        <img src={En} className="en" alt="En" />
      </div>
      <Outlet/>
    </div>
  );
}
