import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Item, ModalSelect } from '../src/index';

const items: Item[] = [
  {
    label: 'Fulano',
    value: 'Fulano',
  },
  {
    label: 'Fulano 2',
    value: 'Fulano 2',
  },
  {
    label: 'Fulano 3',
    value: 'Fulano 3',
  },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  return (
    <View style={styles.container}>
      <ModalSelect
        label="label"
        required
        placeholder="Selecione uma opção"
        items={items}
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
