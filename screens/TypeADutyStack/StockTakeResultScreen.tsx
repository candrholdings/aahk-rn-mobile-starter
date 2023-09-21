import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { Text as MatText } from "react-native-paper";
import PanelHeader from '../../components/PanelHeader';
import { PANNEL_BUTTON_PADDING } from '../../styles/GlobalStyle';
import PanelButton from '../../components/PanelButton';
import { ERROR_COLOR, MODAL_ICON_SIZE, PANEL_BUTTON_MODE } from '../../types/UIType';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const STOCK_TAKE_RESULT_SCREEN_NAME = 'STOCK_TAKE_RESULT';

const InfoComponent = ({ label, value, type }: { label: string, value: string, type?: string }): JSX.Element => {
    const styles = StyleSheet.create({
        main: {
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            paddingBottom: 8,
        },
        labelText: {
            fontSize: 24,
        },
        labelIcon: {
            paddingRight: 14,
        },
        labelContainer: {
            flexDirection: 'row',
        },
        value: {
            fontSize: 24,
        },
    });
    return (
        <View style={styles.main}>
            <View style={styles.labelContainer}>
                <MatComIcon style={styles.labelIcon} name='close-circle' size={32} color={ERROR_COLOR} />
                <MatText style={styles.labelText}>{label}</MatText>
            </View>
            <MatText style={styles.value}>{value}</MatText>
        </View>
    )
}

export default function StockTakeScreen(props: NativeStackScreenProps<any>) {

    const onBack = (): void => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <PanelHeader label='Result' />
            <View style={styles.content}>
                <View style={styles.resultTitleContainer}>
                    <MatText style={{ ...styles.resultTitleTag, ...styles.resultTitle }}>Tag</MatText>
                    <MatText style={styles.resultTitle}>Rack</MatText>
                </View>
                <InfoComponent label='2208230001-01' value='BSD' />
                <InfoComponent label='2208230001-02' value='BSD' />
                <InfoComponent label='2208230001-03' value='BSD' />
                <InfoComponent label='2208230001-04' value='837' />
            </View>

            <View style={styles.footer}>
                <PanelButton label='Scan Rack' mode={PANEL_BUTTON_MODE.OUTLINED} style={styles.backBtn} onPress={onBack} />
                <PanelButton label='Scan Bag' style={styles.confirmBtn} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 7,
        padding: 16,
    },

    resultTitleContainer: {
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resultTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    resultTitleTag: {
        paddingLeft: 44,
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