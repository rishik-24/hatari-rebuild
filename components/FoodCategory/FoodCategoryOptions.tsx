import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FoodCategoryOptions = () => {
  const foodCategories = [
    {
      id: 1,
      name: "Chicken",
      image: require("../../assets/images/foods/chicken.jpg"),
    },
    {
      id: 2,
      name: "Mutton",
      image: require("../../assets/images/foods/mutton.jpg"),
    },
    {
      id: 3,
      name: "Biryani",
      image: require("../../assets/images/foods/biryani.jpg"),
    },
    {
      id: 4,
      name: "Fish",
      image: require("../../assets/images/foods/hilsha.jpg"),
    },
    {
      id: 5,
      name: "Prawn",
      image: require("../../assets/images/foods/prawn.jpg"),
    },
    {
      id: 6,
      name: "Egg",
      image: require("../../assets/images/foods/egg.jpg"),
    },
    {
      id: 7,
      name: "Tandoori Chicken",
      image: require("../../assets/images/foods/tandoori-chicken.jpg"),
    },
    {
      id: 8,
      name: "Noodles",
      image: require("../../assets/images/foods/noodles.jpg"),
    },
    {
      id: 9,
      name: "Soup",
      image: require("../../assets/images/foods/soup.jpg"),
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: 20,
      }}>
      {foodCategories.map((category) => (
        <TouchableOpacity
          style={{
            marginBottom: 15,
            flexDirection: "row",
          }}
          key={category.id}>
          <View
            key={category.id}
            style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={category.image}
              style={{
                width: 90,
                height: 90,
                borderRadius: 100,
                marginHorizontal: 10,
              }}
            />
            <Text style={{ marginTop: 5, fontSize: 14 }}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodCategoryOptions;

const styles = StyleSheet.create({});
