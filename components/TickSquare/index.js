import React from 'react';
import { Image, View } from 'react-native';
import { colorStyles } from '../../style';
import { ButtonText } from '../TextStyles';
export const TickSquare = ({
  content,
  size = 50,
  style = {},
  styleImage = {},
  color = colorStyles.WHITE,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        ...style,
      }}
    >
      <Image
        style={{
          height: size,
          width: size,
          ...styleImage,
        }}
        source={require('../../assets/icons/TickSquare.png')}
      />
      <ButtonText content={content} color={color} />
    </View>
  );
};
