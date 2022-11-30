import React from 'react';
import { Pressable } from 'react-native';
import { colorStyles } from '../../style';
import { Body1 } from '../TextStyles';
export const ActionSmallButton = ({
  content,
  color = colorStyles.PRIMARY_COLOR,
  handleOnPress = () => {},
  style = {},
  buttonRight = null,
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: color,
        padding: 5,
        paddingRight: 12,
        paddingLeft: 12,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: colorStyles.WHITE,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Body1 content={content} color={color} />
      {buttonRight}
    </Pressable>
  );
};
