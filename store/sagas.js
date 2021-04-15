import {call, put, takeEvery} from 'redux-saga/effects';
import {openCamera} from '../utils/open-camera';
import {openGallery} from '../utils/open-gallery';
import {loadFromCamera, loadFromGallery} from './actions';

function* choosePhoto() {
  try {
    const photo = yield call(openGallery);
    yield put(loadFromGallery(photo));
  } catch {
    console.log('ERROR DURING CHOOSING');
  }
}

function* takePhoto() {
  try {
    const photo = yield call(openCamera);
    yield put(loadFromCamera(photo));
  } catch {
    console.log('ERROR DURING TAKING PHOTO');
  }
}

export function* uploadFromGallery() {
  yield takeEvery('GET_PHOTO_GALLERY', choosePhoto);
}

export function* uploadFromCamera() {
  yield takeEvery('GET_PHOTO_CAMERA', takePhoto);
}
