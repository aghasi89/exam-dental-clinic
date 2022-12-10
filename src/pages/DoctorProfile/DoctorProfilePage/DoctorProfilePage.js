import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo";
import Group from "../../../components/Group/Group";
import { Outlet, Link } from "react-router-dom";
import useDoc from "../../../useDoc";


const experiences = [
  "1997-2004թթ Երևանի Պետական Բժշկական Համալսարան:",
  `2004-2005թթ Ինտերնատուրիա՝ կլինիկական օրդինատոր, (ընտանեկան ստոմատոլոգիայի ամփոփում):`,
];

const works = [
  "2005-2008թթ Երևանի Դովլաաթյան ստոմատոլոգիական կլինիկա:",
  `2008-2018թթ Իսրայել, քաղաք՝ Երուսաղեմի առաջատար կլինիկա՝ իմպլանտոլոգ:`,
  "2018-2020թթ Ախուրյանի «Մոր և մանկան» ծննդատուն՝ հղիների ստոմատոլոգ:",
  "2020թ... «Sandoyan Dental Clinics»-ի հիմնադիր և աշխատող:",
];

export default function DoctorProfilePage() {
  const { doc } = useDoc();
  return (
    <div className="doctor-profile">
      <div className="profile-background-dark-blue">
        <div className="profile-background-dark-blue-info">
          <DocProfileInfo
               title={doc("doc-name")}
            specialist={doc("doc-specialist")}
            text= {doc("doc-about")} 
          />
        </div>
      </div>
      <div className="profile-picture-background-light-blue">
        <div className="cv-full-board">
          <img
            src={DocProfileImage}
            className="profile-img"
            alt="DocProfileImage"
          />
          <div className="cv-menu">
            <div className="cv-menu-first-bar-icon">

              <img
                src={DocSkills}
                className="doc-profile-icons"
                alt="skill-icons"
              />
              <Link style={{ textDecoration: "none" }} to="/doctor">
                <div className="line">{doc("doc-skills")}</div>
              </Link>
            </div>
            <div className="cv-menu-second-bar-icon">

              <img
                src={DocLanguages}
                className="doc-profile-icons"
                alt="lang-icon"
              />
              <Link style={{ textDecoration: "none" }} to="/DocsLanguages">
                <div className="line">{doc("doc-languages")}</div>
              </Link>
            </div>
            <div className="cv-menu-third-bar-icon">
  
              <img
                src={DocContacts}
                className="doc-profile-icons"
                alt="doc-contact-icon"
              />
              <Link style={{ textDecoration: "none" }} to="/DocsContacts">
  
                <div className="line">{doc("doc-contacs")}</div>
              </Link>
            </div>
            <div className="cv-menu-forth-bar-icon">
              {" "}
              <img
                src={DocGallery}
                className="doc-profile-icons"
                alt="gallery"
              />
              <Link style={{ textDecoration: "none" }} to="/DocsGallery">
                {" "}
                <div className="line">{doc("doc-works")}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cv-info-tab">
        <div className="cv-info-tab-container">
        <Group title={doc("doc-expert")} list={experiences} />
          <Group title={doc("doc-work")} list={works} />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
