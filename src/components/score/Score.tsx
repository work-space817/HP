import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import DefaultBoxLayout from "../../core/layout/componentsLayout/DefaultBoxLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Score = memo(() => {
  const { charactersList } = useSelector(
    (store: RootState) => store.characterReducer
  );
  console.log("charactersList: ", charactersList);

  const total = charactersList.length;
  const success = charactersList.filter((item) => item.guessed).length;
  const failed = charactersList.filter((item) => !item.guessed).length;
  return (
    <View style={styles.layout}>
      <DefaultBoxLayout>
        <Text style={styles.title}>{total}</Text>
        <Text style={styles.subtitle}>Total</Text>
      </DefaultBoxLayout>
      <DefaultBoxLayout>
        <Text style={styles.title}>{success}</Text>
        <Text style={styles.subtitle}>Success</Text>
      </DefaultBoxLayout>
      <DefaultBoxLayout>
        <Text style={styles.title}>{failed}</Text>
        <Text style={styles.subtitle}>Failed</Text>
      </DefaultBoxLayout>
    </View>
  );
});

export default Score;

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
  },
});
