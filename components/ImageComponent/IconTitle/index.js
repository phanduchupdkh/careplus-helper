import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { colorStyles } from '../../../style';
import { Overline } from '../../TextStyles';

export const IconTitle = ({
  customPress = () => {},
  choose = false,
  uri,
  title,
  style = {},
  size = 74,
}) => {
  return (
    <Pressable
      onPress={customPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: choose ? colorStyles.WHITE : colorStyles.BACKGROUND_COLOR,
        width: 85,
        marginTop: 5,
        ...style,
      }}
    >
      <View
        style={{
          height: size,
          width: size,
          padding: 3,
        }}
      >
        <Image
          style={{
            height: size,
            width: size,
            tintColor: choose ? colorStyles.PRIMARY_COLOR : colorStyles.DESCRIPTION_COLOR,
          }}
          source={{
            uri,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, marginTop: 12 }}>
        <Overline
          style={{ textAlign: 'center', letterSpacing: 0, margin: -2 }}
          content={title}
          color={choose ? colorStyles.PRIMARY_COLOR : colorStyles.TEXT_COLOR}
        />
      </View>
    </Pressable>
  );
};

export default IconTitle;
