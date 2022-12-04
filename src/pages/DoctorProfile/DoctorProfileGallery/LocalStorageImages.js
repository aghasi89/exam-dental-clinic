
import FirstTeethImg from "../../../icons/first-teeth-img.jpg"
import SecondTeethImg from "../../../icons/second-teeth-img.jpg";
import ThirdTeethImg from "../../../icons/third-teeth-img.jpg";
import ForthTeethImg from "../../../icons/forth-teeth-image.jpg";
import FifthTeethImg from "../../../icons/fifth-teeth-image.jpg";
import SixthTeethImg from "../../../icons/sixth-teeth-image.jpg";
import { useMemo } from "react";

export default function LocalStorageImages() {

    const images = useMemo(()=>{
      return [ 
        FirstTeethImg,
        SecondTeethImg,
        ThirdTeethImg,
        ForthTeethImg,
        FifthTeethImg,
        SixthTeethImg
    
      ]
    },[])
    
    localStorage.setItem('image', JSON.stringify(images));
}

    
// {
      
//     images.map((image) => {
//       return <img src={image} className="teeth-images" alt="teeth-images" />
//     }, [images])
//   }