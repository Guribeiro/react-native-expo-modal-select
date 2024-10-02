# react-native-expo-modal-select

This is customizable Modal Select for your React Native and Expo application.

## Installation

```
npm install react-native-expo-modal-select
```

or

```
yarn add react-native-expo-modal-select
```

## Usage

```js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalSelect, { Item } from 'react-native-expo-modal-select';

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

export default function Select() {
  const [country, setCountry] = useState('');
  return (
    <View style={styles.container}>
      <ModalSelect
        label="country"
        placeholder="Select your country"
        items={countries}
        value={country}
        onChange={(value) => setCountry(value)}
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

| Type   | Required | Default   |
| ------ | -------- | --------- |
| string | No       | undefined |

---

### items

array of `Item` that will be represented in modal as all the options that could be selected

| Type  | Required | Default |
| ----- | -------- | ------- |
| array | Yes      | []      |

---

### value

selected item in modal select

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | Yes      |         |

---

### placeholder

text that will be displayed inside the touchable

| Type   | Required | Default   |
| ------ | -------- | --------- |
| string | No       | undefined |

---

### touchableStyle

style object for touchable

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### touchableTextStyle

style object for text inside touchable

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### itemTouchableStyle

style object for select item touchable

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### itemTextStyle

style object for select item text

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### modalStyle

style object for customizing modal

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### modalTitleStyle

style object for modal title text

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### closeTextStyle

style object for modal close button text

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### closeModalText

style object for modal cancel button text

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | No       | Back    |

---

### cancelTextStyle

style object for modal cancel button text

| Type   | Required | Default   |
| ------ | -------- | --------- |
| object | No       | undefined |

---

### cancelTouchableText

text that will be displayed inside the cancel touchable

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | No       | Cancel  |

---

### emptyIndicatorText

text that will be displayed inside the empty indicator

| Type     | Required | Default                                  |
| -------- | -------- | ---------------------------------------- |
| function | Yes      | Sorry, there is nothing to be shown here |

---

### CloseModalComponent

text that will be displayed inside the empty indicator

| Type            | Required | Default   |
| --------------- | -------- | --------- |
| React Component | No       | undefined |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
