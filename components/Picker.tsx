import React from 'react';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {StyleSheet, ViewStyle} from 'react-native';

export enum PICKER_MODE {
  DROPDOWN = 'dropdown',
  DIALOG = 'dialog',
}

export interface IPickerOption {
  label: string;
  value: string;
}

export interface IPicker {
  style?: ViewStyle;
  options: IPickerOption[];
  value?: any;
  mode?: PICKER_MODE;
  onSelected?: (val: IPickerOption['value']) => void;
}

export default function Picker(props: IPicker) {
  const onValueChange = (val: IPickerOption['value']): void => {
    if (props.onSelected) {
      props.onSelected(val);
    }
  };

  return (
    <RNPicker
      mode={props.mode ? props.mode : PICKER_MODE.DIALOG}
      selectedValue={props.value || props.options[0].value}
      onValueChange={onValueChange}
      style={styles.container}>
      {props.options.map((opt: IPickerOption) => {
        return (
          <RNPicker.Item label={opt.label} value={opt.value} key={opt.value} />
        );
      })}
    </RNPicker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
