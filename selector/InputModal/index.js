import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import { DropdownButton } from '../../components';
import { colorStyles } from '../../style';
import { InputOn } from './InputOn';

export const InputModal = ({
  handleOnComplete = () => {},
  actionText = 'Return',
  placeholder = '',
  label = null,
  valueData = '',
  setValue = () => {},
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const complete = (text) => {
    setModalVisible(false);
    handleOnComplete(text);
  };
  const renderColor = () => {
    if (valueData) return colorStyles.TEXT_COLOR;
    return colorStyles.DESCRIPTION_COLOR;
  };
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          <InputOn
            handleOnComplete={(text) => complete(text)}
            value={valueData}
            setValue={setValue}
            actionText={actionText}
            placeholder={placeholder}
            label={label}
          />
        </View>
      </Modal>
      <DropdownButton
        content={valueData || placeholder}
        handleOnPress={() => {
          setModalVisible(true);
        }}
        colorContent={renderColor()}
        isShowCaret={false}
        type="normal"
      />
    </View>
  );
};
