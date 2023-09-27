import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View, Text} from 'react-native';

export const CONFIG_SCREEN_NAME = 'CONFIG';

export default function ConfigScreen(props: NativeStackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <Text>ConfigScreen Component works !</Text>
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
