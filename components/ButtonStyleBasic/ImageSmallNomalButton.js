import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colorStyles } from '../../style';
import { Body2 } from '../TextStyles';
export const ImageSmallNomalButton = ({
  content = '',
  handleOnPress = () => {},
  style = {},
  color = colorStyles.WHITE,
  urlImage = null,
  styleImage = {},
  icon = null,
  styleIcon = {},
  colorIcon = colorStyles.TEXT_COLOR,
  mt = 0,
  mb = 0,
  mr = 0,
  ml = 0,
}) => {
  const marginCustom = {};
  mt ? (marginCustom.marginTop = mt) : null;
  mb ? (marginCustom.marginBootom = mb) : null;
  mr ? (marginCustom.marginRight = mr) : null;
  ml ? (marginCustom.marginLeft = ml) : null;
  return (
    <Pressable
      style={{
        borderRadius: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 12,
        paddingLeft: 12,
        height: 30,
        backgroundColor: colorStyles.PRIMARY_COLOR,
        marginTop: 4,
        ...style,
        ...marginCustom,
      }}
      onPress={handleOnPress}
    >
      <View style={{ flexDirection: 'row' }}>
        {urlImage ? (
          <Image
            style={{ height: 20, width: 20, marginRight: 12, ...styleImage }}
            source={{
              uri: urlImage,
            }}
          />
        ) : null}
        {icon ? (
          <Icon
            style={{ height: 20, width: 20, marginRight: 12, ...styleIcon }}
            name={icon}
            size={20}
            color={colorIcon}
          />
        ) : null}
        <Body2 content={content} color={color} />
      </View>
    </Pressable>
  );
};
