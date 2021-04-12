import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles';

export const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.barContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabContainer}>
            {label === 'View' && (
              <Image
                source={require('./../../assets/list.png')}
                style={
                  isFocused ? styles.tabIconActive : styles.tabIconInactive
                }
                color="red"
              />
            )}
            {label === 'Pick' && (
              <Image
                source={require('./../../assets/photo.png')}
                style={
                  isFocused ? styles.tabIconActive : styles.tabIconInactive
                }
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
