import { vegFilterAtom } from "@/src/Store/vegFilterAtom";
import { Colors } from "@/utils/Colors";
import { useAtom } from "jotai";
import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const VegNonVegSwitch = () => {
  const [vegFilter, setVegFilter] = useAtom(vegFilterAtom);

  const isVeg = vegFilter === "veg";

  const toggleSwitch = () => {
    setVegFilter(isVeg ? "nonVeg" : "veg");
  };

  return (
    <View
      style={{
        backgroundColor: isVeg ? "#e0ffe0" : "#ffe0e0",
        borderRadius: 25,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontWeight: "600",
          color: isVeg ? "#027a2cff" : "#860000ff",
          marginRight: 8,
        }}>
        {isVeg ? "Veg" : "Non Veg"}
      </Text>

      <Switch
        hitSlop={20}
        trackColor={{ false: "#860000ff", true: "#027a2cff" }}
        thumbColor={isVeg ? "#01bf44" : Colors.hatari.red}
        onValueChange={toggleSwitch}
        value={isVeg}
      />
    </View>
  );
};

export default VegNonVegSwitch;

const styles = StyleSheet.create({});
