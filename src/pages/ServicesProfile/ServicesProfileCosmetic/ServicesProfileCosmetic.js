import React from "react";

const serviceInfiList = [
  {
    title: "Պլազմոլիֆտինգ",
    list: "արյան պլազմայի ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
  },
  {
    title: "Բիոռևիտալիզացիա",
    list: "հիալուրոնաթթվի հիման վրա նյութերի ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
  },
  {
    title: "Մեզոթերապիա",
    list: "բազմազան հատուկ կոկտեյլների ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
  },
  {
    title: "Բոտոքս",
    list: "բոտուլոնոտոքսինի ներարկում դեմքի շրջանում կնճիռների վերացման նպատակով",
  },
  {
    title: "Դեմքի կոնտուրային պլաստիկա",
    list: "հիալուրոնաթթվի հիման վրա նյութերով դիմագծերի ընդգծում և շտկում",
  },
  {
    title: "Բլեֆարոպլաստիկա",
    list: "վերին և ստորին կոպերի պլաստիկ վիրահատություն",
  },
  {
    title: "Օտոպլաստիկա",
    list: "ականջախեցիների պլաստիկ վիրահատություն",
  },
];

export default function ServicesProfileCosmetic() {
  return (
    <div className="service-info-wrap">
      {Object.keys(serviceInfiList).map((key) => {
        return (
          <div className="service-info">
            <table>
              <tr className="service-info-title">
                <td>{serviceInfiList[key].title}</td>
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
