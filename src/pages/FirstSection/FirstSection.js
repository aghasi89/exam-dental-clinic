import Car from "../../icons/car.png";
import Time from "../../icons/time.png";
import Clinic from "../../icons/clinic.png";
import Cart from "../../components/Cart";
import useT from "../../useT";

export default function FirstSection() {
  const { t } = useT();
  return (
    <div className="first-section" id="about">
      <div className="cart-title">
        <p>LET'S MAKE YOUR LIFE HAPPIER</p>
        <p>SMILING TOGETHER</p>
      </div>

      <div className="all-carts">
        <div className="first-cart">
          <img src={Car} className="car-icon" alt="Car" />
          <Cart title={t("about_us")} />
          <Cart text={t("about")} />
        </div>
        <div className="second-cart">
          <img src={Time} className="time-icon" alt="Time" />
          <Cart title={t("work_time")} />
          <Cart text={t("days")} />
        </div>

        <div className="third-cart">
          <img src={Clinic} className="clinic-icon" alt="Clinic" />
          <Cart title={t("servise")} />
          <Cart text={t("txt")} />
        </div>
      </div>
    </div>
  );
}
