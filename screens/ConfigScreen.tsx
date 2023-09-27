import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {TextInput as MatTextInput} from 'react-native-paper';
import {FLEX_PAGE} from '../styles/GlobalStyle';
import Picker, {IPickerOption} from '../components/Picker';
import MatButton from '../components/MatButton';
import {AUTH_SCREEN_NAME} from './AuthScreen';
import Logger, {MethodFormat} from '../utils/Logger';

export const CONFIG_SCREEN_NAME = 'CONFIG';

export default function ConfigScreen(screenProps: NativeStackScreenProps<any>) {
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
        <Picker options={languageOptions} />
      </View>
      <View style={styles.button}>
        <MatButton label="Save" onPress={onSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: FLEX_PAGE(12),
  formControl: {
    width: '100%',
    marginTop: 12,
    height: 62,
  },
  button: {
    marginTop: 'auto',
    height: 66,
  },
});
