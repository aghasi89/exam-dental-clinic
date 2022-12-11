import React from "react";

const serviceInfiList = [
  {
    title: "Շարժական կոնստրուկցիաներ",
  },
  {
    title: "Անշարժ կոնստրուկցիաներ",
  },
  {
    title: "Շինավորում (Բրեկետ համակարգ)",
    list: "Էսթետիկ և մետաղական",
  },
];

export default function ServicesProfileComprehensive() {
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
