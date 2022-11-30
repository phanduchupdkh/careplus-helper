import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  function onKeyboardDidShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }
  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardHeight;
};
