import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Badge } from 'react-native-paper';
import { Body2 } from '../../components/TextStyles';
import { ButtonTabStyle, colorStyles } from '../../style';

export const TopTwoTab = ({
  component1 = <></>,
  component2 = <></>,
  badge1 = null,
  badge2 = null,
  content1 = '',
  content2 = '',
  style = {},
  sizeBadge = 18,
  keyDefault = 1,
}) => {
  const [key, setKey] = useState(keyDefault);
  const handleOnChangeTab = (value) => {
    setKey(value);
  };

  return (
    <View
      style={{
        display: 'flex',
        marginTop: 10,
        borderTopWidth: 0.3,
        borderColor: colorStyles.TEXT_COLOR,
        ...style,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={[
            ButtonTabStyle.normal,
            key === 1 ? ButtonTabStyle.active : ButtonTabStyle.disabled,
          ]}
          onPress={() => handleOnChangeTab(1)}
        >
          <Body2
            content={content1}
            color={key === 1 ? colorStyles.PRIMARY_COLOR : colorStyles.TEXT_COLOR}
          />
          {badge1 ? (
            <Badge
              size={sizeBadge}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                fontSize: 10,
                backgroundColor: colorStyles.SECONDARY_COLOR,
                color: 'white',
              }}
            >
              {badge1}
            </Badge>
          ) : null}
        </Pressable>
        <Pressable
          style={[
            ButtonTabStyle.normal,
            key === 1 ? ButtonTabStyle.disabled : ButtonTabStyle.active,
          ]}
          onPress={() => handleOnChangeTab(2)}
        >
          <Body2
            content={content2}
            color={key === 2 ? colorStyles.PRIMARY_COLOR : colorStyles.TEXT_COLOR}
          />
          {badge2 ? (
            <Badge
              size={sizeBadge}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                fontSize: 10,
                backgroundColor: colorStyles.SECONDARY_COLOR,
                color: 'white',
              }}
            >
              {badge2}
            </Badge>
          ) : null}
        </Pressable>
      </View>
      {key === 1 ? component1 : component2}
    </View>
  );
};
