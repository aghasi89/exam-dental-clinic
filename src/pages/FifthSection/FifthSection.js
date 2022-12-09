import Map from "../../icons/cart.jpg";
export default function FifthSection() {
  return (
    <div class="fifth-Section">
      <div className="fifth-section-container">
        <div className="fifth-section-main">
          <div className="inp-bar">
            <input
              class="inp-name"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
            />
            <input
              class="inp-mail"
              type="text"
              id="mail"
              placeholder="E-mail"
              name="mail"
            />
            <input
              class="inp-phone"
              type="text"
              id="phone"
              placeholder="Phone"
              name="phone"
            />
            <input
              class="inp-subject"
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
            />
            <input
              class="inp-messege"
              type="text"
              id="messege"
              placeholder="Messege"
              name="messege"
            />
            <button className="fifth-sec-btn" type="submit">
              Send Message!
            </button>
          </div>
        </div>
        <div className="mapping">
          <div class="relative">
            <img src={Map} className="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
