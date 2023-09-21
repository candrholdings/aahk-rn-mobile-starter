import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Avatar as MatAvatar } from 'react-native-paper';
import {
  Text as MatText,
  Divider as MatDivider
} from 'react-native-paper';

export interface INavigationDrawerHeader {
  style?: ViewStyle,
  avatarText: string;
  title: string;
  subTitle: string;
  description: string;
}

export default function NavigationDrawerHeader(props: INavigationDrawerHeader) {
  return (
    <View style={styles.main}>
      <View style={styles.icon}>
        <MatAvatar.Text size={36} label={props.avatarText} />
      </View>
      <View style={styles.title}>
        <MatText variant='titleMedium'>{props.title}</MatText>
        <MatText variant='bodyLarge'>{props.subTitle}</MatText>
        <MatText variant='bodyMedium'>{props.description}</MatText>
      </View>
      <MatDivider bold={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 6,
    justifyContent: 'center'
  },
  divider: {
    borderColor: 'blue',
    borderWidth: 1,
    flex: 1
  }
});