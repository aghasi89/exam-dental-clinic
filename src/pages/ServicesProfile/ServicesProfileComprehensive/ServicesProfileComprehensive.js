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

export default function ServicesProfileComprehensive() {
  return (
    <div className="service-info-wrap">
      {Object.keys(serviceInfiList).map((key) => {
        return (
          <div className="service-info">
            <table>
              <tr className="service-info-title">
                <th>{serviceInfiList[key].title}</th>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
