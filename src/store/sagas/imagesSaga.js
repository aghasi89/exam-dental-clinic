import { takeLatest, put } from "redux-saga/effects";
import { putGalleryImages } from "../actions/ImageAction";
import { BRING_iMAGES } from "../types/ImageTypes";
function* GetGalleryImages() {
  console.log("function of Saga");
  try {
    const json = yield localStorage.getItem("images");
    if (json) {
      const images = JSON.parse(json);
      yield put(putGalleryImages(images));
    } else {
      const _images = [
        "images/first-teeth-img.jpg",
        "images/second-teeth-img.jpg",
        "images/third-teeth-img.jpg",
      ];
      yield localStorage.setItem("images", JSON.stringify(_images));

      yield put(putGalleryImages(_images));
    }
  } catch (error) {}
}

export function* imagesSaga() {
  console.log("get request");
  yield takeLatest(BRING_iMAGES, GetGalleryImages);
}
