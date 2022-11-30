
import React from 'react';
import { Image, Pressable } from 'react-native';
import { colorStyles } from '../../style';
import { Body2 } from '../TextStyles';
export const ShareSmallButton = ({
  content = 'Share',
  handleOnPress = () => {},
  style = {},
  shareBlue,
}) => (
  <Pressable
    style={{
      paddingTop: 5,
      paddingBottom: 5,
      height: 30,
      textAlign: 'right',
      alignItems: 'flex-start',
      flexDirection: 'row',
      backgroundColor: colorStyles.WHITE,
      ...style,
    }}
    onPress={handleOnPress}
  >
    <Image
      source={{ uri: shareBlue }}
      style={{
        width: 15,
        height: 15,
        marginRight: 7,
      }}
    />
    <Body2 content={content} color={colorStyles.PRIMARY_COLOR} />
  </Pressable>
);
