import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Dimensions, Modal, Platform } from 'react-native';
import { Body2, CancelButton, DropdownButton } from '../../components';
import { useKeyboardHeight } from '../../helpers';
import { colorStyles } from '../../style';

export const InputOn = ({
  handleOnComplete = () => {},
  value = '',
  setValue = () => {},
  actionText = 'Return',
  placeholder = '',
  label = null,
}) => {
  const inputRef = useRef(null);
  const keyboardHeight = useKeyboardHeight();
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (inputRef?.current) setTimeout(() => inputRef.current.focus(), 100);
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: colorStyles.WHITE,
        bottom: Platform.OS === 'android' ? 0 : keyboardHeight,
        borderColor: colorStyles.DESCRIPTION_COLOR,
        borderTopWidth: 1,
        right: 0,
        zIndex: 999,
        width: windowWidth,
      }}
    >
      {label ? (
        <Body2 content={label} style={{ marginLeft: 16, marginBottom: 5, marginTop: 5 }} />
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 16,
        }}
      >
        <TextInput
          ref={inputRef}
          onChangeText={setValue}
          style={{
            flex: 1,
            height: 40,
            borderRadius: 20,
            padding: 10,
            paddingLeft: 16,
            marginRight: 12,
            backgroundColor: colorStyles.BACKGROUND_COLOR,
            fontFamily: 'Montserrat-Regular',
          }}
          onSubmitEditing={() => handleOnComplete(value)}
          onBlur={() => handleOnComplete(value)}
          value={value}
          placeholder={placeholder}
        />
        <CancelButton
          handleOnPress={() => handleOnComplete(value)}
          content={actionText}
          mr={12}
          style={{
            paddingBottom: 12,
            padding: 5,
            backgroundColor: colorStyles.WHITE,
            borderRadius: 5,
          }}
          color={colorStyles.PRIMARY_COLOR}
        />
      </View>
    </View>
  );
};
