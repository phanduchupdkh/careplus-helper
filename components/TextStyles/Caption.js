import React from 'react';
import { Text } from 'react-native';
import { calculatorFontSize } from '../../helpers/styleText.helpers.js';
import { colorStyles } from '../../style';
export const Caption = ({
  content,
  fontFamily,
  fontSize = calculatorFontSize(12),
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
        fontSize: fontSize || 12,
        lineHeight: lineHeight || 15,
        letterSpacing: letterSpacing || 0.4,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
