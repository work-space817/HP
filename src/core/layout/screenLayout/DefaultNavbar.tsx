import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import React, { FC } from "react";
import NavbarSVG from "../../../helpers/SVG/NavbarSVG";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../natigation/Navigation";
import { ScreenNames } from "../../natigation/routes";

const DefaultNavbar: FC<ViewProps> = (props) => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <View {...props} style={styles.defaultLayout}>
      <TouchableOpacity
        onPress={() => navigate(ScreenNames.HomeScreen)}
        style={styles.defaultButton}
      >
        <NavbarSVG id={"Home"} width={40} height={40} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate(ScreenNames.ListScreen)}
        style={styles.defaultButton}
      >
        <NavbarSVG id={"List"} width={40} height={40} />
        <Text>List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultNavbar;

const styles = StyleSheet.create({
  defaultLayout: {
    zIndex: 999,
    borderTopWidth: 2,
    borderTopColor: "#000000",
    borderStyle: "solid",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "10%",
  },
  defaultButton: {
    alignItems: "center",
  },
});
