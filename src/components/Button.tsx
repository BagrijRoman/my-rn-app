import { ReactChild, ReactFragment, ReactPortal } from "@types/react";
import React from 'react';
import { Text, TouchableOpacity } from "react-native";

import { colors } from "../styles/colors";

export enum btnType {
  primary,
  secondary,
  warning,
  disabled
}

interface BtnProps {
  type: btnType,
  onPress: () => void,
  style: Object,
  text: string,
  disabled: boolean,
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

const btnDefaultStyles = {
  borderRadius: 8,
  backgroundColor: '#DDDDDD',
  padding: 10,
  alignItems: "center",
};

const btnPrimaryStyles = {
  ...btnDefaultStyles,
  backgroundColor: colors.blue1,
};

const btnSecondaryStyles = {
  ...btnDefaultStyles,
  backgroundColor: colors.blue1,
};

const btnWarningStyles = {
  ...btnDefaultStyles,
  backgroundColor: colors.blue1,
};

const btnDisabledStyles = {
  ...btnDefaultStyles,
  backgroundColor: colors.blue1,
};

export const Button = (props: BtnProps) => {
  const {
    text,
    type = btnType.primary,
    onPress = () => {},
    disabled = false,
    style = {},
    children = null,
    ...rest
  } = props;

  const stylesUpdated = style;

  switch (type) {
    case btnType.primary: {
      Object.assign(stylesUpdated, btnPrimaryStyles);
      break;
    }
    case btnType.warning: {
      Object.assign(stylesUpdated, btnWarningStyles);
      break;
    }
    case btnType.disabled: {
      Object.assign(stylesUpdated, btnDisabledStyles);
      break;
    }
    case btnType.secondary:
    default: {
      Object.assign(stylesUpdated, btnSecondaryStyles);
    }

  }

  return (
    <TouchableOpacity
      {...{
        onPress,
        style: stylesUpdated,
        ...rest
      }}
    >
      {children ? children :
        <Text>
          {text}
        </Text>
      }
    </TouchableOpacity>
  );
}
