import React from 'react';
import {ViewStyle} from 'react-native';
import {IRouteConfig, IRouteScreen} from '../types/UIType';
import NavDrawer from '../utils/NavDrawer';
import NavigationDrawer from './NavigationDrawer';

export interface IRouteContainer {
  style?: ViewStyle;
  config: IRouteConfig;
}

export default function RouteContainer(props: IRouteContainer) {
  const RenderDrawerContainer = () => {
    return (
      <NavDrawer.Navigator
        initialRouteName={props.config.initialRouteName}
        drawerContent={drawerProps => (
          <NavigationDrawer {...drawerProps} config={props.config} />
        )}>
        {props.config.screens
          .filter(s => s.isScreen)
          .map((screen: IRouteScreen, index: number) => {
            return (
              <NavDrawer.Screen
                key={index}
                name={screen.name}
                component={screen.component}
                initialParams={
                  screen.initialParams ? screen.initialParams : null
                }
              />
            );
          })}
      </NavDrawer.Navigator>
    );
  };

  return RenderDrawerContainer();
}
