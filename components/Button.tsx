import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button as MatButton } from 'react-native-paper';
import { LARGE_BUTTON_CONTENT, LARGE_BUTTON_TEXT } from '../styles/GlobalStyle';
import { BUTTON_MODE, BUTTON_SIZE, BUTTON_TYPE } from '../types/UIType';

export interface IButton {
    style?: ViewStyle,
    type?: BUTTON_TYPE,
    mode?: BUTTON_MODE,
    size?: BUTTON_SIZE,
    label: string,
    onPress?: () => void
}

export default function Button(props: IButton) {

    const onPress = (): void => {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <MatButton
            mode={props.mode ? props.mode : BUTTON_MODE.ELEVATED}
            onPress={onPress}
            contentStyle={styles.content}
            labelStyle={styles.label}
        >
            {props.label}
        </MatButton>
    )
}

const styles = StyleSheet.create({
    content: LARGE_BUTTON_CONTENT,
    label: LARGE_BUTTON_TEXT
});