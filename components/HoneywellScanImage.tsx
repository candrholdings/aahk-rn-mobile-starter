import React from 'react';
import { StyleSheet, View, Text, ViewStyle, ImageBackground } from 'react-native';

export interface IHoneywellScanImage {
    style? : ViewStyle
}

export default function HoneywellScanImage(props: IHoneywellScanImage) {
    return (
        <ImageBackground
            style={styles.main}
            source={require('../assets/images/honeywell-scanner.png')}
            resizeMode='contain'
        />
    )
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});