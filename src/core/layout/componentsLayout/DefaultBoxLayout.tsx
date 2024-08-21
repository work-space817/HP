import { StyleSheet, Text, View, ViewProps } from "react-native";
import React, { FC } from "react";

const DefaultBoxLayout: FC<ViewProps> = (props) => {
  return (
    <View {...props} style={[styles.layout, props.style]}>
      {props.children}
    </View>
  );
};

export default DefaultBoxLayout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "solid",
  },
});
