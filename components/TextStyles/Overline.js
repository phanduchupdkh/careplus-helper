import React from 'react';
import { Text } from 'react-native';
import { colorStyles } from '../../style';
export const Overline = ({
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
        fontSize: fontSize || 10,
        lineHeight: lineHeight || 12,
        letterSpacing: letterSpacing || 1.5,
        color: color,
        ...style,
      }}
    >
      {content || ' '}
    </Text>
  );
};
