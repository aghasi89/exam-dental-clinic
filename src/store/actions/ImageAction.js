import {PUT_IMAGES} from "../types/ImageTypes"

const putGalleryImages=(image)=>{
    return{
        type:PUT_IMAGES,
        payload:image
    }
}
export {putGalleryImages}