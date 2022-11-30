import React, { useState } from 'react';
import { Pressable, View, ScrollView } from 'react-native';
import { Body1 } from '../../components/TextStyles';
import { ButtonTabStyle, colorStyles } from '../../style';

export const TopMultiTab = ({
  withTab = 150,
  handleOnChange = () => {},
  data = [{ headerName: 'TopTab', id: 0 }],
  style = {},
}) => {
  const [key, setKey] = useState(data[0]?.id);
  const handleOnChangeTab = (item) => {
    setKey(item.id);
    handleOnChange(item);
  };
  return (
    <ScrollView
      style={{
        display: 'flex',
        marginTop: 10,
        borderTopWidth: 0.3,
        borderColor: colorStyles.TEXT_COLOR,
        ...style,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: 'row' }}>
        {data.map((item, index) => (
          <Pressable
            key={index}
            style={[
              ButtonTabStyle.normal,
              { with: withTab },
              key === item.id ? ButtonTabStyle.active : ButtonTabStyle.disabled,
            ]}
            onPress={() => handleOnChangeTab(item)}
          >
            <Body1
              content={item.headerName}
              color={key === item.id ? colorStyles.PRIMARY_COLOR : colorStyles.TEXT_COLOR}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};
