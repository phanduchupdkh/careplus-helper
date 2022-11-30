import React from 'react';
import { Image, View } from 'react-native';
import { colorStyles } from '../../style';
export const ButtonLevelMic = ({
  level = 0,
  maxlevel = 10,
  style = {},
  numOfDot = 10,
  miccheck,
  miccheckerror,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: colorStyles.WHITE,
        margin: 10,
        ...style,
      }}
    >
      {Array.from(Array(numOfDot).keys()).map((item) => (
        <View
          style={{
            flex: 1,
          }}
        >
          {item === 0 ? (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: level ? colorStyles.PRIMARY_COLOR : colorStyles.RED,
              }}
              source={{
                uri: level ? miccheck : miccheckerror,
              }}
            />
          ) : (
            <View
              style={{
                height: 12,
                width: 12,
                margin: 3,
                borderRadius: 5,
                backgroundColor:
                  parseInt((level * numOfDot) / maxlevel) > item
                    ? colorStyles.PRIMARY_COLOR
                    : colorStyles.WHITE,
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};
