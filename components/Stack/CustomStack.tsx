import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

const CustomStack = () => {
  const { width } = Dimensions.get("window");

  const router = useRouter();

  return (
    <View
      style={{
        width: width,
        height: 100,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: Colors.hatari.lightGrey,
        borderStyle: "dashed",
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 25,
        }}>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <Feather
            name="arrow-left"
            size={30}
            color="black"
          />
        </TouchableOpacity>

        <Image
          style={{
            width: 70,
            height: 50,
            borderRadius: 10,
          }}
          source={require("../../assets/images/hatari-logo-2.jpg")}
          transition={1000}
        />
      </View>
    </View>
  );
};

export default CustomStack;

const styles = StyleSheet.create({});
