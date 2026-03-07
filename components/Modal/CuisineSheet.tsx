import { Colors } from "@/utils/Colors";
import { Feather } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type CuisineKey = "chinese" | "indian" | "tandoori";

type Props = {
  cuisine: CuisineKey | null;
};

type CuisineOption = {
  key: string;
  label: string;
  image: string;
};

const CUISINE_TITLES: Record<CuisineKey, string> = {
  chinese: "Chinese",
  indian: "Indian",
  tandoori: "Tandoori",
};

const CUISINE_OPTIONS: Record<CuisineKey, CuisineOption[]> = {
  chinese: [
    {
      key: "starters",
      label: "Starters",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/14/5d/a8/d9/manchurian-dry-a-tasty.jpg",
    },
    {
      key: "main-course",
      label: "Main Course",
      image:
        "https://png.pngtree.com/background/20250117/original/pngtree-fried-rice-with-egg-and-chicken-authentic-chinese-cookery-asian-flavors-picture-image_15830090.jpg",
    },
    {
      key: "soup",
      label: "Soup",
      image:
        "https://media.istockphoto.com/id/1333237441/photo/hot-and-sour-soup.jpg?s=612x612&w=0&k=20&c=DjJviPK-oAGSD-xF_4u6Mn6UfM953k-j2eV3WV5SSWQ=",
    },
    {
      key: "momo",
      label: "Momo",
      image:
        "https://static.vecteezy.com/system/resources/previews/045/779/717/large_2x/steamed-nepali-dumpling-momo-with-sauce-photo.jpg",
    },
  ],
  indian: [
    {
      key: "starter",
      label: "Starter",
      image:
        "https://www.scratchingcanvas.com/wp-content/uploads/2018/01/Slider.Fish-Fry.jpg",
    },
    {
      key: "biryani",
      label: "Biryani",
      image:
        "https://static.vecteezy.com/system/resources/previews/067/290/979/large_2x/crispy-chicken-biryanigraphy-served-in-classic-indian-plate-style-photo.jpg",
    },
    {
      key: "indian-main-course",
      label: "Main Course",
      image: "https://babumoshai.org/wp-content/uploads/2022/05/mk2.jpg",
    },
    {
      key: "dessert",
      label: "Dessert",
      image:
        "https://www.shutterstock.com/image-photo/rich-brownie-topped-scoop-vanilla-600nw-2627792239.jpg",
    },
  ],
  tandoori: [
    {
      key: "tandoori-main-course",
      label: "Main Course",
      image:
        "https://grapestandoori.com/wp-content/uploads/2014/11/masala-naan.jpg",
    },
    {
      key: "kebabs",
      label: "Kebabs",
      image:
        "https://www.freshtohome.com/blog/wp-content/uploads/2024/07/Screenshot-2024-07-18-103809.png",
    },
  ],
};

const CuisineSheet = forwardRef<BottomSheet, Props>(({ cuisine }, ref) => {
  const snapPoints = useMemo(() => ["45%"], []);

  const title = cuisine ? `${CUISINE_TITLES[cuisine]} Menu` : "";
  const options = cuisine ? CUISINE_OPTIONS[cuisine] : [];

  const closeSheet = () => {
    if (ref && typeof ref !== "function") {
      ref.current?.close();
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: Colors.hatari.lightGrey,
        width: 40,
      }}>
      <BottomSheetView style={styles.container}>
        <TouchableOpacity
          onPress={closeSheet}
          style={styles.closeBtn}>
          <Feather
            name="x"
            size={20}
            color={Colors.hatari.lightGrey}
          />
        </TouchableOpacity>

        {cuisine && (
          <>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.grid}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.key}
                  activeOpacity={0.9}
                  style={styles.gridItem}
                  onPress={closeSheet}>
                  <Image
                    source={{ uri: option.image }}
                    style={styles.gridImage}
                  />
                  <Text style={styles.gridLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default CuisineSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  closeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },

  grid: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "48%",
    marginBottom: 14,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: Colors.light.card,
  },

  gridImage: {
    width: "100%",
    height: 90,
  },

  gridLabel: {
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: Colors.light.text,
  },
});
