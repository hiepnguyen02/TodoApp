/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import LoginScreen from './src/Screen/Login/Login';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Login'}>
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen name={'Notes'}>*/}
      {/*    {props => <Notes {...props} />}*/}
      {/*  </Stack.Screen>*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
