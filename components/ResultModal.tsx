import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Modal as MatModal,
  Text as MatText
} from 'react-native-paper';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ERROR_COLOR, INFO_COLOR, MODAL_ICON_SIZE, PANEL_BUTTON_MODE, RESULT_TYPE, SUCCEED_COLOR, UNKNOWN_COLOR, WARN_COLOR } from '../types/UIType';
import PannelButton from './PanelButton';
import { PANNEL_BUTTON_PADDING } from '../styles/GlobalStyle';
import Logger, { MethodFormat } from '../utils/Logger';

export interface IResultModal {
  visible: boolean;
  type: RESULT_TYPE;
  isHighlightTitle?: boolean;
  title?: string;
  description?: string;
  closeText?: string;
  footerComponent?: React.ReactNode;
  onPressClose?: () => void
}

export default function ResultModal(props: IResultModal) {

  const onPressClose = (): void => {
    Logger.log(MethodFormat(`${onPressClose.name}`, ''), `${ResultModal.name}`);
    if (props.onPressClose) {
      props.onPressClose();
    }
  }

  const RenderIcon = (type: RESULT_TYPE) => {
    switch (type) {
      case RESULT_TYPE.SUCCEED:
        return <MatComIcon name='check-circle' size={MODAL_ICON_SIZE} color={SUCCEED_COLOR} />
      case RESULT_TYPE.INFO:
        return <MatComIcon name='alert-circle-outline' size={MODAL_ICON_SIZE} color={INFO_COLOR} />
      case RESULT_TYPE.WARN:
        return <MatComIcon name='alert-outline' size={MODAL_ICON_SIZE} color={WARN_COLOR} />
      case RESULT_TYPE.ERROR:
        return <MatComIcon name='close-circle' size={MODAL_ICON_SIZE} color={ERROR_COLOR} />
      default:
        return <MatComIcon name='progress-question' size={MODAL_ICON_SIZE} color={UNKNOWN_COLOR} />
    }
  }

  return (
    <MatModal
      visible={props.visible}
      contentContainerStyle={styles.modalContent}
    >
      <View style={styles.main}>
        <View style={styles.body}>
          {RenderIcon(props.type)}
          {
            props.title && <MatText
              variant='displaySmall'
              style={[
                styles.titleText,
                props.isHighlightTitle ? styles.hightlightTitle : null
              ]}
            >
              {props.title}
            </MatText>
          }
          {
            props.description && <MatText
              variant='headlineSmall'
              style={styles.descriptionText}
            >
              {props.description}
            </MatText>
          }
        </View>
        {
          props.footerComponent
            ? props.footerComponent
            : <View style={styles.footer}>
              <PannelButton
                label={props.closeText || 'BACK'}
                mode={PANEL_BUTTON_MODE.OUTLINED}
                onPress={onPressClose}
              />
            </View>
        }
      </View>
    </MatModal>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    paddingTop: 16,
    fontWeight: '800'
  },
  hightlightTitle: {
    textAlign: 'center',
    color: ERROR_COLOR,
  },
  descriptionText: {
    fontWeight: '700',
    paddingTop: 46
  },
  footer: {
    flex: 1,
    padding: PANNEL_BUTTON_PADDING,
    marginBottom: 6
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: '96%'
  }
});