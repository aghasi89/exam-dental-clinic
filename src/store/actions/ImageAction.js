import {BRING_iMAGES, PUT_IMAGES} from "../types/ImageTypes"

const putGalleryImages=(image)=>{
    return{
        type:PUT_IMAGES,
        payload:image
    }
}
const  getImagesAction= ()=>{
return {
    type:BRING_iMAGES
}
}
export {putGalleryImages,getImagesAction}