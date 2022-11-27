import Arr from "../../icons/arr.png";
 import Insta from "../../icons/inst.png"

export default function ItemContactFacebook({ title }){
    return (
      <div className="contact-text-decore">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />

        <a href="https://www.instagram.com/sandoyan_dental_clinic/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0cjVDGckP6evTU-hkeuP5Y3HLDoKUf567OcvfgCKjtIdkOFXRG1u-bKac">    
        <img src={Insta} className="doc-contacts-icon" alt="Insta-icon" /></a> 
        <div className="all-arrs-icon">{title}</div>

      </div>
    );
  };

