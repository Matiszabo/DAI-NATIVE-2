import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import { NavigationContext } from '../context/NavigationContext';

const ScreenA1 = ({ navigation }) => {
  const { setName, setPhone } = useContext(NavigationContext);
  const [localName, setLocalName] = useState('');
  const [localPhone, setLocalPhone] = useState('');

  return (
    <View style={styles.screenA}>
      <Text style={styles.text}>Ingrese su Nombre y Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={localName}
        onChangeText={setLocalName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="numeric"
        value={localPhone}
        onChangeText={setLocalPhone}
      />
      <Button
        title="Enviar"
        onPress={() => {
          setName(localName);
          setPhone(localPhone);
          navigation.navigate('ScreenA2');
        }}
      />
    </View>
  );
};

export default ScreenA1;
