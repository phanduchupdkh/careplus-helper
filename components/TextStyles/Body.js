import React from 'react';
import { Text, Dim } from 'react-native';
import { calculatorFontSize } from '../../helpers/styleText.helpers.js';
import { colorStyles } from '../../style';
export const Body1 = ({
  content = ' ',
  fontFamily = 'Montserrat-Regular',
  fontWeight = 'normal',
  color = colorStyles.TEXT_COLOR,
  fontSize = calculatorFontSize(16),
  lineHeight = 20,
  letterSpacing = 0.5,
  style = {},
}) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        color: color,
        ...style,
      }}
    >
      {content}
    </Text>
  );
};

export const Body2 = ({
  content,
  fontFamily,
  fontSize = calculatorFontSize(14),
  fontWeight,
  lineHeight,
  letterSpacing,
  color = colorStyles.TEXT_COLOR,
  style = {},
}) => {
  return (
    <Text
      style={{
        fontFamily: fontFamily || 'Montserrat-Medium',
        fontWeight: fontWeight || '500',
        fontSize: fontSize,
        lineHeight: lineHeight || 17,
        letterSpacing: letterSpacing || 0,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
