import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PanelButton from '../../components/PanelButton';
import {PANEL_BUTTON_L_PADDING} from '../../styles/GlobalStyle';
import {PANEL_BUTTON_MODE} from '../../types/UIType';
import {DELIVER_SCREEN_NAME} from '../SharedProcessScreens/DeliverScreen';
import {RACK_ID_SCAN_SCREEN_NAME} from '../SharedProcessScreens/RackIDScanScreen';
import {ARRIVE_SCREEN_NAME} from './ArriveScreen';
import {CHECK_OUT_SCREEN_NAME} from './CheckOutScreen';
import {RELOCATE_CONFIRM_SCREEN_NAME} from './RelocateConfirmScreen';
import {STOCK_TAKE_RESULT_SCREEN_NAME} from './StockTakeResultScreen';

export const TYPE_A_DUTIES_SCREEN_NAME = 'TYPE_A_DUTIES';

export default function TypeADutiesScreen(props: NativeStackScreenProps<any>) {
  const handleMenu = (screen: string) => {
    props.navigation.navigate(screen);
  };

  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <View style={styles.action}>
          <PanelButton
            label="Check In"
            onPress={() => handleMenu(RACK_ID_SCAN_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
        <View style={styles.action}>
          <PanelButton
            label="Check Out"
            onPress={() => handleMenu(CHECK_OUT_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
      </View>
      <View style={styles.twoColRow}>
        <View style={styles.colAction}>
          <PanelButton
            label="Stock Take"
            onPress={() => handleMenu(STOCK_TAKE_RESULT_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
        <View style={styles.colAction}>
          <PanelButton
            label="Relocate"
            onPress={() => handleMenu(RELOCATE_CONFIRM_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
        <View style={styles.colAction}>
          <PanelButton
            label="Deliver to In-Town"
            onPress={() => handleMenu(DELIVER_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
        <View style={styles.colAction}>
          <PanelButton
            label="Arrive"
            onPress={() => handleMenu(ARRIVE_SCREEN_NAME)}
            mode={PANEL_BUTTON_MODE.OUTLINED}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
  },
  twoColRow: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  action: {
    flex: 1,
    maxHeight: 120,
    padding: PANEL_BUTTON_L_PADDING,
  },
  colAction: {
    flex: 1,
    maxHeight: 140,
    padding: PANEL_BUTTON_L_PADDING,
    flexBasis: '50%',
    maxWidth: '50%',
  },
});
