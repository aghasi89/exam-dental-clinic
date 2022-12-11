import React from "react";
import InfoBar from "../../components/InfoBar";
import Service from "../../icons/clinic.jpg";
import Button from "../../components/Button";
import { Outlet, Link } from "react-router-dom";

=======
import useT from "../../useT";
>>>>
export default function SecondSection() {
  const { t } = useT();
  return (
    <div className="second-section" id="service">
      <div className="info-bar">
<<<
        <InfoBar 
        title="WHAT WE DO" 
        />

        <InfoBar 
        text="Կլինիկայի մասին" 
        />


        <InfoBar 
        paragraph="Առողջ ատամնաշար և շլացուցիչ ժպիտ ունենալը ոչ միայն գեղեցիկ տեսք է տալիս մարդկանց, այլև
                   նրանց առողջության գլխավոր գրավականներից է։" 
        />


        <InfoBar 
        paragraph="Անհատական մոտեցում և հոգատար վերաբերմունք ցուցաբերելով յուրաքանչյուր այցելուի 
                   նկատմամբ, կլինիկայի անձնակազմն աջակցում է բերանի խոռոչի հետ կապված բոլոր խնդիրների 
                   լուծմանը` ապահովելով որակյալ, անվտանգ և, որ շատ կարևոր է` անցավ ստամատոլոգիական 
                   ծառայություններ։" 
        />


        <Link 
        style={{ textDecoration: "none" }} 
        to="/service">
=
        <InfoBar title={t("second-section")} />
        <InfoBar title={t("second")} />
        <div>
          <InfoBar paragraph="Առողջ ատամնաշար և շլացուցիչ ժպիտ ունենալը ոչ միայն գեղեցիկ տեսք է տալիս մարդկանց, այլև նրանց առողջության գլխավոր գրավականներից է։" />
        </div>
        <InfoBar paragraph="Անհատական մոտեցում և հոգատար վերաբերմունք ցուցաբերելով յուրաքանչյուր այցելուի նկատմամբ, կլինիկայի անձնակազմն աջակցում է բերանի խոռոչի հետ կապված բոլոր խնդիրների լուծմանը` ապահովելով որակյալ, անվտանգ և, որ շատ կարևոր է` անցավ ստամատոլոգիական ծառայություններ։" />
        <Link style={{ textDecoration: "none" }} to="/service">
>>>>
          <Button title="Learn more..." />
        </Link>


        <div className="doc-chapter">
          <div className="doc-chapter-rectangle"></div>
          <div className="doc-chapter-title">GET TO KNOW</div>
        </div>
      </div>


      <div className="info-bar-image">
        <img 
         src={Service} 
         className="service-img" 
         alt="Service" 
         />
      </div>

      <Outlet />
    </div>
  );
}
