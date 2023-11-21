import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';

import {RootStore} from './store/RootStore';
import {MAT_LIGHT_THEME} from './styles/MaterialTheme';

import PanelButton from './components/PanelButton';
import ResultModal from './components/ResultModal';
import AuthScreen, {AUTH_SCREEN_NAME} from './screens/AuthScreen';
import {PANEL_BUTTON_PADDING} from './styles/GlobalStyle';
import {PANEL_BUTTON_MODE, RESULT_TYPE} from './types/UIType';
import Logger, {MethodFormat} from './utils/Logger';
import ConfigScreen, {CONFIG_SCREEN_NAME} from './screens/ConfigScreen';
import DemoStack, {DEMO_STACK_NAME} from './screens/DemoStack/DemoStack';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const LIGHT_THEME = MAT_LIGHT_THEME;
  const queryClient = new QueryClient();

  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']);
    LogBox.ignoreAllLogs();
  }, []);

  const [isOpenResultModal, setIsOpenResultModal] = useState<boolean>(false);

  const onCloseResultModal = (): void => {
    Logger.log(MethodFormat(`${onCloseResultModal.name}`, ''), `${App.name}`);
    setIsOpenResultModal(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={RootStore}>
        <SafeAreaView style={styles.main}>
          <StatusBar />
          <PaperProvider theme={LIGHT_THEME}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName={CONFIG_SCREEN_NAME}>
                <Stack.Screen
                  name={CONFIG_SCREEN_NAME}
                  component={ConfigScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name={AUTH_SCREEN_NAME}
                  component={AuthScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name={DEMO_STACK_NAME}
                  component={DemoStack}
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
              onPressClose={onCloseResultModal}
              footerComponent={
                <View style={styles.modalFooter}>
                  <View style={styles.modalFooterAction}>
                    <PanelButton
                      label="Back"
                      mode={PANEL_BUTTON_MODE.OUTLINED}
                      onPress={onCloseResultModal}
                    />
                  </View>
                  <View style={styles.modalFooterAction}>
                    <PanelButton
                      label={'Confirm\nDelivery'}
                      onPress={onCloseResultModal}
                    />
                  </View>
                </View>
              }
            />
          </PaperProvider>
        </SafeAreaView>
      </ReduxProvider>
    </QueryClientProvider>
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
    padding: PANEL_BUTTON_PADDING,
  },
});
