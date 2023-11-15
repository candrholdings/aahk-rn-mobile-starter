import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ViewStyle} from 'react-native';
import HoneywellScanner from 'react-native-honeywell-scanner-v2';
import {TextInput as MatTextInput} from 'react-native-paper';

export interface IScanInput {
  style?: ViewStyle;
  label: string;
  value?: string;
  onScannerReady?: () => void;
  onScanned?: (data: string) => void;
  onValueChanged?: (data: string) => void;
}

export default function ScanInput(props: IScanInput) {
  useFocusEffect(
    useCallback(() => {
      if (HoneywellScanner.isCompatible) {
        HoneywellScanner.startReader().then(() => {
          if (props.onScannerReady) {
            props.onScannerReady();
          }
          HoneywellScanner.onBarcodeReadSuccess(async (event: any) => {
            if (props.onScanned) {
              props.onScanned(event.data);
            } else if (props.onValueChanged) {
              props.onValueChanged(event.data);
            }
          });
        });

        return () => {
          HoneywellScanner.stopReader().then(() => {
            HoneywellScanner.offBarcodeReadSuccess();
          });
        };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <MatTextInput
      mode={'outlined'}
      label={props.label}
      value={props.value}
      onChangeText={props.onValueChanged}
      left={<MatTextInput.Icon icon="barcode-scan" />}
    />
  );
}
