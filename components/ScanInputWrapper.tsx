import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Text as MatText, TextInput as MatTextInput} from 'react-native-paper';
import {MAT_LIGHT_THEME} from '../styles/MaterialTheme';
import HoneywellScanImage from './HoneywellScanImage';
import {INPUT_FIELD_MODE, PANEL_BUTTON_MODE, SCAN_TYPE} from '../types/UIType';
import PanelButton from './PanelButton';
import {PANEL_BUTTON_PADDING} from '../styles/GlobalStyle';
import PanelHeader from './PanelHeader';
import Logger from '../utils/Logger';

export interface IScanInputWrapper {
  style?: ViewStyle;
  mode?: INPUT_FIELD_MODE;
  step?: number;
  type?: SCAN_TYPE;
  headerText?: string;
  labelText?: string;
  nextText?: string;
  onPressNext?: () => void;
  backText?: string;
  onPressBack?: () => void;
}

export default function ScanInputWrapper(props: IScanInputWrapper) {
  const onPressBack = (): void => {
    props.onPressBack && props.onPressBack();
  };

  const onPressNext = (): void => {
    props.onPressNext && props.onPressNext();
  };

  const getHeaderText = (): string => {
    Logger.log(
      `getHeaderText: ${props.step && props.step + '.'}`,
      `${ScanInputWrapper.name}`,
    );
    let stepText = '';
    if (props.step) {
      stepText = props.step + '.';
    }
    switch (props.type) {
      case SCAN_TYPE.RACK_ID:
        return `${stepText} Scan Rack ID`;
      case SCAN_TYPE.BAG_TAG:
        return `${stepText} Scan Bag`;
      default:
        return `${stepText} Scan Rack ID`;
    }
  };

  const getInputLabel = (): string => {
    switch (props.type) {
      case SCAN_TYPE.RACK_ID:
        return 'Rack';
      case SCAN_TYPE.BAG_TAG:
        return 'Tag';
      default:
        return 'Rack';
    }
  };

  const getInputFieldLabel = (): string => {
    switch (props.type) {
      case SCAN_TYPE.RACK_ID:
        return 'Rack ID';
      case SCAN_TYPE.BAG_TAG:
        return 'Tag ID';
      default:
        return 'Rack ID';
    }
  };

  return (
    <View style={{...props.style, ...styles.main}}>
      <PanelHeader label={getHeaderText()} />
      <View style={styles.body}>
        <View style={styles.bodyImage}>
          <HoneywellScanImage />
        </View>
        <View style={styles.bodyInput}>
          <View style={styles.inputBox}>
            <View style={styles.inputLabel}>
              <MatText style={styles.inputText} variant="bodyLarge">
                {getInputLabel()}
              </MatText>
            </View>
            <View style={styles.inputField}>
              <MatTextInput
                style={styles.inputText}
                label={getInputFieldLabel()}
                mode={props.mode ? props.mode : INPUT_FIELD_MODE.OUTLINED}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <PanelButton
          style={styles.backBtn}
          label={props.backText || 'BACK'}
          mode={PANEL_BUTTON_MODE.OUTLINED}
          onPress={onPressBack}
        />

        <PanelButton
          style={styles.nextBtn}
          label={props.nextText || 'Next'}
          mode={PANEL_BUTTON_MODE.OUTLINED}
          onPress={onPressNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 16,
    fontWeight: '700',
    backgroundColor: MAT_LIGHT_THEME.colors.secondaryContainer,
  },
  body: {
    flex: 7,
  },
  bodyImage: {
    flex: 4,
  },
  bodyInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flex: 4,
  },
  inputLabel: {
    flex: 1,
    paddingTop: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputText: {
    fontSize: 26,
  },
  backBtn: {
    flex: 1,
  },
  nextBtn: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    padding: PANEL_BUTTON_PADDING,
    marginBottom: 6,
  },
});
