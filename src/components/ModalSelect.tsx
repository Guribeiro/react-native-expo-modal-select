import { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import type { Item, ModalSelectProps } from 'src/types';
import EmptyIndicator from './EmptyIndicator';
import SelectItem from './Item';

const ModalSelect = ({
  testID,
  placeholder,
  items,
  cancelTouchableText = 'cancel',
  emptyIndicatorText = 'Sorry, there is nothing to be shown here',
  closeModalText = 'Back',
  onChange,
  value,
  modalStyle,
  closeModalComponent,
  cancelModalComponent,
  pressableComponent,
  modalHeaderComponent,
  emptyIndicatorComponent,
  modalItemComponent,
}: ModalSelectProps): JSX.Element => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    items.find((item) => item.value === value)
  );

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

  const modalStyles = useMemo(() => {
    return [styles.modal, modalStyle];
  }, [modalStyle]);

  return (
    <View testID={testID}>
      {pressableComponent ? (
        pressableComponent({
          text: selectedItem ? selectedItem.label : placeholder,
          onOpen: () => setModalVisibility(true),
        })
      ) : (
        <Pressable onPress={() => setModalVisibility(true)}>
          <Text testID="text-placeholder">
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        </Pressable>
      )}

      <Modal
        animationType="slide"
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(false)}
      >
        <View style={modalStyles}>
          <SafeAreaView>
            {modalHeaderComponent ? (
              modalHeaderComponent({
                onClose: () => setModalVisibility(false),
                onCancel: handleCancel,
                title: selectedItem ? selectedItem.label : placeholder,
              })
            ) : (
              <View style={styles.modalHeader}>
                <View style={styles.modalTitleContainer}>
                  <Text>
                    {selectedItem ? selectedItem.label : placeholder}{' '}
                  </Text>
                </View>
                {closeModalComponent ? (
                  closeModalComponent({
                    onClose: () => setModalVisibility(false),
                  })
                ) : (
                  <Pressable onPress={() => setModalVisibility(false)}>
                    <Text style={styles.closeModalText}>{closeModalText}</Text>
                  </Pressable>
                )}

                {cancelModalComponent ? (
                  cancelModalComponent({
                    onCancel: handleCancel,
                    text: cancelTouchableText,
                  })
                ) : (
                  <Pressable onPress={handleCancel}>
                    <Text style={styles.cancelModalText}>
                      {cancelTouchableText}
                    </Text>
                  </Pressable>
                )}
              </View>
            )}
          </SafeAreaView>
          {!items.length ? (
            <>
              {emptyIndicatorComponent ? (
                emptyIndicatorComponent({
                  text: emptyIndicatorText,
                })
              ) : (
                <EmptyIndicator>
                  <Text>{emptyIndicatorText}</Text>
                </EmptyIndicator>
              )}
            </>
          ) : (
            <FlatList
              data={items}
              renderItem={(info) => {
                const { item, index } = info;
                return (
                  <>
                    {modalItemComponent ? (
                      modalItemComponent({
                        item,
                        index,
                        focused: selectedItem?.value === item.value,
                        onSelect: () => handleChangeSelectedItem(item),
                      })
                    ) : (
                      <SelectItem
                        key={item.value}
                        onPress={() => handleChangeSelectedItem(item)}
                        {...item}
                      />
                    )}
                  </>
                );
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ModalSelect;
