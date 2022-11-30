import React from 'react';
import { Pressable, View, Image } from 'react-native';
import { colorStyles } from '../../style';
import { ButtonText } from '../TextStyles';
export const ButonSmallWithIcon = ({ content, uri, handleOnPress = () => {}, style = {} }) => {
  return (
    <Pressable
      style={{
        borderRadius: 34,
        paddingTop: 8,
        paddingRight: 12,
        paddingLeft: 12,
        height: 34,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: colorStyles.YELLOW,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image
          style={{
            height: 20,
            width: 20,
            marginRight: 5,
          }}
          source={{
            uri,
          }}
        />
        <ButtonText content={content} color={colorStyles.WHITE} />
      </View>
    </Pressable>
  );
};
