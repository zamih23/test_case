export const LOAD_PHOTO_FROM_GALLERY = "LOAD_PHOTO_FROM_GALLERY";
export const LOAD_PHOTO_FROM_CAMERA = "LOAD_PHOTO_FROM_CAMERA";

export const loadFromGallery = (photo) => {
  return {
    type: LOAD_PHOTO_FROM_GALLERY,
    payload: photo
  };
};

export const loadFromCamera = (photo) => {
    return {
      type: LOAD_PHOTO_FROM_CAMERA,
      payload: photo
    };
  };