import React from "react";
import ServicesProfileInfo from "../../../components/ServicesProfileInfo/ServicesProfileInfo";
import {Outlet, Link } from "react-router-dom";
import ServicePreventative from "../../../components/ServicePreventative";
import ServiceRestorative from "../../../components/ServiceRestorative";
import ServiceComprehensive from "../../../components/ServiceComprehensive";
import ServiceOrtodontia from "../../../components/ServiceOrtodontia";
import ServiceCosmetic from "../../../components/ServiceCosmetic";


const ServiceList = [
  ["Թերապևտիկ ստոմատոլոգիա և պարօդոնտոլոգիա"],
  ["Օրթոպեդիկ ստոմատոլոգիա"],
  ["Վիրաբուժական ստոմատոլոգիա և դիմածնոտային վիրաբուժություն"],
  ["Օրթոնդոնտիա"],
  ["Էսթետիկ բժշկություն"],
];

export default function ServicesProfilePage() {

  return (
    <div className="service-content">
      <div className="page-service">
        <ServicesProfileInfo
          list="Մեր ատամնաբուժական ծառայությունները հիմնվում են բազմամյա փորձի,
          ժամանակակից սարքավորումների և մեթոդների վրա՝ մատուցվելով արհեստավարժ և
          բարեհամբյուր:"
        />

        <div>
          <Link style={{ textDecoration: "none" }} to="/service-preventative">
            <ServicePreventative title={ServiceList[0]} />
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/service-restorative">
            <ServiceRestorative title={ServiceList[1]} />
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/service-comprehensive">
            <ServiceComprehensive title={ServiceList[2]} />
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/service-ortodontia">
            <ServiceOrtodontia title={ServiceList[3]} />
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to="/service-cosmetic">
            <ServiceCosmetic title={ServiceList[4]} />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
