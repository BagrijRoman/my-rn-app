import React from "@types/react";
import { Text, TouchableOpacity } from "react-native";



export const Button = (type) => {


  return (
    <TouchableOpacity
      onPress={onLogInClick}
      style={styles.button}
    >
      <Text>
        Log In
      </Text>
    </TouchableOpacity>
  );
}

// export const BtnPrimary = () => {
//
// };
//
// export const BtnSecondary = () => {
//
// };
//
// export const BtnWarning = () => {
//
// }