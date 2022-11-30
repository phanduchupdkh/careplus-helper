import React from 'react';
import { View } from 'react-native';
const ViewRowAndSpaceBetween = ({ componentChild, style = {} }) => {
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

export default ViewRowAndSpaceBetween;
