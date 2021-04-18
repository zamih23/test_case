/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViewScreen} from './screens/view-screen';
import {PickScreen} from './screens/pick-screen';
import {TabBar} from './components/tab-bar';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {photos} from './store/reducers';
import {uploadFromGallery} from './store/sagas';
import SplashScreen from  "react-native-splash-screen";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(photos, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(uploadFromGallery);

const Tab = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="View" component={ViewScreen} />
          <Tab.Screen name="Pick" component={PickScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
