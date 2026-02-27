import { Image } from "expo-image";
import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.9;
const SPACING = 10;

const FeatureBanners = () => {
  const BANNER_HEIGHT = 180;

  const IMAGES = [
    require("../../assets/images/banners/banner-1.jpeg"),
    require("../../assets/images/banners/banner-2.png"),
    require("../../assets/images/banners/333.jpg"),
    require("../../assets/images/banners/4444.jpg"),
  ];

  return (
    <View>
      <Carousel
        loop
        width={ITEM_WIDTH}
        height={BANNER_HEIGHT}
        data={IMAGES}
        scrollAnimationDuration={800}
        style={{ width }}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: "left",
          stackInterval: 18,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              paddingHorizontal: SPACING,
            }}>
            <Image
              source={item}
              style={{
                borderRadius: 16,
                width: ITEM_WIDTH - SPACING * 2,
                height: BANNER_HEIGHT,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default FeatureBanners;
