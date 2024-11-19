import React from "react";
import { Text, View, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Plataforma() {
  return (
    <View className="bg-slate-300 p-3 items-center justify-center rounded-md text-black">
      <MaterialIcons name="electric-bike" size={32} color="black" />
      <Text>Plataformas</Text>
    </View>
  );
}
