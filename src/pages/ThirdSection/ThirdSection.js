import DocInfo from "../../components/DocInfo";
import Doctor from "../../icons/doctors.jpg";
import { Outlet, Link } from "react-router-dom";
import DocButton from "../../components/DocButton/DocButton";
import React from "react";

export default function ThirdSection() {
  return (
    <div className="third-section" id="docPage">
      <div className="doc-info-bar-image">
        <img src={Doctor} className="doc-img" alt="Doctor" />
      </div>
      <div className="doc-info-bar">
        <DocInfo text="Հովհաննես Սանդոյան" />
        <DocInfo paragraph="Ընտանեկան Ստամատոլոգ" />
        <DocInfo paragraph="Բարի գալուստ «Sandoyan Dental Clinics»: Ես Հովհաննես Սանդոյանն եմ՝ ով ունի ավելի քան 17 տարվա փորձ, այս ոլորտում: Մեծացել եմ բժշկի ընտանիքում և անընդհատ ականատաես լինելով՝ մասնագիտական վերելքների, ձգտել եմ կատարելության, ցանկացած ոլորտում: Տարիների ընթացքում պրակտիկ աշխատանքի, ինչպես նաև բարձրակարգ ու փորձառու ստոմատալոգիաների հետ գիտելիքի փոխանակման շնորհիվ, սովորել եմ ապահովել լավագույն արդյունք, անգամ բարդ իրավիճակներում:" />
        <Link style={{ textDecoration: "none" }} to="/doctor">
          <DocButton title="Get My Profile" />
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
