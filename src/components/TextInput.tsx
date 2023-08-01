import { TextInput as RNTextInput } from 'react-native';

import { colors } from '../styles/colors';


const styles = {
  backgroundColor: colors.inputBg,
  color: colors.inputText,
  borderColor: colors.inputBorder,
  // placeholderTextColor: colors.inputPlaceholder,


  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  padding: 5,
  paddingHorizontal: 10,
  borderBottomWidth: 2,
  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2
};

export const TextInput = (props) => {
  const externalStyles = props.style || {};

  return <RNTextInput
    {
      ...{
        selectionColor: colors.cursorDefault,
        placeholderTextColor: colors.inputPlaceholder,
        ...props,
        style: Object.assign(styles, externalStyles),
      }
  }
  />
}