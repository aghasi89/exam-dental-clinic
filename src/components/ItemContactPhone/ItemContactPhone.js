import Arr from "../../icons/arr.png";
import Phone from "../../icons/DocContacts.png"

export default function ItemContactPhone({ title }){
    return (
      <div className="contact-text-decore">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <img src={Phone} className="doc-contacts-icon" alt="phone-icon" />
        <span>{title}</span>

      </div>
    );
  };

