import QuantityBTN from "@/components/Buttons/QuantityBTN";
import { Colors } from "@/utils/Colors";
import { foods } from "@/utils/demoFoodData";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

export default function FoodDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const food = foods.find((item) => item.id === id);

  if (!food) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Food not found</Text>
      </View>
    );
  }

  const [quantity, setQuantity] = useState(1);
  const totalPrice = food.price * quantity;

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Food added to cart",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <>
      <StatusBar style={"auto"} />
      {/* Food Image */}

      <View>
        <Image
          style={styles.imgStyle}
          source={{ uri: food.image }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          height: 30,
          marginTop: 30,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          flexDirection: "row",
        }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={[
              styles.vegBadge,
              {
                borderColor: food.isVeg ? "#2e7d32" : "#d32f2f",
              },
            ]}>
            <View
              style={[
                styles.vegDot,
                {
                  backgroundColor: food.isVeg ? "#2e7d32" : "#d32f2f",
                },
              ]}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}>
            {food.name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 4,
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 20,
            backgroundColor: Colors.hatari.ratingBG,
          }}>
          <Text style={{ color: Colors.light.background, fontSize: 14 }}>
            {food.reviewsCount}
          </Text>
          <Text>⭐</Text>
          <Text style={{ color: Colors.light.background, fontSize: 14 }}>
            {food.rating}
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>₹{food.price}</Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 30, gap: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Description</Text>
        <Text style={{ fontSize: 15 }}>{food.description}</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <QuantityBTN
          quantity={quantity}
          onChange={setQuantity}
        />

        <TouchableOpacity
          onPress={() => showToastWithGravity()}
          style={{
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingVertical: 16,
            backgroundColor: "#ff2828ff",
            borderRadius: 50,
          }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Add to Cart • ₹{totalPrice}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 360,
  },
  infoGrid: {
    height: 200,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    gap: 10,
  },

  vegBadge: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },

  vegDot: {
    width: 9,
    height: 9,
  },
});
