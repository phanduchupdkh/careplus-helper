import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { colorStyles } from '../../../style';
export const ModalLoading = ({ loading = false }) => {
  return (
    <Modal
      isVisible={loading}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.modalContentContainer}>
        <ActivityIndicator size="large" color={colorStyles.SECONDARY_COLOR} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContentContainer: {
    borderRadius: 10,
    padding: 16,
  },
});
