import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colorStyles } from '../../style';
import { Body2 } from '../TextStyles';
export const CancelButton = ({
  content = '',
  handleOnPress = () => {},
  style = {},
  color = colorStyles.RED,
  icon = null,
  mr = 0,
  ml = 0,
  mt = 0,
  mb = 0,
  styleContent = {},
}) => {
  return (
    <Pressable
      style={{
        paddingBottom: 5,
        backgroundColor: '#fff',
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        justifyContent: 'flex-end',
        ...style,
      }}
      onPress={handleOnPress}
    >
      <View style={{ flexDirection: 'row', ...styleContent }}>
        {icon ? <Icon style={{ marginRight: 5 }} name={icon} size={16} color={color} /> : null}
        <Body2 content={content} color={color} />
      </View>
    </Pressable>
  );
};
