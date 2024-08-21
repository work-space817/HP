import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CharacterInfo = memo(() => {
  const { character } = useSelector(
    (store: RootState) => store.characterReducer
  );
  console.log("character: ", character.guessed);
  const isImage =
    character?.image !== ""
      ? { uri: `${character?.image}` }
      : require("./../../assets/houses/userMock.png");

  return (
    <View style={styles.layout}>
      <View style={styles.portraitView}>
        <Image source={isImage} style={{ width: 150, height: 200 }} />
      </View>
      {character.guessed ? (
        <View style={styles.infoView}>
          <Text>House: {character.name}</Text>
          <Text>Date of birth: {character.dateOfBirth}</Text>
          <Text>Actor: {character.actor}</Text>
          <Text>Species: {character.species}</Text>
        </View>
      ) : (
        <Text style={styles.deniedText}>ACCESS DENIED</Text>
      )}
    </View>
  );
});

export default CharacterInfo;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  portraitView: {
    flexDirection: "row",
  },
  infoView: {
    gap: 10,
  },
  deniedText: {
    height: 50,
    fontSize: 28,
    color: "red",
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
  },
});
