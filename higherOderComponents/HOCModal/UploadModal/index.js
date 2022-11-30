import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { Body1, ButtonWithImageNomal, NomalButton } from '../../../components';
import { colorStyles } from '../../../style';

export const UploadModal = ({
  isModalVisible = false,
  onFinish = () => {},
  currImage = null,
  handleCloseModal = () => {},
  title = 'Please upload or take a photo',
  selectText = 'Select Photo',
  takePhotoText = 'Take Photo',
}) => {
  const handleTakePhoto = () => {
    if(!ImagePicker) return false
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      const data = {
        type: image.mime,
        image: image.data,
        size: image.size,
        currentImage: currImage,
      };
      onFinish(data);
    });
  };

  const handlePickerPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      const data = {
        type: image.mime,
        image: image.data,
        size: image.size,
        currentImage: currImage,
      };
      onFinish(data);
    });
  };

  return (
    <Modal
      isVisible={isModalVisible}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.modalContentContainer}>
        <View style={{ flexDirection: 'row-reverse' }}>
          <ButtonWithImageNomal
            size={20}
            uriImage={require('../../../assets/icons/close.png')}
            handleOnPress={handleCloseModal}
          />
        </View>
        <Body1 content={title} color={colorStyles.PRIMARY_COLOR} />
        <NomalButton
          style={{
            margin: 16,
          }}
          content={selectText}
          handleOnPress={handlePickerPhoto}
        />
        <NomalButton
          style={{
            backgroundColor: colorStyles.SECONDARY_COLOR,
            margin: 16,
          }}
          content={takePhotoText}
          handleOnPress={handleTakePhoto}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContentContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    width: '100%',
  },
});
