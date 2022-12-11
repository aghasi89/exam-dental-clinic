import Map from "../../icons/cart.jpg";
export default function FifthSection() {
  return (
    <div className="fifth-Section">
      <div className="fifth-section-container" id="contact">
        <div className="fifth-section-main">
          <div className="inp-bar">
            <input
              className="inp-name"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
            />
            <input
              className="inp-mail"
              type="text"
              id="mail"
              placeholder="E-mail"
              name="mail"
            />
            <input
              className="inp-phone"
              type="text"
              id="phone"
              placeholder="Phone"
              name="phone"
            />
            <input
              className="inp-subject"
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
            />
            <input
              className="inp-messege"
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
          <div className="relative">
            <img src={Map} className="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
