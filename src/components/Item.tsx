import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import type { Item } from './ModalSelect';
import type { StyleObj } from 'src/@types/StyleObj';

export interface TouchableSelectItemProps extends Item, TouchableOpacityProps {
  selected?: boolean;
  itemTouchableStyle?: StyleObj & { selectedColor?: string };
  itemTextStyle?: StyleObj & { selectedColor?: string };
}

const SelectItem = ({
  label,
  selected,
  itemTouchableStyle,
  itemTextStyle,
  ...rest
}: TouchableSelectItemProps) => {
  const itemTouchableStyleSheet = useMemo(() => {
    return selected
      ? [
          styles.container,
          itemTouchableStyle,
          { backgroundColor: itemTouchableStyle?.selectedColor },
        ]
      : [styles.container, itemTouchableStyle];
  }, [itemTouchableStyle, selected]);

  const itemTextStyleSheet = useMemo(() => {
    return selected
      ? [
          styles.textContainer,
          itemTextStyle,
          { color: itemTextStyle?.selectedColor },
        ]
      : [styles.textContainer, itemTextStyle];
  }, [itemTextStyle, selected]);

  return (
    <TouchableOpacity
      style={[styles.container, itemTouchableStyleSheet]}
      {...rest}
    >
      <Text style={[styles.textContainer, itemTextStyleSheet]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c1c1c1',
    borderStyle: 'solid',
  },
  textContainer: {
    marginLeft: 8,
  },
});
