import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// icons
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destination from "../components/destination";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";
export default function HomeScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`space-y-6  ${topMargin}`}
      >
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 ">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color={"gray"} />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* categories */}
        <View className="mb-4 ">
          <Categories />
        </View>

        {/* sort categories */}
        <View className="mb-4 ">
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
