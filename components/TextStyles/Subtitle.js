import React from 'react';
import { Text } from 'react-native';
import { colorStyles } from '../../style';
import { calculatorFontSize } from '../../helpers/styleText.helpers.js';
export const Subtitle1 = ({
  content,
  fontFamily,
  fontSize = calculatorFontSize(16),
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
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 16,
        lineHeight: lineHeight || 20,
        letterSpacing: letterSpacing || 0.15,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Subtitle2 = ({
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
        fontFamily: fontFamily || 'Montserrat-Regular',
        fontWeight: fontWeight || '500',
        fontSize: fontSize || 14,
        lineHeight: lineHeight || 17,
        letterSpacing: letterSpacing || 0.1,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Subtitle3 = ({
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
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 8,
        lineHeight: lineHeight || 10,
        letterSpacing: letterSpacing || 0,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
