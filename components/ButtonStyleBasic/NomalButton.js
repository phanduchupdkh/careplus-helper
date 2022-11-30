import React from 'react';
import { Pressable } from 'react-native';
import { toUpperCaseCustom } from '../../helpers';
import { colorStyles } from '../../style';
import { Body1 } from '../TextStyles';
export const NomalButton = ({ content = '', handleOnPress = () => {}, style = {}, color }) => {
  return (
    <Pressable
      style={{
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: colorStyles.PRIMARY_COLOR,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Body1 content={toUpperCaseCustom(content)} color={color || colorStyles.WHITE} />
    </Pressable>
  );
};
