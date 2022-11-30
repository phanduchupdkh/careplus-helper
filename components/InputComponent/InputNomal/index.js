import React from 'react';
import { TextInput, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colorStyles, inputStyle } from '../../../style';

export const InputNomal = ({
  styleContainer = {},
  style = {},
  placeholder = '',
  onChangeText = () => {},
  value = '',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  placeholderStyle = { fontFamily: 'Montserrat-Regular' },
  iconRight = null,
  iconLeft = null,
  handleOnPressRight = () => {},
  keyboardType = 'default',
}) => {
  return (
    <View
      style={{
        borderColor: colorStyles.PRIMARY_COLOR,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: colorStyles.BACKGROUND_COLOR,
        ...styleContainer,
      }}
    >
      {iconLeft ? (
        <Pressable
          style={{
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleOnPressRight}
        >
          <Icon name={iconLeft} size={20} color="#555555" />
        </Pressable>
      ) : null}
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          flex: 1,
          ...inputStyle.nomalInput,
          ...style,
        }}
        placeholderStyle={placeholderStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={autoCapitalize}
      />
      {iconRight ? (
        <Pressable
          style={{
            borderColor: colorStyles.PRIMARY_COLOR,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleOnPressRight}
        >
          <Icon name={iconRight} size={20} color="#555555" />
        </Pressable>
      ) : null}
    </View>
  );
};
