import {launchCamera} from 'react-native-image-picker';

export const openCamera = () => {
  const options = {};
  return new Promise((resolve, rejected) => {
    launchCamera(options, res => {
      const time = new Date().toTimeString().split(' ')[0];
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri, time: time};
        resolve(source);
      }
    });
  });
};
