import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo";

import { Outlet, Link } from "react-router-dom";
import GroupContactPhone from "../../../components/GroupContactPhone/GroupContactPhone"
import ItemContactFacebook from "../../../components/ItemContactFacebook/ItemContactFacebook"
import ItemContactInstagram from "../../../components/ItemContactInstagram/ItemContactInstagram"

const about=["Բարի գալուստ «Sandoyan Dental Clinics»: Ես Հովհաննես Սանդոյանն եմ՝ ով ունի ավելի քան 17 տարվա փորձ, այս ոլորտում: Մեծացել եմ բժշկի ընտանիքում և անընդհատ ականատաես լինելով՝ մասնագիտական վերելքների, ձգտել եմ կատարելության, ցանկացած ոլորտում: Տարիների ընթացքում պրակտիկ աշխատանքի, ինչպես նաև բարձրակարգ ու փորձառու ստոմատալոգիաների հետ գիտելիքի փոխանակման շնորհիվ, սովորել եմ ապահովել լավագույն արդյունք, անգամ բարդ իրավիճակներում:"]
const phoneNumber=["374 98 42-12-32"]


export default function DoctorProfileContacts() {
    return (
      <div className="doctor-profile">

<div className="profile-background-dark-blue">
        <div className="profile-background-dark-blue-info">
          <DocProfileInfo
            title="Հովհաննես Սանդոյան"
            specialist="Ընտանեկան Ստամատոլոգ"
            text={about}
          />
        </div>
      </div>
  <div className="profile-picture-background-light-blue">
    <div className="cv-full-board">
  <img src={DocProfileImage} className="profile-img" alt="DocProfileImage" />
  <div className="cv-menu">
  <div className="cv-menu-first-bar-icon"> <img src={DocSkills} className="doc-profile-icons" alt="skill-icons" />
  <Link style={{textDecoration: 'none'}} to="/doctor"><div className="line">Կրթություն</div></Link>
  </div>
  <div className="cv-menu-second-bar-icon"> <img src={DocLanguages} className="doc-profile-icons" alt="lang-icon" />
  <Link style={{textDecoration: 'none'}} to="/DocsLanguages"><div className="line">Լեզուններ</div></Link>
  </div>
 <div className="cv-menu-third-bar-icon"> <img src={DocContacts} className="doc-profile-icons" alt="doc-contact-icon" />
 <Link style={{textDecoration: 'none'}} to="/DocsContacts"> <div className="line">Կապ Ինձ հետ</div></Link>
 </div>
    <div className="cv-menu-forth-bar-icon"> <img src={DocGallery} className="doc-profile-icons" alt="gallery" />
    <Link style={{textDecoration: 'none'}} to="/DocsGallery"> <div className="line">Իմ Գործերը</div></Link>
  </div>
  </div>
  </div>


  </div>
  <div className="cv-info-tab">
        <div className="contact-container">
          <GroupContactPhone
            title={"Կապ Ինձ հետ"}
            list={phoneNumber}
          />
          <ItemContactFacebook
          title={"Hovhannes Sandoyan"}
          />
          <ItemContactInstagram
          title={"sandoyan_dental_clinic"}
          />
        </div>
      </div>
  
  <Outlet />
      </div>
    );
  }
  

