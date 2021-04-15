import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';

export const PickScreen = () => {
  const dispatch = useDispatch();

  const handlePressGallery = async () => {
    dispatch({type: 'GET_PHOTO_GALLERY'});
  };
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
        onPress={() => dispatch({type: 'GET_PHOTO_CAMERA'})}>
        <Image
          source={require('./../../assets/camera.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
