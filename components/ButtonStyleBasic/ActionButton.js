import React from 'react';
import { Pressable } from 'react-native';
import { colorStyles } from '../../style';
import { Body1 } from '../TextStyles';
export const ActionButton = ({
  content = '',
  handleOnPress = () => {},
  style = {},
  color = colorStyles.PRIMARY_COLOR,
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: color,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: colorStyles.WHITE,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Body1 content={content} color={color} />
    </Pressable>
  );
};
