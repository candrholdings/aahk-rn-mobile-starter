import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const SCAN_SCREEN_NAME = 'SCAN_SCREEN';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text>ScanScreen Component works !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
