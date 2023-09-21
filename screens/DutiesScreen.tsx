import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';

export const DUTIES_SCREEN_NAME = 'DUTIES';

export default function DutiesScreen(props: NativeStackScreenProps<any>) {
    return (
        <View style={styles.container}>
            <Text>DutiesScreen Component works !</Text>
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