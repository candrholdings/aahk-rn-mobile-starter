import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text as MatText} from 'react-native-paper';

import NavigationDrawerHeader from './NavigationDrawerHeader';
import MenuButton from './MenuButton';

import {
  ICustomDrawerContentComponentProps,
  IRouteScreen,
} from '../types/UIType';
import {MENU_ICON_SIZE} from '../styles/GlobalStyle';
import {AUTH_SCREEN_NAME} from '../screens/AuthScreen';
import Logger, {MethodFormat} from '../utils/Logger';
import {useNavigationState} from '@react-navigation/native';

export default function NavigationDrawer(
  props: ICustomDrawerContentComponentProps,
) {
  const currentNavigationState = useNavigationState(state => state);
  const [ver, setVer] = useState<string>('0.0.1');
  const [env, setEnv] = useState<string>('PROD');
  const [currentRoute, setCurrentRoute] = useState<string>('');

  useEffect(() => {
    setVer('0.0.1');
    setEnv('PROD');
    // * Getting the current state name for checking isActive
    const route = currentNavigationState.routes[currentNavigationState.index];
    const nestedState = route.state;
    const activeRoute = nestedState?.routes[nestedState.index || 0];
    const activeName = activeRoute?.name || '';
    setCurrentRoute(activeName);
  }, [currentNavigationState]);

  const handleMenu = (screen: IRouteScreen): void => {
    Logger.log(
      MethodFormat(`${handleMenu.name}`, `screen name: ${screen.name}`),
      `${NavigationDrawer.name}`,
    );
    props.navigation.navigate(screen.name);
  };

  const handleLogout = (): void => {
    Logger.log(
      MethodFormat(`${handleLogout.name}`, ''),
      `${NavigationDrawer.name}`,
    );
    props.navigation.navigate(AUTH_SCREEN_NAME);
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <NavigationDrawerHeader
          title="Joe Lee"
          avatarText="JL"
          subTitle="Software Engineer"
          description="@C&R"
        />
      </View>
      <View style={styles.body}>
        <DrawerContentScrollView>
          {props.config.screens
            .filter(screen => !screen.isHide)
            .map((screen: IRouteScreen, index: number) => {
              return (
                <MenuButton
                  key={index}
                  style={styles.menuItem}
                  label={screen.drawerLabel}
                  icon={screen.drawerIcon}
                  elevation={1}
                  onPress={() => handleMenu(screen)}
                  isActive={screen.name === currentRoute}
                />
              );
            })}
        </DrawerContentScrollView>
      </View>
      <View style={styles.footer}>
        <MenuButton
          style={styles.menuItem}
          label={'Logout'}
          icon={<MatComIcon name="logout" size={MENU_ICON_SIZE} />}
          onPress={handleLogout}
        />
        <View style={styles.footerMeta}>
          <MatText variant="labelSmall">
            ver {ver} {env}
          </MatText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    paddingBottom: 12,
  },
  body: {
    flex: 8,
  },
  footer: {
    flex: 1,
  },
  menuItem: {
    flex: 1,
    maxHeight: 70,
  },
  menuItemText: {
    fontSize: 26,
    fontWeight: '700',
  },
  footerMeta: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 4,
  },
});
