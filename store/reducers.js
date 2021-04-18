import {LOAD_PHOTO_FROM_GALLERY} from './actions';

export const photos = (state = [], action) => {
  switch (action.type) {
    case LOAD_PHOTO_FROM_GALLERY:
      return [...state, action.payload];
    default:
      return state;
  }
};
