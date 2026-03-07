import { Colors } from "@/utils/Colors";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const ChineseRoute = () => (
  <View style={styles.scene}>
    <Text>Chinese Food</Text>
  </View>
);

const IndianRoute = () => (
  <View style={styles.scene}>
    <Text>Indian Food</Text>
  </View>
);

const TandoorRoute = () => (
  <View style={styles.scene}>
    <Text>Tandoor Food</Text>
  </View>
);
const TopRated = () => (
  <View style={styles.scene}>
    <Text>Top Rated</Text>
  </View>
);

const renderScene = SceneMap({
  chinese: ChineseRoute,
  indian: IndianRoute,
  tandoor: TandoorRoute,
  topRated: TopRated,
});

const MenuTabOptions = () => {
  const layout = Dimensions.get("window");

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "chinese", title: "Chinese" },
    { key: "indian", title: "Indian" },
    { key: "tandoor", title: "Tandoor" },
    { key: "topRated", title: "Top Rated" },
  ]);

  return (
    <>
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
    </>
  );
};

export default MenuTabOptions;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 16,
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
});
