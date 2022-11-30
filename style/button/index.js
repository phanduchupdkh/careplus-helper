import { colorStyles } from '../colorStyles';

export const ButtonTabStyle = {
  normal: {
    flex: 1,
    padding: 15,
    textAlign: 'center',
    alignItems: 'center',
    borderBottomColor: colorStyles.BACKGROUND_COLOR,
  },
  disabled: {
    borderBottomColor: colorStyles.BACKGROUND_COLOR,
    borderBottomWidth: 2,
    backgroundColor: colorStyles.BACKGROUND_COLOR,
  },
  active: {
    borderBottomColor: colorStyles.WHITE,
    borderBottomWidth: 2,
  },
};
