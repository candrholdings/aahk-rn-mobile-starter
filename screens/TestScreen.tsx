import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { MENU_ICON_SIZE, PANNEL_BUTTON_PADDING } from '../styles/GlobalStyle';
import { IRouteConfig } from '../types/UIType';

import RouteContainer from '../components/RouteContainer';
import DutiesScreen, { DUTIES_SCREEN_NAME } from './DutiesScreen';

export const TEST_SCREEN_NAME = 'TEST';

export default function TestScreen(props: NativeStackScreenProps<any>) {

    const IN_TOWN_DUTYS = [
        'Check In',
        'Check Out',
        'Stock Take',
        'Relocate',
        'Deliver to In-Town',
        'Arrive'
    ];

    const OUT_TOWN_DUTYS = [
        'Collect Bags'
    ];

    const BSD_DUTYS = [
        'Check In',
        'Deliver to HKIA'
    ];

    const ROUTE_CONFIG: IRouteConfig = {
        isDrawer: true,
        drawerContent: null,
        initialRouteName: DUTIES_SCREEN_NAME,
        homeRouteName: DUTIES_SCREEN_NAME,
        screens: [
            {
                drawerLabel: 'Duties',
                drawerIcon: <AwesomeIcon name='search' size={MENU_ICON_SIZE}/>,
                name: DUTIES_SCREEN_NAME,
                component: DutiesScreen,
                screenOptions: {},
                toScreenName: 'AUTH',
                isHide: false,
                isScreen: true
            },
        ],
    }

    return (
        <RouteContainer
            config={ROUTE_CONFIG}
        />
        // <View style={styles.main}>
        //    <View style={styles.scrollView}>
        //         {
        //             OUT_TOWN_DUTYS.map((location: string, index: number) => {
        //                 return <View
        //                     style={styles.oneColumnBox}
        //                     key={index}
        //                 >
        //                     <PannelButton
        //                         label={location}
        //                         mode={PANEL_BUTTON_MODE.OUTLINED}
        //                     />
        //                 </View>
        //             })
        //         }
        //    </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        height: '100%'
    },
    oneColumnBox: {
        flex: 1,
        padding: PANNEL_BUTTON_PADDING,
        backgroundColor: 'white',
        maxHeight: 120
    },
    
});