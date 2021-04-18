import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';

export const PickScreen = () => {
  const dispatch = useDispatch();

  const handlePressGallery = () => {
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
      <Text style={styles.text}>Press to choose photo</Text>
    </SafeAreaView>
  );
};
