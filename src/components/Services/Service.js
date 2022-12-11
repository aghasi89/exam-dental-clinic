import { Outlet, Link } from "react-router-dom";

const ServiceList = [
  {
    title: "Թերապևտիկ ստոմատոլոգիա և պարօդոնտոլոգիա",
    goto: "/service-preventative",
    img: "/images/preventative.png",
  },
  {
    title: "Օրթոպեդիկ ստոմատոլոգիա",
    goto: "/service-restorative",
    img: "/images/restorative.png",
  },
  {
    title: "Վիրաբուժական ստոմատոլոգիա և դիմածնոտային վիրաբուժություն",
    goto: "/service-comprehensive",
    img: "/images/comprehensive.png",
  },
  {
    title: "Օրթոնդոնտիա",
    goto: "/service-ortodontia",
    img: "/images/ortodontia.png",
  },
  {
    title: "Էսթետիկ բժշկություն",
    goto: "/service-cosmetic",
    img: "/images/cosmetic.png",
  },
];
console.log(ServiceList);
export default function Service( ) {
  return (
    <div className="services-wrapper">
      {Object.keys(ServiceList).map((key) => {
        return (
          <div className="service-item">
            <Link to={ServiceList[key].goto}>
              <img src={ServiceList[key].img} alt="service" />
              <h2>{ServiceList[key].title}</h2>
            </Link>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}
