import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ScanInputWrapper from '../../components/ScanInputWrapper';
import { TYPE_A_DUTIES_SCREEN_NAME } from '../TypeADutyStack/TypeADutiesScreen';
import Logger, { MethodFormat } from '../../utils/Logger';
import { CHECK_IN_CONFIRM_SCREEN_NAME } from './CheckInConfirmScreen';
import { SCAN_TYPE } from '../../types/UIType';

export const BAG_TAG_SCAN_SCREEN_NAME = 'BAG_TAG_SCAN';

export default function BagTagScanSreen(props: NativeStackScreenProps<any>) {

  const onBack = (): void => {
    props.navigation.goBack();
  }

  const onNext = (): void => {
    Logger.log(MethodFormat(`${onNext.name}`, JSON.stringify(props.route.params)), `${BagTagScanSreen.name}`);
    props.navigation.navigate(CHECK_IN_CONFIRM_SCREEN_NAME, props.route.params);
  }

  return (
    <View style={styles.main}>
      <ScanInputWrapper
        step={props.route.params?.step}
        type={SCAN_TYPE.BAG_TAG}
        onPressBack={onBack}
        onPressNext={onNext}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});