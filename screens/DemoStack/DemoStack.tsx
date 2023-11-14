import React from 'react';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RouteContainer from '../../components/RouteContainer';
import {IRouteConfig} from '../../types/UIType';
import DemoScreen, {DEMO_SCREEN_NAME} from './DemoScreen';
import ScanScreen, {SCAN_SCREEN_NAME} from './ScanScreen';

export const DEMO_STACK_NAME = 'DEMO_STACK';

export default function DemoStack() {
  const ROUTE_CONFIG: IRouteConfig = {
    isDrawer: true,
    drawerContent: null,
    initialRouteName: DEMO_SCREEN_NAME,
    homeRouteName: DEMO_SCREEN_NAME,
    screens: [
      {
        drawerLabel: 'Home',
        drawerIcon: <MatComIcon name="alpha-h-box-outline" />,
        name: DEMO_SCREEN_NAME,
        component: DemoScreen,
        screenOptions: {},
        toScreenName: '',
        isHide: false,
        isScreen: true,
      },
      {
        drawerLabel: 'Scan',
        drawerIcon: <MatComIcon name="alpha-s-box-outline" />,
        name: SCAN_SCREEN_NAME,
        component: ScanScreen,
        screenOptions: {},
        toScreenName: '',
        isHide: false,
        isScreen: true,
      },
    ],
  };
  return <RouteContainer config={ROUTE_CONFIG} />;
}
