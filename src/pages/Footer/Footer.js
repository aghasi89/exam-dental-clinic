import Facebook from "../../icons/facebook.png";
import G from "../../icons/G+.png";
import Pinterest from "../../icons/pinterest.png";
import Twitter from "../../icons/twitter.png";
import Wifi from "../../icons/wifi.png";
import Youtube from "../../icons/youtube.png";

export default function Footer() {
  return (
    <div className="footer-icons-board">
      <div className="footer-authorization">
      © 2045 Life Care. All Rights Reserved.
      </div>
      <div className="footer-icons">
               <img src={Pinterest} className="footer-icon" alt="Messege" />
               <img src={Youtube} className="footer-icon" alt="Messege" />
               <img src={G} className="footer-icon" alt="Messege" />
               <img src={Twitter} className="footer-icon" alt="Messege" />
               <img src={Facebook} className="footer-icon" alt="Messege" />
               <img src={Wifi} className="footer-icon" alt="Messege" />
               </div>
      </div>
  );
}
