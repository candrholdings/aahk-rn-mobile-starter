import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScanInput from '../../components/ScanInput';
import HoneywellScanImage from '../../components/HoneywellScanImage';

export const SCAN_SCREEN_NAME = 'SCAN_SCREEN';

export default function ScanScreen() {
  const handleScanned = (data: string) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <HoneywellScanImage />
      </View>
      <View style={styles.input}>
        <ScanInput label="Scan Test" onScanned={handleScanned} />
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
    borderColor: 'red',
    borderWidth: 1,
  },
  input: {
    flex: 1,
  },
});
