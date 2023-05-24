import React, { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { StyleObj } from 'src/@types/StyleObj';
import SelectItem from './Item';

export interface Item {
  label: string;
  value: string;
}

export interface ModalSelectProps {
  label?: string;
  required?: boolean;
  error?: string;
  items: Item[];
  value: string;
  placeholder?: string;
  style?: StyleObj;
  touchableStyle?: StyleObj;
  labelStyle?: StyleObj;
  onChange: (value: string) => void;
  cancelTouchableText?: string;
}

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 10,
    left: 0,
    paddingBottom: 4,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    padding: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
  closeModalText: {
    fontSize: 20,
  },
  cancelModalText: {
    color: '#e74c3c',
    fontSize: 16,
  },
  modalTitleContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  error: {
    position: 'absolute',
    textTransform: 'uppercase',
    top: -12,
    letterSpacing: 1,
    fontSize: 10,
    right: 0,
    color: 'red',
  },
});

const ModalSelect = ({
  label,
  error,
  required,
  onChange,
  items,
  placeholder,
  labelStyle,
  touchableStyle,
  cancelTouchableText = 'Cancel',
}: ModalSelectProps): JSX.Element => {
  const touchableStyleSheet = useMemo(() => {
    if (error)
      return [
        styles.touchable,
        touchableStyle,
        {
          borderColor: 'red',
        },
      ];
    return [styles.touchable, touchableStyle];
  }, [error, touchableStyle]);

  const labelStyleSheet = useMemo(() => {
    return [styles.label, labelStyle];
  }, [labelStyle]);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const handleChangeSelectedItem = useCallback(
    (item: Item) => {
      onChange(item.value);
      setSelectedItem(item);
      setModalVisibility(false);
    },
    [onChange]
  );

  const handleCancel = () => {
    setSelectedItem(undefined);
    setModalVisibility(false);
  };

  return (
    <View>
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={labelStyleSheet}>
        {label}
        {label && required && '*'}
      </Text>

      <TouchableOpacity
        style={touchableStyleSheet}
        onPress={() => setModalVisibility(true)}
      >
        <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(false)}
      >
        <SafeAreaView>
          <View style={styles.modalHeader}>
            <View style={styles.modalTitleContainer}>
              <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisibility(false)}>
              {/* <Icon name="x" /> */}
              <Text style={styles.closeModalText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelModalText}>{cancelTouchableText}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <FlatList
          data={items}
          renderItem={(info) => {
            const { item } = info;
            return (
              <SelectItem
                key={item.value}
                selected={item.value === selectedItem?.value}
                onPress={() => handleChangeSelectedItem(item)}
                {...item}
              />
            );
          }}
        />
      </Modal>
    </View>
  );
};

export default ModalSelect;
