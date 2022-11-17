import Car from "../../icons/car.png";
import Time from "../../icons/time.png";
import Clinic from "../../icons/clinic.png";
import Cart from "../../components/Cart";
console.log(Time, Clinic);
export default function FirstSection() {
  return (
    <div class="first-section">
      <div className="cart-title">
        <p>LET'S MAKE YOUR LIFE HAPPIER</p>
        <p>SMILING TOGETHER</p>
      </div>

      <div className="all-carts">
        <div className="first-cart">
          <img src={Car} className="car-icon" alt="Car" />
          <Cart title="About Us" />
          <Cart
            text="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
        </div>
        <div className="second-cart">
          <img src={Time} className="time-icon" alt="Time" />
          <Cart title="Working hours" />
          <Cart
            text="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
        </div>

        <div className="third-cart">
          <img src={Clinic} className="clinic-icon" alt="Clinic" />
          <Cart title="Location" />
          <Cart
            text="Dignissimos ducimus qui blanditii
 sentium volta tum deleniti atque
cori as quos dolores et quas mole."
          />
        </div>
      </div>
    </div>
  );
}
