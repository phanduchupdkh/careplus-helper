import React from 'react';
import { Text } from 'react-native';
import { colorStyles } from '../../style';
import { calculatorFontSize } from '../../helpers/styleText.helpers.js';
export const Heading1 = ({
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
        fontWeight: fontWeight || '300',
        fontSize: fontSize || 96,
        lineHeight: lineHeight || 117,
        letterSpacing: letterSpacing || -1.5,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Heading2 = ({
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
        fontWeight: fontWeight || '300',
        fontSize: fontSize || 60,
        lineHeight: lineHeight || 73,
        letterSpacing: letterSpacing || -0.5,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Heading3 = ({
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
        fontWeight: fontWeight || '300',
        fontSize: fontSize || 48,
        lineHeight: lineHeight || 59,
        letterSpacing: letterSpacing || -0.5,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Heading4 = ({
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
        fontSize: fontSize || 34,
        lineHeight: lineHeight || 41,
        letterSpacing: letterSpacing || 0.25,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};

export const Heading5 = ({
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
        fontSize: fontSize || 24,
        lineHeight: lineHeight || 29,
        letterSpacing: letterSpacing || 0.25,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
export const Heading6 = ({
  content,
  fontFamily,
  fontSize = calculatorFontSize(20),
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
        fontSize: fontSize || 20,
        lineHeight: lineHeight || 24,
        letterSpacing: letterSpacing || 0.15,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
