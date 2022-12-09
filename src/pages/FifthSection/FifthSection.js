export default function FifthSection() {
  return (
    <div class="fifth-Section">
       
        <div className="fifth-section-container" id="contact">
        <div className="fifth-section-main">
      <div className="inp-bar">
      <input
          class="inp-name"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          class="inp-mail"
          type="text"
          placeholder="E-mail"
          name="mail"
        />
        <input
          class="inp-phone"
          type="text"
          placeholder="Phone"
          name="phone"
        />
        <input
          class="inp-subject"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <input
          class="inp-messege"
          type="text"
          placeholder="Messege"
          name="messege"
        />
        <button className="fifth-sec-btn">Send Message!</button>
      </div>
      </div>
      <div className="mapping">
     
<div class="relative">
  <div class="absolute"></div>
</div>
      </div>
    </div>
    </div>
  );
}
