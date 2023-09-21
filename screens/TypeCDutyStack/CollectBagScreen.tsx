import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text as MatText, IconButton as MatIconButton, IconButton } from "react-native-paper";
import PanelButton from '../../components/PanelButton';
import PanelHeader from '../../components/PanelHeader';
import { PANNEL_BUTTON_PADDING } from '../../styles/GlobalStyle';
import { ILocationOption } from '../../types/LocationType';
import { PANEL_BUTTON_MODE } from '../../types/UIType';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const COLLECT_BAG_SCREEN_NAME = 'COLLECT_BAG';

const InfoComponent = ({ label, value, onClick }: { label: string, value: string, onClick?: (v: string) => {} }): JSX.Element => {
    const styles = StyleSheet.create({
        main: {
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            paddingBottom: 16,
        },
        labelText: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        labelContainer: {
            flexDirection: 'row',
        },
        value: {
            fontSize: 24,
        },
        icon: {
            margin: 0,
            padding: 0,
            marginLeft: 14,
            height: 32,
            width: 32,
        }
    });
    return (
        <View style={styles.main}>
            <MatText style={styles.labelText}>{label}</MatText>
            <View style={styles.labelContainer}>
                <MatText style={styles.labelText}>{value}</MatText>
                <IconButton icon='close-circle' size={32} style={styles.icon} onPress={() => onClick && onClick(value)} />
            </View>
        </View>
    )
}

export default function CollectBagScreen(props: NativeStackScreenProps<any>) {
    const location: ILocationOption = props.route?.params?.location ? props.route.params.location : 'UNKNOWN LOCATION';

    const onBack = (): void => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.main}>
            <PanelHeader label='2. Create Temp' />
            <View style={styles.content}>
                <InfoComponent label='1.' value='SF1234567890' />
                <InfoComponent label='2.' value='SF1234567890' />
                <InfoComponent label='3.' value='SF1234567890' />
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