import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const DEMO_SCREEN_NAME = 'DEMO_SCREEN';

export default function DemoScreen() {
  return (
    <View style={styles.container}>
      <Text>DemoScreen Component works !</Text>
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
