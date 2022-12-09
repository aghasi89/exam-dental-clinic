import { imagesSaga } from "./imagesSaga";


export function* rootSaga(){
    yield imagesSaga()
}