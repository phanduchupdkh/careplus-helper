import { Pressable } from 'react-native';
import React from 'react';
import { CTAButtonText } from '../TextStyles';
import { toUpperCaseCustom } from '../../helpers';
import { colorStyles } from '../../style';
export const CTAButton = ({ content = '', handleOnPress, type = 'Filled', style = {} }) => {
  const handleOnPressButton = () => {
    if (handleOnPress) handleOnPress();
  };
  return (
    <Pressable
      style={{
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colorStyles.SECONDARY_COLOR,
        padding: 5,
        height: 20,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: type === 'Outline' ? colorStyles.WHITE : colorStyles.SECONDARY_COLOR,
        ...style,
      }}
      onPress={handleOnPressButton}
    >
      <CTAButtonText
        content={toUpperCaseCustom(content)}
        color={type === 'Outline' ? colorStyles.SECONDARY_COLOR : colorStyles.WHITE}
      />
    </Pressable>
  );
};
