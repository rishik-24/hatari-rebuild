import { Colors } from "@/utils/Colors";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const VegNonVegSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={{
        backgroundColor: isEnabled ? "#e0ffe0" : "#ffe0e0",
        borderRadius: 25,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontWeight: "600",
          color: isEnabled ? "#027a2cff" : "#860000ff",
        }}>
        {isEnabled ? "Veg" : "Non Veg"}
      </Text>

      <Switch
        hitSlop={20}
        trackColor={{ false: "#860000ff", true: "#027a2cff" }}
        thumbColor={isEnabled ? "#01bf44" : Colors.hatari.red}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default VegNonVegSwitch;

const styles = StyleSheet.create({});
