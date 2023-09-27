import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {BUTTON_MODE} from '../types/UIType';

export interface IMatButton {
  label: string;
  mode?: BUTTON_MODE;
  onPress?: () => void;
}

export default function MatButton(props: IMatButton) {
  const onPress = (): void => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <Button
      mode={props.mode ? props.mode : BUTTON_MODE.ELEVATED}
      contentStyle={styles.defaultContentStyle}
      labelStyle={styles.defaultLabelStyle}
      onPress={onPress}>
      {props.label}
    </Button>
  );
}

const styles = StyleSheet.create({
  defaultContentStyle: {
    padding: 8,
  },
  defaultLabelStyle: {
    fontSize: 18,
  },
});
