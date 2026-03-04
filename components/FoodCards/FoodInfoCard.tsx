import { Colors } from "@/utils/Colors";
import { Food } from "@/utils/types";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  food: Food;
}

const FoodInfoCard: React.FC<Props> = ({ food }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formattedReviews = useMemo(() => {
    if (food.reviewsCount >= 1000) {
      return `${(food.reviewsCount / 1000).toFixed(1)}K`;
    }
    return food.reviewsCount.toString();
  }, [food.reviewsCount]);

  const router = useRouter();

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/FoodPage/[id]",
            params: { id: food.id },
          } as const)
        }>
        <Image
          source={{ uri: food.image }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Veg or Non veg */}
        <View
          style={{
            flex: 1,
            gap: 10,
          }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
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

            {/* Heart Button */}

            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: "#FFF",
                borderRadius: 30,
              }}>
              <AntDesign
                name="heart"
                size={16}
                color="#ff1c1c"
              />
            </TouchableOpacity>
          </View>
          {/* Name */}
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>₹{food.price}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",

              height: 40,
            }}>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 8,
                paddingVertical: 4,
                backgroundColor: Colors.hatari.ratingBG,
                borderRadius: 30,
                gap: 4,
              }}>
              <Text style={{ color: Colors.light.background }}>
                {food.reviewsCount}
              </Text>
              <View style={{ marginHorizontal: 3 }}>
                <AntDesign
                  name="star"
                  size={18}
                  color={Colors.hatari.starColor}
                />
              </View>
              <Text style={{ color: Colors.light.background }}>
                {food.rating}
              </Text>
            </View>
            <TouchableOpacity
              hitSlop={20}
              style={{
                width: 60,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.hatari.red,
              }}>
              <Text style={{ fontSize: 16, color: "#FFF", fontWeight: "600" }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FoodInfoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: Colors.light.card,
    borderRadius: 22,
    padding: 10,
    gap: 16,
    alignItems: "center",
    elevation: 4,
    marginBottom: 20,
  },

  image: {
    width: 105,
    height: 130,
    borderRadius: 18,
  },

  content: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heartButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
    elevation: 2,
  },

  heart: {
    fontSize: 16,
    color: "#bbb",
  },

  activeHeart: {
    color: "#ff4d4d",
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

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  ratingContainer: {
    backgroundColor: "#2e7d32",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  ratingText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#ff4d4d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },

  addText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
