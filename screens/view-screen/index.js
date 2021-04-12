import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>View Photos</Text>
    </SafeAreaView>
  );
};
