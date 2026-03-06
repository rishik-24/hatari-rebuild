import { Feather } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const AddressSheet = forwardRef<BottomSheet>((props, ref) => {
  const snapPoints = useMemo(() => ["75%"], []);

  const closeSheet = () => {
    if (ref && typeof ref !== "function") {
      ref.current?.close();
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleIndicatorStyle={{ backgroundColor: "#ccc", width: 40 }}>
      <BottomSheetView style={styles.container}>
        {/* Close Button */}
        <TouchableOpacity
          onPress={closeSheet}
          style={styles.closeBtn}>
          <Feather
            name="x"
            size={20}
            color="#555"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Enter your Details!</Text>

        {/* Inputs */}
        <TextInput
          placeholder="Name"
          style={styles.input}
        />

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          placeholder="Apartment Name"
          style={styles.input}
        />

        <TextInput
          placeholder="Street"
          style={styles.input}
        />

        <TextInput
          placeholder="Landmark"
          style={styles.input}
        />

        {/* Location Button */}
        <TouchableOpacity style={styles.locationBtn}>
          <Feather
            name="map-pin"
            size={16}
            color="#ff5a5f"
          />
          <Text style={styles.locationText}> Use current location</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

        {/* Change Address */}
        <TouchableOpacity style={styles.changeBtn}>
          <Text style={styles.changeText}>Change address</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default AddressSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  closeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 14,
  },

  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ff5a5f",
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 10,
  },

  locationText: {
    color: "#ff5a5f",
    fontWeight: "500",
  },

  nextBtn: {
    backgroundColor: "#ff5a5f",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },

  nextText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  changeBtn: {
    backgroundColor: "#666",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },

  changeText: {
    color: "#fff",
    fontWeight: "500",
  },
});
