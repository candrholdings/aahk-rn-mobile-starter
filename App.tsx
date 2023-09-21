import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';

import {RootStore} from './store/RootStore';
import {MAT_LIGHT_THEME} from './styles/MaterialTheme';

import PanelButton from './components/PanelButton';
import ResultModal from './components/ResultModal';
import ActionScreen, {ACTION_SCREEN_NAME} from './screens/ActionScreen';
import AuthScreen, {AUTH_SCREEN_NAME} from './screens/AuthScreen';
import LocationSelectionScreen, {
  LOCATION_SELECTION_SCREEN_NAME,
} from './screens/LocationSelectionScreen';
import TestScreen, {TEST_SCREEN_NAME} from './screens/TestScreen';
import TypeADutuiesStackScreen, {
  TYPE_A_DUTIES_STACK_SCREEN_NAME,
} from './screens/TypeADutyStack/TypeADutiesStack';
import TypeBDutiesStackScreen, {
  TYPE_B_DUTIES_STACK_SCREEN_NAME,
} from './screens/TypeBDutyStack/TypeBDutiesStack';
import TypeCDutiesStackScreen, {
  TYPE_C_DUTIES_STACK_SCREEN_NAME,
} from './screens/TypeCDutyStack/TypeCDutiesStack';
import {PANNEL_BUTTON_PADDING} from './styles/GlobalStyle';
import {PANEL_BUTTON_MODE, RESULT_TYPE} from './types/UIType';
import Logger, {MethodFormat} from './utils/Logger';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const LIGHT_THEME = MAT_LIGHT_THEME;

  const [isOpenResultModal, setIsOpenResultModal] = useState<boolean>(true);

  const onCloseReusltModal = (): void => {
    Logger.log(MethodFormat(`${onCloseReusltModal.name}`, ''), `${App.name}`);
    setIsOpenResultModal(false);
  };

  return (
    <ReduxProvider store={RootStore}>
      <SafeAreaView style={styles.main}>
        <StatusBar />
        <PaperProvider theme={LIGHT_THEME}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={AUTH_SCREEN_NAME}>
              <Stack.Screen
                name={AUTH_SCREEN_NAME}
                component={AuthScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={LOCATION_SELECTION_SCREEN_NAME}
                component={LocationSelectionScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={ACTION_SCREEN_NAME}
                component={ActionScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={TEST_SCREEN_NAME}
                component={TestScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={TYPE_A_DUTIES_STACK_SCREEN_NAME}
                component={TypeADutuiesStackScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={TYPE_B_DUTIES_STACK_SCREEN_NAME}
                component={TypeBDutiesStackScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={TYPE_C_DUTIES_STACK_SCREEN_NAME}
                component={TypeCDutiesStackScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <ResultModal
            visible={isOpenResultModal}
            type={RESULT_TYPE.WARN}
            title="NOT READY FOR Check-Out"
            isHighlightTitle={true}
            description="Tag: 2208230001-01"
            onPressClose={onCloseReusltModal}
            footerComponent={
              <View style={styles.modalFooter}>
                <View style={styles.modalFooterAction}>
                  <PanelButton
                    label="Back"
                    mode={PANEL_BUTTON_MODE.OUTLINED}
                    onPress={onCloseReusltModal}
                  />
                </View>
                <View style={styles.modalFooterAction}>
                  <PanelButton
                    label={'Confirm\nDelivery'}
                    onPress={onCloseReusltModal}
                  />
                </View>
              </View>
            }
          />
        </PaperProvider>
      </SafeAreaView>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  modalFooter: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 6,
  },
  modalFooterAction: {
    flex: 1,
    padding: PANNEL_BUTTON_PADDING,
  },
});
