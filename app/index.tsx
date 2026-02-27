import { Colors } from "@/utils/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const [selected, setSelected] = React.useState("");
  const [preference, setPreference] = React.useState("");

  const prefarenceOptions = [
    {
      id: 1,
      name: "Delivery",
      icon: (
        <MaterialIcons
          name="delivery-dining"
          size={50}
          color={
            preference === "delivery" ? Colors.hatari.red : Colors.light.text
          }
        />
      ),
      value: "delivery",
    },
    {
      id: 2,
      name: "Takeaway",
      icon: (
        <Ionicons
          name="bag-handle"
          size={50}
          color={
            preference === "takeaway" ? Colors.hatari.red : Colors.light.text
          }
        />
      ),
      value: "takeaway",
    },
  ];

  return (
    <>
      <SafeAreaProvider style={{ marginHorizontal: 20 }}>
        <View
          style={{
            height: "30%",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 20,
          }}>
          <View
            style={{
              alignItems: "center",
              padding: 20,
            }}>
            <Text style={{ fontSize: 30 }}>Welcome to</Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: Colors.hatari.red,
              }}>
              Hatari
            </Text>
          </View>
          <Text>Indian • Chinese • Tandoor</Text>
        </View>
        <View
          style={{
            height: "30%",
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              alignItems: "center",
              gap: 4,
            }}>
            Your nearest branch
          </Text>

          <Pressable
            onPress={() => setSelected("madhyamgram")}
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              borderWidth: 2,
              borderColor:
                selected === "madhyamgram"
                  ? Colors.hatari.red
                  : Colors.light.border,
              backgroundColor: Colors.light.card,
              borderRadius: 12,
              paddingVertical: 20,
            }}>
            <Image
              source={require("../assets/images/hatari-logo-2.jpg")}
              style={{ width: 110, height: 80 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Hatari Madhyamgram
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            paddingTop: 10,
            height: "20%",
          }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Select your prefarence
          </Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {prefarenceOptions.map((items) => (
              <Pressable
                key={items.id}
                onPress={() => setPreference(items.value)}
                style={{
                  width: "48%",
                  marginTop: 20,
                  height: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                  borderWidth: 2,
                  borderColor:
                    preference === items.value
                      ? Colors.hatari.red
                      : Colors.light.border,
                  backgroundColor: Colors.light.card,
                  borderRadius: 12,
                }}>
                {items.icon}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color:
                      preference === items.value
                        ? Colors.hatari.red
                        : Colors.light.text,
                  }}>
                  {items.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <TouchableOpacity
          disabled={!preference || !selected}
          onPress={() => router.push("/(tabs)/home")}
          style={{
            backgroundColor: Colors.hatari.red,
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            opacity: !preference || !selected ? 0.5 : 1,
          }}>
          <Text style={{ color: Colors.light.card, fontWeight: "bold" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({});
