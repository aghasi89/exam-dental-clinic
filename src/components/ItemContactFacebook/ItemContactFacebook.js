import Arr from "../../icons/arr.png";
import FB from "../../icons/fb.png"

export default function ItemContactFacebook({ title }){
    return (
      <div className="contact-text-decore">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />

        <a href="https://www.facebook.com/profile.php?id=100009383266279">  
        <img src={FB} className="doc-contacts-icon" alt="fb-icon" /></a>  
        <div className="all-arrs-icon">{title}</div>

      </div>
    );
  };

