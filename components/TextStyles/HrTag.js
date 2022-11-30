import React from 'react';
import { View } from 'react-native';
import { colorStyles } from '../../style';
export const HrTag = ({ color = colorStyles.DESCRIPTION_COLOR }) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginTop: 5,
      }}
    />
  );
};
