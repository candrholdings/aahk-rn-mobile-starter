import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScanInput from '../../components/ScanInput';
import HoneywellScanImage from '../../components/HoneywellScanImage';
import Logger, {MethodFormat} from '../../utils/Logger';

export const SCAN_SCREEN_NAME = 'SCAN_SCREEN';

export default function ScanScreen() {
  const [scanValue, setScanValue] = useState('');

  const handleManualInput = (data: string): void => {
    Logger.log(
      MethodFormat(`${handleManualInput.name}`, `${data}`),
      `${ScanScreen.name}`,
    );
    setScanValue(data);
  };

  const handleScanned = (data: string): void => {
    Logger.log(
      MethodFormat(`${handleScanned.name}`, `${data}`),
      `${ScanScreen.name}`,
    );
    setScanValue(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <HoneywellScanImage />
      </View>
      <View style={styles.input}>
        <ScanInput
          label="Scan Test"
          onScanned={handleScanned}
          onValueChanged={handleManualInput}
          value={scanValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
    backgroundColor: 'white',
  },
  input: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
});
