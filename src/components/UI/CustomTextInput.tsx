import React, { FC, memo } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";

export interface ICustomTextInput extends TextInputProps {
  label?: string;
  value: string;
  layoutStyle?: StyleProp<ViewStyle>;
}

const CustomTextInput: FC<ICustomTextInput> = (props) => {
  return (
    <View style={[styles.layout, props.layoutStyle]}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput {...props} style={[styles.input, props.style]} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  layout: {
    width: "100%",
  },
  label: {
    marginBottom: 6,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16.8,
  },
  input: {
    margin: 0,
    padding: 0,
    height: 40,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
