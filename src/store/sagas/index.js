import { imagesSaga } from "./imagesSaga";
import { messageSaga } from "./messageSaga";

export function* rootSaga() {
  yield imagesSaga();
  yield messageSaga();
}
