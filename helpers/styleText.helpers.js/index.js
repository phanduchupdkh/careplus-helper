import { checkDimension } from '../dimensions';

const fontSizes = {
  20: {
    smallest: 18,
    small: 18,
    normal: 20,
    large: 20,
    largest: 20,
  },
  16: {
    smallest: 14,
    small: 14,
    normal: 16,
    large: 16,
    largest: 16,
  },
  14: {
    smallest: 12,
    small: 12,
    normal: 14,
    large: 14,
    largest: 14,
  },
  12: {
    smallest: 10,
    small: 10,
    normal: 12,
    large: 12,
    largest: 12,
  },
};
export const calculatorFontSize = (fontsize) => {
  try {
    return fontSizes[fontsize][checkDimension()];
  } catch (error) {
    return fontsize;
  }
};
