import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View, Alert} from 'react-native';
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
  const [formData, setFormData] = useState({
    settingOne: '',
    settingTwo: '',
    settingThree: '',
    settingFour: '',
    settingFive: '',
    selection: '',
    switch: false,
  });
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

  const handleFormTextChange = (e: any, formCtrName: string) => {
    // * Check formCtrlName is valid
    if (!(formCtrName in formData)) {
      Logger.log(
        MethodFormat(
          `${handleFormTextChange.name}`,
          `FomCtrlName: ${formCtrName} is not set in formData`,
        ),
        `${ConfigScreen.name}`,
      );
      Alert.alert(
        '[ DEV ERROR ]',
        `FomCtrlName: ${formCtrName} is not set in formData`,
      );
      return;
    }
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [formCtrName]: e.nativeEvent.text,
      };
    });
  };

  const onToggleSwitch = (): void => {
    console.log('Hello');
    Logger.log(
      MethodFormat(`${onToggleSwitch.name}`, `${isSwitchOn} => ${!isSwitchOn}`),
      `${ConfigScreen.name}`,
    );
    setIsSwitchOn(!isSwitchOn);
  };

  const onSave = (): void => {
    Logger.log(
      MethodFormat(`${onSave.name}`, `${JSON.stringify(formData, null, 4)}`),
      `${ConfigScreen.name}`,
    );
    screenProps.navigation.navigate(AUTH_SCREEN_NAME, {});
  };

  return (
    <View style={styles.page}>
      <View style={styles.formControl}>
        <MatTextInput
          data-set="setting1"
          mode={'outlined'}
          label="Setting1"
          left={<MatTextInput.Icon icon="application-cog-outline" />}
          value={formData.settingOne}
          onChange={e => handleFormTextChange(e, 'settingOne')}
        />
      </View>
      <View style={styles.formControl}>
        <MatTextInput
          mode={'outlined'}
          label="Setting2"
          left={<MatTextInput.Icon icon="cog-box" />}
          value={formData.settingTwo}
          onChange={e => handleFormTextChange(e, 'settingTwo')}
        />
      </View>
      <View style={styles.formControl}>
        <MatTextInput
          mode={'outlined'}
          label="Setting3"
          left={<MatTextInput.Icon icon="cog-box" />}
          value={formData.settingThree}
          onChange={e => handleFormTextChange(e, 'settingThree')}
        />
      </View>
      <View style={styles.formControl}>
        <MatTextInput
          mode={'outlined'}
          label="Setting4"
          left={<MatTextInput.Icon icon="cog-box" />}
          value={formData.settingFour}
          onChange={e => handleFormTextChange(e, 'settingFour')}
        />
      </View>
      <View style={styles.formControl}>
        <MatTextInput
          mode={'outlined'}
          label="Setting5"
          left={<MatTextInput.Icon icon="cog-box" />}
          value={formData.settingFive}
          onChange={e => handleFormTextChange(e, 'settingFive')}
        />
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
