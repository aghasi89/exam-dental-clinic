import { PUT_IMAGES } from "../types/ImageTypes"

const INIT_STATE={
    image: []
}

export default function ImageReducer (state=INIT_STATE, action) {
    const {type, payload} = action
    switch (type){
        case PUT_IMAGES:
            return { ...state, image: payload}
            default:
                return state
    }
} 

