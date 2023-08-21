import { ReactChild, ReactFragment, ReactPortal } from "@types/react";
import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View, StyleSheet} from "react-native";

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
  loading: boolean,
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  loadingContainer: {
    flexDirection: "row",
  },
  loader: {
    marginRight: 10,
  },
});

const btnDefaultStyles = {
  borderRadius: 8,
  backgroundColor: '#DDDDDD',
  padding: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
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
    loading = false,
    ...rest
  } = props;

  const stylesUpdated = {};

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
    <View style={styles.container}>
      <TouchableOpacity
        {...{
          onPress,
          style: [style, stylesUpdated],
          disabled: disabled || loading,
          ...rest
        }}
      >
        {children ? children :
          <View style={styles.loadingContainer}>
            {loading && <ActivityIndicator  style={styles.loader} size="small" color="yellow" />}
            <Text>
              {text}
            </Text>
          </View>
        }
      </TouchableOpacity>
    </View>
  );
}
