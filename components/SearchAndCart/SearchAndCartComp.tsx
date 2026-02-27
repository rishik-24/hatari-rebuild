import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchAndCartComp = () => {
  const { width } = Dimensions.get("window");

  const [searchQuery, setSearchQuery] = React.useState("");
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
      <TouchableOpacity
        style={{
          height: 60,
          width: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "gray",
        }}>
        <AntDesign
          name="shopping-cart"
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchAndCartComp;

const styles = StyleSheet.create({});
