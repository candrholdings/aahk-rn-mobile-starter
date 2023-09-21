import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import NavDrawer from '../utils/NavDrawer';
import TestScreen, { TEST_SCREEN_NAME } from './TestScreen';
import NavigationDrawer from '../components/NavigationDrawer';

export const ACTION_SCREEN_NAME = 'ACTION';

export default function ActionScreen(props: NativeStackScreenProps<any>) {

    return (
        <NavDrawer.Navigator
            initialRouteName={TEST_SCREEN_NAME}
            drawerContent={(props) => <NavigationDrawer />}
            screenOptions={{
                title: 'Out-of-Town Duties'
              }}
        >
            <NavDrawer.Screen
                name={TEST_SCREEN_NAME}
                component={TestScreen}
            />
        </NavDrawer.Navigator>
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