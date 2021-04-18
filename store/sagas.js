import {call, put, takeEvery} from 'redux-saga/effects';
import {openGallery} from '../utils/open-gallery';
import {loadFromGallery} from './actions';

function* choosePhoto() {
  try {
    const photo = yield call(openGallery);
    yield put(loadFromGallery(photo));
  } catch {
    console.log('ERROR DURING CHOOSING');
  }
}

export function* uploadFromGallery() {
  yield takeEvery('GET_PHOTO_GALLERY', choosePhoto);
}

