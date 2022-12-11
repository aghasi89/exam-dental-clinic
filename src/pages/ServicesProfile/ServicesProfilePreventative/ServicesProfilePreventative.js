import React from "react";

const serviceInfiList = [
  {
    title: "Ատամների էսթետիկ վերականգնում",
    list: "ատամների կարիոզ խոռոչների բուժում և վերականգնում, ֆրոնտալ ատամների ռեստավրացիաներ բարձրորակ պլոմբանյութերի միջոցով",
  },
  {
    title: "Էնդոդոնտիա",
    list: "արմատախողովակների բուժում, լիցքավորում ժամանակակից սարքավորումներով և բարձրորակ նյութերով",
  },
  {
    title: "Ատամնաքարերի մաքրում",
    list: "ատամնափառի, ատամնաքարերի մաքրում ժամանակակից որակյալ սարքավորումներով, չվնասելով էմալը և լորձաթաղանթը",
  },
  {
    title: "Ատամների սպիտակեցում",
    list: "որակյալ նյութերով ատամների անվնաս սպիտակեցում",
  },
  {
    title: "Պարօդոնտոլոգիական միջամտություններ",
    list: "հարատամնային հյուսվածքների բազմաթիվ պաթոլոգիկ պրոցեսների ախտորոշում, բուժում և կանխարգելում",
  },
];


export default function ServicesProfilePreventative() {
  return (
    <div className="service-info-wrap">
      {Object.keys(serviceInfiList).map((key) => {
        return (
          <div className="service-info">
            <div className="service-info-title">
              <p>{serviceInfiList[key].title}</p>
            </div>
            <div className="service-info-list">
              <span>{serviceInfiList[key].list}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}