import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo"
import Arr from "../../../icons/arr.png";
import degree from "../../../icons/degree.png";
import { Outlet, Link } from "react-router-dom";
export default function DoctorProfilePage() {
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
  <Link to="/doctor"><div className="line">Կրթություն</div></Link>
  </div>
  <div className="cv-menu-second-bar-icon"> <img src={DocLanguages} className="doc-profile-icons" alt="lang-icon" />
  <Link to="/DocsLanguages"><div className="line">Լեզուններ</div></Link>
  </div>
 <div className="cv-menu-third-bar-icon"> <img src={DocContacts} className="doc-profile-icons" alt="doc-contact-icon" />
 <Link to="/DocsContacts"> <div className="line">Կապ Ինձ հետ</div></Link>
 </div>
    <div className="cv-menu-forth-bar-icon"> <img src={DocGallery} className="doc-profile-icons" alt="gallery" />
    <Link to="/DocsGallery"> <div className="line">Իմ Գործերը</div></Link>
  </div>
  </div>
  </div>


  </div>
  <div className="cv-info-tab">
    <div className="cv-info-tab-container">
    <div className="full-content">
        <div className="degree-icon">
        <img src={degree} className="deg" alt="degree" /><span className="deg-line">Կրթություն</span>
        </div>
        <div className="all-arrs-icon">
        <div className="education">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >1997-2004թթ Երևանի Պետական Բժշկական Համալսարան:</span>
        </div>
        <div className="education-sec">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >2004-2005թթ Ինտերնատուրիա՝ կլինիկական օրդինատոր, (ընտանեկան ստոմատոլոգիայի ամփոփում):</span>
        </div>
        
        </div>    
        </div>
        <div className="full-content-sec">
        <div className="degree-icon">
        <img src={DocSkills} className="deg" alt="degree" /><span className="deg-line">Աշխատանք</span>
        </div>
        <div className="all-arrs-icon">
        <div className="education">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >2005-2008թթ Երևանի Դովլաաթյան ստոմատոլոգիական կլինիկա:</span>
        </div>
        <div className="education-sec">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >2008-2018թթ Իսրայել, քաղաք՝ Երուսաղեմի առաջատար կլինիկա՝ իմպլանտոլոգ:</span>
        </div>
        <div className="education">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >2018-2020թթ Ախուրյանի «Մոր և մանկան» ծննդատուն՝ հղիների ստոմատոլոգ: </span>
        </div>
        <div className="education-sec">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span >2020թ... «Sandoyan Dental Clinics»-ի հիմնադիր և աշխատող:</span>
        </div>
        </div>    
        </div>


        </div>

</div>

  <Outlet />
      </div>
    );
  }
  