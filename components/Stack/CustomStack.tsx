import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomStack = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      edges={["top"]}
      style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}>
          <Feather
            name="arrow-left"
            size={24}
            color={Colors.hatari.darkGrey}
          />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/hatari-logo-2.jpg")}
          style={styles.logo}
          contentFit="contain"
        />

        <View style={{ width: 30 }} />
      </View>
    </SafeAreaView>
  );
};

export default CustomStack;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: Colors.hatari.lightGrey,
  },

  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  backButton: {
    width: 30,
  },

  logo: {
    width: 100,
    height: 50,
  },
});
