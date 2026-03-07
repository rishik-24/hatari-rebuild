import MenuTabOptions from "@/components/MenuTabs/MenuTabOptions";
import React from "react";
import { StyleSheet, View } from "react-native";

const menu = () => {
  return (
    <View style={{ flex: 1, position: "fixed", top: 0 }}>
      <MenuTabOptions />
    </View>
  );
};

export default menu;

const styles = StyleSheet.create({});
