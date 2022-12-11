import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const ServiceImageCarusel = (props, ref) => {
  const { images } = props;
  const [isPlay, setIsPlay] = useState(false);
  const contenierRef = useRef(null);
  const x = useRef(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        play: () => {
          setIsPlay((prev) => {
            return !prev;
          });
        },
      };
    },
    [isPlay]
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPlay) {
        return;
      }
      if (contenierRef.current) {
        x.current -= 5;
        contenierRef.current.style.transform = `translateX(${x.current}px)`;
      }
      return () => clearInterval(id);
    }, 55);
  }, [isPlay]);
  return (
    <div ref={contenierRef} className="carusel">
      {images.map((image) => {
        return (
          <div className="image">
            <img src={image} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default forwardRef(ServiceImageCarusel);
