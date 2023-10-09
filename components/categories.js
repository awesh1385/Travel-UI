import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import theme from "../theme";

export default function Categories() {
  const categoriesData = [
    {
      title: "Ocean",
      image: require("../assets/images/ocean.png"),
    },
    {
      title: "Mountain",
      image: require("../assets/images/mountain.png"),
    },
    {
      title: "Camp",
      image: require("../assets/images/camp.png"),
    },
    {
      title: "Sunset",
      image: require("../assets/images/sunset.png"),
    },
    {
      title: "Hiking",
      image: require("../assets/images/hiking.png"),
    },
    {
      title: "Beach",
      image: require("../assets/images/beach.png"),
    },
    {
      title: "Forest",
      image: require("../assets/images/forest.png"),
    },
  ];

  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2"
            >
              <Image
                source={cat.image}
                style={{ width: wp(20), height: wp(19) }}
                className="rounded-3xl"
              />
              <Text
                style={{ fontSize: wp(3) }}
                className="text-neutral-700 font-medium"
              >
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
