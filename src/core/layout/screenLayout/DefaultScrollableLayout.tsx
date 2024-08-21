import {
  RefreshControl,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { FC, useCallback, useState } from "react";
import DefaultNavbar from "./DefaultNavbar";

interface IDefaultScrollableLayout extends ScrollViewProps {
  outerStyle?: ViewStyle;
  onRefreshComponents?: () => void;
}

const DefaultScrollableLayout: FC<IDefaultScrollableLayout> = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  console.log("onRefreshComponents: ", props.onRefreshComponents);
  const onRefresh = useCallback(() => {
    if (props.onRefreshComponents) {
      setRefreshing(true);
      props.onRefreshComponents();
      setRefreshing(false);
    }
  }, [props.onRefreshComponents]);
  return (
    <View style={[styles.layout, props.outerStyle]}>
      <ScrollView
        {...props}
        contentContainerStyle={[
          styles.innerLayout,
          props.contentContainerStyle,
        ]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {props.children}
      </ScrollView>
      <DefaultNavbar />
    </View>
  );
};

export default DefaultScrollableLayout;

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
