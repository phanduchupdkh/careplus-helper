import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';

export const OtpInput = ({
  style = {},
  placeholder = '',
  onKeyPress = () => {},
  value = '',
  secureTextEntry = true,
  autoCapitalize = 'sentences',
  placeholderStyle = { fontFamily: 'Montserrat-Regular' },
  onChangeText = () => {},
  otpRef = null,
  maxLength = 1
}) => {
  return (
    <TextInput
      ref={otpRef}
      maxLength={maxLength}
      style={[styles.otpInputContainer, style]}
      value={value}
      keyboardType="number-pad"
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      placeholderStyle={placeholderStyle}
    />
  );
};
