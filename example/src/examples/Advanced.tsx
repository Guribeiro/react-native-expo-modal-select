import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ModalSelect, {
  type CloseModalComponentProps,
  type Item,
  type ModalHeaderComponentProps,
  type ModalItemComponentProps,
  type PressableComponentProps,
  type EmptyIndicatorComponentProps,
} from '../../../src/index';

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

const renderPressableComponent = ({
  text,
  onOpen,
}: PressableComponentProps) => {
  return (
    <Pressable style={styles.pressable} onPress={onOpen}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const renderCloseModalComponent = ({ onClose }: CloseModalComponentProps) => {
  return (
    <Pressable onPress={onClose}>
      <Text>close</Text>
    </Pressable>
  );
};

const renderModalHeaderComponent = ({
  title,
  onCancel,
  onClose,
}: ModalHeaderComponentProps) => {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={onClose}
        style={[styles.button, { backgroundColor: 'green' }]}
      >
        <Text>close</Text>
      </Pressable>
      <Text>{title}</Text>
      <Pressable
        onPress={onCancel}
        style={[styles.button, { backgroundColor: 'blue' }]}
      >
        <Text>cancel</Text>
      </Pressable>
    </View>
  );
};

const renderEmptyIndicatorComponent = ({
  text,
}: EmptyIndicatorComponentProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Text>{text || 'empty message'}</Text>
    </View>
  );
};

const renderModalItemComponent = ({
  item,
  index,
  focused,
  onSelect,
}: ModalItemComponentProps) => {
  return (
    <Pressable
      style={[styles.item, { backgroundColor: focused ? 'blue' : 'white' }]}
      onPress={onSelect}
    >
      <Text>
        {index} - {item.label}
      </Text>
    </Pressable>
  );
};

export default function Advanced() {
  const [country, setCountry] = useState('');
  return (
    <View style={styles.container}>
      <ModalSelect
        placeholder="Select your country"
        items={countries}
        value={country}
        onChange={(value) => setCountry(value)}
        modalStyle={{ backgroundColor: 'gray' }}
        pressableComponent={renderPressableComponent}
        modalItemComponent={renderModalItemComponent}
        closeModalComponent={renderCloseModalComponent}
        modalHeaderComponent={renderModalHeaderComponent}
        emptyIndicatorComponent={renderEmptyIndicatorComponent}
      />
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

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    padding: 16,
    backgroundColor: '#ccc',
  },
  button: {
    height: 32,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  pressable: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  item: {
    height: 56,
    padding: 16,
    borderColor: '#aaa',
    borderBottomWidth: 1,
  },
});
