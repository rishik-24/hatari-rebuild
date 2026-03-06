import { StyleSheet, Text, View } from "react-native";

interface BillCardProps {
  total: number;
  gst: number;
  packing: number;
  grandTotal: number;
}

export default function BillCard({
  total,
  gst,
  packing,
  grandTotal,
}: BillCardProps) {
  return (
    <View style={styles.billCard}>
      <View style={styles.billRow}>
        <Text>Total</Text>
        <Text>₹{total}</Text>
      </View>

      <View style={styles.billRow}>
        <Text>GST (2.5%)</Text>
        <Text>₹{gst}</Text>
      </View>

      <View style={styles.billRow}>
        <Text>Packing fee</Text>
        <Text>₹{packing}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.billRow}>
        <Text style={styles.grand}>Grand Total</Text>
        <Text style={styles.grand}>₹{grandTotal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  billCard: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    marginTop: 10,
    elevation: 4,
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
});
