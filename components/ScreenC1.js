import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { NavigationContext } from '../context/NavigationContext';

const ScreenC1 = () => {
  const { name, phone } = useContext(NavigationContext);

  return (
    <View style={styles.screenC}>
      <Text style={styles.text}>Nombre en Profile: {name}</Text>
      <Text style={styles.text}>Teléfono en Profile: {phone}</Text>
    </View>
  );
};

export default ScreenC1;
