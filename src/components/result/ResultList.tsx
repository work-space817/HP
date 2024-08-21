import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useMemo, useState } from "react";
import ResultItem from "./ResultItem";
import CustomTextInput from "../UI/CustomTextInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ResultList = memo(() => {
  const { charactersList } = useSelector(
    (store: RootState) => store.characterReducer
  );
  const [searchName, setSearchName] = useState("");
  console.log("searchName: ", searchName);

  const searchTransactionByTitle = useMemo(() => {
    return charactersList.filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [searchName, charactersList]);
  return (
    <>
      <CustomTextInput
        value={searchName}
        onChangeText={(e) => setSearchName(e)}
        placeholder="Filter characters..."
        placeholderTextColor={"#000000"}
        style={styles.searchStyle}
      />

      <FlatList
        data={searchTransactionByTitle}
        renderItem={({ item }) => <ResultItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 15, paddingBottom: 15 }}
      />
    </>
  );
});

export default ResultList;

const styles = StyleSheet.create({
  searchStyle: {
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 0,
  },
});
