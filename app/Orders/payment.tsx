import BillCard from "@/components/Bill/BillCard";
import CustomStack from "@/components/Stack/CustomStack";
import UserInfoCard from "@/components/UserInfos/UserInfoCard";
import { cartAtom } from "@/src/Store/cartAtom";
import { Colors } from "@/utils/Colors";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PaymentScreen() {
  const [cart] = useAtom(cartAtom);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const GST = total > 0 ? 40 : 0;
  const PACKING = total > 0 ? 20 : 0;

  const grandTotal = total + GST + PACKING;

  return (
    <>
      <CustomStack />

      <View style={styles.container}>
        <UserInfoCard />

        <BillCard
          total={total}
          gst={GST}
          packing={PACKING}
          grandTotal={grandTotal}
        />

        <View style={styles.card}>
          <Text style={styles.subtitle}>Payment Method</Text>

          <View style={styles.row}>
            <View style={styles.radioOuter}>
              <View style={styles.radioInner} />
            </View>

            <Text>Pay on delivery</Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/Orders/confirmScreen")}
            style={styles.button}>
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 18,
    justifyContent: "space-evenly",
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  card: {
    backgroundColor: Colors.light.card,
    padding: 16,
    borderRadius: 14,
    gap: 20,
  },
  subtitle: {
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
