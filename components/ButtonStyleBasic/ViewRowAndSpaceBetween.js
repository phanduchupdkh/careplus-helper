import React from 'react';
import { View } from 'react-native';
export const ViewRowAndSpaceBetween = ({ componentChild, style = {} }) => {
  return (
    <View
      style={{
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      {componentChild}
    </View>
  );
};
