import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.rootPageBackGround,
  },
  formContainer: {
    width: 300,
    alignItems: "stretch",
  },
  btnContainer: {
    alignItems: "center",
  },
});