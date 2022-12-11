import React from "react";

const serviceInfiList = [
  {
    title: "Շապիկ",
    list: "ատամների պսակների վերականգնում մետաղական, մետաղ-կերամիկական, ամբողջաձույլ կերամիկական, ցիրկոնի-կերամիկական շապիկների միջոցով",
  },
  {
    title: "Կամուրջ",
    list: "մի քանի ատամի պսակների վերականգնում մետաղական, մետաղ-կերամիկական, ամբողջաձույլ կերամիկական, ցիրկոնի-կերամիկական շապիկների միջոցով",
  },
  {
    title: "Վինիր",
    list: "ֆրոնտալ ատամի վեստիբուլյար մակերեսի էսթետիկ վերականգնում",
  },
  {
    title: "Բյուգելային պրոթեզ",
    list: "մասնակի անատամության վերականգնում մասնակի շարժական մետաղական հենքով բարձրորակ պրոթեզի միջոցով",
  },
  {
    title: "Լրիվ շարժական պրոթեզ",
    list: "լրիվ անատամության վերականգնում կոշտ կամ փափուկ հենքով պրոթեզի միջոցով",
  },
];

export default function ServicesProfileRestorative() {
  return (
    <div className="service-info-wrap">
      {Object.keys(serviceInfiList).map((key) => {
        return (
          <div className="service-info">
            <table>
              <tr className="service-info-title">
                <th>{serviceInfiList[key].title}</th>
              </tr>
              <tr className="service-info-list">
                <td>{serviceInfiList[key].list}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}
