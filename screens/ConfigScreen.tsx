import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {
  TextInput as MatTextInput,
  Switch as MatSwitch,
  Text as MatText,
} from 'react-native-paper';
import {
  FLEX_PAGE,
  FORM_CONTROL_ROW,
  FORM_CONTROL_ROW_HEIGHT,
  FORM_CONTROL_ROW_MT,
} from '../styles/GlobalStyle';
import Picker, {IPickerOption} from '../components/Picker';
import MatButton from '../components/MatButton';
import {AUTH_SCREEN_NAME} from './AuthScreen';
import Logger, {MethodFormat} from '../utils/Logger';

export const CONFIG_SCREEN_NAME = 'CONFIG';

export default function ConfigScreen(screenProps: NativeStackScreenProps<any>) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const languageOptions: IPickerOption[] = [
    {
      label: '繁體中文',
      value: 'zhHK',
    },
    {
      label: 'English',
      value: 'en',
    },
  ];

  const onToggleSwitch = (): void => {
    Logger.log(
      MethodFormat(`${onToggleSwitch.name}`, `${isSwitchOn} => ${!isSwitchOn}`),
      `${ConfigScreen.name}`,
    );
    setIsSwitchOn(!isSwitchOn);
  };

  const onSave = (): void => {
    Logger.log(
      MethodFormat(`${onSave.name}`, 'to Auth Screen'),
      `${ConfigScreen.name}`,
    );
    screenProps.navigation.navigate(AUTH_SCREEN_NAME, {});
  };

  return (
    <View style={styles.page}>
      <View style={styles.formControl}>
        <MatTextInput mode={'outlined'} label="Setting1" />
      </View>
      <View style={styles.formControl}>
        <MatTextInput mode={'outlined'} label="Setting2" />
      </View>
      <View style={styles.formControl}>
        <MatTextInput mode={'outlined'} label="Setting3" />
      </View>
      <View style={styles.formControl}>
        <MatTextInput mode={'outlined'} label="Setting4" />
      </View>
      <View style={styles.formControl}>
        <MatTextInput mode={'outlined'} label="Setting5" />
      </View>
      <View style={styles.formControl}>
        <Picker options={languageOptions} />
      </View>
      <View style={styles.switchFormControl}>
        <MatText variant="titleMedium">設定開關</MatText>
        <MatSwitch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <View style={styles.button}>
        <MatButton label="Save" onPress={onSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: FLEX_PAGE(12),
  formControl: FORM_CONTROL_ROW(),
  switchFormControl: {
    marginTop: FORM_CONTROL_ROW_MT,
    height: FORM_CONTROL_ROW_HEIGHT,
    paddingLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 'auto',
    height: 66,
  },
});
