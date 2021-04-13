import {Image, SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {ListItem, Avatar} from 'react-native-elements';

export const ViewScreen = () => {
  const photos = useSelector(state => state);
  console.log(photos[0].uri);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {photos.map(photo => (
          <ListItem key={photo} bottomDivider containerStyle={{alignItems: "center", justifyContent: "center"}}>
            <Image
                source={{uri: photo.uri}}
                style={{width: 300, height: 300}}
              />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
