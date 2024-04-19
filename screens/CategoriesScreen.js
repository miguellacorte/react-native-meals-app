import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      // This object that we pass as a second parameter value allows us to pass data to the next screen.
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CategoriesScreen;
