import CustomStack from "@/components/Stack/CustomStack";
import React from "react";
import { StyleSheet, View } from "react-native";

const indian = () => {
  return (
    <>
      <View style={{ position: "fixed", top: 0 }}>
        <CustomStack />
      </View>
    </>
  );
};

export default indian;

const styles = StyleSheet.create({});
