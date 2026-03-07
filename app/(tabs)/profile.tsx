import { Colors } from "@/utils/Colors";
import { Feather, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const handleMyOrdersPress = () => {
    router.push("/(tabs)/myorders");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
            }}
            style={styles.avatar}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Customer Name</Text>
            <Text style={styles.profilePhone}>+91 9876543210</Text>
          </View>

          <TouchableOpacity
            hitSlop={12}
            style={styles.editButton}>
            <Feather
              name="edit-2"
              size={16}
              color={Colors.hatari.darkGrey}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Options List */}
      <View style={styles.optionsCard}>
        <ProfileRow
          icon={
            <Ionicons
              name="location-outline"
              size={20}
              color={Colors.hatari.darkGrey}
            />
          }
          label="Address"
        />

        <ProfileRow
          icon={
            <Feather
              name="heart"
              size={20}
              color={Colors.hatari.darkGrey}
            />
          }
          label="Favorites"
        />

        <ProfileRow
          icon={
            <Feather
              name="shopping-bag"
              size={20}
              color={Colors.hatari.darkGrey}
            />
          }
          label="My Orders"
          onPress={handleMyOrdersPress}
        />

        <ProfileRow
          icon={
            <MaterialIcons
              name="feedback"
              size={20}
              color={Colors.hatari.darkGrey}
            />
          }
          label="Your Feedback"
        />

        <ProfileRow
          icon={
            <Octicons
              name="person"
              size={20}
              color={Colors.hatari.darkGrey}
            />
          }
          label="Help & Support"
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutCard}>
        <View style={styles.logoutRow}>
          <View style={styles.logoutLeft}>
            <Feather
              name="log-out"
              size={20}
              color={Colors.hatari.red}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </View>

          <Feather
            name="chevron-right"
            size={20}
            color={Colors.hatari.red}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

type ProfileRowProps = {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

const ProfileRow: React.FC<ProfileRowProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.row}>
      <View style={styles.rowLeft}>
        {icon}
        <Text style={styles.rowLabel}>{label}</Text>
      </View>

      <Feather
        name="chevron-right"
        size={20}
        color={Colors.hatari.lightGrey}
      />
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.light.background,
  },

  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    elevation: 3,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },

  profilePhone: {
    fontSize: 14,
    color: Colors.hatari.lightGrey,
  },

  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  optionsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    elevation: 2,
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  rowLabel: {
    fontSize: 15,
    color: Colors.light.text,
    fontWeight: "500",
  },

  logoutCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },

  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoutLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.hatari.red,
  },
});
