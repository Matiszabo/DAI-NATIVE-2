import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenD1 from './ScreenD1';
import ScreenD2 from './ScreenD2';

const StackD = createNativeStackNavigator();

const StackDNavigator = () => (
  <StackD.Navigator>
    <StackD.Screen name="ScreenD1" component={ScreenD1} />
    <StackD.Screen name="ScreenD2" component={ScreenD2} />
  </StackD.Navigator>
);

export default StackDNavigator;
