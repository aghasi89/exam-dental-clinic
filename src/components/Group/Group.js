import Item from "../Item/Item"
import degree from "../../icons/degree.png";
export default function Group  ({ title, list }) {
    return (
      <div className="full-content">
        <div className="degree-icon">
          <img src={degree} className="deg" alt="degree" />
          <span className="deg-line">{title}</span>
        </div>
        <div className="all-arrs-icon">
          {list.map((item) => {
            return <Item title={item} />;
          })}
        </div>
      </div>
    );
  };