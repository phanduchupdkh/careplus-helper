import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { Caption, Body2, Body1 } from '../../../components';
import { colorStyles, containersStyle } from '../../../style';

export const ButtonVaccineUpcoming = ({
  data = {},
  contentTitle = '',
  handleOnPress = () => {},
  appointment_date = '',
  isBanner = false,
}) => {
  const renderImage = () => {
    const uri = isBanner ? data?.ClaVaccinesModel?.banner : data?.ClaVaccinesModel?.icon;
    return uri ? { uri } : require('../../../assets/images/vaccineBanner.png');
  };
  const RenderDate = ({ data }) => {
    const array = data?.VacxinFollowUpModels || [];
    return (
      <View>
        {array.map((item) => {
          if (item?.appointment_date)
            return (
              <Caption
                style={{ marginTop: 5 }}
                content={moment(item.appointment_date).format('DD/MM/YYYY')}
                color={colorStyles.PRIMARY_COLOR}
              />
            );
        })}
      </View>
    );
  };
  return (
    <Pressable
      style={{ height: isBanner ? 170 : 400, margin: isBanner ? 0 : 10 }}
      delayPressIn={0}
      onPress={() => handleOnPress(data)}
    >
      <ImageBackground
        source={renderImage()}
        resizeMode="cover"
        style={{ height: isBanner ? 170 : 350 }}
      >
        {data?.VacxinModel?.vacxin_name ? (
          <View
            style={{
              ...containersStyle.viewContainer,
              backgroundColor: 'rgba(255,255,255,0.5)',
              margin: 10,
            }}
          >
            <Body2 content={contentTitle} color={colorStyles.PRIMARY_COLOR} />
            <Body2
              style={{ marginTop: 5 }}
              content={data?.VacxinModel?.vacxin_name}
              color={colorStyles.TEXT_COLOR}
            />
            <View style={{ flexDirection: 'row' }}></View>
            <RenderDate data={data} />
          </View>
        ) : null}
      </ImageBackground>
    </Pressable>
  );
};
