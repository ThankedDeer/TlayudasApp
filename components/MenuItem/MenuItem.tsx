import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { IMenuItem } from "../menu/Menu";
import Ionicons from "@expo/vector-icons/build/Ionicons";

interface IMenuItemProps {
  readonly item: IMenuItem;
  readonly index: number;
  readonly color: string;
}

const MenuItem = ({ index, item, color }: IMenuItemProps) => {
  const { link, text } = item;
  return (
    <Link
      className="text-white w-full h-1/4 justify-center items-center"
      key={`${index}-${text}`}
      href={link}
      asChild
      style={{ backgroundColor: color }}
    >
      <View>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => console.log(`Navigating to ${link}`)}
        >
          <Ionicons
            name="accessibility"
            size={40}
            color="white"
            style={{ width: "30%", textAlign: "center" }}
          />
          <Text style={{ color: "white", width: "70%", textAlign: "center" }}>
            {text}
          </Text>
        </Pressable>
      </View>
    </Link>
  );
};

export default MenuItem;
