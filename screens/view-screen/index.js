import {SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {PhotoList} from '../../components/photo-list';

export const ViewScreen = () => {
  const photos = useSelector(state => state);
  
  return (
    <SafeAreaView style={styles.container}>
      <PhotoList data={photos} />
    </SafeAreaView>
  );
};
