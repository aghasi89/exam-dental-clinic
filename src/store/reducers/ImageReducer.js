import {PUT_IMAGES} from "../types/ImageTypes"

const INIT_STATE={
    image: null
}

export default function ImageReducer (state=INIT_STATE, action) {
    const {type, payload} = action
    switch (type){
        case PUT_IMAGES.setImage:
            return { ...state, image: payload}
            default:
                return state
    }
} 

export {putGalleryImages}