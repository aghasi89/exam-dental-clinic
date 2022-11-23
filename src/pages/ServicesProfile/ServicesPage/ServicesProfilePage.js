import ServicesProfileInfo from "../../../components/ServicesProfileInfo/ServicesProfileInfo"
import Preventative from "../../../icons/preventative.png"
import Restorative from "../../../icons/restorative.png"
import Comprehensive from "../../../icons/comprehensive.png"
import Breket from "../../../icons/breket.png"
import Cosmetic from "../../../icons/cosmetic.png"



export default function ServicesProfilePage() {
  return (
    <div className="services-profile">
      <span className="services-info">
      <ServicesProfileInfo title="Մեր ատամնաբուժական ծառայությունները հիմնվում են բազմամյա փորձի, ժամանակակից սարքավորումների և մեթոդների վրա՝ մատուցվելով արհեստավարժ և բարեհամբյուր:"/>
      </span>
      <div className="img-services">
        <div className="services-container">
          <img src={Preventative} className="preventative-img" alt="Preventative"></img>
          <div className="text-services">
          <ServicesProfileInfo textServices="Թերապևտիկ ստոմատոլոգիա և պարօդոնտոլոգիա" />
          </div>
        </div>
        <div className="services-container">
          <img src={Restorative} className="Restorative-img" alt="Restorative"></img>
        <div className="text-services">
          <ServicesProfileInfo textServices="Օրթոպեդիկ ստոմատոլոգիա" />
        </div>
        </div>
        <div className="services-container">
          <img src={Comprehensive} className="Comprehensive-img" alt="Comprehensive"></img>
          <div className="text-services">
          <ServicesProfileInfo textServices="Վիրաբուժական ստոմատոլոգիա և դիմածնոտային վիրաբուժություն" />
        </div>
        </div>
        <div className="services-container">
          <img src={Breket} className="Breke-img" alt="Breket"></img>
          <div className="text-services">
          <ServicesProfileInfo textServices="Օրթոնդոնտիա" />
        </div>
        </div>
        <div className="services-container">
          <img src={Cosmetic} className="Cosmetic-img" alt="Cosmetic"></img>
          <div className="text-services">
          <ServicesProfileInfo textServices="Էսթետիկ բժշկություն" />
        </div>
        </div>
      </div>
    </div>
  )
}