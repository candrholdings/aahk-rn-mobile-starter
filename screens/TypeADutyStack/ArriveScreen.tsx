import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';

export const ARRIVE_SCREEN_NAME = 'ARRIVE';

export default function ArriveScreen(props: NativeStackScreenProps<any>) {
    return (
        <View style={styles.container}>
            <Text>ArriveScreen Component works !</Text>
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