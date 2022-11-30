import React from 'react';
import { Text } from 'react-native';
import { colorStyles } from '../../style';
export const CTAButtonText = ({
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
        fontSize: fontSize || 8,
        lineHeight: lineHeight || 10,
        letterSpacing: letterSpacing || 1.25,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
