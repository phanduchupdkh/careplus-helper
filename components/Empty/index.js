
import React from 'react';
import { Image, View } from 'react-native';
import { colorStyles } from '../../style';
import { ButtonText } from '../TextStyles';
export const Empty = ({ content, size = 150, style = {} }) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        ...style,
      }}
    >
      <Image
        style={{
          height: size,
          width: size,
        }}
        source={require('../../assets/images/no-data.png')}
      />
      <ButtonText content={content} color={colorStyles.WHITE} />
    </View>
  );
};
