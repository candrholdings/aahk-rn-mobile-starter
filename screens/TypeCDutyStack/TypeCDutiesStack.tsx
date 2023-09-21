import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IRouteConfig } from '../../types/UIType';
import TypeCDutiesScreen, { TYPE_C_DUTIES_SCREEN_NAME } from './TypeCDutiesScreen';
import RouteContainer from '../../components/RouteContainer';
import CollectBagScreen, { COLLECT_BAG_SCREEN_NAME } from './CollectBagScreen';

export const TYPE_C_DUTIES_STACK_SCREEN_NAME = 'TYPE_C_DUTIES_STACK';

export default function TypeCDutiesStackScreen(props: NativeStackScreenProps<any>) {

    const location = props.route?.params?.location ? props.route.params.location : '';

    const ROUTE_CONFIG: IRouteConfig = {
        isDrawer: true,
        drawerContent: null,
        initialRouteName: TYPE_C_DUTIES_SCREEN_NAME,
        homeRouteName: TYPE_C_DUTIES_SCREEN_NAME,
        screens: [
            {
                drawerLabel: 'Home',
                drawerIcon: <MatComIcon name='alpha-h-box-outline' />,
                name: TYPE_C_DUTIES_SCREEN_NAME,
                component: TypeCDutiesScreen,
                screenOptions: {},
                initialParams: {
                    location: location,
                },
                toScreenName: '',
                isHide: false,
                isScreen: true
            },
            {
                drawerLabel: 'Collect Bag',
                drawerIcon: <MatComIcon name='alpha-c-box-outline' />,
                name: COLLECT_BAG_SCREEN_NAME,
                component: CollectBagScreen,
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});