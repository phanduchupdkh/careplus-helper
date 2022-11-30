import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Body1 } from '../../components';
import { colorStyles } from '../../style';
export const ItemSelect = ({
  content,
  handleOnPress = () => {},
  style = {},
  color = colorStyles.WHITE,
  selected = null,
}) => {
  return (
    <Pressable
      style={{
        flex: 1,
        backgroundColor: selected ? colorStyles.BACKGROUND_COLOR : colorStyles.WHITE,
        borderRadius: 2,
        padding: 5,
        borderBottomColor: colorStyles.DESCRIPTION_COLOR,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...style,
      }}
      onPress={handleOnPress}
    >
      <View style={{ flex: 1 }}>
        <Body1 content={content} color={color} style={{ flexWrap: 'wrap' }} />
      </View>
      {selected ? (
        <Icon style={{ marginRight: 5 }} name={'check'} size={12} color={colorStyles.GREEN_NEW} />
      ) : null}
    </Pressable>
  );
};
