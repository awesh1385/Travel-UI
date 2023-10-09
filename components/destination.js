import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Destination() {
  const destinationData = [
    {
      title: "Osaka Castle",
      duration: "12 Days",
      distance: "400 KM",
      weather: "20 C",
      price: 1200,
      shortDescription:
        "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks.",
      longDescription:
        "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.",
      image: require("../assets/images/hotel.png"),
    },
    {
      title: "Island Itsukushima Shrine",
      duration: "7 Days",
      distance: "450 KM",
      weather: "30 C",
      price: 3000,
      shortDescription:
        "The Itsukushima shrine is one of Japan's most popular tourist attractions.",
      longDescription:
        "Itsukushima Shrine is a Shinto shrine on the island of Itsukushima, best known for its 'floating' torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan, accessible from the mainland by ferry at Miyajimaguchi Station.",
      image: require("../assets/images/island.png"),
    },

    {
      title: "Babusar Top",
      duration: "5 Days",
      distance: "299 KM",
      weather: "14 C",
      price: 1000,
      shortDescription:
        "Babusar Top is a mountain pass in Pakistan at the north of the 150 km long in beautiful Kaghan Valley",
      longDescription:
        "Babusar Pass or Babusar Top is a mountain pass in Pakistan at the north of the 150 km long Kaghan Valley, connecting it via the Thak Nala with Chilas on the Karakoram Highway. It is the highest point in Kaghan Valley that can be easily accessed by cars.",
      image: require("../assets/images/camp.png"),
    },
    {
      title: "Todaiji Temple",
      duration: "20 Days",
      distance: "604 KM",
      weather: "34 C",
      price: 400,
      shortDescription:
        "Todaiji is one of Japan's most famous and significant temples and a landmark of Nara.",
      longDescription:
        "Tōdai-ji is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Though it was originally founded in the year 738 CE, Tōdai-ji was not opened until the year 752 CE.",
      image: require("../assets/images/forest.png"),
    },
  ];

  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination",{...item})}
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5 "
    >
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65) }}
        className="absolute rounded-3xl "
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{ width: wp(44), height: hp(15) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0 rounded-3xl"
      />
      <TouchableOpacity
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        className="absolute top-1 right-3 rounded-full p-3"
        onPress={() => setIsFavourite(!isFavourite)}
      >
        <HeartIcon
          size={wp(5)}
          strokeWidth={3}
          color={isFavourite ? "red" : "white"}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold ">
        {item.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
