import React, { ReactElement } from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import {
    Surface as MatSurface,
    TouchableRipple as MatTouchableRipple
} from 'react-native-paper';
import { ElevationLevels } from 'react-native-paper/lib/typescript/src/types';
import { MAT_LIGHT_THEME } from '../styles/MaterialTheme';
import { MENU_ICON_SIZE } from '../styles/GlobalStyle';

export interface IMenuButton {
    style?: ViewStyle
    label: string;
    icon: ReactElement,
    elevation?: ElevationLevels,
    isActive?: boolean,
    onPress?: () => void
}

export default function MenuButton(props: IMenuButton) {

    const onPress = (): void => {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <MatSurface
            style={[styles.surface, props.style]}
            elevation={ props.elevation! > 0 ? props.elevation : 0 }
        >
            <MatTouchableRipple
                onPress={onPress}
                rippleColor='rgba(0, 0, 0, .32)'
            >
                <View style={styles.main}>
                    <View
                        style={styles.iconBox}
                    >
                        {
                            React.cloneElement(
                                props.icon,
                                { 
                                    style: props.isActive ? styles.activeLabelText : null,
                                    size: MENU_ICON_SIZE
                                }
                            )
                        }
                    </View>
                    <View
                        style={styles.labelBox}
                    >
                        <Text 
                            style={[
                                styles.labelText,
                                props.isActive ? styles.activeLabelText : null
                            ]}
                        >
                            {props.label}
                        </Text>
                    </View>
                </View>
            </MatTouchableRipple>
        </MatSurface>
    )
}

const styles = StyleSheet.create({
    surface: {
        height: '100%',
        backgroundColor: 'white'
    },
    main: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconBox: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    labelBox: {
        flex: 7,
        padding: 10
    },
    labelText: {
        fontSize: 22,
        fontWeight: '600'
    },
    activeLabelText: {
        color: MAT_LIGHT_THEME.colors.primary
    }
});