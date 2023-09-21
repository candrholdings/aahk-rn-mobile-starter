import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IRouteConfig } from '../../types/UIType';
import TypeBDutiesScreen, { TYPE_B_DUTIES_SCREEN_NAME } from './TypeBDutiesScreen';
import RackIDScanScreen, { RACK_ID_SCAN_SCREEN_NAME } from '../SharedProcessScreens/RackIDScanScreen';
import DeliverScreen, { DELIVER_SCREEN_NAME } from '../SharedProcessScreens/DeliverScreen';
import RouteContainer from '../../components/RouteContainer';

export const TYPE_B_DUTIES_STACK_SCREEN_NAME = 'TYPE_B_DUTIES_STACK';

export default function TypeBDutiesStackScreen(props: NativeStackScreenProps<any>) {

    const location = props.route?.params?.location ? props.route.params.location : '';

    const ROUTE_CONFIG: IRouteConfig = {
        isDrawer: true,
        drawerContent: null,
        initialRouteName: TYPE_B_DUTIES_SCREEN_NAME,
        homeRouteName: TYPE_B_DUTIES_SCREEN_NAME,
        screens: [
            {
                drawerLabel: 'Home',
                drawerIcon: <MatComIcon name='alpha-h-box-outline' />,
                name: TYPE_B_DUTIES_SCREEN_NAME,
                component: TypeBDutiesScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Check In',
                drawerIcon: <MatComIcon name='alpha-c-box-outline' />,
                name: RACK_ID_SCAN_SCREEN_NAME,
                component: RackIDScanScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Deliver to HKIA',
                drawerIcon: <MatComIcon name='alpha-d-box-outline' />,
                name: DELIVER_SCREEN_NAME,
                component: DeliverScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            }
        ]
    }

    return (
        <RouteContainer config={ROUTE_CONFIG} />
    )
}