import Clinic from "../../icons/clinic.jpg";
import Foe from "../../icons/1.jpg";
import Administracia from "../../icons/2.jpg";
import Room from "../../icons/3.jpg";
import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ForthSection() {
  var settings = useMemo(() => ({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }));

  return (
    <div class="forth-section">
      <div className="doc-chapter-price">
        <div className="doc-chapter-title-price">OUR PRICES</div>
        <div className="doc-chapter-rectangle-price"></div>
      </div>

      <div className="price-carts">
        <Slider {...settings}>
          <div className="item">
            <img src={Clinic} className="clinic" />
          </div>
          <div className="item">
            <img src={Foe} className="clinic" />
          </div>
          <div className="item">
            <img src={Administracia} className="clinic" />
          </div>
          <div className="item">
            <img src={Room} className="clinic" />
          </div>
        </Slider>
      </div>
      <div className="contact-chapter">
        <div className="contact-chapter-rectangle"></div>
        <div className="contact-chapter-title">GET CONTACT WITH US</div>
      </div>
    </div>
  );
}
