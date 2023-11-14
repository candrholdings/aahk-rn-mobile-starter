import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {ReactElement} from 'react';

export enum BUTTON_TYPE {
  PRIMARY = 'PRIMARY',
  DANGER = 'DANGER',
}

export enum BUTTON_MODE {
  TEXT = 'text',
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
  ELEVATED = 'elevated',
  CONTAINED_TONAL = 'contained-tonal',
}

export enum PANEL_BUTTON_MODE {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
}

export enum BUTTON_SIZE {
  NORMAL = 'NORMAL',
  LARGE = 'LARGE',
}

export enum RESULT_TYPE {
  ERROR = 'ERROR',
  SUCCEED = 'SUCCEED',
  WARN = 'WARN',
  INFO = 'INFO',
}

export enum INPUT_FIELD_MODE {
  FLAT = 'flat',
  OUTLINED = 'outlined',
}

export enum SCAN_TYPE {
  RACK_ID = 'RACK_ID',
  BAG_TAG = 'BAG_TAG',
}

export const MODAL_ICON_SIZE = 240;
export const SUCCEED_COLOR = '#4CAF50';
export const INFO_COLOR = '#03A9F4';
export const WARN_COLOR = '#FF8F00';
export const ERROR_COLOR = '#E64A19';
export const UNKNOWN_COLOR = '#9E9E9E';
export interface IRouteScreen {
  drawerLabel: string;
  drawerIcon: ReactElement;
  name: string;
  component?: any;
  screenOptions?: any;
  initialParams?: any;
  toScreenName: string;
  isHide: boolean;
  isScreen: boolean;
}

export interface IRouteConfig {
  screens: IRouteScreen[];
  isDrawer: boolean;
  drawerContent: any;
  initialRouteName: string;
  homeRouteName: string;
}

export interface ICustomDrawerContentComponentProps
  extends DrawerContentComponentProps {
  config: IRouteConfig;
}
