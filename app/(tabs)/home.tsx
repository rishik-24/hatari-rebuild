import FeatureBanners from "@/components/Banner/FeatureBanners";
import Cuisines from "@/components/CuisineOptions/Cuisines";
import FoodCategoryOptions from "@/components/FoodCategory/FoodCategoryOptions";
import PreOptions from "@/components/PrefarenceOptions/PreOptions";
import SearchAndCartComp from "@/components/SearchAndCart/SearchAndCartComp";
import { Colors } from "@/utils/Colors";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <SearchAndCartComp />

      <View
        style={{
          marginVertical: 20,
        }}>
        <PreOptions />
      </View>

      <View style={{ marginBottom: 15 }}>
        <FeatureBanners />
      </View>

      <View style={styles.sectionDivider}>
        <View style={styles.line} />
        <Text style={styles.sectionText}>Choose Cuisine</Text>
        <View style={styles.line} />
      </View>

      <View style={{ marginVertical: 15 }}>
        <Cuisines />
      </View>

      <View style={styles.sectionDivider}>
        <View style={styles.line} />
        <Text style={styles.sectionText}>What are you craving?</Text>
        <View style={styles.line} />
      </View>

      <View style={{ marginVertical: 15 }}>
        <FoodCategoryOptions />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 140,
            borderRadius: 30,
            backgroundColor: Colors.hatari.red,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.light.background,
              fontWeight: "600",
            }}>
            Explore
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.light.background,
  },

  sectionDivider: {
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.hatari.darkGrey,
  },

  sectionText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
