import React from 'react';
import { View } from 'react-native';
import { Body1, Caption } from '../../components';
import { colorStyles } from '../../style';

export const TitleName = ({ title = '', name = '', type = 'column', style = {} }) => {
  const typeRow = {};
  switch (type) {
    case 'column':
      break;
    case 'row':
      typeRow.flexDirection = 'row';
      typeRow.marginBottom = 2;
      typeRow.justifyContent = 'space-between';
      break;
    default:
      break;
  }

  return (
    <View style={{ marginTop: 5, marginBottom: 5, ...typeRow, ...style }}>
      <Caption
        content={title}
        color={type === 'column' ? colorStyles.DESCRIPTION_COLOR : colorStyles.TEXT_COLOR}
        style={{ marginBottom: 5 }}
      />
      <Body1 content={name} color={colorStyles.TEXT_COLOR} />
    </View>
  );
};
