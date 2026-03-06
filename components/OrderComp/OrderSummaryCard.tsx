import { Colors } from "@/utils/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  total: number;
  gst: number;
  packing: number;
  grandTotal: number;
  customerName: string;
  phone: string;
  paymentMethod: string;
  orderTime: string;
  cancelTime: string;
  onCancel?: () => void;
}

export default function OrderSummaryCard({
  total,
  gst,
  packing,
  grandTotal,
  customerName,
  phone,
  paymentMethod,
  orderTime,
  cancelTime,
  onCancel,
}: Props) {
  return (
    <View style={styles.container}>
      {/* BILL SUMMARY */}
      <View style={styles.card}>
        <Text style={styles.title}>Bill Summary</Text>

        <View style={styles.row}>
          <Text>Total</Text>
          <Text>₹{total}</Text>
        </View>

        <View style={styles.row}>
          <Text>GST</Text>
          <Text>₹{gst}</Text>
        </View>

        <View style={styles.row}>
          <Text>Packing fee</Text>
          <Text>₹{packing}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.grand}>Grand Total</Text>
          <Text style={styles.grand}>₹{grandTotal}</Text>
        </View>

        {/* Cancel Timer */}
        <View style={styles.cancelRow}>
          <Text style={styles.cancelText}>
            You can cancel your order within
          </Text>
          <Text>{cancelTime}</Text>
        </View>

        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={onCancel}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* ORDER INFO */}

      {/* <UserInfoCard /> */}

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.name}>{customerName}</Text>
          <Text>{phone}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Payment method :</Text>
          <Text>{paymentMethod}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Order time</Text>
          <Text>{orderTime}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },

  card: {
    backgroundColor: Colors.light.card,
    padding: 16,
    borderRadius: 16,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Android shadow
    elevation: 4,
  },

  title: {
    fontWeight: "700",
    marginBottom: 12,
  },

  row: {
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

  cancelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  cancelText: {
    color: "#555",
  },

  cancelBtn: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.hatari.red,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
  },

  cancelBtnText: {
    color: Colors.hatari.red,
    fontWeight: "600",
  },

  name: {
    fontWeight: "600",
  },

  label: {
    color: "#555",
  },
});
