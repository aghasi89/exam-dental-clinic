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
          <Cart title="Մեր մասին" />
          <Cart text="Այստեղ կարող եք տեսնել մեր աշխատանքները, կարդալ մեր մասին, ծանոթանալ ստամատոլոգիական ծառայությունների գնացուցակին, ինչպես նաև դիտել կլինիկան և առցանց դիմել բժշկին։" />
        </div>
        <div className="second-cart">
          <img src={Time} className="time-icon" alt="Time" />
          <Cart title="Աշխատանքային ժամերը" />
          <Cart
            text="Երկ-Շբթ` 10։00-21:00
            Կիրակի` ոչ աշխատանքային"
          />
        </div>

        <div className="third-cart">
          <img src={Clinic} className="clinic-icon" alt="Clinic" />
          <Cart title="Ծառայություններ" />
          <Cart
            text="Ծառայություններ
            Ատամների իմպլանտացիա
            Ատամների հետացում
            Ատամների սպիտակեցում
            Ատամնաքարերի հեռացում
            Պրոթեզավորում..."
          />
        </div>
      </div>
    </div>
  );
}
