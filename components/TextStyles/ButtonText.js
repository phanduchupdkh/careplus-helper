import React from 'react';
import { Text } from 'react-native';
import { colorStyles } from '../../style';
export const ButtonText = ({
  content,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color = colorStyles.TEXT_COLOR,
  style = {},
}) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily || 'Montserrat-Regular',
        fontWeight: fontWeight || '500',
        fontSize: fontSize || 14,
        lineHeight: lineHeight || 17,
        letterSpacing: letterSpacing || 1.25,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
