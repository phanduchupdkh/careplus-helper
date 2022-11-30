import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, ScrollView, View } from 'react-native';
import { DropdownButton, NomalSmallButton } from '../../components/ButtonStyleBasic';
import { BottomMargin, InputNomal } from '../../components';
import { colorStyles } from '../../style';
import { ItemSelect } from './ItemSelect';
import { removeVietnameseTones, toUpperCaseCustom } from '../../helpers';
export const SelectOne = ({
  onSelect = () => {},
  onChange = () => {},
  selected = null,
  data = [],
  style = {},
  defaultValue = 'Select',
  unsignedSearch = true,
  type = 'nomal',
  contentCancel = 'cancel',
  placeholder = 'search',
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchKey, setSearchKey] = useState(null);
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    setDataSearch(data);
  }, [data]);

  const onClickSelect = (item) => {
    onSelect(item);
    if (item?.id !== selected?.id) onChange(item);
    setModalVisible(false);
    setSearchKey(null);
    setDataSearch(data);
  };
  const isMatch = (value, key) => {
    try {
      const valueRe = unsignedSearch ? removeVietnameseTones(value) : value;
      const keyRe = unsignedSearch ? removeVietnameseTones(key) : key;
      return toUpperCaseCustom(valueRe).includes(toUpperCaseCustom(keyRe));
    } catch (error) {
      return false;
    }
  };
  const handleSearch = (e) => {
    setSearchKey(e);
    const filterData = data.filter((item) => {
      try {
        if (isMatch(item.value, e)) return true;
      } catch (error) {
        return false;
      }
    });
    setDataSearch(filterData);
  };
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              marginTop: 50,
              marginBottom: 10,
              flexDirection: 'row',
            }}
          >
            <InputNomal
              value={searchKey}
              styleContainer={{
                borderWidth: 0.5,
                flex: 1,
                backgroundColor: colorStyles.BACKGROUND_COLOR,
              }}
              style={{ paddingLeft: 0, padding: 0 }}
              iconRight={searchKey ? 'close' : null}
              onChangeText={handleSearch}
              iconLeft={'search'}
              handleOnPressRight={() => {
                handleSearch(null);
              }}
              placeholder={placeholder}
            />
            <NomalSmallButton
              content={contentCancel}
              style={{ marginLeft: 10 }}
              handleOnPress={() => setModalVisible(false)}
            />
          </View>
          <ScrollView style={[styles.centeredView]}>
            {defaultValue ? (
              <ItemSelect
                content={defaultValue}
                selected={undefined === selected?.id ? true : false}
                color={colorStyles.TEXT_COLOR}
                handleOnPress={() => onClickSelect(null)}
                styleContent={{ justifyContent: 'space-between', flex: 1 }}
              />
            ) : null}
            {dataSearch.map((item, index) => {
              return (
                <ItemSelect
                  key={index}
                  content={item.value}
                  color={colorStyles.TEXT_COLOR}
                  selected={item.id === selected?.id ? true : false}
                  handleOnPress={() => onClickSelect(item)}
                  styleContent={{ justifyContent: 'space-between', flex: 1 }}
                />
              );
            })}
            <BottomMargin />
          </ScrollView>
        </View>
      </Modal>
      <DropdownButton
        content={selected?.value ? selected?.value : defaultValue}
        handleOnPress={() => setModalVisible(true)}
        type={type}
        style={{ ...style }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    borderRadius: 5,
    padding: 5,
  },
});
