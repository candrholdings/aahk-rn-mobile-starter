import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const API_SCREEN_NAME = 'API_SCREEN';

export default function ApiScreen() {
  return (
    <View style={styles.container}>
      <Text>ApiScreen Component works !</Text>
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
