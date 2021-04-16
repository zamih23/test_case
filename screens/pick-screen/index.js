import React from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';

export const PickScreen = () => {
  const dispatch = useDispatch();

  const handlePressGallery = () => {
    dispatch({type: 'GET_PHOTO_GALLERY'});
  };

  const handlePressCamera = () => {
    dispatch({type: 'GET_PHOTO_CAMERA'})
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.imageConrainer}
        onPress={handlePressGallery}>
        <Image
          source={require('./../../assets/gallery.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageConrainer}
        onPress={handlePressCamera}>
        <Image
          source={require('./../../assets/camera.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
