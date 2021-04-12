/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViewScreen} from './screens/view-screen';
import {PickScreen} from './screens/pick-screen';
import {TabBar} from './components/tab-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="View" component={ViewScreen} />
        <Tab.Screen name="Pick" component={PickScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
