import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromGallery } from '../../store/actions';

export const PickScreen = () => {
  const [image, setImage] = useState();
  const photos = useSelector(state => state)
  const dispatch = useDispatch()

  const openGallery = () => {
    const options = {
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        dispatch(loadFromGallery(res))
        setImage(res);
      }
    });
  };
  console.log(photos, "redux store")
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.imageConrainer} onPress={openGallery}>
        <Image
          source={require('./../../assets/gallery.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.imageConrainer}>
        <Image
          source={require('./../../assets/camera.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};
