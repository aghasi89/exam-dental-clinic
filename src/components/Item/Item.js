import Arr from "../../icons/arr.png";
export default function Item({ title }){
    return (
      <div className="text-decore">
        <img src={Arr} className="study-arrow" alt="DocProfileImage" />
        <span>{title}</span>
      </div>
    );
  };

