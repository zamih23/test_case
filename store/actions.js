export const LOAD_PHOTO_FROM_GALLERY = 'LOAD_PHOTO_FROM_GALLERY';
export const GET_PHOTO_GALLERY = 'GET_PHOTO_GALLERY';

export const loadFromGallery = photo => {
  return {
    type: "LOAD_PHOTO_FROM_GALLERY",
    payload: photo,
  };
};

export const getPhotoGallery = () => {
  return {
    type: "GET_PHOTO_GALLERY",
  };
};
