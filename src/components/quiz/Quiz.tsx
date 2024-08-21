import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import DefaultBoxLayout from "../../core/layout/componentsLayout/DefaultBoxLayout";
import Score from "../score/Score";
import { useQuery } from "react-query";
import { getRandomCharacter } from "../../api/getRandomCharacter";
import { useDispatch, useSelector } from "react-redux";
import { characterActionType } from "../../store/reducers/characterReducer";
import { RootState } from "../../store";

const Quiz = memo(() => {
  const dispatch = useDispatch();
  const { data, refetch } = useQuery("characters", getRandomCharacter);
  const { character, isRetry } = useSelector(
    (store: RootState) => store.characterReducer
  );

  const isRetryData = isRetry ? character : data;
  console.log("character: ", character.attempts);

  const handleSelectedAnswer = (selectedHouse: string) => {
    console.log("selectedHouse: ", selectedHouse);
    if (isRetryData?.house === selectedHouse) {
      const guessedState = { ...isRetryData, guessed: true };
      dispatch({ type: characterActionType.ADD_ANSWER, payload: guessedState });
    } else {
      const guessedState = { ...isRetryData, guessed: false };
      dispatch({ type: characterActionType.ADD_ANSWER, payload: guessedState });
    }
    refetch();
  };

  const houses = [
    {
      name: "Gryffindor",
      image: require("./../../assets/houses/Gryffindor.png"),
    },
    {
      name: "Slytherin",
      image: require("./../../assets/houses/Slytherin.png"),
    },
    {
      name: "Ravenclaw",
      image: require("./../../assets/houses/Ravenclaw.png"),
    },
    {
      name: "Hufflepuff",
      image: require("./../../assets/houses/Hufflepuff.png"),
    },
  ];
  const isImage =
    isRetryData?.image !== ""
      ? { uri: `${isRetryData?.image}` }
      : require("./../../assets/houses/userMock.png");
  return (
    <View style={styles.layout}>
      <Score />
      <View style={styles.portraitView}>
        <Image source={isImage} style={{ width: 150, height: 200 }} />
        <Text style={styles.name}>{isRetryData?.name}</Text>
      </View>

      <View style={styles.housesView}>
        {houses.map((house, index) => (
          <TouchableOpacity
            key={index}
            style={styles.houses}
            onPress={() => handleSelectedAnswer(house.name)}
          >
            <DefaultBoxLayout>
              <Image source={house.image} style={{ width: 35, height: 35 }} />
              <Text style={styles.houseName}>{house.name}</Text>
            </DefaultBoxLayout>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.houses}
          onPress={() => handleSelectedAnswer("")}
        >
          <DefaultBoxLayout style={styles.notInHouses}>
            <Text style={styles.lastBox}>Not in House</Text>
          </DefaultBoxLayout>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default Quiz;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  portraitView: {
    alignItems: "center",
  },
  housesView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  houses: {
    flex: 1,
    height: 75,
    flexBasis: "48%",
  },
  notInHouses: {
    flex: 1,
    height: 75,
    flexBasis: "100%",
  },
  lastBox: {
    fontSize: 24,
  },
  name: {
    fontWeight: "700",
    fontSize: 26,
  },
  houseName: {
    fontSize: 16,
    textAlign: "center",
  },
});
