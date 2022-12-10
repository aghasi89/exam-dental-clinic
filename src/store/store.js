import {applyMiddleware, createStore} from "redux";
import createSaga from 'redux-saga';
import ImageReducer from "./reducers/ImageReducer";
import { rootSaga } from "./sagas";
const middle= createSaga();
const store=createStore(ImageReducer,applyMiddleware(middle));

middle.run(rootSaga)

export default store;