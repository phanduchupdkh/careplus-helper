import { ImageBackground, Pressable, Text } from 'react-native';
import React from 'react';
import { colorStyles } from '../../style';
export const ButtonWithImageBackgroud = ({
  image = '',
  style = {},
  handleOnPress = () => {},
  componentChild = <Text></Text>,
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: colorStyles.WHITE,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <ImageBackground
        source={{ uri: image }}
        resizeMode="stretch"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {componentChild}
      </ImageBackground>
    </Pressable>
  );
};
