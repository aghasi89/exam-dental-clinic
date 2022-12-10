import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo";
import { useState, useCallback  } from "react";
import { Outlet, Link } from "react-router-dom";
import GroupLang from "../../../components/GroupLang/GroupLang"
import useDoc from "../../../useDoc";

const langs=["Գերազանց տիրապետում եմ հայերեն լեզվին",
`Գերազանց տիրապետում եմ ռուսերեն լեզվին`,
`Միջին մակարդակի (B2) տիրապետում եմ անգլերեն լեզվին`];

const add = (fst, snd) => fst + snd;

export default function DoctorProfileLanguages() {
  const { doc } = useDoc();
  const [firstVal, setFirstVal] = useState(10);
  const increment = () => setFirstVal(num => num + 1);
  
  const [secondVal, setSecondVal] = useState(20);
  const decrease = () => setSecondVal(num => num - 1);
 
  const additionResult = useCallback(add(firstVal, secondVal), [firstVal, secondVal]);
    
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
            <div className="cv-menu-second-bar-icon"><img
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

              <img
                src={DocGallery}
                className="doc-profile-icons"
                alt="gallery"
              />
              <Link style={{ textDecoration: "none" }} to="/DocsGallery">

                <div className="line">{doc("doc-works")}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cv-info-tab">
        <div className="cv-info-tab-container">
          <GroupLang
            title={doc("doc-languages")}
            list={langs}
          />
          <div className="callback-full-bo">
        <section className="box-callback">
        <span>{firstVal}</span>
        <button class="button-callback" onClick={increment}>+ 1</button>
      </section>
      <section className="box-callback">
        <span>{secondVal}</span>
        <button class="button-callback" onClick={decrease}>- 1</button>
       </section>
      <div className="box-callback">Result: {additionResult}
      </div>
      </div>
        </div>

   
      </div>

      <Outlet />
    </div>
  );
}






