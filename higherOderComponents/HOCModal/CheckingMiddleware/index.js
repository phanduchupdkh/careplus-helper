import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import {
  Body1,
  ButtonWithImageNomal,
  Caption,
  Heading6,
  NomalButton,
  OtpInput,
} from '../../../components';
import { colorStyles } from '../../../style';

export const CheckingMiddleware = ({
  isModalVisible = false,
  onFinish = () => {},
  handleCloseModal = () => {},
  secureTextEntry = false,
  lenPass = 6,
  onChangeOtp = () => {},
  title = '',
  contentBody = '',
  contentButton = 'Confirm',
  contenError = null,
}) => {
  const createArray = Array.from(Array(lenPass).keys());
  const [state, setState] = useState(createArray.map(() => ''));
  const arrayOtp = createArray.map((index) => ({ ref: useRef(null), value: state[index] }));

  const onKeyPress = ({ nativeEvent, index }) => {
    nativeEvent.key === 'Backspace' && index > 0 ? arrayOtp[index - 1].ref.current.focus() : null;
  };

  useEffect(() => {
    setState(Array.from(Array(lenPass).keys()).map(() => ''));
    if (arrayOtp[0]?.ref?.current) arrayOtp[0]?.ref?.current.focus();
  }, [isModalVisible]);

  const onChangeText = (text, index) => {
    try {
      if (text.length > 1) {
        setState(('' + text).split(''));
        arrayOtp[lenPass - 1].ref.current.focus();
      } else {
        const newState = [...state];
        newState[index] = text;
        setState([...newState]);
        if (text !== '' && index < lenPass - 1) {
          arrayOtp[index + 1].ref.current.focus();
        }
      }
      onChangeOtp(state);
    } catch (error) {}
  };
  return (
    <Modal
      isVisible={isModalVisible}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.modalContentContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Heading6 content={title} color={colorStyles.PRIMARY_COLOR} />
          <ButtonWithImageNomal
            size={20}
            uriImage={require('../../../assets/icons/close.png')}
            handleOnPress={handleCloseModal}
          />
        </View>
        <Body1 style={styles.bodyItem} content={contentBody} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {arrayOtp.map((item, index) => {
            return (
              <OtpInput
                key={index}
                maxLength={index ? 1 : 6}
                otpRef={item.ref}
                onChangeText={(text) => onChangeText(text, index)}
                value={item.value}
                onKeyPress={({ nativeEvent }) => onKeyPress({ nativeEvent, index })}
                secureTextEntry={secureTextEntry}
              />
            );
          })}
        </View>
        <View style={{ justifyContent: 'center', height: 40 }}>
          {contenError ? (
            <Caption style={styles.errorItem} content={contenError} color={colorStyles.RED} />
          ) : null}
        </View>
        <NomalButton
          style={styles.marginItemNomal}
          handleOnPress={() => onFinish(state)}
          content={contentButton}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContentContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    marginBottom: 100,
  },
  marginItemNomal: {
    marginTop: 0,
    marginBottom: 20,
  },
  bodyItem: {
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorItem: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});
