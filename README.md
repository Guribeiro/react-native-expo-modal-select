# react-native-modal-select

This is customizable Modal Select for your React Native and Expo application.

## Installation

```
npm install react-native-modal-select
```
or
```
yarn add react-native-modal-select
```

## Usage

```js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalSelect, { Item } from 'react-native-modal-select';

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

export default function App() {
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <View style={styles.container}>
      <ModalSelect
        label="country"
        placeholder="Select your country"
        items={countries}
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

```

## Reference

### testID
id for testing

| Type  | Required | Default |
| ----- | -------- | ------- |
| string | No      | undefined |

---

### label
display a text label for describing the select component

| Type  | Required | Default |
| ----- | -------- | ------- |
| string | No      | undefined |

---

### required
display `*` for required fields

| Type  | Required | Default |
| ----- | -------- | ------- |
| boolean | No     | undefined |

---

### items
array of `Item` that will be represented in modal as all the options that could be selected

| Type  | Required |
| ----- | -------- |
| array | Yes      |

---

### value
selected item in modal select

| Type     | Required | Default |
| -------- | -------- | ------- |
| string   | Yes      |         |

---

### placeholder
text that will be displayed inside the touchable

| Type     | Required | Default |
| -------- | -------- | ------- |
| string   | No       | undefined |

---

### touchableStyle
style object for touchable

| Type     | Required | Default |
| -------- | -------- | ------- |
| object   | No       | undefined |

---

### touchableTextStyle
style object for text inside touchable

| Type     | Required | Default |
| -------- | -------- | ------- |
| object   | No       | undefined |

---

### errorTextStyle
style object for error text

| Type     | Required | Default |
| -------- | -------- | ------- |
| object   | No       | undefined |

---

### labelStyle
style object for label text

| Type     | Required | Default |
| -------- | -------- | ------- |
| object   | No       | undefined |

---

### showErrorMessage
when false, hide the error message keeping the error style.

| Type     | Required | Default |
| -------- | -------- | ------- |
| boolean  | No       | true    |

---

### errorColor
defines the error used when has an error

| Type     | Required | Default |
| -------- | -------- | ------- |
| string   | No       | #e74c3c |

---

### cancelTouchableText
text that will be displayed inside the cancel touchable

| Type     | Required | Default |
| -------- | -------- | ------- |
| string   | No       | Cancel |

---

### emptyIndicatorText
text that will be displayed inside the empty indicator

| Type     | Required | Default |
| -------- | -------- | ------- |
| function | Yes      | Sorry, there is nothing to be shown here |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
