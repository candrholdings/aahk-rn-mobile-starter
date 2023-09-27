import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {
  Surface as MatSurface,
  TouchableRipple as MatTouchableRipple,
} from 'react-native-paper';
import {PANEL_BUTTON_MODE} from '../types/UIType';
import {ElevationLevels} from 'react-native-paper/lib/typescript/src/types';
import {MAT_LIGHT_THEME} from '../styles/MaterialTheme';

export interface IPanelButton {
  style?: ViewStyle;
  label: string;
  mode?: PANEL_BUTTON_MODE;
  elevate?: ElevationLevels;
  onPress?: () => void;
}

export default function PanelButton(props: IPanelButton) {
  const onPress = (): void => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <MatSurface
      style={[
        styles.surface,
        props.style,
        props.mode === PANEL_BUTTON_MODE.OUTLINED
          ? styles.outlinedSurface
          : styles.containedSurface,
      ]}
      elevation={props.elevate}>
      <MatTouchableRipple
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .32)"
        style={styles.main}>
        <Text
          style={[
            styles.text,
            props.mode === PANEL_BUTTON_MODE.OUTLINED
              ? styles.outlinedText
              : styles.containedText,
          ]}>
          {props.label}
        </Text>
      </MatTouchableRipple>
    </MatSurface>
  );
}

const styles = StyleSheet.create({
  surface: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  outlinedSurface: {
    backgroundColor: 'white',
    borderColor: MAT_LIGHT_THEME.colors.primary,
    color: MAT_LIGHT_THEME.colors.primary,
    borderWidth: 1,
  },
  containedSurface: {
    backgroundColor: MAT_LIGHT_THEME.colors.primary,
  },
  main: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  outlinedText: {
    color: MAT_LIGHT_THEME.colors.primary,
  },
  containedText: {
    color: 'white',
  },
});
