import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MealItem = ({ item }) => {
  return (
    <View style={styles.mealItem}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        onError={(e) =>
          console.error("Failed to load image", e.nativeEvent.error)
        }
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>Duration: {item.duration} minutes</Text>
      <Text style={styles.description}>Complexity: {item.complexity}</Text>
      <Text style={styles.description}>
        Affordability: {item.affordability}
      </Text>
      <View style={styles.detailBox}>
        <Text style={styles.detailText}>
          Gluten Free: {item.isGlutenFree ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailText}>
          Lactose Free: {item.isLactoseFree ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailText}>
          Vegan: {item.isVegan ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailText}>
          Vegetarian: {item.isVegetarian ? "Yes" : "No"}
        </Text>
      </View>
      <Text style={styles.ingredients}>Ingredients:</Text>
      {item.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredientItem}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.stepsTitle}>Steps:</Text>
      {item.steps.map((step, index) => (
        <Text key={index} style={styles.stepItem}>
          {index + 1}. {step}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 2,
  },
  detailBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  detailText: {
    fontSize: 14,
  },
  ingredients: {
    fontWeight: "bold",
    marginTop: 10,
  },
  ingredientItem: {
    fontSize: 14,
  },
  stepsTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  stepItem: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default MealItem;
