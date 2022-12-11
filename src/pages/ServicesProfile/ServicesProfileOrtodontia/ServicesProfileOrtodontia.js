import React from "react";

const serviceInfiList = [
  {
    title: "Ատամների հեռացում",
  },
  {
    title: "Ատամների կոնսերվատիվ-վիրաբուժական բուժում",
  },
  {
    title: "Թարախակույտերի բացազատում",
  },
  {
    title: "Ալվեոլիտների և պերիկորոնարիտների բուժում",
  },
  {
    title: "Ծնոտի կիստաների հեռացում",
  },
  {
    title: "Բերանի խոռոչի սանձիկների հատում",
  },
  {
    title: "Բերանի խոռոչի բարորակ նորագոյացությունների հեռացում",
  },
  {
    title: "Ատամների իմպլանտացիա",
  },
];

export default function ServicesProfileOrtodontia() {
  return (
    <div className="service-info-wrap">
      {Object.keys(serviceInfiList).map((key) => {
        return (
          <div className="service-info">
            <div className="service-info-title">
              <p>{serviceInfiList[key].title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
