import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toUpperCaseCustom } from '../../helpers';
import { colorStyles } from '../../style';
import { Body1 } from '../TextStyles';
export const ImageNomalButton = ({
  content = '',
  handleOnPress = () => {},
  style = {},
  color,
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
        height: 40,
        textAlign: 'center',
        alignItems: 'center',
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
        <Body1 content={toUpperCaseCustom(content)} color={color || colorStyles.WHITE} />
      </View>
    </Pressable>
  );
};
