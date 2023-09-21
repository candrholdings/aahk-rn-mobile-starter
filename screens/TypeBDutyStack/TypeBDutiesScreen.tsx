import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { PANNEL_BUTTON_PADDING } from '../../styles/GlobalStyle';
import PannelButton from '../../components/PanelButton';
import { PANEL_BUTTON_MODE } from '../../types/UIType';
import { RACK_ID_SCAN_SCREEN_NAME } from '../SharedProcessScreens/RackIDScanScreen';
import { DELIVER_SCREEN_NAME } from '../SharedProcessScreens/DeliverScreen';
import Logger, { MethodFormat } from '../../utils/Logger';

export const TYPE_B_DUTIES_SCREEN_NAME = 'TYPE_B_DUTIES';

export default function TypeBDutiesScreen(props: NativeStackScreenProps<any>) {

    const handlePressCheckIn = () => {
        Logger.log(MethodFormat(`${handlePressCheckIn.name}`, ''), `${TypeBDutiesScreen.name}`);
        props.navigation.navigate(RACK_ID_SCAN_SCREEN_NAME);
    }

    const handlePressDeliver = () => {
        Logger.log(MethodFormat(`${handlePressDeliver.name}`, ''), `${TypeBDutiesScreen.name}`);
        props.navigation.navigate(DELIVER_SCREEN_NAME);
    }

    return (
        <View style={styles.main}>
            <View style={styles.actions}>
                <PannelButton
                    label='Check In'
                    mode={PANEL_BUTTON_MODE.OUTLINED}
                    onPress={handlePressCheckIn}
                />
            </View>
            <View style={styles.actions}>
                <PannelButton
                    label='Deliver to HKIA'
                    mode={PANEL_BUTTON_MODE.OUTLINED}
                    onPress={handlePressDeliver}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    actions: {
        flex: 1,
        padding: PANNEL_BUTTON_PADDING,
        backgroundColor: '#fff',
        maxHeight: 120
    }
});