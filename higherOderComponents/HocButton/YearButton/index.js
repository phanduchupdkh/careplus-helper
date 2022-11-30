import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { Body1 } from '../../../components';
import { colorStyles } from '../../../style';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const YearButton = ({
  handleOnchange = () => {},
  contentYear = 'Year:',
  value = parseInt(moment().format('YYYY')),
}) => {
  useEffect(() => {}, []);
  return (
    <View style={{ flexDirection: 'row' }}>
      <Pressable style={{ padding: 10 }} onPress={() => handleOnchange(value - 1)}>
        <Icon name="angle-left" size={20} color={colorStyles.PRIMARY_COLOR} />
      </Pressable>
      <Body1 style={{ marginTop: 10 }} content={contentYear} color={colorStyles.TEXT_COLOR} />
      <Body1
        style={{ marginTop: 10, marginLeft: 5 }}
        content={value}
        color={colorStyles.TEXT_COLOR}
      />
      {value !== parseInt(moment().format('YYYY')) ? (
        <Pressable style={{ padding: 10 }} onPress={() => handleOnchange(value + 1)}>
          <Icon name="angle-right" size={20} color={colorStyles.PRIMARY_COLOR} />
        </Pressable>
      ) : null}
    </View>
  );
};
