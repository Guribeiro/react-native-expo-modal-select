import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalSelect, { Item } from '../../src/index';

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
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <View style={styles.container}>
      <ModalSelect
        label="country"
        placeholder="Select your country"
        items={countries}
        value={selectedItem}
        onChange={(item) => setSelectedItem(item)}
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
