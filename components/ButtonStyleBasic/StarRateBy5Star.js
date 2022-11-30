import { Image, Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import { colorStyles } from '../../style';
export const StarRateBy5Star = ({
  handlePress = () => {},
  style = {},
  stateStar = 0,
  size = 15,
  urlStar,
}) => {
  const systemSetting = useSelector((state) => state.app.systemSetting);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        ...style,
      }}
    >
      {[...Array(5)]
        .map((_, i) => i + 1)
        .map((item, index) => (
          <Pressable
            key={index}
            style={{
              borderRadius: 15,
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              marginLeft: 5,
            }}
            onPress={() => handlePress(item)}
          >
            <Image
              style={{
                tintColor: item <= stateStar ? colorStyles.YELLOW : colorStyles.DISABLE_COLOR,
                height: size,
                width: size,
              }}
              source={{
                uri: urlStar,
              }}
              resizeMode="contain"
            />
          </Pressable>
        ))}
    </View>
  );
};
