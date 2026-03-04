import { Colors } from "@/utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  quantity: number;
  onChange: (q: number) => void;
};

const QuantityBTN: React.FC<Props> = ({ quantity, onChange }) => {
  const [count, setCount] = React.useState(1);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          backgroundColor: Colors.light.border,
          padding: 8,
          borderRadius: 100,
          width: 140,
          justifyContent: "center",
        }}>
        <TouchableOpacity
          onPress={() => onChange(Math.max(1, quantity - 1))}
          style={{
            backgroundColor: Colors.light.background,
            height: 36,
            width: 36,
            borderRadius: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <AntDesign
            name="minus"
            size={14}
            color="black"
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.light.text,
          }}>
          {quantity}
        </Text>

        <TouchableOpacity
          onPress={() => onChange(quantity + 1)}
          style={{
            backgroundColor: Colors.hatari.red,
            height: 36,
            width: 36,
            borderRadius: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <AntDesign
            name="plus"
            size={14}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantityBTN;

const styles = StyleSheet.create({});
