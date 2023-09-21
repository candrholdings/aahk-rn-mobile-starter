import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { PANNEL_BUTTON_PADDING } from '../../styles/GlobalStyle';
import PannelButton from '../../components/PanelButton';
import { PANEL_BUTTON_MODE } from '../../types/UIType';
import { COLLECT_BAG_SCREEN_NAME } from './CollectBagScreen';
import Logger, { MethodFormat } from '../../utils/Logger';

export const TYPE_C_DUTIES_SCREEN_NAME = 'TYPE_C_DUTIES';

export default function TypeCDutiesScreen(props: NativeStackScreenProps<any>) {

    const handleToCollectBag = () => {
        Logger.log(MethodFormat(`${handleToCollectBag.name}`, ''), `${TypeCDutiesScreen.name}`);
        props.navigation.navigate(COLLECT_BAG_SCREEN_NAME);
    }

    return (
        <View style={styles.main}>
            <View style={styles.actions}>
                <PannelButton
                    label='Collect Bags'
                    mode={PANEL_BUTTON_MODE.OUTLINED}
                    onPress={handleToCollectBag}
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