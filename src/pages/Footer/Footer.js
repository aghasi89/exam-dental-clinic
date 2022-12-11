import { Link } from "react-router-dom";
import Facebook from "../../icons/facebook.png";
import G from "../../icons/G+.png";
import Pinterest from "../../icons/pinterest.png";
import Twitter from "../../icons/twitter.png";
import Youtube from "../../icons/youtube.png";

export default function Footer() {
  return (
    <div className="footer-icons-board">
      <div className="footer-authorization">
        © 2045 Life Care. All Rights Reserved.
      </div>
      <div className="footer-icons">
        <a href="mailto://aghasi89@gmail.com">
          <img src={Pinterest} className="footer-icon" alt="Messege" />
        </a>
        <Link to="/home#contact">
          {" "}
          <img src={Youtube} className="footer-icon" alt="Messege" />
        </Link>
        <a href="https://myaccount.google.com/">
          {" "}
          <img src={G} className="footer-icon" alt="Messege" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} className="footer-icon" alt="Messege" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={Facebook} className="footer-icon" alt="Messege" />
        </a>
      </div>
    </div>
  );
}
