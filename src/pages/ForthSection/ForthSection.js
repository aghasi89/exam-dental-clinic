import Template from "../../components/Template";
import Button from "../../components/Button";
import LeftArrow from "../../icons/leftArrow.png";
import RightArrow from "../../icons/rightArrow.png";

export default function ForthSection() {
  return (
    <div class="forth-section">
      <div className="price-carts">
        <img src={LeftArrow} className="left-arrow-icon" alt="LeftArrow" />
        <div className="price-first-cart">
          <Template title="Dental Implants" />
          <Template
            description="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
          <Button title="$3.000" />
        </div>
        <div className="price-second-cart">
          <Template title="Teeth Bonding" />
          <Template
            description="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
          <Button title="$1.000" />
        </div>
        <div className="price-third-cart">
          <Template title="Wisdom Teeth Removal" />
          <Template
            description="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
          <Button title="$200" />
        </div>
        <img src={RightArrow} className="right-arrow-icon" alt="RightArrow" />
      </div>
    </div>
  );
}
