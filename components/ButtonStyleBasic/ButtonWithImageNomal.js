import React from 'react';
import { Pressable, Image } from 'react-native';
export const ButtonWithImageNomal = ({
  uriImage = require('../../assets/images/default-image.png'),
  size = 40,
  handleOnPress = () => {},
  style = {},
}) => {
  return (
    <Pressable
      style={{
        height: 40,
        width: 40,
        textAlign: 'center',
        alignItems: 'center',
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Image
        style={{
          height: size,
          width: size,
        }}
        source={uriImage}
      />
    </Pressable>
  );
};
