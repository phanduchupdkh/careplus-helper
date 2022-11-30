import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { Body2, CancelButton, Caption } from '../../components';
import { colorStyles, containersStyle } from '../../style';
import { ImageLeftAndComponentRight } from '../ImageLeftAndComponentRight';

export const MemberChild = ({
  systemSetting = {},
  memList = {},
  style = {},
  contentRight = '',
  relationship = null,
  handleOnPressDetailMember = () => {},
  handleOnPressCancel = () => {},
  handleOnPressMember = () => {},
  colorRight = null,
  contentDisconnect = null,
}) => {
  const renderColor = () => {
    if (colorRight) return colorRight;
    return colorStyles.SECONDARY_COLOR;
  };
  const getAvatar = () => {
    try {
      const domain = systemSetting?.data?.domain_avatar_images;
      const mainAva = memList?.PatientAccountModel?.avatar_name;
      if (memList.isMainProfile) return mainAva ? `${domain}${mainAva}` : '';
      const memAva = memList?.avatar_name;
      return memAva ? `${domain}${memAva}` : '';
    } catch (error) {
      return '';
    }
  };
  const renderFullName = () => {
    try {
      if (memList.isMainProfile) return memList?.PatientAccountModel?.fullname;
      return memList?.fullname;
    } catch (error) {
      return '';
    }
  };
  const renderDOB = () => {
    try {
      const DOB = memList.isMainProfile
        ? memList?.PatientAccountModel?.date_of_birth
        : memList?.date_of_birth;

      return DOB ? moment(DOB).format('DD / MM / YYYY') : '';
    } catch (error) {
      return '';
    }
  };
  return (
    <ImageLeftAndComponentRight
      key={memList.id}
      image={getAvatar()}
      style={{
        borderRadius: 0,
        borderRadius: 10,
        borderTopRightRadius: 10,
        ...containersStyle.viewButton,
        ...style,
      }}
      handleOnPress={handleOnPressMember}
      componentRight={
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Body2 content={renderFullName()} color={colorStyles.PRIMARY_COLOR} />
            <Caption style={{ marginTop: 5, marginBottom: 5 }} content={renderDOB()} />
            {relationship ? (
              <Caption content={relationship} color={colorStyles.PRIMARY_COLOR} />
            ) : null}
          </View>
          <View
            style={{
              backgroundColor: colorStyles.WHITE,
              justifyContent: 'flex-start',
            }}
          >
            <CancelButton
              icon="eye"
              handleOnPress={handleOnPressDetailMember}
              color={renderColor()}
              content={contentRight}
              style={{
                backgroundColor: colorStyles.WHITE,
              }}
            />
            {contentDisconnect ? (
              <CancelButton
                icon="minus-circle"
                handleOnPress={handleOnPressCancel}
                color={colorStyles.PRIMARY_COLOR}
                content={contentDisconnect}
                style={{
                  backgroundColor: colorStyles.WHITE,
                  marginTop: 15,
                }}
              />
            ) : null}
          </View>
        </View>
      }
    />
  );
};
