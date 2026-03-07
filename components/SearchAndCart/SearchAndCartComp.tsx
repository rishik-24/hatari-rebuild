import { cartAtom } from "@/src/Store/cartAtom";
import { Colors } from "@/utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAtom } from "jotai";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchAndCartComp = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const [cart] = useAtom(cartAtom);

  const cartCount = cart.length;
  return (
    <View
      style={{
        paddingTop: 20,
        height: 70,
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
      }}>
      <Searchbar
        style={{
          height: 60,
          flex: 1,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 50,
        }}
        placeholder="Search food!"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          onPress={() => router.push("/Orders/mycart")}
          style={{
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "gray",
            height: 60,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Ionicons
            name="cart-outline"
            size={24}
            color={Colors.hatari.darkGrey}
          />
        </TouchableOpacity>

        {cartCount > 0 && (
          <View
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              backgroundColor: "#ff3b30",
              width: 20,
              height: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              {cartCount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchAndCartComp;

const styles = StyleSheet.create({});
