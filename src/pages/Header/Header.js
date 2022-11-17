import Logo from "../../icons/logo.png";
import Phone from "../../icons/phone.png";
import Messege from "../../icons/messege.png";

import Am from "../../icons/am.png";
import Ru from "../../icons/ru.png";
import En from "../../icons/en.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Logo" />

      <div className="header-icons-info">
        <div className="phone-div">
          <img src={Phone} className="phone-icon" alt="Phone" />
          <span>+374 93 525253</span>
        </div>
        <div className="messege-div">
          <img src={Messege} className="messege-icon" alt="Messege" />
          <span>loremIpsum@gmail.com</span>
        </div>
      </div>
      <div className="languages-part">
        <img src={Ru} className="ru" alt="Ru" />
        <img src={Am} className="am" alt="Am" />
        <img src={En} className="en" alt="En" />
      </div>
    </div>
  );
}
