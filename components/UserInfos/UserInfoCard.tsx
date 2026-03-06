import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function UserInfoCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Feather
          name="user"
          size={18}
          color={Colors.primary}
        />
        <Text style={styles.text}>Customer Name</Text>
      </View>

      <View style={styles.row}>
        <Feather
          name="phone"
          size={18}
          color={Colors.primary}
        />
        <Text style={styles.text}>+91 98745 63210</Text>
      </View>

      <View style={styles.row}>
        <Feather
          name="map-pin"
          size={18}
          color={Colors.primary}
        />
        <Text style={styles.text}>abc street, 2669 Valley View Ln</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 14,
    gap: 14,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 15,
  },
});
