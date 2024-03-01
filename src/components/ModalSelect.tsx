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

import type { StyleObj } from '../@types/StyleObj';
import EmptyIndicator from './EmptyIndicator';
import SelectItem from './Item';

export interface Item {
  label: string;
  value: string;
}

export interface ModalSelectProps {
  testID?: string;
  label?: string;
  error?: string;
  showErrorMessage?: boolean;
  errorColor?: string;
  required?: boolean;
  placeholder?: string;
  items: Item[];
  value: string;
  labelStyle?: StyleObj;
  touchableStyle?: StyleObj;
  itemTouchableStyle?: StyleObj & { selectedColor?: string };
  itemTextStyle?: StyleObj & { selectedColor?: string };
  touchableTextStyle?: StyleObj;
  modalStyle?: StyleObj;
  modalTitleStyle?: StyleObj;
  errorTextStyle?: StyleObj;
  cancelTouchableText?: string;
  closeTextStyle?: StyleObj;
  cancelTextStyle?: StyleObj;
  emptyIndicatorText?: string;
  onChange: (value: string) => void;
}

const ModalSelect = ({
  testID,
  label,
  error,
  showErrorMessage = true,
  errorColor = '#e74c3c',
  required,
  placeholder,
  items,
  labelStyle,
  touchableStyle,
  touchableTextStyle,
  itemTouchableStyle,
  itemTextStyle,
  modalStyle,
  modalTitleStyle,
  errorTextStyle,
  cancelTouchableText = 'Cancel',
  closeTextStyle,
  cancelTextStyle,
  emptyIndicatorText = 'Sorry, there is nothing to be shown here',
  onChange,
  value,
}: ModalSelectProps): JSX.Element => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    items.find((item) => item.value === value)
  );

  const styles = useMemo(() => {
    return StyleSheet.create({
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
        padding: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000',
        borderStyle: 'solid',
      },
      touchableText: {
        fontSize: 14,
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
        color: `${errorColor}`,
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
        letterSpacing: 1,
        fontSize: 10,
        right: 0,
        color: `${errorColor}`,
      },
    });
  }, [errorColor]);

  const touchableStyleSheet = useMemo(() => {
    return error
      ? [
          styles.touchable,
          touchableStyle,
          {
            borderColor: `${errorColor}`,
          },
        ]
      : [styles.touchable, touchableStyle];
  }, [error, touchableStyle, styles.touchable, errorColor]);

  const labelStyleSheet = useMemo(() => {
    return error
      ? [
          styles.label,
          labelStyle,
          {
            color: `${errorColor}`,
          },
        ]
      : [styles.label, labelStyle];
  }, [styles.label, labelStyle, error, errorColor]);

  const touchableTextStyleSheet = useMemo(() => {
    return error
      ? [
          styles.touchableText,
          touchableTextStyle,
          {
            color: `${errorColor}`,
          },
        ]
      : [styles.touchableText, touchableTextStyle];
  }, [styles.touchableText, touchableTextStyle, error, errorColor]);

  const errorTextStyleSheet = useMemo(() => {
    return [styles.error, errorTextStyle];
  }, [styles.error, errorTextStyle]);

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
    <View testID={testID}>
      {error && showErrorMessage && (
        <Text testID="text-error" style={errorTextStyleSheet}>
          {error}
        </Text>
      )}
      <Text style={labelStyleSheet}>
        {label}
        {label && required && '*'}
      </Text>

      <TouchableOpacity
        style={touchableStyleSheet}
        onPress={() => setModalVisibility(true)}
      >
        <Text testID="text-placeholder" style={touchableTextStyleSheet}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(false)}
      >
        <View style={[{ flex: 1 }, modalStyle]}>
          <SafeAreaView>
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleContainer}>
                <Text style={modalTitleStyle}>
                  {selectedItem ? selectedItem.label : placeholder}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisibility(false)}>
                <Text style={[styles.closeModalText, closeTextStyle]}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={[styles.cancelModalText, cancelTextStyle]}>
                  {cancelTouchableText}
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          {!items.length ? (
            <EmptyIndicator>
              <Text>{emptyIndicatorText}</Text>
            </EmptyIndicator>
          ) : (
            <FlatList
              data={items}
              renderItem={(info) => {
                const { item } = info;
                return (
                  <SelectItem
                    key={item.value}
                    selected={item.value === selectedItem?.value}
                    onPress={() => handleChangeSelectedItem(item)}
                    itemTouchableStyle={itemTouchableStyle}
                    itemTextStyle={itemTextStyle}
                    {...item}
                  />
                );
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default ModalSelect;
