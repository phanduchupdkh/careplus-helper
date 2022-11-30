import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { colorStyles } from '../../style';
import { Body1, Body2 } from '../TextStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TYPE_DROP_DOWN } from '../../constant';

export const DropdownButton = ({
  content = '',
  type = TYPE_DROP_DOWN.small,
  handleOnPress = () => {},
  handleOnPressCaret = null,
  style = {},
  colorContent = colorStyles.TEXT_COLOR,
  styleContent = {},
  isShowCaret = true,
}) => {
  return (
    <Pressable
      style={[
        type === TYPE_DROP_DOWN.small ? styles.small : styles.nomal,
        {
          ...style,
        },
      ]}
      onPress={handleOnPress}
    >
      <View style={{ flex: 1, ...styleContent }}>
        <Body2 content={content} color={colorContent} />
      </View>
      {isShowCaret ? (
        <Pressable onPress={handleOnPressCaret ? handleOnPressCaret : handleOnPress}>
          <Icon style={{ marginRight: 0 }} name={'caret-down'} size={16} color={colorContent} />
        </Pressable>
      ) : null}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  nomal: {
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: colorStyles.BACKGROUND_COLOR,
    flexDirection: 'row',
  },
  small: {
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 12,
    height: 30,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: colorStyles.BACKGROUND_COLOR,
    flexDirection: 'row',
  },
});
