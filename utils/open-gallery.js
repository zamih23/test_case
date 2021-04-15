import {launchImageLibrary} from 'react-native-image-picker';

export const openGallery = () => {
  const options = {};
  return new Promise((resolve, rejected) => {
    launchImageLibrary(options, res => {
      const time = new Date().toTimeString().split(' ')[0];
      if (res.didCancel) {
        rejected('User cancelled image picker');
      } else if (res.error) {
        rejected('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        rejected('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri, time: time};
        resolve(source);
      }
    });
  });
};
