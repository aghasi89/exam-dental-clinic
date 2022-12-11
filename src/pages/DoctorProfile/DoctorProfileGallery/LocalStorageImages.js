import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesAction } from "../../../store/actions/ImageAction";
import { selectImages } from "../../../store/selectors/ImageSelector";

export default function useLocalStorageImages() {
  const images = useSelector(selectImages);
  console.log("images", images);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImagesAction());
  }, []);

  return images;
}
