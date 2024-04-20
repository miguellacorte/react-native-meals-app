import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

const CategoryGridTile = ({ title, color, onPress, id }) => {
  const meal = MEALS.find((meal) => meal.categoryIds.indexOf(id) >= 0);

  const mealCount = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  ).length;

  imageUrl = meal.imageUrl;

  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} onPress={onPress}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          onError={(e) =>
            console.error("Failed to load image", e.nativeEvent.error)
          }
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.overlay}>
          <Text style={styles.mealText}>Amount of meals: {mealCount}</Text>
         
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealText: { fontSize: 20, fontWeight: "bold" },
  image: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    width: "100%",
    height: null,
    resizeMode: "cover",
  },
  button: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  titleContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    height: "70%",
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlay: {
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "32%",
    backgroundColor: "white", // semi-transparent gray
  },
});

export default CategoryGridTile;
