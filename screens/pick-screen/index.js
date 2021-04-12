import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

export const PickScreen = () => {
  const [image, setImage] = useState();

  const openGallery = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
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
        setImage(res);
      }
    });
  };
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
