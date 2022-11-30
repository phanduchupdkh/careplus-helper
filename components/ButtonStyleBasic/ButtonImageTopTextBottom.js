import React from 'react';
import { Pressable, Image } from 'react-native';
import { Overline } from '../TextStyles';
export const ButtonImageTopTextBottom = ({
  uriImage = '',
  size = 40,
  height = 40,
  handleOnPress = () => {},
  style = {},
  content = 'View',
  colorText = '#555555',
}) => {
  return (
    <Pressable
      style={{
        height: height,
        width: height,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Image
        style={{
          height: size,
          width: size,
        }}
        source={{
          uri: uriImage,
        }}
      />
      <Overline content={content} style={{ marginTop: 5 }} color={colorText} />
    </Pressable>
  );
};
