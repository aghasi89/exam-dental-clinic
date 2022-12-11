import ServiceImageCarusel from "../../../components/ServiceImageCarusel";
import { useCallback, useRef } from "react";

const images = [
  "https://avrorasochi.ru/upload/medialibrary/bb5/ustanovka_koronok.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7pKsputw7W2gxJfVLYAEJ99atehI_qm3IPf6G_xe133aCq0vr8DFGQp9cOg1_fHxVCc&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHcGtNaM9mAfSGZx4CI9JT-yyagbvWwQkKfj4zUr7u9qsU4clrLZ7x8ZqVS60c4A8gLk&usqp=CAU",
  "https://stomadeus.ck.ua/wp-content/uploads/2020/01/udal.zuba-mudrosty.jpg",
];

export default function SeviceProfileImages() {
  const caruselRef = useRef();
  const playHandler = useCallback(() => {
    if (caruselRef.current) {
      caruselRef.current.play();
    }
  }, []);

  return (
    <div className="Service-imag-carusel">
      <ServiceImageCarusel ref={caruselRef} images={images} />
      <button onClick={playHandler}>Play</button>
    </div>
  );
}
