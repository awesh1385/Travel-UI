import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import theme from "../theme";

export default function SortCategories() {
  const sortCategoryData = ["All", "Popular", "Recommended", "More"];
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full px-4 p-2 space-x-2 ">
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        let activeButtonClass = isActive ? "bg-white shadow" : "";
        return (
          <TouchableOpacity
            key={index}
            className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}
            onPress={() => {
              setActiveSort(sort);
            }}
          >
            <Text
              style={{
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
              className="font-semibold"
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
