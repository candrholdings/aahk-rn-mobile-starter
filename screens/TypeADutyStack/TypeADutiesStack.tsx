import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IRouteConfig } from '../../types/UIType';
import TypeADutiesScreen, { TYPE_A_DUTIES_SCREEN_NAME } from './TypeADutiesScreen';
import RackIDScanScreen, { RACK_ID_SCAN_SCREEN_NAME } from '../SharedProcessScreens/RackIDScanScreen';
import CheckOutScreen, { CHECK_OUT_SCREEN_NAME } from './CheckOutScreen';
import RelocateConfirmScreen, { RELOCATE_CONFIRM_SCREEN_NAME } from './RelocateConfirmScreen';
import DeliverScreen, { DELIVER_SCREEN_NAME } from '../SharedProcessScreens/DeliverScreen';
import ArriveScreen, { ARRIVE_SCREEN_NAME } from './ArriveScreen';
import RouteContainer from '../../components/RouteContainer';
import CheckInConfirmScreen, { CHECK_IN_CONFIRM_SCREEN_NAME } from '../SharedProcessScreens/CheckInConfirmScreen';
import BagTagScanSreen, { BAG_TAG_SCAN_SCREEN_NAME } from '../SharedProcessScreens/BagTagScanScreen';
import StockTakeScreen, { STOCK_TAKE_RESULT_SCREEN_NAME } from './StockTakeResultScreen';

export const TYPE_A_DUTIES_STACK_SCREEN_NAME = 'TYPE_A_DUTIES_STACK';

export default function TypeADutuiesStackScreen(props: NativeStackScreenProps<any>) {

    const location = props.route?.params?.location ? props.route.params.location : '';

    const ROUTE_CONFIG: IRouteConfig = {
        isDrawer: true,
        drawerContent: null,
        initialRouteName: TYPE_A_DUTIES_SCREEN_NAME,
        homeRouteName: TYPE_A_DUTIES_SCREEN_NAME,
        screens: [
            {
                drawerLabel: 'Home',
                drawerIcon: <MatComIcon name='alpha-h-box-outline' />,
                name: TYPE_A_DUTIES_SCREEN_NAME,
                component: TypeADutiesScreen,
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
                drawerLabel: 'Scan Tag',
                drawerIcon: <MatComIcon name='alpha-c-box-outline' />,
                name: BAG_TAG_SCAN_SCREEN_NAME,
                component: BagTagScanSreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: true,
                isScreen: true
            },
            {
                drawerLabel: 'Check In Confirm',
                drawerIcon: <MatComIcon name='alpha-c-box-outline' />,
                name: CHECK_IN_CONFIRM_SCREEN_NAME,
                component: CheckInConfirmScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: true,
                isScreen: true
            },
            {
                drawerLabel: 'Check Out',
                drawerIcon: <MatComIcon name='alpha-c-box-outline' />,
                name: CHECK_OUT_SCREEN_NAME,
                component: BagTagScanSreen,
                screenOptions: {},
                initialParams: {
                    location: location,

                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Stock Take',
                drawerIcon: <MatComIcon name='alpha-s-box-outline' />,
                name: STOCK_TAKE_RESULT_SCREEN_NAME,
                component: StockTakeScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Relocate',
                drawerIcon: <MatComIcon name='alpha-r-box-outline' />,
                name: RELOCATE_CONFIRM_SCREEN_NAME,
                component: RelocateConfirmScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Deliver to In-Town',
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
            },
            {
                drawerLabel: 'Arrive',
                drawerIcon: <MatComIcon name='alpha-a-box-outline' />,
                name: ARRIVE_SCREEN_NAME,
                component: ArriveScreen,
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