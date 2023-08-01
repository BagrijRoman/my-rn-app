import Toast from 'react-native-toast-message';

const success = (text: String, props: Object = {}): void => Toast.show({
  type: 'success',
  text1: 'Success',
  text2: text,
  ...props,
});

const info = (text: String, props: Object = {}): void => Toast.show({
  type: 'info',
  text1: 'Info',
  text2: text,
  ...props,
});

const error = (text: String, props: Object = {}): void => Toast.show({
  type: 'error',
  text1: 'Error',
  text2: text,
  ...props,
});

export const Notificator = {
  success,
  info,
  error,
};
