import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  Text as MatText
} from 'react-native-paper';
import { MAT_LIGHT_THEME } from '../styles/MaterialTheme';

export interface IPanelHeader {
  style?: ViewStyle,
  label: string,
}

export default function PanelHeader(props: IPanelHeader) {


  return (
    <View style={{ ...props.style, ...styles.header }}>
      <MatText
        style={styles.headerText}
        variant='headlineMedium'
      >
        {props.label}
      </MatText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 16,
    fontWeight: '700',
    backgroundColor: MAT_LIGHT_THEME.colors.secondaryContainer
  },
});