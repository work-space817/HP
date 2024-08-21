import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { characterActionType } from "../../../store/reducers/characterReducer";

const ResetCharacterList = memo(() => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch({ type: characterActionType.RESET })}
    >
      <Text>Reset</Text>
    </TouchableOpacity>
  );
});

export default ResetCharacterList;

const styles = StyleSheet.create({});
