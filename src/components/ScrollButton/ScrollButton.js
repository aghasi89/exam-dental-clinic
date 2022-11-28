import {useEffect} from 'react';
import Scr from "../../icons/scr.png";
export default function ScrollButton() {
  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='scroll-state' >
    <img src={Scr} className="scroll-button" alt="DocProfileImage"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          
        }} />
     
    </div>
  );
}

