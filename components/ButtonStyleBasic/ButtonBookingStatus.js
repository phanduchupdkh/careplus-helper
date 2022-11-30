import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { IMAGE_STEP_BOOKING } from '../../constant';
import { colorStyles } from '../../style';
export const ButtonBookingStatus = ({
  image = '',
  handleOnPress = () => {},
  status = 'default',
  style = {},
  greenTickSmall,
}) => {
  const renderImage = () => {
    return IMAGE_STEP_BOOKING[image] ? IMAGE_STEP_BOOKING[image] : '';
  };
  return (
    <Pressable
      style={{
        borderColor: colorStyles.TEXT_COLOR,
        height: 46,
        width: 30,
        backgroundColor: colorStyles.WHITE,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <View
        style={{
          borderColor:
            status === 'focus' || status === 'unfocus' || status === 'selected'
              ? colorStyles.PRIMARY_COLOR
              : colorStyles.WHITE,
          borderWidth: 1,
          borderRadius: 15,
          height: 30,
          width: 30,
        }}
      >
        <Image
          style={{
            tintColor:
              status === 'selected'
                ? colorStyles.GREEN_2
                : status === 'focus' || status === 'unfocus'
                ? colorStyles.PRIMARY_COLOR
                : colorStyles.DESCRIPTION_COLOR,
            height: 24,
            width: 24,
            margin: 2,
          }}
          source={image ? renderImage() : ''}
        />
      </View>

      <Image
        style={{
          tintColor: status === 'selected' ? colorStyles.GREEN_2 : colorStyles.WHITE,
          height: 14,
          width: 18,
          margin: 6,
        }}
        source={{ uri: greenTickSmall }}
      />
    </Pressable>
  );
};
