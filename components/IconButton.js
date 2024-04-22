import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
});

export default IconButton;
