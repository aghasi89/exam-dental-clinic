import Logo from "../../icons/logo.png";
import Phone from "../../icons/phone.png";
import Messege from "../../icons/messege.png";


export default function Header() {
    return (
      <div className="header">
        <img src={Logo} className="logo" alt='Logo'/>
        <div className="header-icons-info">
        <div className="phone-div">
        <img src={Phone} className="phone-icon" alt='Phone'/>
        <span>+374 93 525253</span>
        </div>
        <div className="messege-div">
        <img src={Messege} className="messege-icon" alt='Messege'/>
        <span>loremIpsum@gmail.com</span>
        </div>
        </div>
      </div>
    );
  }
  