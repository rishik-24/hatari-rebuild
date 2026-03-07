import FoodInfoCard from "@/components/FoodCards/FoodInfoCard";
import { VegFilter, vegFilterAtom } from "@/src/Store/vegFilterAtom";
import { Colors } from "@/utils/Colors";
import { foods } from "@/utils/demoFoodData";
import { Feather } from "@expo/vector-icons";
import { useAtom } from "jotai";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";

type FilterType = VegFilter;

type SortOption = "topRated" | "priceLow" | "priceHigh";

const CUISINE_CATEGORY_MAP: Record<string, string[]> = {
  chinese: ["6", "7", "8", "9"],
  indian: ["1", "2", "5"],
  tandoor: ["1", "4"],
};

const sortFoods = (items: typeof foods, sortOption: SortOption) => {
  const sorted = [...items];

  switch (sortOption) {
    case "priceLow":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "topRated":
    default:
      sorted.sort(
        (a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount,
      );
      break;
  }

  return sorted;
};

interface FoodListProps {
  routeKey: string;
  filterType: FilterType;
  sortOption: SortOption;
}

const FoodList: React.FC<FoodListProps> = ({
  routeKey,
  filterType,
  sortOption,
}) => {
  const data = useMemo(() => {
    let result = foods;

    if (routeKey !== "topRated") {
      const categoryIds = CUISINE_CATEGORY_MAP[routeKey] ?? [];
      result = result.filter((item) => categoryIds.includes(item.categoryId));
    }

    if (filterType === "veg") {
      result = result.filter((item) => item.isVeg);
    } else if (filterType === "nonVeg") {
      result = result.filter((item) => !item.isVeg);
    }

    return sortFoods(result, sortOption);
  }, [routeKey, filterType, sortOption]);

  if (!data.length) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>
          No items available for this option.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.scene}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16, paddingTop: 16 }}
        renderItem={({ item }) => <FoodInfoCard food={item} />}
      />
    </View>
  );
};

const MenuTabOptions = () => {
  const layout = Dimensions.get("window");

  const [index, setIndex] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>("topRated");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [vegFilter] = useAtom(vegFilterAtom);

  const [routes] = useState([
    { key: "chinese", title: "Chinese" },
    { key: "indian", title: "Indian" },
    { key: "tandoor", title: "Tandoor" },
    { key: "topRated", title: "Top Rated" },
  ]);

  const renderScene = ({
    route,
  }: {
    route: { key: string; title: string };
  }) => {
    return (
      <FoodList
        routeKey={route.key}
        filterType={vegFilter}
        sortOption={sortOption}
      />
    );
  };

  const renderSortChip = (
    label: string,
    value: SortOption,
    current: SortOption,
    onPress: (val: SortOption) => void,
  ) => {
    const isActive = value === current;

    return (
      <TouchableOpacity
        onPress={() => onPress(value)}
        style={[styles.chip, isActive && styles.chipActive]}>
        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={styles.controlsContainer}>
        <View style={styles.controlsHeaderRow}>
          <Text style={styles.controlsLabel}>Sort</Text>
          <TouchableOpacity
            hitSlop={20}
            style={styles.sortIconButton}
            onPress={() => setShowSortOptions((prev) => !prev)}>
            <Feather
              name="filter"
              size={20}
              color={Colors.light.text}
            />
          </TouchableOpacity>
        </View>

        {showSortOptions && (
          <View style={[styles.chipRow, { marginTop: 8 }]}>
            {renderSortChip("Top Rated", "topRated", sortOption, setSortOption)}
            {renderSortChip(
              "Price (Low)",
              "priceLow",
              sortOption,
              setSortOption,
            )}
            {renderSortChip(
              "Price (High)",
              "priceHigh",
              sortOption,
              setSortOption,
            )}
          </View>
        )}
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            activeColor={Colors.hatari.red}
            inactiveColor="#8f8f8f"
          />
        )}
      />
    </View>
  );
};

export default MenuTabOptions;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  tabBar: {
    backgroundColor: "#fff",
    elevation: 0,
  },

  indicator: {
    backgroundColor: Colors.hatari.red,
    height: 3,
  },

  label: {
    fontWeight: "600",
  },

  controlsContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },

  controlsHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  controlsLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },

  sortIconButton: {
    padding: 6,
    borderRadius: 20,
  },

  chipRow: {
    flexDirection: "row",
    gap: 8,
  },

  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.hatari.darkGrey,
    backgroundColor: "#fff",
  },

  chipActive: {
    backgroundColor: Colors.hatari.red,
    borderColor: Colors.hatari.red,
  },

  chipText: {
    fontSize: 13,
    color: Colors.hatari.darkGrey,
    fontWeight: "500",
  },

  chipTextActive: {
    color: "#fff",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  emptyText: {
    fontSize: 14,
    color: Colors.hatari.darkGrey,
    textAlign: "center",
  },
});
