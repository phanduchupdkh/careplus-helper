import { Dimensions } from 'react-native';
import { DIMENSION_TYPE } from '../../constant';
export const checkDimension = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth <= 320) return DIMENSION_TYPE.SMALLEST
  if (windowWidth <= 360) return DIMENSION_TYPE.SMALL
  if (windowWidth <= 414) return DIMENSION_TYPE.NORMAL
  if (windowWidth <= 768) return DIMENSION_TYPE.LARGE
  return DIMENSION_TYPE.LARGEST
};
