import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenB1 from './ScreenB1';
import ScreenB2 from './ScreenB2';

const StackB = createNativeStackNavigator();

const StackBNavigator = () => (
  <StackB.Navigator>
    <StackB.Screen name="ScreenB1" component={ScreenB1} />
    <StackB.Screen name="ScreenB2" component={ScreenB2} />
  </StackB.Navigator>
);

export default StackBNavigator;
