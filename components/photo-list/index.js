import {Image, Text, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ListItem} from 'react-native-elements';

export const PhotoList = ({data}) => {
  const isEmptyList = Boolean(data.length === 0);
  console.log(isEmptyList);
  return (
    <ScrollView
      contentContainerStyle={isEmptyList ? styles.emptyListContainer : null}>
      {isEmptyList ? (
        <View>
          <Text style={styles.emptyListText}>
            Oops it seems the list is empty 🤭
          </Text>
          <Text style={styles.emptyListText}>Add Photos in the next tab</Text>
        </View>
      ) : (
        data.map(photo => (
          <ListItem
            key={photo}
            bottomDivider
            containerStyle={styles.listItemContainer}>
            <Image source={{uri: photo.uri}} style={styles.image} />
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{photo.time}</Text>
            </View>
          </ListItem>
        ))
      )}
    </ScrollView>
  );
};
