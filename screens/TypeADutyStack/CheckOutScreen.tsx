import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';

export const CHECK_OUT_SCREEN_NAME = 'CHECK_OUT';

export default function CheckOutScreen(props: NativeStackScreenProps<any>) {
    return (
        <View style={styles.container}>
            <Text>CheckOutScreen Component works !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});