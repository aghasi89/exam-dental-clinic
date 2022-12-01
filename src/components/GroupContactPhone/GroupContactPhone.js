import ItemContactPhone from "../ItemContactPhone/ItemContactPhone"
import DocContact from "../../icons/DocContactIcon.png"

export default function GroupContactPhone ({ title, list }) {
    return (
      <div className="full-content">
        <div className="cont-icons">
          <img src={DocContact} className="call-icon" alt="lang-icon" />
         
          <span className="deg-line">{title}</span>
        </div>
        <div className="all-arrs-icon">
          {list.map((item) => {
            return <ItemContactPhone title={item} />;

          })}
        </div>
      </div>
    );
  };