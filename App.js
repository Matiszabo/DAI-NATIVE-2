import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/MyTabs';
import { NavigationProvider } from './context/NavigationContext';

const App = () => (
  <NavigationProvider>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  </NavigationProvider>
);

export default App;
