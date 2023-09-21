import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ScanInputWrapper from '../../components/ScanInputWrapper';
import { TYPE_A_DUTIES_SCREEN_NAME } from '../TypeADutyStack/TypeADutiesScreen';
import Logger, { MethodFormat } from '../../utils/Logger';
import { CHECK_IN_CONFIRM_SCREEN_NAME } from './CheckInConfirmScreen';
import { SCAN_TYPE } from '../../types/UIType';
import { BAG_TAG_SCAN_SCREEN_NAME } from './BagTagScanScreen';

export const RACK_ID_SCAN_SCREEN_NAME = 'CHECK_IN';

export default function RackIDScanScreen(props: NativeStackScreenProps<any>) {

    const onBack = (): void => {
        props.navigation.goBack();
    }

    const onNext = (): void => {
        Logger.log(MethodFormat(`${onNext.name}`, JSON.stringify(props.route.params)), `${RackIDScanScreen.name}`);
        props.navigation.navigate(BAG_TAG_SCAN_SCREEN_NAME, { ...props.route.params, step: 2 });
    }

    return (
        <View style={styles.main}>
            <ScanInputWrapper
                step={1}
                type={SCAN_TYPE.RACK_ID}
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