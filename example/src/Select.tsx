import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalSelect, { Item } from 'react-native-expo-modal-select';

const countries: Item[] = [
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'EUA',
    value: 'eua',
  },
  {
    label: 'Canada',
    value: 'canada',
  },
];

export default function Select() {
  const [country, setCountry] = useState('');
  return (
    <View style={styles.container}>
      <ModalSelect
        label="country"
        placeholder="Select your country"
        items={countries}
        value={country}
        onChange={(value) => setCountry(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ddd',
  },
});
