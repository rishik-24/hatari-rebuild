import VegNonVegSwitch from "@/components/VegNonVegToggle/VegNonVegSwitch";
import { Colors } from "@/utils/Colors";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome6,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

export default function TabLayout() {
  const [selected, setSelected] = useState<string>("");

  const [vegOnly, setVegOnly] = useState(false);

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {},
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: Colors.hatari.red,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarLabelPosition: "below-icon",
        headerTitleStyle: { fontWeight: "bold" },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="home"
              size={24}
              color={color}
            />
          ),

          headerStyle: { shadowOpacity: 0, elevation: 0 },

          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                gap: 6,
              }}>
              <FontAwesome6
                name="location-dot"
                size={24}
                color={Colors.hatari.red}
              />
            </View>
          ),
          headerTitle: "Hatari (Madhyamgram)",

          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <Image
                style={{
                  width: 70,
                  height: 50,
                  borderRadius: 10,
                }}
                source={require("../../assets/images/hatari-logo-2.jpg")}
                transition={1000}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="myorders"
        options={{
          title: "My Orders",
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="unordered-list"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons
              name="notebook"
              size={24}
              color={color}
            />
          ),

          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <VegNonVegSwitch />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather
              name="user"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
