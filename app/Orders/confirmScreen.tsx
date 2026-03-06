import { Colors } from "@/utils/Colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OrderSuccessScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.card}>
          <LottieView
            source={require("../../assets/animations/Success.json")}
            autoPlay
            loop={false}
            style={styles.animation}
          />

          <Text style={styles.congrats}>🥳 Congratulations!</Text>

          <Text style={styles.title}>Order confirmed</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/(tabs)/home")}>
            <Text style={styles.buttonText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.hatari.red,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    backgroundColor: Colors.light.card,
    width: "100%",
    borderRadius: 40,
    paddingVertical: 50,
    alignItems: "center",
  },

  animation: {
    width: 220,
    height: 220,
  },

  congrats: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 6,
  },

  button: {
    marginTop: 30,
    backgroundColor: Colors.hatari.red,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
