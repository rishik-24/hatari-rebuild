import { Colors } from "@/utils/Colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Cuisines = () => {
  const router = useRouter();

  const cuisines = [
    {
      id: "1",
      name: "Chinese",
      route: "/cuisines/chinese",
      image: require("../../assets/images/cuisines/chinese.jpeg"),
    },
    {
      id: "2",
      name: "Indian",
      route: "/cuisines/indian",
      image: require("../../assets/images/cuisines/indian.jpeg"),
    },
    {
      id: "3",
      name: "Tandoori",
      route: "/cuisines/tandoori",
      image: require("../../assets/images/cuisines/tandoori.jpeg"),
    },
  ];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        {cuisines.map((cuisine) => (
          <TouchableOpacity
            key={cuisine.id}
            onPress={() => router.push(cuisine.route as any)}
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              source={cuisine.image}
              style={styles.cuisinesCircles}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Cuisines;

const styles = StyleSheet.create({
  cuisinesCircles: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.hatari.red,
  },
});
