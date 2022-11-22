import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo"
import DocContact from "../../../icons/DocContactIcon.png"
import Phone from "../../../icons/DocContacts.png";
import Arr from "../../../icons/arr.png";
import FB from "../../../icons/fb.png";
import Insta from "../../../icons/inst.png";
import { Outlet, Link } from "react-router-dom";
export default function DoctorProfileLanguages() {
    return (
      <div className="doctor-profile">

  <div className="profile-background-dark-blue">
    <div className="profile-background-dark-blue-info">
  <DocProfileInfo title="Հովհաննես Սանդոյան"/>
  <DocProfileInfo specialist="Ընտանեկան Ստամատոլոգ"/>
  <DocProfileInfo text="Բարի գալուստ «Sandoyan Dental Clinics»: 
  Ես Հովհաննես Սանդոյանն եմ՝ ով ունի ավելի քան 17 տարվա փորձ, այս ոլորտում:
  Մեծացել եմ բժշկի ընտանիքում և անընդհատ ականատաես լինելով՝ մասնագիտական վերելքների, 
  ձգտել եմ կատարելության, ցանկացած ոլորտում:
  Տարիների ընթացքում պրակտիկ աշխատանքի, ինչպես նաև բարձրակարգ ու փորձառու ստոմատալոգիաների հետ
  գիտելիքի փոխանակման շնորհիվ, սովորել եմ ապահովել լավագույն արդյունք, անգամ բարդ իրավիճակներում:   "/>
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
    <div className="cv-info-tab-container">
    <div className="full-content-language-page">
        <div className="cont-icon">
        <img src={DocContact} className="call-icon" alt="lang-icon" /><span className="deg-line">Կապ Ինձ հետ</span>
        </div>
        <div className="all-arrs-icon-language-page">
        <div className="education">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <img src={Phone} className="doc-contacts-icon" alt="phone-icon" />
        <span >+374 98 42-12-32</span>
        </div>
        <div className="education-sec">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <a href="https://www.facebook.com/profile.php?id=100009383266279">  <img src={FB} className="doc-contacts-icon" alt="fb-icon" /></a>  
        <span >Hovhannes Sandoyan</span>
        </div>
        <div className="education-sec">
         <img src={Arr} className="study-arrow" alt="DocProfileImage" />
   <a href="https://www.instagram.com/sandoyan_dental_clinic/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0cjVDGckP6evTU-hkeuP5Y3HLDoKUf567OcvfgCKjtIdkOFXRG1u-bKac">    
   <img src={Insta} className="doc-contacts-icon" alt="Insta-icon" /></a> 
        <span >sandoyan_dental_clinic</span>
        </div>
        </div>    
        </div>
        


        </div>

</div>

  <Outlet />
      </div>
    );
  }
  