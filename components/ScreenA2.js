import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { NavigationContext } from '../context/NavigationContext';

const ScreenA2 = () => {
  const { name, phone } = useContext(NavigationContext);

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
    </View>
  );
};

export default ScreenA2;
