import React from 'react';
import { Body2, colorStyles } from 'carepluscli';
import { View } from 'react-native';
export const ChildRowInfo = ({ title, value, colorValue = colorStyles.TEXT_COLOR }) => (
  <>
    <Body2 content={title} color={colorStyles.TEXT_COLOR} />
    <Body2 content={value} color={colorValue} />
  </>
);

export const BottomMargin = ({ value = 30 }) => <View style={{ marginBottom: value }}></View>;
