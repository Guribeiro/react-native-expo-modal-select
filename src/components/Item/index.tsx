import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import type { Item } from '../ModalSelect';

export interface TouchableSelectItemProps extends Item, TouchableOpacityProps {
  selected?: boolean;
}

const SelectItem = ({ label, selected, ...rest }: TouchableSelectItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && {
          backgroundColor: '#ddd',
        },
      ]}
      {...rest}
    >
      <View style={styles.textContainer}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c1c1c1',
    borderStyle: 'solid',
  },
  textContainer: {
    marginLeft: 8,
  },
});
