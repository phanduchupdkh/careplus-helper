import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { OtpInput } from 'carepluscli';

export const Otp6Window = ({
  isModalVisible = false,
  secureTextEntry = false,
  lenPass = 6,
  handleOnChange = () => {},
}) => {
  const createArray = Array.from(Array(lenPass).keys());
  const [state, setState] = useState(createArray.map(() => ''));
  const arrayOtp = createArray.map((index) => ({ ref: useRef(null), value: state[index] }));
  const onKeyPress = ({ nativeEvent, index }) => {
    nativeEvent?.key === 'Backspace' && index > 0
      ? arrayOtp[index - 1]?.ref?.current?.focus()
      : null;
  };
  useEffect(() => {
    setState(Array.from(Array(lenPass).keys()).map(() => ''));
    if (arrayOtp[0]?.ref?.current) arrayOtp[0]?.ref?.current?.focus();
  }, []);

  const onChangeText = (text, index) => {
    try {
      if (text.length > 1) {
        setState(('' + text).split(''));
        arrayOtp[lenPass - 1].ref.current.focus();
        handleOnChange(('' + text).split(''));
      } else {
        const newState = [...state];
        newState[index] = text;
        setState([...newState]);
        if (text !== '' && index < lenPass - 1) {
          arrayOtp[index + 1].ref.current.focus();
        }
        handleOnChange(newState);
      }
    } catch (error) {}
  };
  return (
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
  );
};
