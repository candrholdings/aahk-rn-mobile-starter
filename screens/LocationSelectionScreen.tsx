import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PannelButton from '../components/PanelButton';
import { PANEL_BUTTON_MODE } from '../types/UIType';
import { PANNEL_BUTTON_PADDING } from '../styles/GlobalStyle';
import { ILocationOption } from '../types/LocationType';
import { TYPE_C_DUTIES_STACK_SCREEN_NAME } from './TypeCDutyStack/TypeCDutiesStack';
import { TYPE_B_DUTIES_STACK_SCREEN_NAME } from './TypeBDutyStack/TypeBDutiesStack';
import { TYPE_A_DUTIES_STACK_SCREEN_NAME } from './TypeADutyStack/TypeADutiesStack';
import Logger, { MethodFormat } from '../utils/Logger';

export const LOCATION_SELECTION_SCREEN_NAME = 'LOCATION_SELECTION';

export default function LocationSelectionScreen(props: NativeStackScreenProps<any>) {

    const [isTownState, setIsTownState] = useState(false);

    const OUT_OF_TOWN_LOCATIONS: ILocationOption[] = [
        {
            name: 'BSD',
            isBSDDuties: true
        },
        {
            name: 'WKS',
            isBSDDuties: false,
        },
        {
            name: 'Pop-up Site #1',
            isBSDDuties: false,
        },
        {
            name: 'Pop-up Site #2',
            isBSDDuties: false,
        },
        {
            name: 'Pop-up Site #3',
            isBSDDuties: false,
        },
        {
            name: 'Pop-up Site #4',
            isBSDDuties: false,
        }
    ]

    const IN_TOWN_LOCATIONS: ILocationOption[] = [
        {
            name: 'Pop-up Site #5',
            isBSDDuties: false,
        },
        {
            name: 'Pop-up Site #6',
            isBSDDuties: false,
        },
        {
            name: 'Sheung Shui',
            isBSDDuties: false,
        },
        {
            name: 'Others',
            isBSDDuties: false,
        }
    ];

    const onSetInTown = (): void => {
        Logger.log(
            MethodFormat(`${onSetInTown.name}`, ``),
            `${LocationSelectionScreen.name}`
        )
        setIsTownState(true);
    }

    const onSetOutOfTown = (): void => {
        Logger.log(
            MethodFormat(`${onSetOutOfTown.name}`, ``),
            `${LocationSelectionScreen.name}`
        );
        setIsTownState(false);
    }

    const onPressInTown = (location: ILocationOption) => {
        Logger.log(
            MethodFormat(`${onPressInTown.name}`, `${location}`),
            `${LocationSelectionScreen.name}`
        );
        props.navigation.navigate(TYPE_C_DUTIES_STACK_SCREEN_NAME, {
            location: location
        });
    }

    const onPressOutOfTown = (location: ILocationOption) => {
        Logger.log(
            MethodFormat(`${onPressOutOfTown.name}`, `${JSON.stringify(location)}`),
            `${LocationSelectionScreen.name}`
        );
        if (location.isBSDDuties) {
            props.navigation.navigate(TYPE_A_DUTIES_STACK_SCREEN_NAME, { location: 'BSD' });
        } else {
            props.navigation.navigate(TYPE_B_DUTIES_STACK_SCREEN_NAME);
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.twoColumnBox}>
                <ScrollView style={styles.scrollView}>
                    {
                        isTownState
                            ? <View style={styles.scrollBox}>
                                {
                                    IN_TOWN_LOCATIONS.map((location: ILocationOption, index: number) => {
                                        return <View
                                            style={styles.colBox}
                                            key={index}
                                        >
                                            <PannelButton
                                                label={location.name}
                                                mode={PANEL_BUTTON_MODE.OUTLINED}
                                                onPress={() => onPressInTown(location)}
                                            />
                                        </View>
                                    })
                                }
                            </View>
                            : <View style={styles.scrollBox}>
                                {
                                    OUT_OF_TOWN_LOCATIONS.map((location: ILocationOption, index: number) => {
                                        return <View
                                            style={styles.colBox}
                                            key={index}
                                        >
                                            <PannelButton
                                                label={location.name}
                                                mode={PANEL_BUTTON_MODE.OUTLINED}
                                                onPress={() => onPressOutOfTown(location)}
                                            />
                                        </View>
                                    })
                                }
                            </View>
                    }
                </ScrollView>
            </View>
            <View style={styles.oneColumnBox}>
                {
                    isTownState
                        ? <PannelButton
                            label={'Out-of-Town'}
                            mode={PANEL_BUTTON_MODE.CONTAINED}
                            onPress={onSetOutOfTown}
                        />
                        : <PannelButton
                            label={'In-Town'}
                            mode={PANEL_BUTTON_MODE.CONTAINED}
                            onPress={onSetInTown}
                        />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    twoColumnBox: {
        flex: 4,
    },
    scrollView: {
        flex: 1,
        height: '100%'
    },
    scrollBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    colBox: {
        flex: 1,
        flexBasis: '50%',
        maxWidth: '50%',
        height: 200,
        padding: PANNEL_BUTTON_PADDING,
    },
    oneColumnBox: {
        flex: 1,
        padding: PANNEL_BUTTON_PADDING,
        backgroundColor: 'white'
    },
});