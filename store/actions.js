export const LOAD_PHOTO_FROM_GALLERY = 'LOAD_PHOTO_FROM_GALLERY';
export const LOAD_PHOTO_FROM_CAMERA = 'LOAD_PHOTO_FROM_CAMERA';
export const GET_PHOTO_GALLERY = 'GET_PHOTO_GALLERY';

export const loadFromGallery = photo => {
  return {
    type: "LOAD_PHOTO_FROM_GALLERY",
    payload: photo,
  };
};

export const loadFromCamera = photo => {
  return {
    type: "LOAD_PHOTO_FROM_CAMERA",
    payload: photo,
  };
};

export const getPhotoGallery = () => {
  return {
    type: "GET_PHOTO_GALLERY",
  };
};

export const getPhotoCamera = () => {
  return {
    type: "GET_PHOTO_CAMERA",
  };
}
