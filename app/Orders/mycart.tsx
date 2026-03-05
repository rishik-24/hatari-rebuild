import CustomStack from "@/components/Stack/CustomStack";
import { cartAtom } from "@/src/Store/cartAtom";
import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import { useAtom } from "jotai";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  const [cart, setCart] = useAtom(cartAtom);

  const increaseQty = (id: string) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: string) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // GST and Packing should be 0 if cart is empty
  const GST = total > 0 ? 40 : 0;
  const PACKING = total > 0 ? 20 : 0;

  const grandTotal = total + GST + PACKING;

  return (
    <>
      <CustomStack />
      <ScrollView style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.addMore}>+ Add more Items</Text>
        </TouchableOpacity>

        {cart.map((item) => (
          <View
            key={item.id}
            style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                paddingVertical: 4,
              }}>
              <View style={styles.row}>
                <View style={{ flexDirection: "row", gap: 6 }}>
                  <View
                    style={[
                      styles.vegIndicator,
                      { borderColor: item.isVeg ? "green" : "red" },
                    ]}>
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: item.isVeg ? "green" : "red",
                      }}
                    />
                  </View>

                  <Text style={styles.foodName}>{item.name}</Text>
                </View>

                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Feather
                    name="trash-2"
                    size={18}
                    color="red"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.price}>₹{item.price}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => decreaseQty(item.id)}>
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>{item.quantity}</Text>

                <TouchableOpacity
                  style={[
                    styles.qtyBtn,
                    { backgroundColor: Colors.hatari.red },
                  ]}
                  onPress={() => increaseQty(item.id)}>
                  <Text style={{ color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Note Box */}
        {/* <View style={styles.noteCard}>
          <TextInput
            placeholder="Tell us what you want"
            multiline
            style={styles.input}
          />

          <TouchableOpacity style={styles.updateBtn}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
        </View> */}

        {/* Bill Section */}
        <View style={styles.billCard}>
          <View style={styles.billRow}>
            <Text>Total</Text>
            <Text>₹{total}</Text>
          </View>

          <View style={styles.billRow}>
            <Text>GST</Text>
            <Text>₹{GST}</Text>
          </View>

          <View style={styles.billRow}>
            <Text>Packing fee</Text>
            <Text>₹{PACKING}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.billRow}>
            <Text style={{ fontWeight: "bold" }}>Grand Total</Text>
            <Text style={{ fontWeight: "bold" }}>₹{grandTotal}</Text>
          </View>

          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  addMore: {
    fontSize: 16,
    color: Colors.hatari.red,
    textAlign: "right",
    paddingVertical: 20,
  },

  card: {
    flexDirection: "row",
    gap: 15,
    padding: 12,
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    marginBottom: 14,
  },

  image: { width: 100, height: 100, borderRadius: 10 },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  foodName: { fontSize: 16, fontWeight: "600" },

  price: { marginVertical: 4, fontSize: 14, fontWeight: "600" },

  qtyRow: { flexDirection: "row", alignItems: "center", gap: 10 },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: { fontWeight: "bold" },

  custom: { marginTop: 6, fontSize: 12, color: "#666" },

  vegIndicator: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  noteCard: {
    padding: 14,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    minHeight: 80,
  },

  updateBtn: {
    backgroundColor: "#ff4d4d",
    marginTop: 10,
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  billCard: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 50,
  },

  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  divider: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
  },

  continueBtn: {
    backgroundColor: "#ff4d4d",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  btnText: { color: "#fff", fontWeight: "bold" },
});
