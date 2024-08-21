import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import DefaultScrollableLayout from "../../layout/screenLayout/DefaultScrollableLayout";
import Quiz from "../../../components/quiz/Quiz";
import { useQuery } from "react-query";
import { getRandomCharacter } from "../../../api/getRandomCharacter";

const HomeScreen = memo(() => {
  const { refetch } = useQuery("characters", getRandomCharacter);
  return (
    <DefaultScrollableLayout
      contentContainerStyle={styles.layout}
      onRefreshComponents={refetch}
    >
      <Quiz />
    </DefaultScrollableLayout>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
