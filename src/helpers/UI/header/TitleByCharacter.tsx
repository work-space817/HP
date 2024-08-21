import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const TitleByCharacter = memo(() => {
  const { character } = useSelector(
    (store: RootState) => store.characterReducer
  );
  return <Text style={styles.title}>{character.name}</Text>;
});

export default TitleByCharacter;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
