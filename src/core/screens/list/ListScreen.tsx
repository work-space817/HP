import { StyleSheet } from "react-native";
import DefaultLayout from "../../layout/screenLayout/DefaultLayout";
import Score from "../../../components/score/Score";
import ResultList from "../../../components/result/ResultList";
import { memo } from "react";

const ListScreen = memo(() => {
  return (
    <DefaultLayout style={styles.layout}>
      <Score />
      <ResultList />
    </DefaultLayout>
  );
});

export default ListScreen;

const styles = StyleSheet.create({
  layout: {
    gap: 20,
    height: "90%",
    paddingBottom: 0,
  },
});
