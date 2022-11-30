import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { colorStyles } from '../../style';

export const ImageLeftAndComponentRight = ({
  image = '',
  icon = null,
  style = {},
  borderRadius = 20,
  sizeImage = 40,
  marginRight = 12,
  handleOnPress = () => {},
  type = 'row',
  componentRight = <></>,
  handleOnPressImage = () => {},
}) => {
  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: type,
        backgroundColor: colorStyles.WHITE,
        borderRadius: 10,
        padding: 12,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <Pressable
        style={[
          {
            textAlign: 'center',
            marginRight: marginRight,
            alignItems: 'center',
          },
          { width: sizeImage },
        ]}
        onPress={handleOnPressImage}
      >
        {icon ? (
          icon
        ) : (
          <Image
            style={{
              height: sizeImage,
              width: sizeImage,
              borderRadius: borderRadius,
            }}
            source={
              image
                ? {
                    uri: image,
                  }
                : require('../../assets/images/account-black.png')
            }
          />
        )}
      </Pressable>
      <View
        style={{
          flex: 1,
        }}
      >
        {componentRight}
      </View>
    </Pressable>
  );
}
