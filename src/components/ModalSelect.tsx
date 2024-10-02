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
  placeholder?: string;
  items: Item[];
  value: string;
  touchableStyle?: StyleObj;
  itemTouchableStyle?: StyleObj & { selectedColor?: string };
  itemTextStyle?: StyleObj & { selectedColor?: string };
  touchableTextStyle?: StyleObj;
  modalStyle?: StyleObj;
  modalTitleStyle?: StyleObj;
  cancelTouchableText?: string;
  closeTextStyle?: StyleObj;
  cancelTextStyle?: StyleObj;
  emptyIndicatorText?: string;
  closeModalText?: string;
  onChange: (value: string) => void;
  CloseModalComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
}

const ModalSelect = ({
  testID,
  placeholder,
  items,
  touchableStyle,
  touchableTextStyle,
  itemTouchableStyle,
  itemTextStyle,
  modalStyle,
  modalTitleStyle,
  cancelTouchableText = 'Cancel',
  closeTextStyle,
  cancelTextStyle,
  emptyIndicatorText = 'Sorry, there is nothing to be shown here',
  closeModalText = 'Back',
  onChange,
  value,
  CloseModalComponent,
}: ModalSelectProps): JSX.Element => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    items.find((item) => item.value === value)
  );

  const styles = StyleSheet.create({
    touchable: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderWidth: StyleSheet.hairlineWidth,
    },
    touchableText: {
      fontSize: 14,
    },
    modal: {
      flex: 1,
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: 16,
    },
    closeModalText: {
      fontSize: 16,
    },
    cancelModalText: {
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
    },
  });

  const touchableStyleSheet = useMemo(() => {
    return [styles.touchable, touchableStyle];
  }, [styles.touchable, touchableStyle]);

  const touchableTextStyleSheet = useMemo(() => {
    return [styles.touchableText, touchableTextStyle];
  }, [styles.touchableText, touchableTextStyle]);

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
        <View style={[styles.modal, modalStyle]}>
          <SafeAreaView>
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleContainer}>
                <Text style={modalTitleStyle}>
                  {selectedItem ? selectedItem.label : placeholder}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisibility(false)}>
                {CloseModalComponent ? (
                  CloseModalComponent
                ) : (
                  <Text style={[styles.closeModalText, closeTextStyle]}>
                    {closeModalText}
                  </Text>
                )}
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
