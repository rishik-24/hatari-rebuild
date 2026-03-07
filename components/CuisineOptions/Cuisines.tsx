import { CuisineKey } from "@/components/Modal/CuisineSheet";
import { Colors } from "@/utils/Colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  onCuisinePress?: (cuisine: CuisineKey) => void;
};

const Cuisines: React.FC<Props> = ({ onCuisinePress }) => {
  const router = useRouter();

  const cuisines: { id: string; key: CuisineKey; name: string; route: string; image: any }[] =
    [
      {
        id: "1",
        key: "chinese",
        name: "Chinese",
        route: "/cuisines/chinese",
        image: require("../../assets/images/cuisines/chinese.jpeg"),
      },
      {
        id: "2",
        key: "indian",
        name: "Indian",
        route: "/cuisines/indian",
        image: require("../../assets/images/cuisines/indian.jpeg"),
      },
      {
        id: "3",
        key: "tandoori",
        name: "Tandoori",
        route: "/cuisines/tandoori",
        image: require("../../assets/images/cuisines/tandoori.jpeg"),
      },
    ];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        {cuisines.map((cuisine) => (
          <TouchableOpacity
            key={cuisine.id}
            onPress={() =>
              onCuisinePress ? onCuisinePress(cuisine.key) : router.push(cuisine.route as any)
            }
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              source={cuisine.image}
              style={styles.cuisinesCircles}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Cuisines;

const styles = StyleSheet.create({
  cuisinesCircles: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.hatari.red,
  },
});
