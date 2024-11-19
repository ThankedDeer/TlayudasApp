import React from "react";
import { View, Text, Pressable } from "react-native";

export default function LastTable() {
  return (
    <Pressable>
      <View className="bg-slate-300 p-3 items-center justify-center rounded-md text-black">
        <Text className="font-bold">Ultima mesa</Text>
        <Text className="text-2xl font-bold">$315</Text>

        <Text>Ver detalles...</Text>
      </View>
    </Pressable>
  );
}
