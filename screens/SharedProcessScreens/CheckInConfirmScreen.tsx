import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text as MatText } from "react-native-paper";
import ScanInputWrapper from '../../components/ScanInputWrapper';
import { TYPE_A_DUTIES_SCREEN_NAME } from '../TypeADutyStack/TypeADutiesScreen';
import PanelHeader from '../../components/PanelHeader';
import PanelButton from '../../components/PanelButton';
import { PANEL_BUTTON_MODE } from '../../types/UIType';
import { PANNEL_BUTTON_PADDING } from '../../styles/GlobalStyle';

export const CHECK_IN_CONFIRM_SCREEN_NAME = 'CHECK_IN_CONFIRM';

const InfoComponent = ({ label, value }: { label: string, value: string }): JSX.Element => {
  const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      paddingBottom: 8,
    },
    label: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    value: {
      fontSize: 24,
    },
  });
  return (
    <View style={styles.main}>
      <MatText style={styles.label}>{label}</MatText>
      <MatText style={styles.value}>{value}</MatText>
    </View>
  )
}

export default function CheckInConfirmScreen(props: NativeStackScreenProps<any>) {

  const onBack = (): void => {
    props.navigation.goBack();
  }

  return (
    <View style={styles.main}>
      <PanelHeader label='3. Confirm' />
      <View style={styles.content}>
        <InfoComponent label='Tran ID' value='2208230001' />
        <InfoComponent label='Tag' value='2208230001-01' />
        <InfoComponent label='Location' value='BSD' />
        <InfoComponent label='Rack' value='837' />
        <MatText style={styles.specialHandlingCodeLabel}>Special Handling Code</MatText>
        <View style={styles.specialHandlingCodeContainer}>
          <PanelButton label='OS' mode={PANEL_BUTTON_MODE.OUTLINED} style={styles.specialHandlingCodeBtn} />
          <PanelButton label='OW' mode={PANEL_BUTTON_MODE.OUTLINED} style={styles.specialHandlingCodeBtn} />
        </View>
      </View>
      <View style={styles.footer}>
        <PanelButton label='Back' mode={PANEL_BUTTON_MODE.OUTLINED} style={styles.backBtn} onPress={onBack} />
        <PanelButton label='Confirm' style={styles.confirmBtn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    flex: 7,
    padding: 16,
  },
  specialHandlingCodeLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  specialHandlingCodeContainer: {
    flexDirection: 'row',
  },
  specialHandlingCodeBtn: {
    marginTop: 12,
    marginRight: 12,
    height: 60,
    width: 120,
  },
  backBtn: {
    flex: 1,
  },
  confirmBtn: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    padding: PANNEL_BUTTON_PADDING,
    marginBottom: 6
  }
});