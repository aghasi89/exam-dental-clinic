import React from "react";
import ServicesProfileInfo from "../../../components/ServicesProfileInfo/ServicesProfileInfo";
import Service from "../../../components/Services/Service";


export default function ServicesProfilePage() {
  return (
    <div className="service-content">
      <div className="page-service">
        <ServicesProfileInfo
          list="Մեր ատամնաբուժական ծառայությունները հիմնվում են բազմամյա փորձի,
          ժամանակակից սարքավորումների և մեթոդների վրա՝ մատուցվելով արհեստավարժ և
          բարեհամբյուր:"
        />
        <Service />
      </div>
    </div>
  );
}
