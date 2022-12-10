import ItemLang from "../ItemLang/ItemLang"
import DocLanguages from "../../icons/DocLanguages.png";
export default function GroupLang  ({ title, list }) {
    return (
      <div className="full-content">
        <div className="degree-icon">
          <img src={DocLanguages} className="doc-profile-icons" alt="lang-icon" />
          <span className="deg-line">{title}</span>
        </div>
        <div className="lang-all-arrs-icon">
          {list.map((item) => {
            return <ItemLang title={item} />;
          })}
        </div>
      </div>
    );
  };