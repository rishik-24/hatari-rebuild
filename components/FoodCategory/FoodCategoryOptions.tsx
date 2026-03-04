import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { foodCategories } from "@/utils/demoFoodData";
import type { FoodCategory } from "@/utils/types";

const FoodCategoryOptions = () => {
  return (
    <View style={styles.container}>
      {foodCategories.map((category: FoodCategory) => (
        <TouchableOpacity
          key={category.id}
          style={styles.touchable}
          onPress={() => router.push(`/foodcategories/${category.slug}`)}>
          <View style={styles.inner}>
            <Image
              source={category.image}
              style={styles.image}
            />
            <Text style={styles.name}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodCategoryOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
  },

  touchable: {
    marginBottom: 15,
  },

  inner: {
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginHorizontal: 10,
  },

  name: {
    marginTop: 5,
    fontSize: 14,
  },
});
