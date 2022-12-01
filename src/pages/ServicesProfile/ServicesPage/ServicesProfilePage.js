import Preventative from "../../../icons/preventative.png";
import Restorative from "../../../icons/restorative.png";
import Comprehensive from "../../../icons/comprehensive.png";
import Breket from "../../../icons/breket.png";
import Cosmetic from "../../../icons/cosmetic.png";

const servicesList = [
  {
    header: "Թերապևտիկ ստոմատոլոգիա և պարօդոնտոլոգիա",
    img: {
      src: `${Preventative}`,
      alt: "Preventative.png",
    },
    serviceInfoList: {
      0: {
        title: "Ատամների էսթետիկ վերականգնում",
        text: "ատամների կարիոզ խոռոչների բուժում և վերականգնում, ֆրոնտալ ատամների ռեստավրացիաներ բարձրորակ պլոմբանյութերի միջոցով",
      },
      1: {
        title: "Էնդոդոնտիա",
        text: "արմատախողովակների բուժում, լիցքավորում ժամանակակից սարքավորումներով և բարձրորակ նյութերով",
      },
      2: {
        title: "Ատամնաքարերի մաքրում",
        text: "ատամնափառի, ատամնաքարերի մաքրում ժամանակակից որակյալ սարքավորումներով, չվնասելով էմալը և լորձաթաղանթը",
      },
      3: {
        title: "Ատամների սպիտակեցում",
        text: "որակյալ նյութերով ատամների անվնաս սպիտակեցում",
      },
      4: {
        title: "Պարօդոնտոլոգիական միջամտություններ",
        text: "հարատամնային հյուսվածքների բազմաթիվ պաթոլոգիկ պրոցեսների ախտորոշում, բուժում և կանխարգելում",
      },
    },
  },

  {
    header: "Օրթոպեդիկ ստոմատոլոգիա",
    img: {
      src: `${Restorative}`,
      alt: "Restorative",
    },
    serviceInfoList: {
      0: {
        title: "Շապիկ",
        text: "ատամների պսակների վերականգնում մետաղական, մետաղ-կերամիկական, ամբողջաձույլ կերամիկական, ցիրկոնի-կերամիկական շապիկների միջոցով",
      },
      1: {
        title: "Կամուրջ",
        text: "մի քանի ատամի պսակների վերականգնում մետաղական, մետաղ-կերամիկական, ամբողջաձույլ կերամիկական, ցիրկոնի-կերամիկական շապիկների միջոցով",
      },
      2: {
        title: "Վինիր",
        text: "ֆրոնտալ ատամի վեստիբուլյար մակերեսի էսթետիկ վերականգնում",
      },
      3: {
        title: "Բյուգելային պրոթեզ",
        text: "մասնակի անատամության վերականգնում մասնակի շարժական մետաղական հենքով բարձրորակ պրոթեզի միջոցով",
      },
      4: {
        title: "Լրիվ շարժական պրոթեզ",
        text: "լրիվ անատամության վերականգնում կոշտ կամ փափուկ հենքով պրոթեզի միջոցով",
      },
    },
  },
  {
    header: "Վիրաբուժական ստոմատոլոգիա և դիմածնոտային վիրաբուժություն",
    img: {
      src: `${Comprehensive}`,
      alt: "Comprehensive",
    },
    serviceInfoList: {
      0: {
        title: "Ատամների հեռացում",
      },
      1: {
        title: "Ատամների կոնսերվատիվ-վիրաբուժական բուժում",
      },
      2: {
        title: "Թարախակույտերի բացազատում",
      },
      3: {
        title: "Ալվեոլիտների և պերիկորոնարիտների բուժում",
      },
      4: {
        title: "Ծնոտի կիստաների հեռացում",
      },
      5: {
        title: "Բերանի խոռոչի սանձիկների հատում",
      },
      6: {
        title: "Բերանի խոռոչի բարորակ նորագոյացությունների հեռացում",
      },
      7: {
        title: "Ատամների իմպլանտացիա",
      },
    },
  },
  {
    header: "Օրթոնդոնտիա",
    img: {
      src: `${Breket}`,
      alt: "Breket",
    },
    serviceInfoList: {
      0: {
        title: "Շարժական կոնստրուկցիաներ",
      },
      1: {
        title: "Անշարժ կոնստրուկցիաներ",
      },
      2: {
        title: "Շինավորում (Բրեկետ համակարգ)",
        text: "Էսթետիկ և մետաղական",
      },
    },
  },
  {
    header: "Էսթետիկ բժշկություն",
    img: {
      src: `${Cosmetic}`,
      alt: "Cosmetic",
    },
    serviceInfoList: {
      0: {
        title: "Պլազմոլիֆտինգ",
        text: "արյան պլազմայի ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
      },
      1: {
        title: "Բիոռևիտալիզացիա",
        text: "հիալուրոնաթթվի հիման վրա նյութերի ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
      },
      2: {
        title: "Մեզոթերապիա",
        text: "բազմազան հատուկ կոկտեյլների ներարկումներ դեմքի շրջանում բուժման և երիտասարդացման նպատակով",
      },
      3: {
        title: "Բոտոքս",
        text: "բոտուլոնոտոքսինի ներարկում դեմքի շրջանում կնճիռների վերացման նպատակով",
      },
      4: {
        title: "Դեմքի կոնտուրային պլաստիկա",
        text: "հիալուրոնաթթվի հիման վրա նյութերով դիմագծերի ընդգծում և շտկում",
      },
      5: {
        title: "Բլեֆարոպլաստիկա",
        text: "վերին և ստորին կոպերի պլաստիկ վիրահատություն",
      },
      6: {
        title: "Օտոպլաստիկա",
        text: "ականջախեցիների պլաստիկ վիրահատություն",
      },
    },
  },
];

export default function ServicesProfilePage() {
  function clicked(e) {
    let clickedAccordeonId = e.target.id;
    let accordeonDescriptionWrap = document.querySelector(
      `[data-id="${clickedAccordeonId}"]`
    );
    accordeonDescriptionWrap.classList.toggle("active");
  }

  return (
    <div className="service-content">
      <div className="page-service">
        <h1>
          Մեր ատամնաբուժական ծառայությունները հիմնվում են բազմամյա փորձի,
          ժամանակակից սարքավորումների և մեթոդների վրա՝ մատուցվելով արհեստավարժ և
          բարեհամբյուր:
        </h1>
      </div>
      <div className="service-wrap">
        {servicesList.map((item, key) => {
          console.log(item);
          return (
            <div className="service-item-wrap">
              <div className="service-image-wrap">
                <img src={item.img.src} alt={item.img.alt} />
              </div>
              <div className="service-item-heading-title">
                <h3>{item.header}</h3>
              </div>
              -
              {Object.keys(item.serviceInfoList).map((key) => {
                return (
                  <div className="info-accordion-wrap">
                    <div className="info-accordion-title">
                      <h4 onClick={clicked} id={"service-item-" + key}>
                        {item.serviceInfoList[key].title}
                      </h4>
                    </div>
                    <div
                      className="info-accordion-description"
                      data-id={"service-item-" + key}
                    >
                      <p>{item.serviceInfoList[key].text}</p>
                    </div>
                  </div>
                );
              })}
              -
            </div>
          );
        })}
      </div>
    </div>
  );
}
