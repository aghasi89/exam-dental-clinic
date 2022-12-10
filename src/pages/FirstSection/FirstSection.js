import Car from "../../icons/car.png";
import Time from "../../icons/time.png";
import Clinic from "../../icons/clinic.png";
import Cart from "../../components/Cart";
console.log(Time, Clinic);
const days=[
  "Երկուշաբթի 10։00-21:00 ",
  "Երեքշաբթի 10։00-21:00 ",
  "Չորեքշաբթի 10։00-21:00 ",
  "     Հինգշաբթի 10։00-21:00     ",
  "     Ուրբաթ 10։00-21:00      ",
  "Շաբաթ 10։00-21:00 ",
  "Կիրակի ոչ աշխատանքային"
  ]
  const about =[
    "Այստեղ կարող եք տեսնել մեր աշխատանքները, կարդալ մեր մասին, ծանոթանալ ստամատոլոգիական ծառայությունների գնացուցակին, ինչպես նաև դիտել կլինիկան և առցանց դիմել բժշկին։" 
  ]
  const txt=[
    "Ատամների իմպլանտացիա, ատամների հեռացում, ատամների սպիտակեցում, ատամնաքարերի հեռացում, պրոթեզավորում..."
  ]
export default function FirstSection() {
  return (
    <div class="first-section" id="about">
      <div className="cart-title">
        <p>LET'S MAKE YOUR LIFE HAPPIER</p>
        <p>SMILING TOGETHER</p>
      </div>

      <div className="all-carts">
        <div className="first-cart">
          <img src={Car} className="car-icon" alt="Car" />
          <Cart title="Մեր մասին" />
          <Cart text={about}/>
        </div>
        <div className="second-cart">
          <img src={Time} className="time-icon" alt="Time" />
          <Cart title="Աշխատանքային ժամերը" />
          <Cart text={days}
       
          />
        </div>

        <div className="third-cart">
          <img src={Clinic} className="clinic-icon" alt="Clinic" />
          <Cart title="Ծառայություններ" />
          <Cart
            text={txt}
          />
        </div>
      </div>
    </div>
  );
}
