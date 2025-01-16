import React, { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type EmptyIndicatorProps = {
  children: ReactNode;
};

const EmptyIndicator = ({ children }: EmptyIndicatorProps): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmptyIndicator;
