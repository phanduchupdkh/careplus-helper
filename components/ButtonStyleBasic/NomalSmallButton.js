import React from 'react';
import { Pressable, View } from 'react-native';
import { colorStyles } from '../../style';
import { Body1 } from '../TextStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export const NomalSmallButton = ({
  content,
  handleOnPress = () => {},
  style = {},
  color = colorStyles.WHITE,
  iconRight = null,
  styleContent = {},
  colorIcon = colorStyles.GREEN_NEW,
}) => {
  return (
    <Pressable
      style={{
        borderRadius: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 12,
        paddingLeft: 12,
        textAlign: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: colorStyles.PRIMARY_COLOR,
        ...style,
      }}
      onPress={handleOnPress}
    >
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', ...styleContent }}>
        <Body1 content={content} color={color} />
        {iconRight ? (
          <Icon style={{ marginRight: 5 }} name={iconRight} size={12} color={colorIcon} />
        ) : null}
      </View>
    </Pressable>
  );
};
