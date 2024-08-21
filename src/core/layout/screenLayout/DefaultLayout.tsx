import { StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import React, { FC } from "react";
import DefaultNavbar from "./DefaultNavbar";

interface IDefaultLayout extends ViewProps {
  outerStyle?: ViewStyle;
}

const DefaultLayout: FC<IDefaultLayout> = (props) => {
  return (
    <View style={[styles.layout, props.outerStyle]}>
      <View {...props} style={[styles.innerLayout, props.style]}>
        {props.children}
      </View>
      <DefaultNavbar />
    </View>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  innerLayout: {
    borderTopWidth: 2,
    borderTopColor: "#000000",
    borderStyle: "solid",
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
});
