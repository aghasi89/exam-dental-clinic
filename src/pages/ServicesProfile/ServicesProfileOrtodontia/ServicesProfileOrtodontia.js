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

export default function ServicesProfileOrtodontia() {
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

