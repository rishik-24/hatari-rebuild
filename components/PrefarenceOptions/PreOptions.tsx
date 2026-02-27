import { Colors } from "@/utils/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PreOptions = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const options = [
    {
      id: "1",
      icon: (
        <MaterialIcons
          name="delivery-dining"
          size={24}
          color={
            selectedOption === "Delivery"
              ? Colors.hatari.red
              : Colors.hatari.darkGrey
          }
        />
      ),
      value: "Delivery",
    },
    {
      id: "2",
      icon: (
        <Ionicons
          name="bag-handle-sharp"
          size={24}
          color={
            selectedOption === "Takeaway"
              ? Colors.hatari.red
              : Colors.hatari.darkGrey
          }
        />
      ),
      value: "Takeaway",
    },
  ];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 8,
        }}>
        {options.map((items) => (
          <TouchableOpacity
            onPress={() => setSelectedOption(items.value)}
            key={items.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              height: 50,
              flex: 1,
              borderWidth: 1,
              borderColor:
                selectedOption === items.value
                  ? Colors.hatari.red
                  : Colors.hatari.lightGrey,
              borderRadius: 30,
              justifyContent: "center",
              backgroundColor: Colors.light.border,
            }}>
            {items.icon}
            <Text
              style={{
                color:
                  selectedOption === items.value
                    ? Colors.hatari.red
                    : Colors.hatari.darkGrey,
                fontSize: 16,
                fontWeight: "600",
              }}>
              {items.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default PreOptions;

const styles = StyleSheet.create({});
