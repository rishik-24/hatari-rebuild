import { Colors } from "@/utils/Colors";
import { StyleSheet, Text, View } from "react-native";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  isVeg: boolean;
}

interface Props {
  orderId: string;
  items: OrderItem[];
}

const orderItems = [
  {
    id: "1",
    name: "Bhetki Fish Fry",
    quantity: 2,
    price: 320,
    isVeg: false,
  },
  {
    id: "2",
    name: "Chicken Dum Biryani",
    quantity: 2,
    price: 580,
    isVeg: false,
  },
  {
    id: "3",
    name: "Ice cream with brownie",
    quantity: 1,
    price: 180,
    isVeg: true,
  },
];

export default function OrderedItemsCard({ orderId, items }: Props) {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.orderId}>Order ID : {orderId}</Text>

        {items.map((item, index) => (
          <View
            key={item.id}
            style={styles.row}>
            <View style={styles.left}>
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

              <Text style={styles.foodName}>
                {index + 1}. {item.name}
              </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text>x{item.quantity}</Text>

              <Text style={styles.price}>₹{item.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 12,

    // iOS shadow
    shadowColor: Colors.hatari.darkGrey,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Android shadow
    elevation: 4,
  },

  orderId: {
    fontSize: 12,
    color: "#777",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },

  foodName: {
    fontSize: 14,
  },

  price: {
    fontWeight: "600",
  },

  vegIndicator: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
