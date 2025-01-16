import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type StyleObj = StyleProp<ViewStyle | TextStyle>;

export interface Item {
  label: string;
  value: string;
}

export type CloseModalEvent = {
  onClose: () => void;
};

export type CancelModalEvent = {
  onCancel: () => void;
};

export type OpenModalEvent = {
  onOpen: () => void;
};

export type SelectItemEvent = {
  onSelect: () => void;
};

export type CloseModalComponentProps = CloseModalEvent;

interface TextProp {
  text: string;
}

export type CancelModalComponentProps = TextProp & CancelModalEvent;
export type PressableComponentProps = Partial<TextProp> & OpenModalEvent;

export type ModalHeaderComponentProps = CancelModalEvent &
  CloseModalEvent & {
    title?: string;
  };

export type EmptyIndicatorComponentProps = TextProp;

export type ModalItemComponentProps = SelectItemEvent & {
  item: Item;
  index: number;
  focused: boolean;
};

export type ModalSelectBaseProps = {
  items: Item[];
  value: string;
  onChange: (value: string) => void;
};

export type ModalSelectComponents = {
  closeModalComponent?: React.FC<CloseModalComponentProps>;
  cancelModalComponent?: React.FC<CancelModalComponentProps>;
  pressableComponent?: React.FC<PressableComponentProps>;
  modalHeaderComponent?: React.FC<ModalHeaderComponentProps>;
  emptyIndicatorComponent?: React.FC<EmptyIndicatorComponentProps>;
  modalItemComponent?: React.FC<ModalItemComponentProps>;
};

export type ModalSelectStyles = {
  modalStyle?: StyleProp<ViewStyle>;
};

export type ModalSelectProps = ModalSelectBaseProps &
  ModalSelectComponents &
  ModalSelectStyles & {
    testID?: string;
    placeholder?: string;
    emptyIndicatorText?: string;
    closeModalText?: string;
    cancelTouchableText?: string;
  };
