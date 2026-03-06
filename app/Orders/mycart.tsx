import BillCard from "@/components/Bill/BillCard";
import AddressSheet from "@/components/Modal/AddressSheet";
import CustomStack from "@/components/Stack/CustomStack";
import { cartAtom } from "@/src/Store/cartAtom";
import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { useRef } from "react";
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

  const GST = total > 0 ? 40 : 0;
  const PACKING = total > 0 ? 20 : 0;

  const grandTotal = total + GST + PACKING;

  const sheetRef = useRef<BottomSheet>(null);

  const openSheet = () => {
    sheetRef.current?.expand();
  };

  return (
    <>
      <CustomStack />

      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}>
          <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
            <Text style={styles.addMore}>+ Add more Items</Text>
          </TouchableOpacity>

          {cart.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Feather
                name="shopping-cart"
                size={60}
                color="#ccc"
              />
              <Text style={styles.emptyText}>Cart is empty</Text>

              <TouchableOpacity
                style={styles.shopBtn}
                onPress={() => router.push("/(tabs)/home")}>
                <Text style={styles.shopBtnText}>Browse Foods</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              {cart.map((item) => (
                <View
                  key={item.id}
                  style={styles.card}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  <View style={styles.cardContent}>
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
                          color="#ff4d4d"
                        />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.price}>₹{item.price}</Text>

                    <View style={styles.bottomRow}>
                      <View style={styles.qtyRow}>
                        <TouchableOpacity
                          style={styles.qtyBtn}
                          onPress={() => decreaseQty(item.id)}>
                          <Feather
                            name="minus"
                            size={14}
                          />
                        </TouchableOpacity>

                        <Text style={styles.qtyText}>{item.quantity}</Text>

                        <TouchableOpacity
                          style={[styles.qtyBtn, styles.plusBtn]}
                          onPress={() => increaseQty(item.id)}>
                          <Feather
                            name="plus"
                            size={14}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 6,
                        }}>
                        <Text>x{item.quantity}</Text>
                        <Text>•</Text>
                        <Text style={styles.itemTotal}>
                          ₹{item.price * item.quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}

              {/* BILL CARD */}
              <BillCard
                total={total}
                gst={GST}
                packing={PACKING}
                grandTotal={grandTotal}
              />
            </>
          )}
        </ScrollView>

        {/* STICKY CONTINUE BUTTON */}
        <View style={styles.stickyFooter}>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={openSheet}>
            <Text style={styles.btnText}>₹{grandTotal} • Continue</Text>
          </TouchableOpacity>
        </View>

        <AddressSheet ref={sheetRef} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
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

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  foodName: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    marginVertical: 4,
    fontSize: 14,
    fontWeight: "600",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  plusBtn: {
    backgroundColor: Colors.hatari.red,
  },

  qtyText: {
    fontWeight: "bold",
  },

  itemTotal: {
    fontWeight: "600",
    fontSize: 15,
  },

  vegIndicator: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  billCard: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    marginTop: 10,
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

  grand: {
    fontWeight: "700",
    fontSize: 16,
  },

  stickyFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  continueBtn: {
    backgroundColor: Colors.hatari.red,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  emptyContainer: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#777",
  },

  shopBtn: {
    marginTop: 15,
    backgroundColor: Colors.hatari.red,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },

  shopBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
