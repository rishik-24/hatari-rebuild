import { Colors } from "@/utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeFoodCard = () => {
  interface FoodItem {
    id: number;
    img: string;
    name: string;
    cuisine: string;
    priceRange: string;
    isVeg: boolean;
    rating: number;
  }

  const foodInfo: FoodItem[] = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87_%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6.jpg",
      name: "Shorshe Ilish",
      cuisine: "Indian (Bengali)",
      priceRange: "₹399 - ₹699",
      isVeg: false,
      rating: 4.8,
    },
    {
      id: 2,
      img: "https://lh3.googleusercontent.com/oqPmpgNOeZXIWXYdlyPJ9-EhXZUzOl3TxHCDwZBiOittoyOk-w_z37WaZCkXbVNU2psl6yNfPb-QYLglwgY51YVayL4tLYIBohlXR3ifLQ=w1200-rw",
      name: "Chicken Biryani",
      cuisine: "Indian (Bengali)",
      priceRange: "₹249 - ₹499",
      isVeg: false,
      rating: 4.7,
    },
    {
      id: 3,
      img: "https://static.vecteezy.com/system/resources/thumbnails/048/883/660/small/schezwan-fried-rice-masala-is-a-popular-indo-chinese-food-served-in-a-plate-or-bowl-with-chopsticks-selective-focus-photo.jpg",
      name: "Sezwan Fried Rice",
      cuisine: "Chinese",
      priceRange: "₹179 - ₹299",
      isVeg: false,
      rating: 4.3,
    },
    {
      id: 4,
      img: "https://t3.ftcdn.net/jpg/09/43/87/72/360_F_943877268_Q6tjM8uPJWhOaiWqqd8BZj2GSIdYt785.jpg",
      name: "Chilli Chicken",
      cuisine: "Chinese",
      priceRange: "₹229 - ₹399",
      isVeg: false,
      rating: 4.6,
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Tandoori Chicken",
      cuisine: "Tandoor",
      priceRange: "₹299 - ₹599",
      isVeg: false,
      rating: 4.7,
    },
  ];

  return (
    <View style={{ gap: 15 }}>
      {foodInfo.map((food: FoodItem) => (
        <TouchableOpacity
          key={food.id}
          style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}>
            <Image
              source={{ uri: food.img }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <View
                style={{
                  width: "auto",
                  height: 100,
                }}>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}>
                    <Image
                      source={require("../../assets/images/bell.png")}
                      style={{ width: 15, height: 15 }}
                    />
                    <Text style={{ fontSize: 14 }}>{food.cuisine}</Text>
                  </View>
                  <View style={{ gap: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {food.name}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {food.priceRange}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: Colors.hatari.red }}>
                      {food.isVeg ? "Veg" : "Non Veg"}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  height: "100%",

                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    backgroundColor: Colors.hatari.ratingBG,
                    padding: 8,
                    borderRadius: 20,
                  }}>
                  <FontAwesome
                    name="star"
                    size={14}
                    color={Colors.hatari.starColor}
                  />
                  <Text style={{ color: Colors.light.background }}>
                    {food.rating}
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    hitSlop={20}
                    style={{
                      backgroundColor: Colors.hatari.red,
                      height: 40,
                      width: 70,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 30,
                    }}>
                    <Text
                      style={{
                        color: Colors.light.background,
                        fontWeight: "bold",
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeFoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.border,
    borderRadius: 10,
    height: 130,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});
