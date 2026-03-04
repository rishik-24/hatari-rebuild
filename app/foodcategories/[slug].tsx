import FoodInfoCard from "@/components/FoodCards/FoodInfoCard";
import CustomStack from "@/components/Stack/CustomStack";
import { foodCategories, foods } from "@/utils/demoFoodData";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

export default function CategoryDetails() {
  const params = useLocalSearchParams();

  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
        ? params.slug[0]
        : undefined;

  const category = useMemo(() => {
    if (!slug) return undefined;
    return foodCategories.find((c) => c.slug === slug);
  }, [slug]);

  const filteredFoods = useMemo(() => {
    if (!category) return [];
    return foods.filter((food) => food.categoryId === category.id);
  }, [category]);

  if (!category) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Category not found</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{ position: "fixed", top: 0 }}>
        <CustomStack />
      </View>

      <View style={{ flex: 1, padding: 16 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 16,
          }}>
          {category.name} Items
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredFoods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FoodInfoCard food={item} />}
        />
      </View>
    </>
  );
}
