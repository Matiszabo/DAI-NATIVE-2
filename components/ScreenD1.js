import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { NavigationContext } from '../context/NavigationContext';

const ScreenD1 = () => {
  const { name, phone } = useContext(NavigationContext);

  return (
    <View style={styles.screenD}>
      <Text style={styles.text}>Nombre en Settings: {name}</Text>
      <Text style={styles.text}>Teléfono en Settings: {phone}</Text>
    </View>
  );
};

export default ScreenD1;
