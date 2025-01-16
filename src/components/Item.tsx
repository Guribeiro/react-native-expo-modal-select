import type { Item } from '@/types';
import React from 'react';
import { Pressable, type PressableProps, StyleSheet, Text } from 'react-native';

export type TouchableSelectItemProps = Item & PressableProps;

const SelectItem = ({ label, ...rest }: TouchableSelectItemProps) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c1c1c1',
    borderStyle: 'solid',
  },
  label: {
    marginLeft: 8,
  },
});

export default SelectItem;
