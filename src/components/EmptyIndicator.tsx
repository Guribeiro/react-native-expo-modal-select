import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface EmptyIndicatorProps {
  children: ReactNode;
}

const EmptyIndicator = ({ children }: EmptyIndicatorProps): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default EmptyIndicator;
