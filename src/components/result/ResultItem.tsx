import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import ResultSVG from "../../helpers/SVG/ResultSVG";
import ReloadSVG from "../../helpers/SVG/ReloadSVG";
import { ICharacter } from "./types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../core/natigation/Navigation";
import { ScreenNames } from "../../core/natigation/routes";
import { useDispatch } from "react-redux";
import { characterActionType } from "../../store/reducers/characterReducer";

const ResultItem: FC<ICharacter> = (props) => {
  const { navigate } = useNavigation<StackNavigation>();
  const dispatch = useDispatch();
  const isImage =
    props?.image !== ""
      ? { uri: `${props?.image}` }
      : require("./../../assets/houses/userMock.png");

  const toDetails = () => {
    dispatch({ type: characterActionType.SELECT_CHARACTER, payload: props });
    navigate(ScreenNames.DetailsScreen);
  };

  const toHome = () => {
    dispatch({ type: characterActionType.SET_RETRY, payload: props });
    navigate(ScreenNames.HomeScreen);
  };
  return (
    <TouchableOpacity style={styles.layout} onPress={toDetails}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Image source={isImage} style={{ width: 45, height: 50 }} />
        <View style={{ gap: 5 }}>
          <Text>{props.name}</Text>
          <Text>Attempts: {props.attempts}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        {props.guessed ? (
          <ResultSVG id={"Success"} width={30} height={30} />
        ) : (
          <>
            <TouchableOpacity onPress={toHome}>
              <ReloadSVG width={30} height={30} />
            </TouchableOpacity>
            <ResultSVG id={"Failed"} width={30} height={30} />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    gap: 5,
  },
});
