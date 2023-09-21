import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';

export const DELIVER_SCREEN_NAME = 'DELIVER';

export default function DeliverScreen(props: NativeStackScreenProps<any>) {
    return (
        <View style={styles.container}>
            <Text>DeliverScreen Component works !</Text>
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