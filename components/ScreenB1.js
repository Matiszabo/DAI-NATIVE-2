import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { NavigationContext } from '../context/NavigationContext';

const ScreenB1 = () => {
  const { name, phone } = useContext(NavigationContext);

  return (
    <View style={styles.screenB}>
      <Text style={styles.text}>Nombre en Search: {name}</Text>
      <Text style={styles.text}>Teléfono en Search: {phone}</Text>
    </View>
  );
};

export default ScreenB1;
