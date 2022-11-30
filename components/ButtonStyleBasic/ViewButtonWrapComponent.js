import React from 'react';
import { Pressable } from 'react-native';
import { colorStyles } from '../../style';
export const ViewButtonWrapComponent = ({
  componentChild,
  handleOnPress = () => {},
  style = {},
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 10,
        padding: 10,
        backgroundColor: colorStyles.WHITE,
        borderWidth: 1,
        ...style,
      }}
      onPress={handleOnPress}
    >
      {componentChild}
    </Pressable>
  );
};
