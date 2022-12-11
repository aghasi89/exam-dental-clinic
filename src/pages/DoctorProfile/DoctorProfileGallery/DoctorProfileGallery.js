import DocProfileImage from "../../../icons/profileImg.jpg";
import DocSkills from "../../../icons/skills.png";
import DocLanguages from "../../../icons/DocLanguages.png";
import DocContacts from "../../../icons/DocContacts.png";
import DocGallery from "../../../icons/DocGallery.png";
import DocProfileInfo from "../../../components/DocProfileInfo/DocProfileInfo";
// import FirstTeethImg from "../../../icons/first-teeth-img.jpg"
// import SecondTeethImg from "../../../icons/second-teeth-img.jpg";
// import ThirdTeethImg from "../../../icons/third-teeth-img.jpg";
import ForthTeethImg from "../../../icons/forth-teeth-image.jpg";
import FifthTeethImg from "../../../icons/fifth-teeth-image.jpg";
import SixthTeethImg from "../../../icons/sixth-teeth-image.jpg";
import { Outlet, Link } from "react-router-dom";
import useLocalStorageImages from "../DoctorProfileGallery/LocalStorageImages";
import { useMemo } from "react";
import useDoc from "../../../useDoc";

export default function DoctorProfileLanguages() {
  const { doc } = useDoc();
  const secondRowImages = useMemo(() => {
    return [ForthTeethImg, FifthTeethImg, SixthTeethImg];
  });
  const images = useLocalStorageImages();
  //console.log("images --->",images);
  return (
    <div className="doctor-profile">
      <div className="profile-background-dark-blue">
        <div className="profile-background-dark-blue-info">
          <DocProfileInfo
            title={doc("doc-name")}
            specialist={doc("doc-specialist")}
            text={doc("doc-about")}
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
              {" "}
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
              {" "}
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
              {" "}
              <img
                src={DocContacts}
                className="doc-profile-icons"
                alt="doc-contact-icon"
              />
              <Link style={{ textDecoration: "none" }} to="/DocsContacts">
                {" "}
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
          <div className="full-content-contact-page">
            <div className="cont-icon">
              <img src={DocGallery} className="call-icon" alt="gallery-icon" />
              <span className="deg-line">{doc("doc-works")}</span>
            </div>
            <div className="gallery-content">
              {images.map((backgroundImage) => {
                return (
                  <img
                    src={backgroundImage}
                    className="teeth-images"
                    alt="gallery-img"
                  />
                );
              })}
              {secondRowImages.map(
                (secondRowImage) => {
                  return (
                    <img
                      src={secondRowImage}
                      className="teeth-images"
                      alt="teeth-images"
                    />
                  );
                },
                [secondRowImages]
              )}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
