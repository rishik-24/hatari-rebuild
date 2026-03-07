import CustomStack from "@/components/Stack/CustomStack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const chinese = () => {
  return (
    <>
      <View style={{ position: "fixed", top: 0 }}>
        <CustomStack />
      </View>

      <ScrollView
        style={{ paddingVertical: 20, paddingHorizontal: 10 }}></ScrollView>
    </>
  );
};

export default chinese;

const styles = StyleSheet.create({});
