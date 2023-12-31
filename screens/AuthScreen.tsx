import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text as MatText} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Logger, {MethodFormat} from '../utils/Logger';

import AAHKLogo from '../components/AAHKLogo';
import Button from '../components/Button';
import Picker, {IPickerOption} from '../components/Picker';

import {CONFIG_SCREEN_NAME} from './ConfigScreen';
import {DEMO_STACK_NAME} from './DemoStack/DemoStack';

export const AUTH_SCREEN_NAME = 'AUTH';

export default function AuthScreen(props: NativeStackScreenProps<any>) {
  const [selectedLang, setSelectedLang] = useState('');

  const LANG_OPTIONS: IPickerOption[] = [
    {
      label: '繁體中文',
      value: 'zhHK',
    },
    {
      label: 'English',
      value: 'en',
    },
  ];

  const onClickProjectName = (): void => {
    Logger.log(
      MethodFormat(`${onClickProjectName.name}`, ''),
      `${AuthScreen.name}`,
    );
    props.navigation.navigate(CONFIG_SCREEN_NAME, {});
  };

  const onSelected = (lang: IPickerOption['value']): void => {
    Logger.log(MethodFormat(`${onSelected.name}`, lang), `${AuthScreen.name}`);
    setSelectedLang(lang);
  };

  const onLogin = (): void => {
    Logger.log(MethodFormat(`${onLogin.name}`, ''), `${AuthScreen.name}`);
    props.navigation.navigate(DEMO_STACK_NAME, {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <AAHKLogo />
        <TouchableOpacity onPress={onClickProjectName}>
          <MatText variant="headlineSmall" style={styles.projectNameText}>
            AAHK STARTER
          </MatText>
        </TouchableOpacity>
      </View>
      <View style={styles.actionBox}>
        <View style={styles.pickerBox}>
          <Picker
            options={LANG_OPTIONS}
            value={selectedLang}
            onSelected={onSelected}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button label={'Login'} onPress={onLogin} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBox: {
    flex: 1,
    justifyContent: 'center',
  },
  projectNameText: {
    textAlign: 'center',
  },
  actionBox: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  pickerBox: {
    flex: 1,
    width: 300,
  },
  buttonBox: {
    flex: 1,
    width: '80%',
  },
});
