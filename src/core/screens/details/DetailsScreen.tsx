import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import CharacterInfo from "../../../components/character/CharacterInfo";
import DefaultScrollableLayout from "../../layout/screenLayout/DefaultScrollableLayout";

const DetailsScreen = memo(() => {
  return (
    <DefaultScrollableLayout>
      <CharacterInfo />
    </DefaultScrollableLayout>
  );
});

export default DetailsScreen;
