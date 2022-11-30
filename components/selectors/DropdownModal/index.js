import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import { colorStyles } from '../../../style';
import { DropdownButton, NomalSmallButton } from '../../ButtonStyleBasic';
import { BottomMargin } from '../../GenaralOther';
import { TickSquare } from '../../TickSquare';
export const DropdownModal = ({
  onSelect = () => {},
  selected = null,
  data = [],
  style = {},
  defaultValue = 'Select',
  width,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(selected);
  const [position, setPosition] = useState({
    top: 10,
    left: 20,
  });
  const onClickSelect = (item) => {
    onSelect(item);
    setSelect(item);
    setModalVisible(false);
  };
  const onPressOpen = (e, type) => {
    try {
      let top = e.nativeEvent.pageY - e.nativeEvent.locationY + 28;
      let left = e.nativeEvent.pageX - e.nativeEvent.locationX;
      const lenTru = (data.length + 1) * 35 > 350 ? 350 : (data.length + 1) * 35;
      if (e.nativeEvent.pageY > Dimensions.get('window').height / 2) {
        top = e.nativeEvent.pageY - e.nativeEvent.locationY - lenTru;
      }
      if (type) left = left - width + 26;
      setPosition({
        top,
        left: left,
      });
      setModalVisible(true);
    } catch (error) {}
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={() => setModalVisible(false)} style={{ flex: 1 }}>
          <ScrollView
            style={[
              styles.centeredView,
              { position: 'absolute', ...position, width: width ? width - 20 : 200 },
            ]}
          >
            <NomalSmallButton
              content={defaultValue}
              style={undefined === select?.id ? styles.buttonSelected : styles.button}
              color={colorStyles.TEXT_COLOR}
              handleOnPress={() => onClickSelect(null)}
              iconRight={undefined === select?.id ? 'check' : null}
              styleContent={{ justifyContent: 'space-between', flex: 1 }}
            />
            {data.map((item, index) => {
              return (
                <NomalSmallButton
                  key={index}
                  content={item.value}
                  style={item.id === select?.id ? styles.buttonSelected : styles.button}
                  color={colorStyles.TEXT_COLOR}
                  handleOnPress={() => onClickSelect(item)}
                  iconRight={item.id === select?.id ? 'check' : null}
                  styleContent={{ justifyContent: 'space-between', flex: 1 }}
                />
              );
            })}
            <BottomMargin value={10} />
          </ScrollView>
        </Pressable>
      </Modal>
      <DropdownButton
        content={select?.value ? select?.value : defaultValue}
        handleOnPress={(e) => onPressOpen(e)}
        handleOnPressCaret={(e) => onPressOpen(e, 'caret')}
        style={{ ...style, width: width ? width : 200 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: 200,
    maxHeight: 350,
    backgroundColor: colorStyles.WHITE,
    borderWidth: 1,
    borderColor: colorStyles.DESCRIPTION_COLOR,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: colorStyles.WHITE,
    borderRadius: 2,
    borderBottomColor: colorStyles.DESCRIPTION_COLOR,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSelected: {
    backgroundColor: colorStyles.BACKGROUND_COLOR,
    borderRadius: 2,
    borderBottomColor: colorStyles.DESCRIPTION_COLOR,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
