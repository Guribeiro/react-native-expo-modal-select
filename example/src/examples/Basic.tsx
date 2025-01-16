import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalSelect, { type Item } from '../../../src/index';

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
      <View style={styles.modalWrapper}>
        <ModalSelect
          placeholder="Select your country"
          items={countries}
          value={country}
          onChange={(value) => setCountry(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ddd',
    padding: 16,
  },
  modalWrapper: {
    borderWidth: 1,
    borderColor: '#111',
    borderStyle: 'solid',
    padding: 12,
  },
});
